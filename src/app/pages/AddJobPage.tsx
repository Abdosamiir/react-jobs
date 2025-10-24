"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { formSchema } from "@/app/Schema/schema";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/app/components/ui/field";
import { Input } from "@/app/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/app/components/ui/input-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useNavigate } from "react-router-dom";
import { addJob } from "../lib/utils";

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
  return (
    <div className="flex justify-center items-center py-20">
      <Card className="w-full sm:max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Add Job</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="add-job" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="type"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="job-type">Job type</FieldLabel>
                    <Select
                      defaultValue="Full-Time"
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger id="job-type">
                        <SelectValue placeholder="Full-Time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Full-Time">Full-Time</SelectItem>
                        <SelectItem value="Part-Time">Part-Time</SelectItem>
                        <SelectItem value="Remote">Remote</SelectItem>
                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="job-name">Job Listing Name</FieldLabel>
                    <Input
                      {...field}
                      id="job-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter job name"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-description">
                      Description
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        id="form-rhf-demo-description"
                        placeholder="Enter job description"
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={fieldState.invalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.value.length}/100 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="salary"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="job-salary">Salary</FieldLabel>
                    <Select
                      defaultValue="Under $50k"
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger id="job-salary">
                        <SelectValue placeholder="Under $50k" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Under $50k">Under $50k</SelectItem>
                        <SelectItem value="50k - $100k">50k - $100k</SelectItem>
                        <SelectItem value="100k - $150k">
                          100k - $150k
                        </SelectItem>
                        <SelectItem value="Above $150k">Above $150k</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="location"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="job-location">location</FieldLabel>
                    <Input
                      {...field}
                      id="job-location"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter job location"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="company.name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="company-name">Company Name</FieldLabel>
                    <Input
                      {...field}
                      id="company-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter company name"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="company.description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="company-description">
                      Company Description
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        id="company-description"
                        placeholder="Enter Company description"
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={fieldState.invalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.value ? String(field.value).length : 0}/100
                          characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="company.contactEmail"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-email">
                      Contact Email
                    </FieldLabel>
                    <Input
                      {...field}
                      type="email"
                      id="contact-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter contact email"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="company.contactPhone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-phone">
                      Contact phone
                    </FieldLabel>
                    <Input
                      {...field}
                      type="phone"
                      id="contact-phone"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter contact phone"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button
              type="submit"
              form="add-job"
              className="bg-indigo-500 hover:bg-indigo-600"
            >
              Add Job
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AddJobPage;
