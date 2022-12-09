import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./components/layout/Rootlayout";

let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Rootlayout />}></Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
