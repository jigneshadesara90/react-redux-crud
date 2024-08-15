import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

import ChatList from "./ChatList";
import DocumentList from "./DocumentList";
import Login from "./Login";
import LoginSuccessful from "./LoginSuccessful";
import Logout from "./Logout";
import Register from "./Register";
import RegisterSuccessful from "./RegisterSuccessful";

import EditUser from "./EditUser";
import Nav from "./Nav";
import UserList from "./UserList";

class Main extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/logout" element={<Logout />} />
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
