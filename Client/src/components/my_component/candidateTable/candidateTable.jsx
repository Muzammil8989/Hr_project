import React from "react";
import MUIDataTable from "mui-datatables";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const columns = [
  {
    name: "S No",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => (
        <div style={{ textAlign: "center" }}>{value}</div>
      ),
    },
  },
  {
    name: "Name",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => (
        <div style={{ textAlign: "center" }}>{value}</div>
      ),
    },
  },
  {
    name: "Email",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => (
        <div style={{ textAlign: "center" }}>{value}</div>
      ),
    },
  },
  {
    name: "Skills",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => (
        <div style={{ textAlign: "center" }}>{value}</div>
      ),
    },
  },
  {
    name: "Education",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => (
        <div style={{ textAlign: "center" }}>{value}</div>
      ),
    },
  },
  {
    name: "University",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => (
        <div style={{ textAlign: "center" }}>{value}</div>
      ),
    },
  },
  {
    name: "Resume",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => (
        <div style={{ textAlign: "center" }}>
          <Button variant="contained" color="primary" href={value} download>
            Download Now
          </Button>
        </div>
      ),
    },
  },
  {
    name: "Email Candidate",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta) => {
        const resumeScore = data[tableMeta.rowIndex][8]; // Accessing Resume Score for color logic
        let color = "default";
        if (resumeScore > 70) {
          color = "success"; // Green for above 70%
        } else if (resumeScore >= 50) {
          color = "warning"; // Yellow for 50% - 70%
        } else {
          color = "error"; // Red for below 50%
        }

        return (
          <div style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color={color}
              onClick={() => handleEmailCandidate(value)}
            >
              Send Email
            </Button>
          </div>
        );
      },
    },
  },
  {
    name: "Resume Score",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (value) => (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress variant="determinate" value={value} size={30} />
          <span style={{ marginLeft: 8 }}>{value}</span>
        </Box>
      ),
    },
  },
  {
    name: "Test Score",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (value) => (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress variant="determinate" value={value} size={30} />
          <span style={{ marginLeft: 8 }}>{value}</span>
        </Box>
      ),
    },
  },
];

const data = [
  [
    1,
    "Joe James",
    "joe.james@example.com",
    "JavaScript, React",
    "Bachelor of Science",
    "XYZ University",
    "path/to/resume1.pdf",
    "joe.james@example.com",
    85,
    90,
  ],
  [
    2,
    "John Walsh",
    "john.walsh@example.com",
    "Java, Spring",
    "Master of Science",
    "ABC University",
    "path/to/resume2.pdf",
    "john.walsh@example.com",
    78,
    88,
  ],
  [
    3,
    "Bob Herm",
    "bob.herm@example.com",
    "Python, Django",
    "Bachelor of Arts",
    "LMN University",
    "path/to/resume3.pdf",
    "bob.herm@example.com",
    92,
    95,
  ],
  [
    4,
    "James Houston",
    "james.houston@example.com",
    "C#, ASP.NET",
    "Bachelor of Technology",
    "OPQ University",
    "path/to/resume4.pdf",
    "james.houston@example.com",
    80,
    85,
  ],
];

const options = {
  filterType: "checkbox",
  responsive: "standard",
};

const handleEmailCandidate = (email) => {
  // Logic to send email to the candidate
  console.log(`Sending email to: ${email}`);
};

const CandidateTable = () => {
  return (
    <div className="p-12">
      <MUIDataTable
        title={"Candidate List"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default CandidateTable;
