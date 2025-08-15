import React from "react";
import SocialLinks from './components/SocialLinks.css'
function SocialLinks() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Connect with Me</h2>
      <p className="text-center mb-5">
        Feel free to reach out and connect with me on these platforms.
      </p>

      <div className="row justify-content-center">
        {/* GitHub */}
        <div className="col-md-3 col-6 text-center mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="bi bi-github fs-1"></i>
            <p className="mt-2">GitHub</p>
          </a>
        </div>

        {/* LinkedIn */}
        <div className="col-md-3 col-6 text-center mb-4">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="bi bi-linkedin fs-1"></i>
            <p className="mt-2">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
