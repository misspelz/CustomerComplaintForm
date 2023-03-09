import React from "react";
import ComplaintsForm from "./components/ComplaintsForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="h-[90vh] mt-4 w-[60%] mx-auto">
      <h3 className="text-center text-2xl font-semibold mb-4 mt-10">
        Customer Complaint Form
      </h3>
      <hr />

      <ComplaintsForm />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
