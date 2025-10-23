import { useLoaderData, useParams } from "react-router-dom";

const JobPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();
  const job = useLoaderData();

  return <div>{job?.title}</div>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jobLoader = async ({ params }: any) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

// eslint-disable-next-line react-refresh/only-export-components
export { JobPage as default, jobLoader };
