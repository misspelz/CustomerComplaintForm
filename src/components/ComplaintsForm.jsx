import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import Button from "./Button";
import Feedback from "./Feedback";
import { toast } from "react-toastify";

const ComplaintsForm = () => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    reason: "",
    reasonOptions: [
      "My account was debited erroneously",
      "My card is expired",
      "My transaction failed",
      "Others",
    ],
    description: "",
    feedbackDetails: null,
    showFeedbackDetails: false,
  });

  //destructuring
  const {
    fullName,
    email,
    reason,
    reasonOptions,
    description,
    feedbackDetails,
    showFeedbackDetails,
  } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  //   console.log(
  //     formData
  //   );

  const handleComplaintSubmission = (e) => {
    e.preventDefault();

    const feedbackDetails = {
      fullName: fullName,
      email: email,
      reason: reason,
      reasonOptions: [
        "My account was debited erroneously",
        "My card is expired",
        "My transaction failed",
        "Others",
      ],
      description: description,
    };

    if (
      fullName !== "" &&
      email !== "" &&
      reason !== "" &&
      description !== ""
    ) {
      setState({
        feedbackDetails: feedbackDetails,
        showFeedbackDetails: true,
      });
    }

    toast.success("Successful")
  };

  const handleFormReset = (e) => {
    e.preventDefault();

    setState({
      fullName: "",
      email: "",
      reason: "",
      description: "",
      showFeedbackDetails: false,
    });

    window.location.reload();
  };

  return (
    <div className="mt-4 flex flex-col md:flex-row">
      <form className="w-[100%] md:w-[50%] md:mx-6">
        <Input
          name="fullName"
          title="Full Name"
          type="text"
          placeholder="Enter your full name"
          handleChange={handleInputChange}
          value={fullName}
        />

        <Input
          name="email"
          title="Email"
          type="text"
          placeholder="Enter your email address"
          handleChange={handleInputChange}
          value={email}
        />

        <Select
          title="Reason of Contact"
          name="reason"
          value={reason}
          options={reasonOptions}
          handleChange={handleInputChange}
          placeholder="Select a reason"
        />

        <Textarea
          title="Description"
          name="description"
          rows="5"
          cols="10"
          value={description}
          handleChange={handleInputChange}
          placeholder="Enter the description"
        />

        <div className="flex flex-row mt-6 justify-center items-center">
          <Button
            title="Submit Complaints"
            backgroundColor="green"
            handleClick={handleComplaintSubmission}
          />

          <Button
            title="Reset Form"
            backgroundColor="red"
            handleClick={handleFormReset}
          />
        </div>
      </form>

      <div className="w-[100%] mt-10 md:mt-2 mb-10 md:w-[50%] md:mr-6">
        {showFeedbackDetails && <Feedback feedbackDetails={feedbackDetails} />}
      </div>
    </div>
  );
};

export default ComplaintsForm;
