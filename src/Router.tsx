import { BrowserRouter, Switch, Route } from "react-router-dom";
import Characters from "./routes/Characters";
import Home from "./routes/Home";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/character/:id">
                    <Characters />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Router;