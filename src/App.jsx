import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./layout/Root";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root />}></Route>)
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
