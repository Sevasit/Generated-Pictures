import React, { Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionAi from "./components/SectionAi";

const App = () => {
  return (
    <Suspense>
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <SectionAi />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
