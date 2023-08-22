import Link from "@mui/material/Link";
import React from "react";
import { Box } from "@mui/material";

function ButtomNavigation() {
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
        sx={{ textDecoration: "none" }}
        variant="body2"
        fontWeight={700}
      >
        All
      </Link>
      <Link
        href="#"
        sx={{ textDecoration: "none" }}
        color="gray.main"
        variant="body2"
        fontWeight={700}
      >
        Active
      </Link>
      <Link
        href="#"
        sx={{ textDecoration: "none" }}
        color="gray.main"
        variant="body2"
        fontWeight={700}
      >
        Completed
      </Link>
    </Box>
  );
}
export default ButtomNavigation;
