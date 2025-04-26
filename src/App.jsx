import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import Profile from "./pages/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/formulario"
          element={<FormPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/perfil"
          element={
            <Protected isSignedIn={isLoggedIn}>
              <Profile />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
