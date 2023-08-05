import Lottie from "lottie-react";
import login from "../../lottie/login.json";
import { styled } from "styled-components";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginButton from "./LoginButton";

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
  return (
    <GoogleOAuthProvider clientId="952237121300-n2bq52tfpa4csif128kknt43fj12vj24.apps.googleusercontent.com">
      <Box>
        <Lottie animationData={login} />
        <LoginButton />
      </Box>
    </GoogleOAuthProvider>
  );
}
