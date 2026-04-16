const Profile = () => {
  return (
    <div>
      {/* TITLE */}
      <h2 style={{ marginBottom: "20px", fontWeight: "600" }}>
        Account Settings
      </h2>

      {/* CARD */}
      <div
        style={{
          background: "#F7F7F7",
          padding: "16px",
          borderRadius: "10px"
        }}
      >
        {/* TOP SECTION */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          
          {/* IMAGE + ICON */}
          <div style={{ position: "relative" }}>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />

            {/* CAMERA ICON */}
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                background: "#6C25FF",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "12px"
              }}
            >
              📷
            </div>
          </div>

          {/* NAME + EMAIL */}
          <div>
            <h3 style={{ margin: 0, fontSize: "16px" }}>Marry Doe</h3>
            <p style={{ margin: 0, fontSize: "13px", color: "#6B6B6B" }}>
              Marry@gmail.com
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p
          style={{
            marginTop: "16px",
            fontSize: "13px",
            lineHeight: "1.5",
            color: "#6B6B6B"
          }}
        >
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      {/* DASHED SECTIONS */}
      <div
        style={{
          borderTop: "1px dashed #D9D9D9",
          marginTop: "20px"
        }}
      ></div>

      <div
        style={{
          borderTop: "1px dashed #D9D9D9",
          marginTop: "200px"
        }}
      ></div>
    </div>
  );
};

export default Profile;