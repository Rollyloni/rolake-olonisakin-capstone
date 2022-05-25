import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OrdersPage from "./Pages/OrdersPage";
import CustomersPage from "./Pages/CustomersPage";
import Header from "./Components/Header/Header";
import DetailsPage from "./Pages/DetailsPage";
import AddOrderForm from "./Pages/AddOrderForm";
import AddCustomerForm from "./Pages/AddCustomerForm";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/orders" exact component={OrdersPage} />
          <Route path="/customers" exact component={CustomersPage} />
          <Route path="/orders/add-order" exact component={AddOrderForm} />
          <Route
            path="/customers/add-customer"
            exact
            component={AddCustomerForm}
          />
          <Route path="/customers/:id" exact component={DetailsPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
