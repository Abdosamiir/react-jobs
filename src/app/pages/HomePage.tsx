import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/jobs/JobListings";
import ViewAllJobs from "../components/jobs/ViewAllJobs";
const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="flex md:flex-row flex-col  justify-evenly gap-2 my-10 p-4">
        <HomeCard
          bgColor="bg-blue-200"
          text="developers"
          textbtn="browse job"
          description="browse our react jobs and start your career"
          link="jobs"
        />
        <HomeCard
          bgColor="bg-violet-200"
          text="employers"
          textbtn="add job"
          description="post your job and find the best candidates"
          bgBtn="bg-violet-600 hover:bg-violet-700"
          link="add-job"
        />
      </div>
      <JobListings isHome={true} />
      <div className="text-center my-10">
        <ViewAllJobs />
      </div>
    </>
  );
};

export default HomePage;
