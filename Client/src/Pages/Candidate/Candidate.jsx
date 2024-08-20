import React from "react";
import Sidebar from "@/components/my_component/Sidebar/sidebar";
import Navbar from "@/components/my_component/Navbar/Navbar";

function Candidate() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <div className="mt-4"></div>
      </div>
    </div>
  );
}

export default Candidate;
