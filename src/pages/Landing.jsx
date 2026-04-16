import { useNavigate } from "react-router-dom";

const Landing = () => {
  const nav = useNavigate();

  return (
    <div style={{ marginTop: "auto" }}>
  
  <h1>Welcome to PopX</h1>
  
  <p style={{ marginTop: "10px", marginBottom: "30px" }}>
    Lorem ipsum dolor sit amet...
  </p>

<button
  style={{
    background: "linear-gradient(90deg, #6C25FF, #9333EA)",
    color: "#fff"
  }}
  onClick={() => nav("/signup")}
>
  Create Account
</button>

<button
  style={{
    background: "#E5D9FF",
    marginTop: "12px"
  }}
  onClick={() => nav("/login")}
>
  Already Registered? Login
</button>

</div>
  );
};

export default Landing;