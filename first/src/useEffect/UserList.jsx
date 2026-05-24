import React, { useEffect, useState } from "react";

export default function UserList() {
  const [userList, setUserList] = useState([]);
  const [pending, setPending] = useState(false);

  async function fetchAllUser() {
    try {
      setPending(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();
      console.log(result);
      if (result?.users) {
        setUserList(result?.users);
        setPending(false);
        console.log(userList);
      } else {
        setUserList([]);
      }
    } catch {}
  }
  function handleFetchUserList()
  {
    fetchAllUser();
  }
//   useEffect(() => {
//     handleFetchUserList();
//   }, []);
  if (pending) return <h1>Fetching users please wait</h1>;

 

  return (
    <>
      <h1>All Users Lists</h1>
      {/* <button onClick={handleFetchUserList}>Fetch Users List</button> */}
      <button onClick={fetchAllUser}>Fetch Users List</button>
      <ul>
        {userList && userList.length > 0 ? (
          userList.map((ele, inx) => (
            <li key={inx}>
              {ele?.id}
              <p>{ele?.firstName}</p>
              <p>{ele?.lastName}</p>
            </li>
          ))
        ) : (
          <li>Nothing</li>
        )}
      </ul>
    </>
  );
}
