import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

import ChatList from "../chat/ChatList";
import DocumentList from "../document/DocumentList";
import Login from "../user/Login";
import LoginSuccessful from "../user/LoginSuccessful";
import Register from "../user/Register";
import RegisterSuccessful from "../user/RegisterSuccessful";

import { ToastContainer } from "react-toastify";
import * as storage from "../../service/storage";
import EditUser from "../user/EditUser";
import UserList from "../user/UserList";
import Nav from "./Nav";
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedUser: storage.getLoggedUser(),
    };
  }

  render() {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
          theme="colored"
        />
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
