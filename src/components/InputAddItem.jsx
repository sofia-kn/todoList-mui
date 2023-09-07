import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import React from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://bykqbmhvtkcpytyalgbz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5a3FibWh2dGtjcHl0eWFsZ2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNTEwODgsImV4cCI6MjAwODgyNzA4OH0.g9K0-nobipeTKlouZK6YH9cZwhpLO6RExzmcrdMOVtY"
);

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
  const updateTodo = async () => {
    // const editTodos = {
    //   inputValue: inputValue,
    //   isCompleted: data.isCompleted,
    //   id: editTodo,
    // };
    // axios
    //   .put("http://localhost:3031/todos/" + editTodo, editTodos)
    //   .then(axiosGet)
    //   .then(setInputValue(""));

    const { error } = await supabase
      .from("todolist")
      .update({
        inputValue: inputValue,
        isCompleted: data.isCompleted,
        // id: editTodo,
      })
      .eq("id", editTodo)
      // .select();

      await axiosGet()
      await setInputValue('')
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
