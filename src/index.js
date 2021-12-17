import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import GameProvider from "./context/GameContext";
import AuthProvider from "./context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import PlatformProvider from "./context/PlatformContext";
import CommentProvider from "./context/CommentContext";
import ReviewProvider from "./context/ReviewContext";

ReactDOM.render(
  <React.StrictMode>
    <ReviewProvider>
      <CommentProvider>
        <GameProvider>
          <PlatformProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </PlatformProvider>
        </GameProvider>
      </CommentProvider>
    </ReviewProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
