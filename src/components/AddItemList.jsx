import Input from "@mui/material/Input";
import { Button, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import React from "react";

function AddItemList({data}) {
  return (
    <FormControl
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      bgcolor: "white",
      width: "100%",
      borderTopLeftRadius:'4px',
      borderTopRightRadius:'4px',
      borderBottom:'1px solid lightgray',
      paddingLeft: "3rem",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexBasis: "80%",
      }}
    >
      <Typography
        variant="subtitle1"
        width={27}
        height={25}
        borderRadius="50%"
        mr={2}
        border="1px solid gray"
      ></Typography>
     {...data}
      
    </div>
    <Button
      color="gray"
      sx={{ fontSize: "2rem", flexBasis: "20%" }}
     
    >
      x
    </Button>
  </FormControl>

  )
}

export default AddItemList