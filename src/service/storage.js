const setLoggedUser = (user) => {
  sessionStorage.setItem("loggedUser", JSON.stringify(user));
};

const removeLoggedUser = () => {
  sessionStorage.removeItem("loggedUser");
};

const getLoggedUser = () => {
  return sessionStorage.getItem("loggedUser")
    ? JSON.parse(sessionStorage.getItem("loggedUser"))
    : {};
};

const getUsers = () => {
  return localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
};

const getUser = (id) => {
  const users = getUsers();

  return users.find((user) => user.id === id) || {};
};

const addUser = (user) => {
  const users = getUsers();

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

const updateUser = (user) => {
  const users = getUsers();

  const updateUser = users.map((item) => {
    return item.id === user.id ? user : item;
  });

  localStorage.setItem("users", JSON.stringify(updateUser));
};

const deleteUser = (id) => {
  const users = getUsers();
  const newUsers = users.filter((user) => user.id !== id) || [];

  localStorage.setItem("users", JSON.stringify(newUsers));
};

const getDocuments = () => {
  return localStorage.getItem("documents")
    ? JSON.parse(localStorage.getItem("documents"))
    : [];
};

const getDocument = (id) => {
  const documents = getDocuments();

  return documents.find((doc) => doc.id === id) || {};
};

const addDocument = (doc) => {
  const documents = getDocuments();

  documents.push(doc);
  localStorage.setItem("documents", JSON.stringify(documents));
};

const updateDocument = (doc) => {
  const documents = getDocuments();

  const updateDoc = documents.map((item) => {
    return item.id === doc.id ? doc : item;
  });

  localStorage.setItem("documents", JSON.stringify(updateDoc));
};

const deleteDocument = (id) => {
  const documents = getDocuments();
  const newDocuments = documents.filter((document) => document.id !== id) || [];

  localStorage.setItem("documents", JSON.stringify(newDocuments));
};

const getChats = () => {
  return localStorage.getItem("chats")
    ? JSON.parse(localStorage.getItem("chats"))
    : [];
};

const addChat = (chat) => {
  const chats = getChats();

  chats.push(chat);
  localStorage.setItem("chats", JSON.stringify(chats));
};

export {
  addChat,
  addDocument,
  addUser,
  deleteDocument,
  deleteUser,
  getChats,
  getDocument,
  getDocuments,
  getLoggedUser,
  getUser,
  getUsers,
  removeLoggedUser,
  setLoggedUser,
  updateDocument,
  updateUser
};

