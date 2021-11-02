import React, { useState, useEffect } from "react";

import { VitaComponent } from "./components/Pages/Vita/VitaComponent";
import { WorkComponent } from "./components/Pages/Work/WorkComponent";
import { ContactComponent } from "./components/Pages/Contact/ContactComponent";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import { ScreenWidthContext } from "./contexts/screenWidthContext";
import { NavButton } from "./components/Nav/NavButton";
import { Navbar } from "./components/Nav/Navbar";
import { ENavState } from "./types/ENavState";
const httpLink = createHttpLink({
  uri: "https://graphql.contentful.com/content/v1/spaces/uqk48amkbrqw",
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer JT8H7SZJQ_56AaEcsLIXMz4rDUrOpmvVmrWzx10KMl4`,
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [screenWidth, setScreenWidth] = useState<number>(1000);
  const [showNav, setShowNav] = useState<ENavState>(ENavState.INITIAL);
  useEffect(() => {
    setScreenWidth(window.innerWidth);

    function handleResize(e: Event): void {
      const screenW: number = window.innerWidth;
      console.log(screenW);
      setScreenWidth(screenW);
    }
    window.addEventListener("resize", (e) => handleResize(e));

    return () => document.removeEventListener("resize", handleResize);
  }, []);
  console.log(screenWidth);
  return (
    <ScreenWidthContext.Provider value={{ screenWidth: screenWidth }}>
      <ApolloProvider client={client}>
        <Router>
          <div className="h-screen flex flex-col overvlow-hidden" onClick={e => setShowNav(ENavState.HIDDEN)}>
            <header className=" h-10 flex-initial flex-row">
              <div className="flex-1 flex px-5 flex flex-row content-stretch font-mono">
                {screenWidth && screenWidth > 768 ? (
                  <nav className="hidden md:flex-1 md:flex md:flex-column md:justify-end">
                    <ul className="flex-1 list-none flex flex-row justify-evenly content-center py-2 leading-none">
                      
                    <li>
                        <NavLink  activeClassName="underline" to="/contact"><b>Home</b></NavLink>
                      </li>
                      <li>
                        <NavLink activeClassName="underline" to="/work"><b>Work</b></NavLink>
                      </li>
                      <li>
                        <NavLink  activeClassName="underline" to="/vita"><b>Vita</b></NavLink>
                      </li>
                      <li>
                        <NavLink  activeClassName="underline" to="/contact"><b>Contact</b></NavLink>
                      </li>
                    </ul>
                  </nav>
                ) : (
                  <>
                    <NavButton showNav={showNav} setShowNav={setShowNav} />

                    <Navbar showNav={showNav} setShowNav={setShowNav} />
                  </>
                )}
              </div>
            </header>
            <Route exact path="/">
              Home
            </Route>
            <Route path="/vita" component={VitaComponent} />
            <Route path="/work" component={WorkComponent} />
            <Route path="/contact" component={ContactComponent} />
          </div>
        </Router>
      </ApolloProvider>
    </ScreenWidthContext.Provider>
  );
}

export default App;
