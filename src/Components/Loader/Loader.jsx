import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-container" style={styles.loaderContainer}>
      <BounceLoader color="#1E3A8A" loading={true} size={60} />
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

export default Loader;
