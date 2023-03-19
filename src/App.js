import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./components/layout/Rootlayout";
import Login from "./components/user/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Rootlayout />}>
    <Route index element={<Home/>}/>
    <Route path="/product" element={<Shop/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
  </Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
