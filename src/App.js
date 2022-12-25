import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./components/layout/Rootlayout";
import Home from "./pages/Home";
import Products from "./pages/Products";

let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Rootlayout />}>
    <Route index element={<Home/>}/>
    <Route path="/product" element={<Products/>}/>
  </Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
