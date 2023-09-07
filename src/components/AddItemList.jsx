import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://bykqbmhvtkcpytyalgbz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5a3FibWh2dGtjcHl0eWFsZ2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNTEwODgsImV4cCI6MjAwODgyNzA4OH0.g9K0-nobipeTKlouZK6YH9cZwhpLO6RExzmcrdMOVtY"
);

function AddItemList({
  data,
  axiosGet,
  darkMode,
  setEditTodo,
  setInputValue,
}) {
  const deleteHandler = async () => {
    // axios.delete("http://localhost:3031/todos/" + data.id).then(axiosGet);

    const { error } = await supabase
      .from("todolist")
      .delete()
      .eq("id", data.id);

    await axiosGet();
  };

  const completedHandler = async () => {
    // setIsCompleted((current) => !current);

    // const dataEdited = {
    //   inputValue: data.inputValue,
    //   isCompleted: !data.isCompleted,
    // };

    // axios
    //   .put("http://localhost:3031/todos/" + data.id, dataEdited)
    //   .then(axiosGet);

    const { error } = await supabase
      .from("todolist")
      .update({ inputValue: data.inputValue, isCompleted: !data.isCompleted })
      .eq("id", data.id);

    await axiosGet();
  };

  const editHandler = () => {
    setInputValue(data.inputValue);
    setEditTodo(data.id);
  };
  return (
    <FormControl
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        bgcolor: "white",
        width: "100%",
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
        borderBottom: "1px solid lightgray",
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
          border="1px solid gray"
          sx={{
            backgroundImage: data.isCompleted
              ? 'url("/assets/images/icon-check.svg"), linear-gradient(#57ddff, #c058f3)'
              : "",
            backgroundRepeat: data.isCompleted ? "no-repeat" : "",
            backgroundPosition: data.isCompleted ? "center" : "",
            opacity: "0.5",
            cursor: "pointer",
          }}
          onClick={completedHandler}
        ></Typography>

        {data.isCompleted ? (
          <Typography
            variant="body2"
            color="gray.main"
            sx={{ textDecorationLine: "line-through" }}
          >
            {data.inputValue}
          </Typography>
        ) : (
          data.inputValue
        )}
      </div>
      <Button color="gray" onClick={editHandler}>
        <EditIcon sx={{ margin: "1rem 0" }}></EditIcon>
      </Button>
      <Button color="gray" onClick={deleteHandler}>
        <ClearIcon sx={{ margin: "1rem 0" }}></ClearIcon>
      </Button>
    </FormControl>
  );
}

export default AddItemList;
