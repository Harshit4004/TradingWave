function Team() {
  return (
    <div className="container">
      <div className="row mb-5 mx-5">
        <h1 className="fs-4 text-center">People</h1>
      </div>
      <div className="row text-muted mx-4">
        <div className="col-lg-6 col-md-12 px-4 text-center">
          <img
            src="media\images\harshitRajput.jpg"
            alt="Founder Image"
            style={{ borderRadius: "100%", width: "70%", height: "72%" }}
          />
          <h4 className="fs-5 mt-4">Harshit Rajput</h4>
          <h5 className="fs-6 mt-3 fw-normal">Website Creator</h5>
        </div>
        <div className="col-lg-6 col-md-12 px-4">
          <p>
            Harshit is a passionate Full Stack Web Developer with a strong
            foundation in modern web technologies. He enjoys building
            responsive, user-friendly, and scalable web applications using the
            MERN stack. Through hands-on projects, he continuously improves his
            problem-solving skills and explores new technologies to create
            impactful digital experiences.
          </p>

          <p>
            Currently, I am focused on mastering React, Node.js, MongoDB, and
            system design while preparing for software development roles.
          </p>

          <p>
            Connect on{" "}
            <a
              href="https://github.com/Harshit4004"
              className="text-decoration-none"
              target="_blank"
            >
              {" "}
              GitHub{" "}
            </a>
            /{" "}
            <a
              href="https://www.linkedin.com/in/harshit-rajput-8463b3335"
              target="_blank"
              className="text-decoration-none"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
