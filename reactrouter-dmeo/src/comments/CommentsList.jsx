import React from "react";
import UseFetchHook from "../hooks/UseFetchHook";

export default function CommentsList() {
  const { data, loading, error } = UseFetchHook(
    "https://dummyjson.com/comments"
  );

  console.log(data);

  if (loading) return <h1>Fetching comments</h1>;

  return (
    <div>
      <h1>Comments List</h1>
      <ul>
        {data?.comments?.length > 0
          ? data?.comments.map((commentsItem) => (
              <div>
                <label htmlFor={commentsItem.body}>{commentsItem.body}</label>
                <p>{commentsItem?.likes}</p>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}
