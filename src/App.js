import React from "react";
import Main from "./components/Main";
import { BrowserRouter , Switch, Route} from "react-router-dom";
import DetailMovie from "./components/DetailMovie";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>

          <Route path="/detail">
            <DetailMovie/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
