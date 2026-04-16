import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();

  return (
    <div style={{ paddingTop: "10px" }}>
      
      <h1 style={{ fontSize: "22px", fontWeight: "600", lineHeight: "1.3" }}>
        Signin to your <br /> PopX account
      </h1>

   <p
  style={{
    marginTop: "12px",
    marginBottom: "25px",
    width: "220px",      // 🔥 FIXED width (NOT maxWidth)
    lineHeight: "1.6",
    color: "#7A7A7A"
  }}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
</p>

      <InputField label="Email Address" placeholder="Enter email address" />
      <InputField label="Password" placeholder="Enter password" type="password" />

      <button
        style={{
         background: "#CBCBCB",
         color: "#FFFFFF",
         opacity: "0.7",
          marginTop: "10px",
          fontWeight: "600"
        }}
        onClick={() => nav("/profile")}
      >
        Login
      </button>

    </div>
  );
};

export default Login;