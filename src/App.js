import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./components/layout/Rootlayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Rootlayout />}>
    <Route index element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
  </Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
