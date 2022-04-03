import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        {!isLoggedIn && <Route path="auth" element={<AuthPage />} />}
      </Route>
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
