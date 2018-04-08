import React, { Component } from "react";
import { Wrapper } from "./components/styled";
import { JokeList } from "./components/";
import Title from "./components/title";
import ErrorBox from "./components/errorBox";
import FormSection from "./components/formSection";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title />
        <FormSection />
        <JokeList />
      </Wrapper>
    );
  }
}

export default App;
