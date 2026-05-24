import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ReceipesList from "./receipes/ReceipesList";
import CommentsList from "./comments/CommentsList";
import Index from "./Index";
import ReceipesDetailsPage from "./receipes-details/ReceipesDetailsPage";
import NotFoundPage from "./not-found/NotFoundPage";
import Layout from "./Layout";
import UseFetchHook from "./hooks/UseFetchHook";
import ReactHookFormExample from "./react-hook-form-example/ReactHookFormExample";
import AppT from "./client_EcommerceApp/AppT";
function App() {
  // const navigate = useNavigate();

  // const resultFromCustomHook=UseFetchHook('https:dummyjson.com/recipes');
  // console.log(resultFromCustomHook);

  return (
    <>
      {/* <Index /> */}
      {/* 1st way */}
      {/* <div style={{display:"flex",justifyContent:'center',alignItems:'center' ,gap:'20px',margin:'10px'}}>
     <button style={{background:'black' , color:'white',border:'2px solid orange',fontSize:'20px'}} onClick={navigate('receipeList')} >ReceipeList</button>
      <button style={{background:'black' , color:'white',border:'2px solid orange',fontSize:'20px'}} onClick={navigate('/commentsList')}>CommentsList</button>
     </div> */}

      {/* 2nd way */}
      {/* <Link to={"/receipeList"}>ReceipeList</Link>
      <Link to={"/commentsList"}>CommentsList</Link>
      <Link to={"/receipesDetails/:id"}>CommentsList</Link>
      <Link to={"/react-hook-form"}>/React-Hook-Form</Link> */}

      {/* <Routes>
        <Route path="/receipeList" element={<ReceipesList />} />
        <Route path="/commentsList" element={<CommentsList />} />
        <Route path="/receipesDetails/:id" element={<ReceipesDetailsPage />} />
        <Route path="/react-hook-form" element={<ReactHookFormExample />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}

      {/* using outlet */}
      {/* <Routes>
        <Route path="/" Component={<Layout/>}>
          <Route path="receipeList" element={<ReceipesList />} />
          <Route path="commentsList" element={<CommentsList />} />
          <Route
            path="receipesDetails/:id"
            element={<ReceipesDetailsPage />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}

      <AppT />
    </>
  );
}

export default App;
