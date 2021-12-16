import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import SignUpView from "./views/SignUpView";
import SignInView from "./views/SignInView";
import ExploreView from "./views/ExploreView";
import GameDetailView from "./views/GameDetail";
import AddGameView from "./views/AddGameView";
import { ToastContainer } from "react-toastify";
import AuthRoute from "./components/AuthRoute";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/signUp" element={<SignUpView />} />
        <Route path="/signIn" element={<SignInView />} />
        <Route path="/explore" element={<ExploreView />} />
        <Route path="/game/:id" element={<GameDetailView />} />
        <Route element={<AuthRoute />}>
          <Route path="/addGame" element={<AddGameView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
