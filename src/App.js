import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import Footer from "./Components/Footer";
import "./utils.css";
// import { Provider } from "react-redux";

import * as React from "react";
// import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Head />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },

  {
    path: "/about",
    element: <h1>asdsa</h1>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
      {/* <Body />  */}
      <Footer />
    </>
  );
}

export default App;
