import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tiffany Lin </span>
            from <span className="purple"> Taiwan.</span>
            <br />
            I am currently a Masters student at Duke Uniersity studying Electrical and Computer Engineering.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing & Playing the Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking & Eating
            </li>
            <li className="about-activity">
              <ImPointRight /> Exercising
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace the challenge, refactor with purpose, and debug with resilience."{" "}
          </p>
          <footer className="blockquote-footer">Tiffany</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
