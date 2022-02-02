import AppRouter from "./Router";
import React, { useEffect, useState } from "react";
import {authService} from "../fbase"

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(()=>{
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initailizing..."}
      <footer>&copy; {new Date().getFullYear()}Mwitter</footer>
    </>
  );
}

export default App;
