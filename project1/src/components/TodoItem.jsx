import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

export default function TodoItem({ todoItem, fetchOfCurrentTodo }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Typography variant="h5" color="secondary">
          {todoItem?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => fetchOfCurrentTodo(todoItem?.id)} // Fixed issue
          sx={{
            backgroundColor: "#000000",
            color: "#fff", // Fixed color
            opacity: "0.75",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000000",
              opacity: "1",
            },
          }}
        >
          Show Details
        </Button>
      </CardActions>
    </Card>
  );
}
