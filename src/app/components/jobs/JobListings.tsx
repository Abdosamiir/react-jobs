import jobs from "../../lib/data.json";
import JobListing from "./JobListing";

const JobListings = ({ isHome = false }) => {
  const allJobs = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <>
      <h1 className=" text-xl md:text-3xl font-bold text-center my-5 text-violet-500">
        {isHome ? "Recent Jobs" : "All Jobs"}
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4 justify-items-center ">
        {allJobs.map((job) => (
          <JobListing key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default JobListings;
