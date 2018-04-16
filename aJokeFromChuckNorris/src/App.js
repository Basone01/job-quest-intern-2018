import React, {Component} from "react";
import {JokeList, RenameForm, FetchByIdForm, ErrorBox} from "./components/";
import AppTitle from "./components/title";
import JokeButtonGroup from "./components/jokeButtonGroup";
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import styled from 'styled-components'

const Wrapper = styled.div `
  width:100%;
  min-height:100vh;
  padding:0;
  display:flex;
  flex-direction:row;
  @media screen and (max-width: 767px){
    flex-direction:column;
    max-width:360px;
  }

`
const LeftSide = styled.div `
  flex-basis:320px;
  padding: 1em;
  display: flex;
  flex-direction:column;
  @media screen and (max-width: 767px){
    flex-basis:auto;
    padding:0;
  }
  
`

const RightSide = styled.div `
  flex:1;
  padding: 1em;
  padding-left:0;
  @media screen and (max-width: 767px){
    padding:0;
  }
  
`

const GetJokePanel = () => {
  return (
    <Panel>
      <Panel.Heading>
        Get Some Joke Here.
      </Panel.Heading>
      <Panel.Body>
        <FetchByIdForm/>
        <JokeButtonGroup/>
        <ErrorBox/>
      </Panel.Body>
    </Panel>
  )
}

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={8} xsOffset={2} sm={12} smOffset={0}>
            <Wrapper>
              <LeftSide>
                <Panel>
                  <Panel.Heading>
                    <AppTitle/>
                  </Panel.Heading>
                  <Panel.Body>
                    <GetJokePanel/>
                    <RenameForm/>
                  </Panel.Body>
                </Panel>
              </LeftSide>
              <RightSide>
                <Panel>
                  <Panel.Heading>
                    <h4>
                      Jokes List
                    </h4>
                  </Panel.Heading>
                  <JokeList/>
                </Panel>
              </RightSide>
            </Wrapper>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default App;
