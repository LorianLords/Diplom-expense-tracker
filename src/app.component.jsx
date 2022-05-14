import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { Provider } from "./shared/context/context";
import { AppRouter } from "./shared/router";
import { LocalizationProvider } from "@mui/x-date-pickers";

const AppComponent = () => {
  return (
    <Provider>
      <Suspense fallback="loading">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Router>
            <AppRouter />
          </Router>
        </LocalizationProvider>
      </Suspense>
    </Provider>
  );
};

export default AppComponent;
