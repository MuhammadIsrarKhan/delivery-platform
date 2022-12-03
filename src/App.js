import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Neworder from "./components/Neworder";
import OrderManagement from "./components/orderManagement";
import Sidebar from "./components/Sidebar";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/orderManagement", element: <OrderManagement /> },
        { path: "/neworder", element: <Neworder /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
