import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import DetailsPage from "./pages/details/DetailsPage";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";
import detailsLoader from "./pages/details/detailsLoader";
import homeLoader from "./pages/home/homeLoader";
import { HomePage } from "./pages/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
        loader: detailsLoader,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
