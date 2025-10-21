import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/jobs/JobListings";
import ViewAllJobs from "../components/jobs/ViewAllJobs";
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
