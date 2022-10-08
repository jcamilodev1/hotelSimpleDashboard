import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Booking from "../views/booking/Index";
import Dashboard from "../views/dashboard/Index";
const RouteView = () => {
  return (
    <Router>
    <div className="container pt-3">
      <Switch>
          <Route path="/admin" exact>
            <Dashboard></Dashboard>
          </Route>
          <Route path="/" exact>
            <Booking></Booking>
          </Route>
        </Switch>
    </div>
    </Router>
  )
}

export default RouteView