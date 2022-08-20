import YearMenu from "../components/YearMenu.js";
import TermMenu from "../components/TermMenu.js";
import DepartmentMenu from "../components/DepartmentMenu.js";
import CourseMenu from "../components/CourseMenu.js";
import SectionMenu from "../components/SectionMenu.js";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { SignInButton } from "../components/SignInButton.js";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "../components/SignOutButton.js";
import { loginRequest } from "../authConfig.js";
import { useMsal } from "@azure/msal-react";
import { callMsGraph } from "../components/graph";

function Homepage({ desc, setDesc }) {
  const [year, setYear] = useState("");
  const [dept, setDept] = useState("");
  const [term, setTerm] = useState("");
  const [course, setCourse] = useState("");
  const [section, setSection] = useState("");
  const isAuthenticated = useIsAuthenticated();

  let url = "http://www.sfu.ca/bin/wcm/course-outlines?";

  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  const name = accounts[0] && accounts[0].name;

  function RequestAccessToken() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callMsGraph(response.accessToken).then((response) => {
          setGraphData(response);
        });
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(response.accessToken).then((response) => {
            setGraphData(response);
          });
        });
      });
  }

  async function API() {
    console.log(url);
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDesc(data);
        console.log(desc.courseSchedule[0].startTime);
      });
  }

  useEffect(() => {
    if (year && dept && term && course && section) {
      url = `http://www.sfu.ca/bin/wcm/course-outlines?${year}/${term}/${dept}/${course}/${section}/`;
    }
  }, [year, dept, term, course, section]);

  function submitButton() {
    API();
    // RequestAccessToken();
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "0 auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h2">Welcome {name}</Typography>
        <Box sx={{ m: "2em auto" }}>
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </Box>
        <YearMenu year={year} setYear={setYear} />
        {year && <TermMenu term={term} setTerm={setTerm} />}
        {term && <DepartmentMenu dept={dept} setDept={setDept} />}
        {dept && <CourseMenu course={course} setCourse={setCourse} />}
        {course && <SectionMenu section={section} setSection={setSection} />}
        {section && (
          <Box sx={{ m: "2em auto" }}>
            <Button variant="contained" onClick={submitButton}>
              Search
            </Button>
          </Box>
        )}
        {/* {graphData ? (
          console.log(graphData)
        ) : (
          <Button
            sx={{ m: "2em auto" }}
            variant="contained"
            onClick={RequestAccessToken}
          >
            Search Name
          </Button>
        )} */}
      </Box>
    </Box>
  );
}

export default Homepage;
