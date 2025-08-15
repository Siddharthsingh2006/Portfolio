import "./About.css";

function About() {
  return (
    <section className="about-section p-4">
      <h2 className="text-center mb-4">About Me</h2>

      <p className="about-intro text-center">
        Hello! I’m Siddharth, a passionate and self-motivated fresher ready to
        kickstart my career in the tech world. I love turning ideas into reality
        through clean, efficient, and creative code. My journey began with the
        basics of web development, and now I’m exploring deeper into advanced
        concepts like Data Structures, Algorithms, and full-stack development.
      </p>

      <div className="row mt-5">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="about-card">
            <div className="about-card-inner">
              <div className="about-card-front">
                <h5>Web Development</h5>
              </div>
              <div className="about-card-back">
                <p>
                  Skilled in HTML, CSS, JavaScript, and Bootstrap for building
                  responsive and dynamic websites. Currently exploring React.js
                  for modern UI development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="about-card">
            <div className="about-card-inner">
              <div className="about-card-front">
                <h5>Programming</h5>
              </div>
              <div className="about-card-back">
                <p>
                  Strong foundation in C++ and Java. I enjoy solving problems
                  using Data Structures & Algorithms and participating in coding
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="about-card">
            <div className="about-card-inner">
              <div className="about-card-front">
                <h5>Learning & Growth</h5>
              </div>
              <div className="about-card-back">
                <p>
                  Always curious and eager to learn new technologies. Currently
                  exploring Jupyter basics, GitHub collaboration, and
                  full-stack development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <div className="about-card">
            <div className="about-card-inner">
              <div className="about-card-front">
                <h5>UI/UX Design</h5>
              </div>
              <div className="about-card-back">
                <p>
                  Understanding user experience and creating visually appealing
                  interfaces. Knowledge of design principles, wireframing, and
                  responsive layouts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <div className="about-card">
            <div className="about-card-inner">
              <div className="about-card-front">
                <h5>Problem Solving</h5>
              </div>
              <div className="about-card-back">
                <p>
                  Enthusiastic about competitive programming and tackling
                  algorithmic challenges with efficient solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 mb-4">
          <div className="about-card">
            <div className="about-card-inner">
              <div className="about-card-front">
                <h5>Teamwork & Communication</h5>
              </div>
              <div className="about-card-back">
                <p>
                  Comfortable working in a team environment and sharing ideas
                  effectively. Believe in collaboration for better results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;