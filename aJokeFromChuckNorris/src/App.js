import React, {Component} from "react";
import {JokeList, RenameForm, FetchByIdForm, ErrorBox} from "./components/";
import AppTitle from "./components/title";
import JokeButtonGroup from "./components/jokeButtonGroup";
import {Grid, Row, Col, Panel} from 'react-bootstrap';


const GetJokePanel = () => {
  return (
    <Panel>
      <Panel.Heading>
        Get Some Joke Here
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
      <Grid style={{
        marginTop: "15px"
      }}>
        <Row>
          <Col xs={12} sm={5} md={4}>
            <Panel>
              <Panel.Heading>
                <AppTitle/>
              </Panel.Heading>
              <Panel.Body>
                <GetJokePanel/>
                <RenameForm/>
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={12} sm={7} md={8}>
            <Panel>
              <Panel.Heading>
                <h4>
                  Jokes List
                </h4>
              </Panel.Heading>
              <JokeList/>
            </Panel>
          </Col>
        </Row>

      </Grid>

    );
  }
}

export default App;
