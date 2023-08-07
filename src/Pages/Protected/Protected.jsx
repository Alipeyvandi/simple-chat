import { styled } from "styled-components";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import GroupsIcon from "@mui/icons-material/Groups";
import { useEffect, useState } from "react";
import Listitem from "./Listitem";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  height: calc(100%);
  width: calc(100%);
  display: flex;
  position: relative;
  flex-flow: column nowrap;
`;

export default function Protected() {
  const isLoggedIn = localStorage.getItem("@simple-chat-app/accessToken");
  const navigate = useNavigate();

  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const updateClientHeight = () => {
      const height = document.getElementById("root").clientHeight;
      setClientHeight(height);
    };
    updateClientHeight();

    window.addEventListener("resize", updateClientHeight);
    return () => {
      window.removeEventListener("resize", updateClientHeight);
    };
  }, [clientHeight]);
  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, [isLoggedIn]);

  return (
    <Box>
      <div
        style={{ height: clientHeight, overflowY: "auto", padding: "8px 0px" }}
      >
        <Listitem />
      </div>
      <BottomNavigation style={{ height: "60px" }} showLabels>
        <BottomNavigationAction label="Chat" icon={<ChatBubbleIcon />} />
        <BottomNavigationAction label="Groups" icon={<GroupsIcon />} />
      </BottomNavigation>
    </Box>
  );
}
