import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import React from "react";
import axios from "axios";

function InputAddItem({
  inputValue,
  setInputValue,
  data,
  onAddItem,
  darkMode,
  editTodo,
  setEditTodo,
  axiosGet,
}) {
  const updateTodo = () => {
    const editTodos = {
      inputValue: inputValue,
      isCompleted: data.isCompleted,
      id: editTodo,
    };
    axios
      .put("http://localhost:3031/todos/" + editTodo, editTodos)
      .then(axiosGet)
      .then(setInputValue(""));
  };

  const buttonHandler = () => {
    if (!editTodo) {
      // setData([...data]);
      setInputValue("");
      onAddItem();
      console.log("edit nist");
    } else {
      setEditTodo("");
      updateTodo();

      console.log("edit hast");
    }
  };
  const keyUpHandler = (e) => {
    if (e.keyCode === 13) {
      buttonHandler();
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
          width: "100%",
          borderRadius: "4px",
          mb: "1rem",
          paddingLeft: "3rem",
          bgcolor: darkMode === "dark" ? "#25273c" : "white",
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
            border="1px solid #474a60"
          ></Typography>

          <Input
            placeholder="creat a new todo ..."
            sx={{
              color: darkMode === "light" ? "text.secondary" : "white",
            }}
            fullWidth={true}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={keyUpHandler}
          ></Input>
        </div>
        <Button
          sx={{
            fontSize: "2rem",
            fontWeight: "700",
            flexBasis: "20%",
            color: darkMode === "dark" ? "white" : "#000",
          }}
          onClick={buttonHandler}
        >
          +
        </Button>
      </FormControl>
    </>
  );
}

export default InputAddItem;
