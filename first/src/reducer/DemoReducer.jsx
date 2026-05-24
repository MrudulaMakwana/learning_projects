import React, { useReducer } from "react";

export default function DemoReducer() {
  let initialState = {
    isTextShow: true,
    isTextChanged: false,
  };
  const HIDE_TEXT = "HIDE_TEXT";
  const SHOW_TEXT = "SHOW_TEXT";
  const CHANGE_TEXT = "CHANGE_TEXT";
  function reducer(state, action) {
    switch (action.type) {
      case HIDE_TEXT:
        return {
          ...state,
          isTextShow: false,
        };

      case SHOW_TEXT:
        return {
          ...state,
          isTextShow: true,
        };
      case CHANGE_TEXT:
        return {
          ...state,
          isTextChanged: !state.isTextChanged,
        };

      default:
        state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {state?.isTextShow ? (
        <h1
          style={{
            backgroundColor: state?.isTextChanged ? "black" : "yellow",
            color: state?.isTextChanged ? "white" : "orange",
          }}
        >
          Hello
        </h1>
      ) : null}
      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
      <button onClick={() => dispatch({ type: CHANGE_TEXT })}>
        Change Style Text
      </button>
    </>
  );
}
