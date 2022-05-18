import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OrdersPage from "./Pages/OrdersPage";
import CustomersPage from "./Pages/CustomersPage";
import Header from "./Components/Header/Header";
import DetailsPage from "./Pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/orders" exact component={OrdersPage} />
          <Route path="/customers" exact component={CustomersPage} />
          <Route path="/customers/:id" exact component={DetailsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
