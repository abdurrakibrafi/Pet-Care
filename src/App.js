import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import Account from "../src/pages/Account";
import Login from "../src/pages/Login";
import "./App.css";
import { UserAuthContextProvider } from "./context/userAuthContext";
import Blogs from "./pages/Blog";
import Contacts from "./pages/Contact";
import Faqs from "./pages/Faq";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }
  return (
    !loading && (
      <div className="App">
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blogs />}></Route>
            <Route path="/contact" element={<Contacts />}></Route>
            <Route path="/faq" element={<Faqs />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/account" element={<Account />}></Route>
          </Routes>
        </UserAuthContextProvider>
      </div>
    )
  );
}

export default App;
