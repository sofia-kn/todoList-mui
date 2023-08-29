import Link from "@mui/material/Link";
import React from "react";
import { Box } from "@mui/material";

function ButtomNavigation({ status, setStatus }) {
  const activeHandler = () => {
    setStatus(false);
  };
  const completeHandler = () => {
    setStatus(true);
  };

  const allHandler = () => {
    setStatus('')
  }
  return (
    <Box
      bgcolor="white"
      width="100%"
      borderTop="1px solid lightgray"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      padding={1.5}
    >
      <Link
        href="#"
        sx={{ textDecoration: "none", color: status === "" ? "#3a7bfd" : "gray.main" }}
        variant="body2"
        fontWeight={700}
        onClick={allHandler}
      >
        All
      </Link>
      <Link
        href="#"
        sx={{ textDecoration: "none" ,
        color: status === false ? "#3a7bfd" : "gray.main",
      }}
        
        variant="body2"
        fontWeight={700}
        onClick={activeHandler}
      >
        Active
      </Link>
      <Link
        href="#"
       
        variant="body2"
        fontWeight={700}
        sx={{
          textDecoration: "none",
          color: status ===  true ? "#3a7bfd" : "gray.main",
        }}
        onClick={completeHandler}
      >
        Completed
      </Link>
    </Box>
  );
}
export default ButtomNavigation;
