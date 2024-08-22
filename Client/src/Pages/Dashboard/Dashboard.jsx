import React from "react";
import JobCard from "../../components/my_component/jobsCard/jobCard";

function Dashboard() {
  const jobs = [
    {
      name: "Frontend Developer",
      company: "Tech Corp",
      logo: "https://via.placeholder.com/50",
      candidates: 42,
      location: "Remote",
      description: "A great job for a great developer.",
    },
    {
      name: "Backend Developer",
      company: "DataSoft",
      logo: "https://via.placeholder.com/50",
      candidates: 30,
      location: "Onsite",
      description: "Looking for experienced backend developers.",
    },
    {
      name: "Full Stack Developer",
      company: "Tech Corp",
      logo: "https://via.placeholder.com/50",
      candidates: 20,
      location: "Remote",
      description: "A great job for a great developer.",
    },
    {
      name: "DevOps Engineer",
      company: "DataSoft",
      logo: "https://via.placeholder.com/50",
      candidates: 15,
      location: "Onsite",
      description: "Looking for experienced backend developers.",
    },
    // Add more job objects here
  ];

  return (
    <div className=" container mx-auto p-8 md:p-16 lg:p-24"> {/* Adjusted padding for better responsiveness */}
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <hr className="mb-4 dark:border-gray-300 border-blue-600" />
      <h2 className="text-2xl font-semibold mb-4">Jobs</h2>

      {/* Using grid with auto-fill for dynamic spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
