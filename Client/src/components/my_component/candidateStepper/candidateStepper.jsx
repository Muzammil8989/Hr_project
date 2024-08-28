import React, { useState } from "react";
import {
  FaFileUpload,
  FaClipboardCheck,
  FaUserCheck,
  FaCheckCircle,
} from "react-icons/fa";
import { Modal } from "antd"; // Import Ant Design Modal
import { Button } from "@/components/ui/button";
import UploadResume from "../uploadResume/uploadResume";
import ResumeForm from "../resumeForm/resumeForm";
import QuizComponent from "../testComponent/testComponent";
import { quantum } from "ldrs";

quantum.register();

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact_number: "",
    email: "",
    skills: "",
    education: "",
    colleges: "",
  });
  const [quizCompleted, setQuizCompleted] = useState(false); // Track quiz completion

  const handleResumeUpload = (file) => {
    setIsScanning(true);
    // Simulate scanning the resume (You would call an API here)
    setTimeout(() => {
      const scannedData = {
        name: "John Doe",
        contact_number: "1234567890",
        email: "john.doe@example.com",
        skills: "JavaScript, React, Node.js",
        education: "B.Sc. in Computer Science",
        colleges: "University of XYZ",
      };

      setFormData(scannedData);
      setIsModalOpen(true);
      setIsScanning(false);
      setResumeUploaded(true);
    }, 2000); // Simulate a delay for scanning
   
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = () => {
    // Add form validation logic here
    if (formData.name && formData.contact_number && formData.email) {
      setIsModalOpen(false);
      setCurrentStep(1); // Move to the next step
    }
    console.log(formData);
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    setCurrentStep(2); // Move to Interview step
  };

  const steps = [
    {
      name: "Upload Resume",
      icon: <FaFileUpload />,
      component: <UploadResume onResumeUpload={handleResumeUpload} />,
    },
    {
      name: "Test",
      icon: <FaClipboardCheck />,
      component: (
        <QuizComponent onQuizComplete={handleQuizComplete} /> // Update quiz completion handling
      ),
    },
    {
      name: "Interview",
      icon: <FaUserCheck />,
      component: <div>Interview Component</div>,
    },
    {
      name: "Submission",
      icon: <FaCheckCircle />,
      component: <div>Submission Component</div>,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="m-20 flex flex-col items-center rounded-lg p-10 shadow-md">
      <div className="flex w-full items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex size-16 items-center justify-center rounded-full border-2 shadow-md ${
                index <= currentStep
                  ? "bg-[#1b0b75] text-2xl text-white"
                  : "border-purple-800 bg-white text-2xl text-[#1b0b75]"
              }`}
            >
              {step.icon}
            </div>
            <div
              className={`ml-4 text-2xl font-semibold ${
                index === currentStep ? "text-[#1b0b75]" : "text-white"
              }`}
            >
              {step.name}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 w-full">
        {isScanning ? (
          <div className="flex justify-center">
            <l-quantum size="148" speed="1.75" color="#1b0b75"></l-quantum>
          </div>
        ) : (
          steps[currentStep].component
        )}
      </div>

      <div className="mt-6 flex w-full justify-between">
        <Button onClick={handlePrevious} disabled={currentStep === 0 || currentStep === 2}>
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={
            currentStep === steps.length - 1 ||
            (currentStep === 1 && !quizCompleted)
            
          }
        >
          Next
        </Button>
      </div>

      <Modal
        title="Resume Details"
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width={800}
      >
        <ResumeForm formData={formData} setFormData={setFormData} />
        <div className="mt-4 flex justify-end">
          <Button onClick={handleFormSubmit}>Submit</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Stepper;
