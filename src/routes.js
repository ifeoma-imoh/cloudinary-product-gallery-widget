import Gallery from "./components/Gallery";
import MediaUpload from "./components/MediaUpload";

const routes = [
  {
    path: "/",
    element: <MediaUpload />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
];

export default routes;