import Input from "@mui/material/Input";
import { Button, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import React from "react";

function InputAddItem() {
  return (
    <>
      <FormControl
        sx={{
          position: "absolute",
          top: "10rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          bgcolor: "white",
          width: "90%",
          borderRadius: "4px",
          mb: "1rem",
          paddingLeft: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            flexBasis: "80%",
          }}
        >
          <Typography
            variant="subtitle1"
            width={20}
            height={20}
            borderRadius="50%"
            mr="11px"
            border="1px solid gray"
          ></Typography>
          <Input placeholder="creat a new todo ..." fullWidth={true} 
            
          ></Input>
        </div>
        <Button
          color="dark"
          sx={{ fontSize: "2rem", fontWeight: "700", flexBasis: "20%" }}
        >
          +
        </Button>
      </FormControl>
    </>
  );
}

export default InputAddItem;
