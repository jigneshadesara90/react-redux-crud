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
  let documents = getDocuments();

  documents.push(doc);
  localStorage.setItem("documents", JSON.stringify(documents));
};

const updateDocument = (doc) => {
  let documents = getDocuments();

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
  let chats = getChats();

  chats.push(chat);
  localStorage.setItem("chats", JSON.stringify(chats));
};

export {
  getUsers,
  getDocuments,
  getDocument,
  addDocument,
  updateDocument,
  deleteDocument,
  getChats,
  addChat,
  getLoggedUser,
};
