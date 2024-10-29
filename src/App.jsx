import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomeLayout from "./ui/HomeLayout";
import DashBoard from "./pages/Dashboard";
import CreateCustomer from "./pages/CreateCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<HomeLayout />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/createCustomer" element={<CreateCustomer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
