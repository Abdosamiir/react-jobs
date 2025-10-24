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
import { useState } from "react";
import { MapPin } from "lucide-react";
import type { Job } from "./JobListings";
import { useNavigate } from "react-router-dom";

const JobListing = ({ job }: { job: Job }) => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  let description = job.description;
  if (!showMore && description.length > 50) {
    description = description.substring(0, 100) + "...";
  }

  return (
    <Card key={job.id} className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>{job.type}</CardDescription>
        <CardAction className="flex gap-1 text-orange-700">
          <MapPin className="text-orange-700" />
          {job.location}
        </CardAction>
      </CardHeader>
      <CardContent>
        {description}
        {job.description.length > 50 && (
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="link"
            className="text-indigo-500 hover:text-indigo-600 hover:no-underline"
          >
            {showMore ? "Show less" : "Show more"}
          </Button>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => navigate(`/jobs/${job.id}`)}
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
