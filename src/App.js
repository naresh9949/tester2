import React, { Suspense, useState, useEffect, createContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/SharedComponents/Loaders/Loader";
import Layout from "./components/SharedComponents/Layout";
import { Get } from "./components/Utilities/AxiosHandler";
import {getTheme,getBackground} from './components/Utilities/themeHandler';
import {ThemeProvider } from "@mui/material/styles";

export const UserContext = createContext();
// Lazy importing the components
const Home = React.lazy(() => import("./components/Home/Home.js"));

function App() {
  
  const [title, setTitle] = useState("Homee");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const theme = getTheme();
  const background = getBackground();
  

 
  
  
  return (
    <div className="App" style={background}>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={user}>
          
            <Suspense fallback={<Loader />}>
              <HashRouter>
                <Layout/>
                {/* <Screen/> */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  {/* <Route path="/" element={<Home1 />} /> */}

                 

                 
                </Routes>
               
              </HashRouter>
            </Suspense>
          
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;

