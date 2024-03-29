import React, { useEffect, useState } from "react";
import axios from "axios";
import { useChat } from "../Context/ChatProvider";
import { Box, space } from "@chakra-ui/react";
import SideDrawer from "../Components/SideDrawer";
import MyChats from "../Components/MyChats";
import ChatBox from "../Components/ChatBox";

const ChatPage = () => {
  const { user } = useChat();
  const [fetchAgain, setFetchAgain] = useState();
  return (
    <div className="chatPage" style={({ width: "100%" }, { color: "bisque" })}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        height="92vh"
        width="100vw"
        padding="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
