import Typewriter from "../helper/TypeWriter";
import "./home.css";

export const Home = () => {
  return (
    <div id="Name" className="image">
      <div className="header">
        <h1>
          <Typewriter text={"Hi there, I'm"} speed={100} initialDelay={100} />
          <span>
            <Typewriter
              text={" Rishab Ranjan"}
              speed={100}
              initialDelay={1500}
            />
          </span>
        </h1>
        <h3>
          <Typewriter
            text={"Senior Software Developer, working in PayPal."}
            speed={50}
            initialDelay={3000}
          />
        </h3>
        <h4>
          <Typewriter
            text={
              "I'm a driven, ambitious and bold learner who adapts and absorbs information quickly. I'm always up for a challenge and view it as an opportunity to express my preverance and ability to work hard."
            }
            speed={50}
            initialDelay={7000}
          />
        </h4>
        <div className="s-m mt-5">
          <a
            href="https://www.linkedin.com/in/rishab-ranjan-140745169/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/rishabranjan"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/therishabranjan/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/RishabRanjan17"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/rishab_ranjan/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
