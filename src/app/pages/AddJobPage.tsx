import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { formSchema } from "@/app/Schema/schema";
import { useNavigate } from "react-router-dom";
import { addJob } from "../lib/utils";
import JobForm from "../components/forms/JobForm";

export function AddJobPage() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      type: "",
      description: "",
      location: "",
      salary: "",
      company: {
        name: "",
        description: "",
        contactEmail: "",
        contactPhone: "",
      },
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    // Log the form data to console
    addJob(data);
    navigate("/jobs");
    toast.success("Job Added Successfully!", {
      description: "Your job listing has been added to the platform",
      position: "top-center",
    });
  }
  return <JobForm onSubmit={onSubmit} form={form} textBtn="Add" />;
}

export default AddJobPage;
