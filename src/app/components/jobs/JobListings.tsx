import jobs from "../../lib/data.json";
import JobListing from "./JobListing";

const JobListings = () => {
  const recentJobs = jobs.slice(0, 3);
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
      {recentJobs.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobListings;
