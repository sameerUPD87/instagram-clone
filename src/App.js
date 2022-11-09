import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const NotFound = lazy(() => import("./pages/not-found"));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            {/* <Route path="/login" component={<Login />} />  */}
            {/* this is not used after react router dom v6 */}

            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            {/* <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
            <Dashboard />
          </ProtectedRoute> */}
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
