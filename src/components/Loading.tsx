import { useState } from "react";
import FadeLoader from "react-spinners/ClipLoader";

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <div className="loader-container" style={containerStyle}>
      <FadeLoader
        color="#3498db"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#000000",
};
