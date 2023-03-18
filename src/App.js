import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./components/layout/Rootlayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Rootlayout />}>
    <Route index element={<Home/>}/>
    <Route path="/product" element={<Shop/>}/>
    <Route path="/about" element={<About/>}/>
  </Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
