import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Budget from "./Budget";
import Reports from "./Reports";
import Transactions from "./Transactions";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Budget />,
    },
    {
      path: "/reports",
      element: <Reports />,
    },
    {
      path: "/transactions",
      element: <Transactions />,
    },
  ]);
  root.render(<RouterProvider router={appRouter} />);
}
export default App;
