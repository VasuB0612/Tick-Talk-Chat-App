export const getSender = (loggedUser, users) => {
  if (users && users.length === 2 && loggedUser && loggedUser._id) {
    return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
  }
};

export const getInfo = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i + 1].sender._id !== userId
  );
};

export const isLastSender = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};
