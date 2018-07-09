import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ImagesListContainer from '../containers/ImagesListContainer';

const Home = (props) =>
  <Grid>
    <Row className="show-grid">
      <Col xs={18} md={12}>
        <h1>Welcome to Imgur Dog Browser!</h1>
      </Col>
      <ImagesListContainer />
    </Row>

  </Grid>;

export default Home
