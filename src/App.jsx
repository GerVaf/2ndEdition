import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Head&Footer/Loading";
import All from "./Whole";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 15 seconds in milliseconds

    // Clean up the timer when the component unmounts or when the loading is finished
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {loading ? <Loading /> : <All />}
    </>
  );
};

export default App;
