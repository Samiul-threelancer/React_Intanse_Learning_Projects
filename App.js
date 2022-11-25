//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Profile from "./forms/components/Profile";
import SignUp from "./forms/components/SignUp";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Blog from "./forms/components/Blog";
import BlogBody from "./forms/components/BlogBody";
import Photographs from "./forms/components/Photographs";
import Buttonstate from "./forms/components/Buttonstate"; 
import Product from "./forms/components/Product";
import Book from "./forms/components/Book";
import Update from "./forms/components/Update";
import Delete from "./forms/components/Delete";






function App() {
  return (
    <div>
      
      <Router>
      <Profile />
      
        <Switch>
       
          <Route exact path={'/blog'} component={Blog}></Route>
          <Route exact path={'/signup'} component={SignUp}></Route>
          <Route exact path={'/blogbody'} component={BlogBody}></Route>
          <Route exact path={'/photographs'} component={Photographs}></Route>
          <Route exact path={'/Buttonstate'} component={Buttonstate}></Route>
          <Route exact path={'/product'} component={Product}></Route>
          <Route exact path={'/book'} component={Book}></Route>
          <Route exact path={'/update'} component={Update}></Route>
          <Route exact path={'/delete'} component={Delete}></Route>

       </Switch>
          
          
          
          </Router>

     
      
    </div>
  );
}

export default App;
