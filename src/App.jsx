import React, { useState, useEffect, useMemo } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputAddItem from "./components/InputAddItem";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";
import LightModeIcon from "@mui/icons-material/LightMode";
import ButtomNavigation from "./components/ButtomNavigation";
import AddItemList from "./components/AddItemList";
// import { addItemHandler, clearCompletedHandler } from "../src/utils/index";
import axios from "axios";
import theme from "./theme";
// import { createClient } from "@supabase/supabase-js";
// const supabase = createClient(
//   "https://bykqbmhvtkcpytyalgbz.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5a3FibWh2dGtjcHl0eWFsZ2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNTEwODgsImV4cCI6MjAwODgyNzA4OH0.g9K0-nobipeTKlouZK6YH9cZwhpLO6RExzmcrdMOVtY"
// );

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [status, setStatus] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [darkMode, setDarkMode] = useState(theme.palette.mode);

  const axiosGet = () => {
    axios.get("http://localhost:3031/todos").then((res) => setData(res.data));

    // let { data: todoList, error } = await supabase.from("todoList").select("*");
    // // setData(todoList);
    // console.log(todoList);
  };
  useEffect(() => {
    axiosGet();
  }, []);

  const addItemHandler = (inputValue) => {
    axios
      .post("http://localhost:3031/todos", {
        inputValue: inputValue,
        isCompleted: false,
      })
      .catch((err) => console.log(err))
      .then(axiosGet)
      .then(alert("item added to list"));
  
    // const { data, error } = await supabase
    //   .from("todoList")
    //   .insert([
    //     {
    //       value: inputValue,
  
    //     },
    //   ])
  
    //   await axiosGet()
  };
  
  const clearCompletedHandler = (data) => {
    data.map((dataItem) => {
      axios.delete("http://localhost:3031/todos/" + dataItem.id).then(axiosGet);
  
      // const { error } = await supabase
      // .from("todoList")
      // .delete('*')
      // await axiosGet()
    });
  };

  const dataIsCompletedFilter = data.filter(
    (dataItem) => !dataItem.isCompleted
  );
  const dataStatus = data.filter((item) =>
    status === "" ? item : item.isCompleted == status
  );

  const darkModeHandler = () => {
    setDarkMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={(theme) => ({
        bgcolor: darkMode === "dark" ? "#161722" : "#e4e5f1",
        color: darkMode === "light" ? "text.secondary" : "white",
      })}
    >
      <Grid
        item
        xs={12}
        sx={(theme) => ({
          minHeight: "100vh",
          backgroundImage: {
            xs:
              darkMode === "dark"
                ? "url('/assets/images/bg-mobile-dark.jpg')"
                : "url('/assets/images/bg-mobile-light.jpg')",
            md:
              darkMode === "dark"
                ? "url('/assets/images/bg-desktop-dark.jpg')"
                : "url('/assets/images/bg-desktop-light.jpg')",
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top left",
          ...theme.typography.body2,
        })}
      >
        <Grid item md={6} lg={4.5} margin="0 auto" padding={{ xs: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "4rem 0 3rem",
            }}
          >
            <Typography
              variant="h1"
              textTransform="uppercase"
              letterSpacing={10}
              color="white"
            >
              todo
            </Typography>
            <Box onClick={darkModeHandler} sx={{ cursor: "pointer" }}>
              <NightlightRoundSharpIcon
                sx={{
                  right: "2rem",
                  fontSize: "3.5rem",
                  color: "white",
                  display: darkMode === "dark" ? "none" : "block",
                }}
              ></NightlightRoundSharpIcon>

              <LightModeIcon
                sx={{
                  right: "2rem",
                  fontSize: "3.5rem",
                  color: "white",
                  display: darkMode === "dark" ? "block" : "none",
                }}
              ></LightModeIcon>
            </Box>
          </div>
          <InputAddItem
            inputValue={inputValue}
            setInputValue={setInputValue}
            data={data}
            onAddItem={() => addItemHandler(inputValue)}
            darkMode={darkMode}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            axiosGet={axiosGet}
          />

          {data.length ? (
            dataStatus.map((dataItem) => {
             
              return (
                <AddItemList
                  data={dataItem}
                  key={dataItem.id}
                  setData={setData}
                  axiosGet={axiosGet}
                  isCompleted={isCompleted}
                  setIsCompleted={setIsCompleted}
                  darkMode={darkMode}
                  setInputValue={setInputValue}
                  editTodo={editTodo}
                  setEditTodo={setEditTodo}
                  inputValue={inputValue}
                  
                />
              );
            })
          ) : (
            <Box
              width="100%"
              height={100}
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize={20}
              sx={{
                boxShadow: "inset 0 0 5px px lightgray",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
                bgcolor: darkMode === "dark" ? "#25273c" : "white",
                // borderBottom:"1px solid lighGray",
              }}
              borderBottom="1px solid lightgray"
            >
              No todo items left!
            </Box>
          )}

          <Box
            bgcolor="white"
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="1rem 1.5rem"
            marginBottom={2}
            sx={{
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              bgcolor: darkMode === "dark" ? "#25273c" : "white",
            }}
          >
            <Typography variant="subtitle1" color="gray.main">
              {dataIsCompletedFilter.length} items left
            </Typography>
            <Typography variant="subtitle1">
              <Button
                onClick={() => clearCompletedHandler(data)}
                color="gray"
                sx={{ p: "1rem" }}
              >
                Clear Completed
              </Button>
            </Typography>
          </Box>
          <ButtomNavigation
            status={status}
            setStatus={setStatus}
            data={data}
            darkMode={darkMode}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
