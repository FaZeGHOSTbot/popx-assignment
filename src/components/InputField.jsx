const InputField = ({ label, placeholder, type = "text" }) => {
  return (
    <div style={{ position: "relative", marginBottom: "22px" }}>
      
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "16px 12px",
          borderRadius: "8px",
          border: "1.5px solid #CFCFCF", // stronger border
          fontSize: "14px",
          outline: "none",
          background: "#fff"
        }}
      />

      <span
        style={{
          position: "absolute",
          top: "-7px",
          left: "12px",
          background: "#fff",
          padding: "0 6px",
          fontSize: "12px",
          color: "#6C25FF",
          fontWeight: "600",
          lineHeight: "1",
          zIndex: 1
        }}
      >
        {label}
      </span>

    </div>
  );
};

export default InputField;