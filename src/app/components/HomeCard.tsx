import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const HomeCard = ({
  bgColor,
  text,
  description,
  textbtn,
  bgBtn = "bg-black text-white",
  link,
}: {
  bgColor: string;
  text: string;
  description: string;
  textbtn: string;
  bgBtn?: string;
  link: string;
}) => {
  const navigate = useNavigate();
  return (
    <Card className={`md:w-1/3 mt-5 ${bgColor}`}>
      <CardHeader>
        <CardTitle>For {text}</CardTitle>
        <CardDescription>Find your dream job</CardDescription>
        <CardAction>Apply Now</CardAction>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          className={`${bgBtn}`}
          onClick={() => {
            navigate(`/${link}`);
          }}
        >
          {textbtn}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HomeCard;
