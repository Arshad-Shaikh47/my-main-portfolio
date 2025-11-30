import React, { useState, useEffect } from "react";
import myprofile from "./img/arshh.jpg";
import heroimg from "./img/b-hero.jpg";
import profileImage from "./img/arshh-2.jpg";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { BsFileEarmarkText } from "react-icons/bs";
import { MdEmojiObjects } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { Link } from "react-scroll";

const skills = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 85 },
  { name: "JavaScript", value: 75 },
  { name: "Bootstrap", value: 80 }, 
  { name: "react.js", value: 90 }, 
  { name: "express.js", value: 75 }, 
  { name: "node.js", value: 70 }, 
  { name: "mongoDB", value: 70 }, 
];

const NavIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="nav-icon1" className={isOpen ? "open" : ""} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export const Arsh = ({ typedText }) => {
  const [isHeaderVisible, setHeaderVisible] = useState(false);

  const handleToggle = () => {
    setHeaderVisible((prev) => !prev);
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navmenu a");

    const handleLinkClick = () => {
      if (isHeaderVisible) {
        setHeaderVisible(false);
      }
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, [isHeaderVisible]);

  return (
    <>
      <div className="hamburger-wrapper">
        <button className="header-toggle" onClick={handleToggle}>
          <NavIcon />
        </button>
      </div>
      <div className={`header ${isHeaderVisible ? "header-show" : ""}`}>
        <div className="profile-div">
          <div>
            <img className="myprofile" src={myprofile} alt="profile" />
          </div>
          <div>
            <h1 className="nav-h1">Arshad Shaikh</h1>
          </div>
          <div className="social-links">
            <a
              className="social-a"
              href="https://www.instagram.com/__arshad__s1417?igsh=YWJzMDhpcTNtaHpv&utm_source=qr"
            >
              <FaInstagram />
            </a>
            <a className="social-a" href="#">
              <FaFacebook />
            </a>
            <a
              className="social-a"
              href="https://www.linkedin.com/in/arshad-shaikh-9551a22ba"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <nav className="navmenu">
          <ul>
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="navi"
              >
                <HiOutlineHome className="navicon" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="navi"
              >
                <IoPersonOutline className="navicon" /> About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="navi"
              >
                <MdEmojiObjects className="navicon" /> Skills
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="navi"
              >
                <BsFileEarmarkText className="navicon" /> Resume
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="navi"
              >
                <CiMail className="navicon" /> Contact
              </Link>
            </li>
          </ul>
        </nav>

       
      </div>
      <div className="main">
        {/* hero section starting */}

        <section id="hero" className="hero">
          <img src={heroimg} alt="" />
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="text-content">
              <h2>
                Arshad <span>Shaikh</span>
              </h2>
              <p className="typewrite">
                <span className="wrap">I’m{typedText}</span>
              </p>
            </div>
          </div>
        </section>

        {/* hero section end here */}

        <section id="about" className="about section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
           
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className=" about-img-div gy-4 ">
              <div className="col-lg-4">
                <img
                  src={profileImage}
                  className="img-fluid about-img"
                  alt="Profile"
                />
              </div>
              <div className="col-lg-8 content">
                <h2>Full-stack Developer.</h2>
                <p className="fst-italic py-3">
                  Hi, I’m Arshad Shaikh a Full-Stack Developer based in Nashik.
                  <br /> I build responsive, user-friendly websites using HTML,
                  CSS, JavaScript, React.js, and Bootstrap. I enjoy turning
                  ideas into real, functional products with clean design and
                  solid performance. Currently, I’m expanding my skills by
                  diving into back-end development.
                </p>

                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>14 November 2003</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Website:</strong> <span>www.example.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+91 9403039684</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>Nashik, Maharashtra</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>22</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>B-tech</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span>shaikhaarshad47@gmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="py-3">
                  I'm always up for a challenge whether it's building a complex
                  UI or picking up a new JavaScript framework. My goal is to
                  keep growing as a full-stack developer and work on projects
                  that actually make a difference for users.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className=" skills-section">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              I enjoy building user-friendly websites and constantly aim to
              improve by learning new tools and frameworks.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span className="skill-percent">{skill.value}%</span>
                </div>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="resume section">
          {/* Section Title */}
          <div className="container section-title " data-aos="fade-up">
            <h2>Resume</h2>
            <p>
              Full-stack Developer based in Nashik with a strong focus on
              building clean, responsive, and user-friendly websites. Skilled in
              HTML, CSS, JavaScript, React.js, and Bootstrap. Passionate about
              turning ideas into functional digital experiences. Currently
              expanding knowledge in back-end development to become a full-stack
              developer.
            </p>
          </div>

          <div className="container resume-main">
            <div className="row">
              {/* Left Column */}
              <div
                className="col-lg-6 left-column"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>ARSHAD SHAIKH</h4>
                  <p>
                    <em>
                      I’m a full-stack developer who cares about the details and
                      loves building responsive, user-friendly web apps. I’ve
                      worked with tools like HTML, CSS, JavaScript, React.js,
                      and Bootstrap, and I’m currently getting into back-end
                      development with Node.js and Express.
                    </em>
                  </p>
                  <br />
                  <ul>
                    <li>Nashik, Maharashtra</li>
                    <li>+91 94030309684</li>
                    <li>shaikhaarshad47@gmail.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Skills</h3>
                <div className="resume-item">
                  <h4>Skills</h4>

                  <ul>
                    <li>Languages: HTML, CSS, JavaScript</li>
                    <li>Frontend: React.js, Bootstrap, Tailwind CSS</li>
                    <li>Backend (Learning): Node.js, Express.js, MongoDB</li>
                    <li>Tools: Git, GitHub, VS Code.</li>
                  </ul>
                </div>

                <div>
                  {/* <div>
                  <h3 className="resume-title">Education</h3>

                <div className="resume-item">
                  <h4>B.Tech in Computer Science (CSE)</h4>
                  <h5>2023 - 2026</h5>
                  <p>
                    <em>Sandip University, Nashik</em>
                  </p>
                  <p>
                    Learned core computer science fundamentals including DBMS,
                    Web Development, and Programming.
                  </p>
                </div>

                <div className="resume-item">
                  <h4>Diploma in Information Technology (IT) </h4>
                  <h5>2018 - 2021</h5>
                  <p>
                    <em>Sandip Foundation, Nashik</em>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Natus recusandae, veniam id, explicabo totam temporibus
                    earum, incidunt maxime ducimus labore sint reprehenderit
                    culpa eum atque facere molestias tempore eligendi deleniti.
                  </p>
                </div>
              </div> */}
                </div>

                
              </div>

              {/* Right Column */}
              <div
                className="right-column"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="resume-title">Education</h3>
               
                <div className="resume-item">
                  <h4>B.Tech in Computer Science (CSE)</h4>
                  <h5>2023 - 2026</h5>
                  <p>
                    <em>Sandip University, Nashik</em>
                  </p>
                  <p>
                    Learned core computer science fundamentals including DBMS,
                    Web Development, and Programming.
                  </p>
                </div>

                <div className="resume-item">
                  <h4>Diploma in Information Technology (IT) </h4>
                  <h5>2018 - 2021</h5>
                  <p>
                    <em>Sandip Foundation, Nashik</em>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Natus recusandae, veniam id, explicabo totam temporibus
                    earum, incidunt maxime ducimus labore sint reprehenderit
                    culpa eum atque facere molestias tempore eligendi deleniti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="contact-animation">
          <div className="contact-h2" id="contact">
            <div className="container section-title" data-aos="fade-up">
              <h2>Contact</h2>
              <p>
                Let’s connect. Drop me a message using the form or reach out
                directly.
              </p>
            </div>
          </div>
          <section className="contact-section">
            <div className="contact-container">
              <div className="contact-info">
                <div className="info-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <div>
                    <h3> Address</h3>
                    <p>Nirman's Dwarkapuram ,Dwarka, Nashik 422011</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+91 94030309684 </p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>shaikhaarshad47@gmail.com</p>
                  </div>
                </div>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.1994785567645!2d73.79939697488601!3d20.00014088140413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeaf8db509543%3A0xec23f3e8af6a41f3!2sNirman&#39;s%20Dwarkapuram!5e0!3m2!1sen!2sin!4v1753966767413!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="contact-form">
                <form>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input type="text" required />
                    </div>
                    <div className="form-group">
                      <label>Your Email</label>
                      <input type="email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="6" required></textarea>
                  </div>
                  <div className="form-submit">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* footer */}

   <footer id="footer" className="footer position-relative light-background">
      <div className="footer-p">
        <div className="credits">
          <p className="copyright">
            Created by <strong>Arshad Shaikh</strong> by using <strong>React</strong>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};
