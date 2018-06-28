import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from '../styles/Home.css'
const Home = (props) =>
  <Grid>
    <Row className="show-grid">
      <Col xs={18} md={12}>
        <h1>Welcome to Imgur Browser!</h1>
      </Col>
    </Row>
  </Grid>;

export default Home
