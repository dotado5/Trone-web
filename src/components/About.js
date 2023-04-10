import React, { useState } from "react";
import { Container, Footer, Header } from "../styles/homePageStyle";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AboutWrap } from "../styles/aboutStyle";

function About() {
  const [hamburger, setHamburger] = useState(false);
  const navigate = useNavigate();

  function signup() {
    return navigate("/signup");
  }

  function signin() {
    return navigate("/signin");
  }

  return (
    <Container>
      <motion.div
        className="header"
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 180 }}
      >
        <Header>
          <Link to={"/"}>
            <img src="/images/Trone logo.svg" alt="" />
          </Link>
          <div className="nav">
            <ul>
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/about"}>
                <li>About</li>
              </Link>
              <Link to={"/faq"}>
                <li>FAQs</li>
              </Link>
              <Link to={"/signup"}>
                <li>Save</li>
              </Link>
            </ul>
            <div className="buttons">
              <motion.button
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                className="signin"
              >
                Sign In
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                className="create"
              >
                Create Account
              </motion.button>
            </div>
          </div>
          <div
            className={hamburger ? "open" : "hamburger"}
            onClick={() => setHamburger(!hamburger)}
          >
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>
        </Header>
      </motion.div>
      <div className={hamburger ? "hamburger-menu" : "hamburger-closed"}>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/faq"}>
            <li>Faqs</li>
          </Link>
          <Link to={"/signup"}>
            <li>Save</li>
          </Link>
        </ul>
        <div className="buttons">
          <button className="signin" onClick={signin}>
            Sign In
          </button>
          <button className="create" onClick={signup}>
            Create Account
          </button>
        </div>
      </div>
      <AboutWrap>
        <div className="mission">
          <h1>Our Mission</h1>
          <p>
            To provide the best valued investment opportunities to its customers
            with tangible asset and suitable return on investment
          </p>
        </div>
        <div className="vision">
          <h1>Our Vision</h1>
          <p>
            To be the best and most reliable investment outfit in Africa
            providing innovative and revolutionary product leading to financial
            freedom and stability of our customers
          </p>
        </div>
      </AboutWrap>
      <Footer>
        <div className="semi-circle"></div>
        <div className="one">
          <img src="/images/Trone.svg" alt="" />
          <p>Km 15, Agbor-Asaba road, Agbor, Delta State </p>
        </div>
        <div className="two">
          <h5>Company</h5>
          <Link to={"/about"}>
            <motion.p whileHover={{ scale: 1.1 }}>About Us</motion.p>
          </Link>
          <Link to={"/faq"}>
            <motion.p whileHover={{ scale: 1.1 }}>FAQs</motion.p>
          </Link>
        </div>
        <div className="three">
          <h5>Legal</h5>
          <Link>
            <motion.p whileHover={{ scale: 1.1 }}>Terms</motion.p>
          </Link>
          <Link>
            <motion.p whileHover={{ scale: 1.1 }}>Privacy Policy</motion.p>
          </Link>
        </div>
        <div className="four">
          <h5>Contact Us</h5>
          <p>Troneinvestment@gmail.com</p>
          <img src="/images/instagram.svg" alt="" />
          <img src="/images/whatsapp.svg" alt="" />
        </div>
      </Footer>
    </Container>
  );
}

export default About;
