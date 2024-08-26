import React, { useState } from "react";
import JobCard from "../../components/my_component/jobsCard/jobCard";
import { jobs, statusCards } from "@/fakeData/jobData"; // Adjust the path as necessary
import { Modal } from "antd";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/my_component/searchBar/searchBar";
import StatusCard from "@/components/my_component/statusCard/statusCard";
import TimeDate from "@/components/my_component/TimeDate/timedate";
import {
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";

function Dashboard({ isSidebarCollapsed }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of job cards per page

  const showModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Define a mapping for icons based on the title
  const iconMapping = {
    Success: AiOutlineCheckCircle,
    Pending: AiOutlineClockCircle,
    Failed: AiOutlineCloseCircle,
  };

  // Filter jobs based on searchQuery
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Pagination Logic
  const totalItems = filteredJobs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TimeDate />
      </div>
      <div className="grid grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-2 md:grid-cols-3 md:px-8">
        {statusCards.map((card, index) => {
          const Icon = iconMapping[card.title];
          return (
            <StatusCard
              key={index}
              title={card.title}
              percentage={card.percentage}
              color={card.color}
              icon={Icon}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-3 px-4 md:px-8">
        {currentJobs.map((job, index) => (
          <JobCard
            key={index}
            job={job}
            showModal={showModal}
            isSidebarCollapsed={isSidebarCollapsed}
          />
        ))}

        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <p>{modalContent}</p>
          <Button
            className="animate__animated animate__fadeIn animate__delay-1s mt-4 bg-red-600 text-white hover:bg-red-700"
            onClick={handleCancel}
            danger
          >
            Cancel
          </Button>
        </Modal>
      </div>

      {/* Pagination Controls */}
      <div className="mt-2 flex items-center justify-center">
        <Button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <div className="mx-4 flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={currentPage === i + 1 ? "bg-blue-500 text-white" : ""}
            >
              {i + 1}
            </Button>
          ))}
        </div>
        <Button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </>
  );
}

export default Dashboard;
