import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "./shared/context/context";
import { AppRouter } from "./router";

const App = () => {
  return (
    <Provider>
      <Suspense fallback="loading">
        <Router>
          <AppRouter />
        </Router>
      </Suspense>
    </Provider>
  );
};

export default App;
