import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import ReactLoader from "./components/loader";
import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";
import ProtectedRoute from "./helpers/protected-route";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));
const Instatrend = lazy(() => import("./pages/instatrend"));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<ReactLoader />}>
          <Routes>
            {/* <Route path="/login" component={<Login />} />  */}
            {/* this is not used after react router dom v6 */}

            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.INSTA_TREND} element={<Instatrend />} />

            {/* <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute> */}
            <Route
              path={ROUTES.DASHBOARD}
              element={<Dashboard user={user} />}
            />
            <Route element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
