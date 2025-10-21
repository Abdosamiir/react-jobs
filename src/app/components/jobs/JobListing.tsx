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

type job = {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
};

const JobListing = ({ job }: { job: job }) => {
  const [showMore, setShowMore] = useState(false);

  let description = job.description;
  if (!showMore) {
    description = description.substring(0, 100) + "...";
  }
  return (
    <Card key={job.id} className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>{job.type}</CardDescription>
        <CardAction className="flex gap-1 text-red-500">
          <MapPin className="text-red-500" />
          {job.location}
        </CardAction>
      </CardHeader>
      <CardContent>
        {description}
        <Button
          onClick={() => setShowMore(!showMore)}
          variant="link"
          className="text-indigo-500 hover:text-indigo-600 hover:no-underline"
        >
          {showMore ? "Show less" : "Show more"}
        </Button>
      </CardContent>
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
