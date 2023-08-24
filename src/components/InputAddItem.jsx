import Input from "@mui/material/Input";
import { Button, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import React from "react";


function InputAddItem({ inputValue, setInputValue, setData, data }) {
  const buttonHandler = () => {
    // console.log("click shod");
    setData([...data, inputValue]);
    setInputValue("");
    console.log(data);
  };
  const keyUpHandler = (e) => {
    if(e.keyCode === 13) {
      buttonHandler()
    }

  };

  return (
    <>
      <FormControl
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          bgcolor: "white",
          width: "100%",
          borderRadius: "4px",
          mb: "1rem",
          paddingLeft: "3rem",
          borderBottom: "2px solid lightgray",
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
          <Input
            placeholder="creat a new todo ..."
            fullWidth={true}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={keyUpHandler}
          ></Input>
        </div>
        <Button
          color="dark"
          sx={{ fontSize: "2rem", fontWeight: "700", flexBasis: "20%" }}
          onClick={buttonHandler}
        >
          +
        </Button>
      </FormControl>
    </>
  );
}

export default InputAddItem;
