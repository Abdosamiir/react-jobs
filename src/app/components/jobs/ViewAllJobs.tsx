import { Link } from "react-router-dom";
import { Button } from "../ui/button";
const ViewAllJobs = () => {
  return (
    <Button>
      <Link to="/jobs">View All Jobs</Link>
    </Button>
  );
};

export default ViewAllJobs;
