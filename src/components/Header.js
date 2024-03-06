import React from "react";

const Header = () => {
  const header = {
    width: "100%",
    height: "60px",
    backgroundColor: "slategrey",
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
  };

  return (
    <div style={header}>
      <h4>ALL MOVIES</h4>
    </div>
  );
};

export default Header;
