import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Axios from "../../libs/axios";

const LoginButton = () => {
  const navigate = useNavigate();

  async function onSuccess(accessToken) {
    try {
      const { data } = await Axios.put("/api/v1/auth/register", {
        accessToken,
      });
      console.log(data);
      // localStorage.setItem("@simple-chat-app/accessToken", accessToken);
      // navigate("/protected");
    } catch (error) {}
  }
  return (
    <GoogleLogin
      onSuccess={(response) => {
        onSuccess(response.credential);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default LoginButton;
