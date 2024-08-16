import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

import ChatList from "../chat/ChatList";
import DocumentList from "../document/DocumentList";
import Login from "../user/Login";
import LoginSuccessful from "../user/LoginSuccessful";
import Register from "../user/Register";
import RegisterSuccessful from "../user/RegisterSuccessful";

import * as storage from "../../service/storage";
import EditUser from "../user/EditUser";
import UserList from "../user/UserList";
import Nav from "./Nav";

class Main extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      loggedUser: storage.getLoggedUser(),
    };
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/logout" element={<Welcome logout="true" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/registerSuccessful"
              element={<RegisterSuccessful />}
            />
            <Route path="/home" element={<Nav />}>
              <Route index element={<LoginSuccessful />} />
              <Route path="/home/groupChat" element={<ChatList />} />
              <Route path="/home/userList" element={<UserList />} />
              <Route path="/home/documentList" element={<DocumentList />} />
              <Route
                path="/home/userList/userEdit/:id"
                element={<EditUser />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default Main;
