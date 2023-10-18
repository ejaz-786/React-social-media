import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import SignUp from "./pages/Sign-up/SignUp";
import feed from "./data/feeds.json";
import people from "./data/users.json";
import { createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import Nav from "./components/Nav";
import Main from "./pages/main/Main";
import Feed from "./pages/feed/Feed";
import Login from "./pages/Login/Login";

export const user = createContext();

function App() {
  const [details, setDetails] = useState(feed);
  const [users, setUsers] = useState(people);
  const [muted, setMuted] = useState([]);

  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [logger, setLogger] = useState();
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <user.Provider
          value={{
            details,
            setDetails,
            users,
            setUsers,
            setMode,
            mode,
            logger,
            setLogger,
            muted,
            setMuted,
          }}
        >
          <Box id="container">
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Nav /> <Main />
                    </>
                  }
                />
                <Route path="/feed" element={<Feed />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </Router>
          </Box>
        </user.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;

export const Context = () => {
  return useContext(user);
};
