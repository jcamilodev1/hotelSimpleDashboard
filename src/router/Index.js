import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Booking from "../views/booking/Index";

const RouteView = () => {
  return (
    <Router>
    <div className="container pt-3">
      <Switch>
          <Route path="/" exact>
            <Booking></Booking>
          </Route>
        </Switch>
    </div>
    </Router>
  )
}

export default RouteView