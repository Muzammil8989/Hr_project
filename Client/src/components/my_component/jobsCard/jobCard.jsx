import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "antd"; 
import { Button } from "@/components/ui/button";
import { FiBriefcase, FiUsers } from "react-icons/fi"; // Importing icons
import { FaBuilding } from "react-icons/fa";

const JobCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      className="flex flex-col justify-between bg-[#4431AF] p-4 rounded-lg shadow-md h-full" // Set card color
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}   
    >
      <div className="flex items-center mb-4">
        <img src={job.logo} alt={job.company} className="h-12 w-12 mr-4 rounded-full" />
        <div className="flex flex-col justify-between flex-grow"> {/* Added flex-grow */}
          <h1 className="text-4xl font-bold flex items-center mb-3 py-2 text-[#F5F5F5]"> {/* Light text for company */}
            <FaBuilding className="mr-2" /> {/* Company icon */}
            {job.company}
          </h1>
          <h2 className="text-xl font-semibold flex items-center mb-3 text-[#A2D8E6]"> {/* Light text for job name */}
            <FiBriefcase className="mr-2" /> {/* Job name icon */}
            {job.name}
          </h2>
          <p className="text-[#B0BEC5] text-nowrap text-xl flex items-center mb-3"> {/* Light candidates text */}
            <FiUsers className="mr-2" /> {/* Candidates icon */}
            {job.candidates} candidates applied
          </p>
        </div>
      </div>

      <Button
        onClick={showModal}
        className="w-full mt-auto bg-[#1A73E8] text-white hover:bg-[#7e51d1] transition" // Button color
        variant="default"
      >
        Show More Detail
      </Button>

      <Modal
        title={job.name}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Close"
        cancelButtonProps={{ style: { display: 'none' } }}
        style={{ zIndex: 9999 }} // Adjust zIndex to be less than AnimatedCursor's zIndex
      >
        {/* Modal content */}
      </Modal>
    </motion.div>
  );
};

export default JobCard;
