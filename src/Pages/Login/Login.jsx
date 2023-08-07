import Lottie from "lottie-react";
import login from "../../lottie/login.json";
import { styled } from "styled-components";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginButton from "./LoginButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Box = styled.div`
  height: calc(100% - 30px);
  width: calc(100% - 30px);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
`;

export default function Login() {
  const isLoggedIn = localStorage.getItem("@simple-chat-app/accessToken");
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate("/protected");
  }, [isLoggedIn]);
  if (isLoggedIn) return <></>;
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLINETID}>
      <Box>
        <Lottie animationData={login} />
        <LoginButton />
      </Box>
    </GoogleOAuthProvider>
  );
}
