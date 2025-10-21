import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "../ui/button";

type job = {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
};

const JobListing = ({ job }: { job: job }) => {
  return (
    <Card key={job.id} className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>{job.type}</CardDescription>
        <CardAction>{job.location}</CardAction>
      </CardHeader>
      <CardContent>{job.description}</CardContent>
      <CardFooter>
        <Button
          //   onClick={}
          variant="outline"
          className="w-full bg-violet-700 text-white"
        >
          Read more
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobListing;
