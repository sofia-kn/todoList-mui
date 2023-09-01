import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import React from "react";
import axios from "axios";
// import { createClient } from "@supabase/supabase-js";
// const supabase = createClient(
//   "https://bykqbmhvtkcpytyalgbz.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5a3FibWh2dGtjcHl0eWFsZ2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNTEwODgsImV4cCI6MjAwODgyNzA4OH0.g9K0-nobipeTKlouZK6YH9cZwhpLO6RExzmcrdMOVtY"
// );

function AddItemList({ data, setData, axiosGet, isCompleted, setIsCompleted, darkMode }) {
  // console.log('omad');
  const deleteHandler = () => {
    axios.delete("http://localhost:3031/todos/" + data.id).then(axiosGet);

    // const { error } = await supabase
    //   .from("todoList")
    //   .delete()
    //   .eq("id", data.id);

    //   await axiosGet
  };

  const completedHandler = () => {
    // setIsCompleted((current) => !current);

    const dataEdited = {
      inputValue: data.inputValue,
      isCompleted: !data.isCompleted,
    };

    axios
      .put("http://localhost:3031/todos/" + data.id, dataEdited)
      .then(axiosGet);

    // const { data, error } = await supabase
    //   .from("todoList")
    //   .update({ isCompleted: !isCompleted })
    //   .eq("id", data.id)

    //   await axiosGet
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
        bgcolor: darkMode === 'dark' ? '#25273c' : 'white',
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
            // background: isCompleted ? 'url("/assets/images/icon-check.svg"), linear-gradient(#57ddff, #c058f3) ,no-repeat ,center' : ''
            backgroundImage: data.isCompleted
              ? 'url("/assets/images/icon-check.svg"), linear-gradient(#57ddff, #c058f3)'
              : "",
            backgroundRepeat: data.isCompleted ? "no-repeat" : "",
            backgroundPosition: data.isCompleted ? "center" : "",
            // transition: " all 500ms ease",
            opacity:'0.5',
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
      <Button
        color="gray"
        sx={{ fontSize: "2rem", flexBasis: "20%" }}
        onClick={deleteHandler}
      >
        x
      </Button>
    </FormControl>
  );
}

export default AddItemList;
