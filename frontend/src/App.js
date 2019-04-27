import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import QrGenerator from "./pages/QrGenerator";

function App() {
  return (
    <main>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/qr-generator/">Qr Generator</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact component={() => <div>test</div>} />
            <Route path="/qr-generator/" component={QrGenerator} />
          </Switch>
        </div>
      </Router>
    </main>
  );
}

export default App;
