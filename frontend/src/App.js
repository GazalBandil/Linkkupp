import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext.js";
import Register from "./components/accounts/Register.js";
import Login from "./components/accounts/Login.js";
import Profile from "./components/accounts/Profile.js";
import WithPrivateRoute from "./utils/WithPrivateRoute.js";
import ChatLayout from "./components/layouts/ChatLayout.js";
import Header from "./components/layouts/Header.js";
import ErrorMessage from "./components/layouts/ErrorMessage.js";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <ErrorMessage />
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/profile"
            element={
              <WithPrivateRoute>
                <Profile />
              </WithPrivateRoute>
            }
          />
          <Route
            exact
            path="/"
            element={
              <WithPrivateRoute>
                <ChatLayout />
              </WithPrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
