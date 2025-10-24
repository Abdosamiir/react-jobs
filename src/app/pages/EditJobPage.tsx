import { useLoaderData } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { formSchema } from "@/app/Schema/schema";
import { useNavigate } from "react-router-dom";
import { updateJob } from "../lib/utils";
import JobForm from "../components/forms/JobForm";

const EditJobPage = () => {
  const job = useLoaderData();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: job.id,
      title: job.title,
      type: job.type,
      description: job.description,
      location: job.location,
      salary: job.salary,
      company: {
        name: job.company.name,
        description: job.company.description,
        contactEmail: job.company.contactEmail,
        contactPhone: job.company.contactPhone,
      },
    },
  });
  function onSubmit(data: z.infer<typeof formSchema>) {
    // Log the form data to console
    updateJob(data);
    navigate(`/jobs/${data.id}`);
    toast.success("Job Edited Successfully!", {
      description: "Your job listing has been edited",
      position: "top-center",
    });
  }
  return <JobForm onSubmit={onSubmit} form={form} textBtn="Edit" />;
};

export default EditJobPage;
