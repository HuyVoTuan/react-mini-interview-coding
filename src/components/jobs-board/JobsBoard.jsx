import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const API_URL = "https://hacker-news.firebaseio.com/v0";

function Job({ title, author, time }) {
  const date = new Date(time * 1000);
  const formattedDate = date.toLocaleString("en-US");

  return (
    <div
      style={{
        padding: "2rem",
        marginBottom: "3rem",
        borderRadius: "1rem",
        border: "1px solid black",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>{title}</h2>
      <p>
        By {author} - {formattedDate}
      </p>
    </div>
  );
}

export default function JobsBoard() {
  const [jobs, setJobs] = useState([]);
  const [pageLimit, setPageLimit] = useState(6);
  const [jobStories, setJobStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchJobStories() {
      try {
        const response = await fetch(`${API_URL}/jobstories.json`);
        const data = await response.json();
        setJobStories(data);
      } catch (error) {
        console.error("Error fetching job stories:", error);
      }
    }
    fetchJobStories();
  }, []);

  useEffect(() => {
    if (jobStories.length === 0) return;

    async function fetchJobs() {
      try {
        // Set initial loading UI
        setIsLoading(true);

        // const clonedJobs = [...jobs];

        // for (const jobID of jobsToFetch) {
        //   // const response = await fetch(JOB_API_URL.replace("{jobID}", jobID));
        //   const response = await fetch(`${API_URL}/item/${jobID}.json`);
        //   const data = await response.json();
        //   clonedJobs.push(data);
        // }

        const jobsToFetch = jobStories.slice(pageLimit - 6, pageLimit);
        const clonedJobs = await Promise.all(
          jobsToFetch.map((jobID) =>
            fetch(`${API_URL}/item/${jobID}.json`).then((res) => res.json())
          )
        );

        // Update jobs state with fetched job data
        setJobs((prevJobs) => [...prevJobs, ...clonedJobs]);
        // Remove loading UI
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    }
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobStories, pageLimit]);

  const onLoadJobs = () => {
    setPageLimit((prevPageLimit) => {
      if (prevPageLimit === jobStories.length) {
        return prevPageLimit;
      }

      return prevPageLimit + 6;
    });
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {jobs.map((j) => {
          return <Job key={j.id} title={j.title} author={j.by} time={j.time} />;
        })}

        {pageLimit < jobStories.length && (
          <div style={{ margin: "2rem 0" }}>
            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "1rem",
                padding: "1rem",
                fontSize: "1.5rem",
              }}
              disabled={isLoading}
              onClick={onLoadJobs}
            >
              {isLoading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

Job.propTypes = {
  time: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
};
