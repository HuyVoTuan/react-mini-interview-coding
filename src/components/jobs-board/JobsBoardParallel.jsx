import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";


const API_URL = 'https://hacker-news.firebaseio.com/v0';
const LIMIT = 6;

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

export default function JobsBoardParallel() {
  const [jobStories, setJobStories] = React.useState([]);  // [60items]
  const [jobs, setJobs] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    async function fetchJobIds() {
      let _jobStories = jobStories;
      if(_jobStories.length === 0) {
        const res = await fetch(`${API_URL}/jobstories.json`);
        _jobStories = await res.json(); // [60items]
        setJobStories(_jobStories);
      }
      const start = page * LIMIT; // start = 1 * 6 = 6
      const end = start + LIMIT; // end = 6 + 6 = 12
      const jobIds = _jobStories.slice(start, end);  // [60items].slice(6, 12)
      return jobIds;
    }

    async function fetchJobs() {
      const jobIds = await fetchJobIds();
      setIsLoading(true);

      const jobs = await Promise.all(
        jobIds.map(jobId => {
          return fetch(`${API_URL}/item/${jobId}.json`).then(res => res.json())
        })
      )
      setIsLoading(false);
      setJobs(prevState => [...prevState, ...jobs])
    }

    fetchJobs();

  }, [page]);

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

        <div style={{ margin: "2rem 0" }}>
          <button
            style={{
              backgroundColor: "orange",
              color: "white",
              border: "none",
              borderRadius: "1rem",
              padding: "1rem",
              fontSize: "1.5rem",
              cursor: 'pointer'
            }}
            disabled={isLoading}
            onClick={() => setPage(prevState => prevState + 1)}
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </>
  );
}

Job.propTypes = {
  time: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
};
