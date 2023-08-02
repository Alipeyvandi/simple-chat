import Lottie from "lottie-react";
import login from "../../lottie/login.json";
import { styled } from "styled-components";
import { useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

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

  //   function handlecallbackResponse(response) {
  //     console.log(response.credential);
  //   }

  // useEffect(() => {
  //   /*global google*/
  //   google.accounts.id.initialize({
  //     client_id:
  //       "222490645159-0a27ut476gfa7bqd7l0ceqku45k2sij6.apps.googleusercontent.com",
  //     callback: handlecallbackResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("signIn"), {
  //     scope: "profile email",
  //     width: 240,
  //     height: 50,
  //     longtitle: true,
  //     theme: "dark",
  //     onsuccess: () => console.log("success"),
  //     onfailure: () => console.log("failed"),
  //   });
  // }, []);

  return (
    <Box>
      <Lottie animationData={login} />
      <GoogleOAuthProvider clientId="344789065811-vofbb91dbudn4hvvu6vvaqois5q77k66.apps.googleusercontent.com">
        <GoogleLogin />
      </GoogleOAuthProvider>
    </Box>
  );
}
