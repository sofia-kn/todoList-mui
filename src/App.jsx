import React, { useState } from "react";
import { Link, Box, Typography, Button } from "@mui/material";
import InputAddItem from "./components/InputAddItem";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";
import ButtomNavigation from "./components/ButtomNavigation";
import Container from "@mui/material/Container";
import AddItemList from "./components/AddItemList";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  // const [addItemList, setAddItemList] = useState(true);

  const axiosGet = () => {
    axios.get("http://localhost:3031/todos").then((res) => setData(res.data));
  };

  useEffect(() => {
    axiosGet();
  }, []);

  const addItemHandler = () => {
    axios
      .post("http://localhost:3031/todos", { inputValue: inputValue })
      .then((res) => alert("item added to list"))
      .catch((err) => console.log(err))
      .then(axiosGet);
  };
  const clearCompletedHandler = () => {
   console.log('delete completed');
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: "url('/assets/images/bg-mobile-light.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top left",
        }}
      >
        <Container>
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
            <NightlightRoundSharpIcon
              sx={{
                right: "2rem",
                fontSize: "3.5rem",
                color: "white",
              }}
            ></NightlightRoundSharpIcon>
          </div>
          <InputAddItem
            inputValue={inputValue}
            setInputValue={setInputValue}
            data={data}
            setData={setData}
            onAddItem={addItemHandler}
          />

          {data.length ? (
            data.map((dataItem) => (
              <AddItemList
                data={dataItem}
                key={dataItem.id}
                setData={setData}
              />
            ))
          ) : (
            <Box
              width="100%"
              height={100}
              bgcolor="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="dark"
              fontSize={20}
              sx={{
                boxShadow: "inset 0 0 5px px lightGray",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
              border="1px solid lightGray"
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
            }}
          >
            <Typography variant="subtitle1" color="gray.main">
              {data.length} items left
            </Typography>
            <Typography variant="subtitle1">
              <Button
                onClick={clearCompletedHandler}
                color="gray"
                sx={{ p: "1rem" }}
              >
                Clear Completed
              </Button>
            </Typography>
          </Box>
          <ButtomNavigation />
        </Container>
      </div>
    </>
  );
}

export default App;
