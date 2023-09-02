import axios from "axios";
const axiosGet = async (setData) => {
//   axios.get("http://localhost:3031/todos").then((res) => setData(res.data));



  // let { data: todoList, error } = await supabase.from("todoList").select("*");
  // setData(todoList);
};
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
export { axiosGet, addItemHandler, clearCompletedHandler };
