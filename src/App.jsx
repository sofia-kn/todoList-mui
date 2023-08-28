import React, { useState } from "react";
import { Typography, Button, Grid, Container } from "@mui/material";
import Box from "@mui/material/Box";
import InputAddItem from "./components/InputAddItem";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";
import ButtomNavigation from "./components/ButtomNavigation";
import AddItemList from "./components/AddItemList";
import { useEffect } from "react";
import axios from "axios";
import { display } from "@mui/system";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [isCompleted , setIsCompleted] = useState(false)


  const axiosGet = () => {
    axios.get("http://localhost:3031/todos").then((res) => setData(res.data));
  };

  useEffect(() => {
    axiosGet();
  }, []);

  const addItemHandler = () => {
    axios
      .post("http://localhost:3031/todos", {
        inputValue: inputValue,
        isCompleted: false,
      })
      .catch((err) => console.log(err))
      .then(axiosGet)
      .then(alert("item added to list"));
  };
  const clearCompletedHandler = () => {
    data.map((dataItem) => {
      axios.delete("http://localhost:3031/todos/" + dataItem.id).then(axiosGet);
    
    });
  };

  return (
    <Grid container display="flex" justifyContent="center" alignItems="center">
      <Grid
        item
        xs={12}
        sx={(theme) => ({
          minHeight: "100vh",
          backgroundImage: {
            xs: "url('/assets/images/bg-mobile-light.jpg')",
            md: "url('/assets/images/bg-desktop-light.jpg')",
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
            data.map((dataItem) => {
              return (
                <AddItemList
                  data={dataItem}
                  key={dataItem.id}
                  setData={setData}
                  axiosGet={axiosGet}
                  isCompleted={isCompleted}
                  setIsCompleted={setIsCompleted}
                />
              );
            })
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
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
