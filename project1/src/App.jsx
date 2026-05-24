import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import styled from "./App.module.css";
import TodoItem from "./components/TodoItem";
import TodoDetails from "./components/TodoDetails";
import { Skeleton } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "../ImageSlider";
function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // async function fetchOfCurrentTodo(getCurrentTodoDetails) {
  //   try {
  //     const apiResponse = await fetch(
  //       `https://dummyjson.com/todos/${getCurrentTodoDetails}`
  //     );
  //     const details = await apiResponse.json(); // Fixed await
  //     if (details) {
  //       setTodoDetails(details);
  //       setOpenDialog(true);
  //     }
  //   } catch (e) {
  //     setTodoDetails([]);
  //     setOpenDialog(false);
  //   }
  // }

  // async function fetchListOfTodos() {
  //   try {
  //     setLoading(true);
  //     const apiResponse = await fetch("https://dummyjson.com/todos");
  //     const result = await apiResponse.json();
  //     if (result?.todos && result?.todos?.length > 0) {
  //       setTodoList(result.todos);
  //       setLoading(false);
  //       setErrorMsg("");
  //     } else {
  //       setTodoList([]);
  //       setLoading(false);
  //       setErrorMsg("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setErrorMsg("Something error occurred");
  //     setLoading(false);
  //   }
  // }

//   useEffect(() => {
//     fetchListOfTodos();
//   }, []);
// if(loading) return<Skeleton variant="rectangulat" width={650} height={650}/>
  
  return (
    <>
      {/* <div className={styled.mainWrapper}>
        <h1 className={styled.headerTitle}>
          Simple To-Do App Using Material UI
        </h1>
        <div className={styled.todoListWrapper}>
          {todoList && todoList.length > 0
            ? todoList.map((todoItem) => (
                <TodoItem
                  key={todoItem.id} // Added unique key
                  fetchOfCurrentTodo={fetchOfCurrentTodo}
                  todoItem={todoItem}
                />
              ))
            : null}
        </div>
        <TodoDetails
          setOpenDialog={setOpenDialog}
          openDialog={openDialog}
          todoDetails={todoDetails}
          setTodoDetails={setTodoDetails}
        />
      </div> */}

<ImageSlider />
    </>
  );
}

export default App;
