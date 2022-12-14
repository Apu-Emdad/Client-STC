import "./App.css";
import Blog from "./pages/Blog";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [routes, setRoutes] = useState(["HOME"]);
  const location = useLocation();
  const pathnames = location.pathname.split("/");

  const newNames = pathnames.map((name) =>
    name.replace("-", " ").toLocaleUpperCase()
  );
  const BreadCrumbs = newNames.filter((name) => name !== "");
  useEffect(() => {
    const createRoute = () => {
      setRoutes(BreadCrumbs);
    };
    BreadCrumbs.length !== 0 && createRoute();
  }, []);

  // console.log(routes);
  return (
    <div className="App appcontainer">
      <div className="bodycontainer">
        <Nav routes={routes} />

        <Routes>
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
