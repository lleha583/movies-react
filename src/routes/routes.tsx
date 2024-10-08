import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import Movies from "../page/Movies/Movies";
import Contact from "../page/Contact/Contact";
import NotFound from "../page/NotFound";
import MoviePage from "../page/MoviePage/MoviePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <MoviePage />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  }
]);
