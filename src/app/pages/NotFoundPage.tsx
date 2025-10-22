import { TriangleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col gap-4 mt-20 text-gray-600">
      <TriangleAlert
        width={500}
        height={200}
        className="text-yellow-300 text-6xl"
      />
      <p className="text-5xl">Page Not Found</p>
      <Button
        className="bg-violet-600 hover:bg-violet-700"
        onClick={() => {
          navigate(`/`);
        }}
      >
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
