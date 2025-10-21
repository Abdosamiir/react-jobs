import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobListings from "./components/jobs/JobListings";
import ViewAllJobs from "./components/jobs/ViewAllJobs";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HomeCard />
      <JobListings />
      <ViewAllJobs />
    </div>
  );
};

export default App;
