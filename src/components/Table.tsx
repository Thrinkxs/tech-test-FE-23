import React, { useEffect, useState } from "react";
import { Input } from "./styles/Input.style";
import { Container } from "./styles/Container.style";
import { Title, H3 } from "./styles/Header.style";
import { TableBody } from "./styles/TableBody.style";
import { TableBox } from "./styles/Table.style";

import Search from "./Search";
import axios from "axios";
import moment from "moment";

type Payout = {
  username: string;
  value: string;
  status: string;
  date: string;
};

const Table = () => {
  const [payoutsData, setPayoutsData] = useState<Payout[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  //Get all users from endpoint
  useEffect(() => {
    const fetchPayouts = async () => {
      try {
        const response = await axios.get(
          "https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts"
        );

        console.log("Payouts data:", response.data);
        setPayoutsData(response.data.data);
        console.log("payouts:", payoutsData);
      } catch (error) {
        console.log("failed to fetch table data", error);
      }
    };
    fetchPayouts();
  }, []);

  //Filter users by search query
  // const filteredPayouts = payoutsData.filter((payout) =>
  //   payout.username.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <>
      <Title>Payouts</Title>
      <Container>
        <span>
          <H3> Payout History</H3>
        </span>

        <Search />
      </Container>
      <TableBox>
        <thead>
          <tr>
            <th
              style={{
                padding: "0 10em",
              }}
            >
              Username
            </th>
            <th
              style={{
                padding: "0 4em",
                width: "100%",
                margin: "0 12em",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Date & Time
            </th>
            <th
              style={{
                textAlign: "center",
                paddingLeft: "10em",
              }}
            >
              Status
            </th>
            <th
              style={{
                textAlign: "right",
              }}
            >
              Value
            </th>
          </tr>
        </thead>
        <TableBody>
          {/* Array.isArray(payoutsData) &&  */}
          {
            // payoutsData.length > 0 ?
            //  (
            payoutsData.map((payout) => (
              <tr
                key={payout.username}
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                <td>{payout.username}</td>

                <td>{moment(payout.date).format("MMMM Do YYYY, h:mm:ss a")}</td>
                <td
                  style={{
                    backgroundColor:
                      payout.status === "Completed" ? "#60ca57" : "#c1c4c7",
                    borderRadius: "8px",
                    padding: "12px 8px",
                    textAlign: "center",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                  className={"data-status"}
                >
                  {payout.status === "Completed" ? "Paid" : "Pending"}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "0 5em",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {payout.value}
                </td>
              </tr>
            ))
            // )
            //  : (
            //   <tr>
            //     <td colSpan={4}>No data available</td>
            //   </tr>
            // )
          }
        </TableBody>
      </TableBox>
    </>
  );
};

export default Table;
