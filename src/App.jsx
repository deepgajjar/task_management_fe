import "./App.css";
import { RouterProvider } from "react-router-dom";

import { routes } from "./routes/routes";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
}

export default App;
