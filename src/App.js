import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
class App extends Component {
  name = "vishal";
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                pageSize={6}
                key="general"
                country="in"
                category="general"
              />
            }
          />

          <Route
            exact
            path="/Sports"
            key="sports"
            element={<News pageSize={6} country="in" category="sports" />}
          />
          <Route
            exact
            path="/Health"
            element={
              <News pageSize={6} country="in" key="health" category="health" />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                pageSize={6}
                key="science"
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News
                pageSize={6}
                key="business"
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                pageSize={6}
                country="in"
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                pageSize={6}
                key="technology"
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
