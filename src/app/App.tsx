import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import { Toaster } from "sonner";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "jobs",
          element: <JobsPage />,
        },
        {
          path: "jobs/:id",
          element: <JobPage />,
          loader: jobLoader,
        },
        {
          path: "add-job",
          element: <AddJobPage />,
        },
        {
          path: "edit-job/:id",
          element: <EditJobPage />,
          loader: jobLoader,
        },

        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster richColors />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
