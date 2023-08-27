import React from "react";
import "./About.module.css";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <Row>
          <Col md={6}>
            <h1>About Me</h1>
            <br />
            <h3>
              {"Hello Im yousef mohamed Im front end developer &Intern @ Information Technology Institute"}

            </h3>
            <br />
            <br />
            <p style={{ textAlign: "left" }}>
              {
                "I'm a Front End Developer and I have been working with the latest technologies in web development for over two years now."
              }
            </p>
            <br />
            <div className="Buttons" style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <a
                href="https://www.linkedin.com/in/yousef-mohamed-000677256/"
                placeholder="LinkedIn Account"
                target="_blank"
              >
                <button className="btn btn-primary" style={{ marginRight: "12px" }}>Linkedin</button>
              </a>
              <a
                href="https://www.facebook.com/"
                placeholder="Facebbok Account"
                target="_blank"
              >
                <button className="btn btn-primary" style={{ marginRight: "12px" }}>Facebook</button>
              </a>
              <a
                href="https://github.com/josala7/"
                placeholder="Github Account"
                target="_blank"
              >
                <button className="btn btn-primary" style={{ marginRight: "12px" }}>Github</button>
              </a>
            </div>
          </Col>
          <Col md={6}>
            <img src="https://media.licdn.com/dms/image/D4D03AQH5WtO4UZpe4Q/profile-displayphoto-shrink_400_400/0/1685384544891?e=1698883200&v=beta&t=hE4yHpKh9usyPfomSYwAGjp5l0bnjkSY_vvSucMAJeY" alt="About Us" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;