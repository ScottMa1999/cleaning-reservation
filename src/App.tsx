// component
import NavigationBar from "./component/Navigation"
import HomePage from "./pages/HomePage";
import ResidentialPage from "./pages/ResidentialCleaningPage";
import CarCleaningPage from "./pages/CarCleaningPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import OrderPaymentPage from "./pages/OrderPaymentPage";
import ErrorPage from "./pages/ErrorPage";

// Routes
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="Home">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="residential" element={<ResidentialPage />} />
        <Route path="car" element={<CarCleaningPage />} />
        <Route path="order-status" element={<OrderStatusPage />} />
        <Route path="order-payment" element={<OrderPaymentPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </section>
  )
}

export default App