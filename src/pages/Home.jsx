import { useEffect } from "react";
import Typed from "typed.js";
import bgImg from "../assets/background.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
//import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import "./Home.css";

function Home() {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: ["Web Developer.", "Programmer.", "Web Designer."],
      typeSpeed: 50,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="firstSection d-flex justify-content-between align-items-center p-4">
      <div>
        <h1>
          Hello, My name is <span className="text-primary">Siddharth</span>
        </h1>
        <p>
          <div>and I'm a passionate</div> <span id="element"></span>
        </p>

        <div className="d-flex gap-3 mt-4">
            <img src={htmlLogo} alt="HTML" className="logo-animate" width="50" />
            <img src={cssLogo} alt="CSS" className="logo-animate" width="50" />
            {/* <img src={jsLogo} alt="JavaScript" className="logo-animate" width="50" /> */}
            <img src={reactLogo} alt="React" className="logo-animate" width="50" />
</div>

      </div>

      <div>
        <img src={bgImg} alt="Background" style={{ width: "100%" }} />
      </div>
    </section>
  );
}

export default Home;
