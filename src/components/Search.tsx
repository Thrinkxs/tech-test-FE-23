import React, { useEffect, useState } from "react";
import { Input } from "./styles/Input.style";
import Button from "./styles/Button.style";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [payoutsData, setPayoutsData] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/search?query=${searchQuery}`
      );

      if (!response.data || response.data.length === 0) {
        handleOpen();
        setPayoutsData([]); // Clear the data if no user found
      } else {
        setPayoutsData(response.data.data);
        console.log(payoutsData);
      }

      setSearchQuery("");
      console.log("seems to work", payoutsData);
      setSearchQuery("");
    } catch (error) {
      console.log("Failed to fetch table data", error);
    }
  };

  //Search for a particular user by username
  // useEffect(() => {

  return (
    <div>
      {" "}
      <Input
        type="text"
        placeholder="Search by Username"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />{" "}
      <Button onClick={handleSearch}>Search</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Oops!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            No User Found!!!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Search;
