import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const NotFound = lazy(() => import("./pages/not-found"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          {/* <Route path="/login" component={<Login />} />  */}
          {/* this is not used after react router dom v6 */}

          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
