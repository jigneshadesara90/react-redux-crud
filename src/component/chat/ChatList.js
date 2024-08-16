import React from "react";
import { toast } from "react-toastify";
import * as storage from "../../service/storage";

export default class ChatList extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      chats: [],
      loggedUser: storage.getLoggedUser(),
    };
  }

  getChats() {
    this.setState({
      chats: storage.getChats(),
    });
  }

  componentDidMount() {
    this.getChats();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;

    if (!message) {
      toast.error("Message should not be empty", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const chat = {
        id: Number(new Date()),
        time: new Date().toLocaleString(),
        sender: this.state.loggedUser,
        message,
      };

      storage.addChat(chat);
      this.getChats();

      document.getElementById("chatForm").reset();
    }
  };

  render() {
    return (
      <section>
        <form id="chatForm" onSubmit={this.handleSubmit}>
          <div className="container py-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-8">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center p-3 border-top border-primary">
                    <h5 className="mb-0">Group Chat</h5>
                    <div className="d-flex flex-row align-items-center">
                      <span className="badge bg-primary me-3">
                        {this.state.chats.length}
                      </span>
                    </div>
                  </div>
                  <div
                    className="card-body"
                    data-mdb-perfect-scrollbar-init
                    style={{
                      position: "relative",
                      height: "300px",
                      overflowY: "scroll",
                    }}
                  >
                    {this.state.chats.map((chat, index) =>
                      chat.sender.id === this.state.loggedUser.id ? (
                        <div key={index}>
                          <div className="d-flex justify-content-between">
                            <p className="small mb-1 text-muted">{chat.time}</p>
                            <p className="small mb-1">{chat.sender.name}</p>
                          </div>
                          <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                            <div>
                              <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-primary">
                                {chat.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div key={index}>
                          <div className="d-flex justify-content-between">
                            <p className="small mb-1">{chat.sender.name}</p>
                            <p className="small mb-1 text-muted">{chat.time}</p>
                          </div>
                          <div className="d-flex flex-row justify-content-start">
                            <div>
                              <p className="small p-2 ms-3 mb-3 rounded-3 bg-body-tertiary">
                                {chat.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                    <div className="input-group mb-0">
                      <input
                        type="text"
                        id="message"
                        name="message"
                        className="form-control"
                        placeholder="Type message"
                        required
                        autoFocus
                      />
                      <input
                        type="submit"
                        className="btn btn-primary ms-3"
                        value="Send"
                      />

                      <button className="btn btn-primary ms-3" type="button">
                        Refresh
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
