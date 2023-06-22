import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./page_sections/header";
import Footer from "./page_sections/footer";
import Router from "./Router";
import "./styles/app.css";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <main>
              <Router/>
          </main>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
