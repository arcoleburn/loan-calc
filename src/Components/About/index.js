import { Link } from 'react-router-dom';
import { AboutWrapper } from './about.styles';

export const About = () => {
  return (
    <AboutWrapper>
      <div className="mission">
        <h2>Our Mission:</h2>
        <h3>Financial Information.</h3>
        <p>
          We create simple, unbiased tools to help anybody evaluate
          their short-term loan options. Our Loan Calculator shows the
          real cost of a loan, including details like expected monthly
          payments, while our Reverse Calculator will display the
          largest amount a borrower could expect given the monthly
          payment they can afford.
        </p>
        <Link to="/calculator" className="btn">
          Show Me
        </Link>
      </div>
      <div className="spacer"></div>
      <div className="howitworks">
        <h2>How it Works: </h2>
        <p>
          Our calculators are simple and intuitive. Simply fill in
          each field, hit go, and the results panel will display the
          information you are looking for. If you need help
          understanding any of the terminology, just hover over the ?
          icon for an explanation. Each of our calculators works on
          the simple interest formula.
        </p>
      </div>
      <div className="spacer"></div>
      <div className="about">
        <h3>Like what you see?</h3>
        <p>
          Hi! I'm <span className="emphasis">Andrew Coleburn</span>,
          React/Node.js Engineer. I built this Loan Calculator to
          showcase my ability to build simple, clean user interfaces
          with React.
        </p>
        <p>I'm confident that I'd be a major asset to your team!</p>
        <p>
          If you'd like to see more of my work, you can go to my
          <a
            href="https://github.com/arcoleburn/"
            rel="noreferrer"
            target="_blank"
            className="emphasis"
          >
           {' '} Github
          </a>
          , or checkout my{' '}
          <a
            href="https://arcoleburn.com"
            target="_blank"
            rel="noreferrer"
            className="emphasis"
          >
            portfolio.
          </a>{' '}
          If you'd like to get in touch, shoot me an{' '}
          <a href="mailto: arcoleburn@gmail.com" className="emphasis">
            email.
          </a>
        </p>
      </div>
      <div className="spacer"></div>
    </AboutWrapper>
  );
};
