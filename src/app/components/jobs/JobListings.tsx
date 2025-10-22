// import jobs from "../../lib/data.json";
import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import { Spinner } from "../ui/spinner";

export interface Job {
  id: string;
  title: string;

  description: string;
  location: string;
  type: string;
}

const JobListings = ({ isHome = false }) => {
  const [data, setData] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch jobs from API or perform any side effects
    const fetchJobs = async () => {
      const apiurl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiurl);
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <>
      <h1 className=" text-xl md:text-3xl font-bold text-center my-5 text-violet-500">
        {isHome ? "Recent Jobs" : "All Jobs"}
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4 justify-items-center ">
        {loading ? (
          <Spinner className="mx-auto size-10 text-center text-violet-500" />
        ) : (
          <>
            {data.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default JobListings;
