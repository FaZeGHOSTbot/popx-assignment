import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      
      {/* TOP CONTENT */}
      <div>
        <h1 style={{ fontWeight: "600", marginBottom: "20px" }}>
          Create your <br /> PopX account
        </h1>

        <InputField label="Full Name*" placeholder="Marry Doe" />
        <InputField label="Phone number*" placeholder="Marry Doe" />
        <InputField label="Email address*" placeholder="Marry Doe" />
        <InputField label="Password*" placeholder="Marry Doe" />
        <InputField label="Company name" placeholder="Marry Doe" />

        {/* RADIO */}
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "13px", marginBottom: "8px" }}>
            Are you an Agency? <span style={{ color: "red" }}>*</span>
          </p>

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            
            <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <input
                type="radio"
                name="agency"
                defaultChecked
                style={{ accentColor: "#6C25FF" }}
              />
              Yes
            </label>

            <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <input
                type="radio"
                name="agency"
                style={{ accentColor: "#6C25FF" }}
              />
              No
            </label>

          </div>
        </div>
      </div>

      {/* BUTTON AT BOTTOM */}
      <button
        style={{
          marginTop: "auto",   // 🔥 pushes button to bottom
          background: "linear-gradient(90deg, #6C25FF, #9333EA)",
          color: "#fff",
          fontWeight: "600"
        }}
        onClick={() => nav("/profile")}
      >
        Create Account
      </button>

    </div>
  );
};

export default Signup;