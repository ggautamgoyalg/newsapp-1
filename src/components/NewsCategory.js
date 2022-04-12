import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import News from "./News";
import LoadingBar from "react-top-loading-bar";

export default class NewsCategory extends Component {
  ResultsOnEachPage = 5;

  state = {
    progress: 10,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <div>
          <LoadingBar color="#f11946" progress={this.state.progress} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <News
                key="general"
                ResultsOnEachPage={this.ResultsOnEachPage}
                setProgress={this.setProgress}
                cataegory="general"
                country="in"
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                ResultsOnEachPage={this.ResultsOnEachPage}
                setProgress={this.setProgress}
                cataegory="business"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                ResultsOnEachPage={this.ResultsOnEachPage}
                setProgress={this.setProgress}
                cataegory="entertainment"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                ResultsOnEachPage={this.ResultsOnEachPage}
                setProgress={this.setProgress}
                cataegory="health"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                ResultsOnEachPage={this.ResultsOnEachPage}
                setProgress={this.setProgress}
                cataegory="sports"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                ResultsOnEachPage={this.ResultsOnEachPage}
                setProgress={this.setProgress}
                cataegory="technology"
                country="in"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                ResultsOnEachPage={this.ResultsOnEachPage}
                setProgress={this.setProgress}
                cataegory="science"
                country="in"
              />
            }
          />
        </Routes>
      </>
    );
  }
}
