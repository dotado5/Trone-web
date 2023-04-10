import React, { useState } from "react";
import { Header, Footer } from "../styles/homePageStyle";
import { FAQcont, Wrap } from "../styles/faqStyle";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function Faq() {
  const [hamburger, setHamburger] = useState(false);
  const [expand, setExpand] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });
  const navigate = useNavigate();

  function signup() {
    return navigate("/signup");
  }

  function signin() {
    return navigate("/signin");
  }

  return (
    <FAQcont>
      <AnimatePresence>
        <motion.div
          className="header"
          initial={{ y: -90 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 180 }}
        >
          <Header>
            <img src="/images/Trone logo.svg" alt="" />
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
                  onClick={signin}
                >
                  Sign In
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                  className="create"
                  onClick={signup}
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
      </AnimatePresence>
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
          <button className="signin">Sign In</button>
          <button className="create">Create Account</button>
        </div>
      </div>
      <Wrap>
        <div className="watermark">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="questions">
          <div className="top-question">
            <h4>What is Trone ?</h4>
            <p>
              Trone Capital and Investment is a platform which is designed to
              provide investment opportunities to its clients through purchase
              of shares in tangible assets in Logistics, Agriculture,Real Estate
              and Finance.
            </p>
          </div>
          <div className="question">
            <div>
              <p>What is the interest rate?</p>
              {expand.first && (
                <span>
                  <ul>
                    <li>Basic plan 15% per annum</li>
                    <li>Advance plan 20% per annum</li>
                    <li>Premium plan 25% per annum</li>
                  </ul>
                </span>
              )}
            </div>
            <img
              src="/images/down.png"
              alt=""
              className={expand.first ? "expand" : ""}
              onClick={() => setExpand({ ...expand, first: !expand.first })}
            />
          </div>
          <div className="question">
            <div>
              <p>What are the available plan?</p>
              {expand.second && (
                <span>
                  The plans available to you are <b>BASIC</b>, <b>ADVANCE</b>
                  and <b>PREMIUM</b> on assets like <b>LOGISTICS</b>,
                  <b>AGRICULTURE</b>,<b>REAL ESTATE</b> and <b>FINANCE</b>
                </span>
              )}
            </div>
            <img
              src="/images/down.png"
              alt=""
              className={expand.second ? "expand" : ""}
              onClick={() => setExpand({ ...expand, second: !expand.second })}
            />
          </div>
          <div className="question">
            <div>
              <p>How to create an account?</p>
              {expand.third && <span></span>}
            </div>
            <img
              src="/images/down.png"
              alt=""
              className={expand.third ? "expand" : ""}
              onClick={() => setExpand({ ...expand, third: !expand.third })}
            />
          </div>
          <div className="question">
            <div>
              <p>When is the maturity of the plan?</p>
              {expand.fourth && <span></span>}
            </div>
            <img
              src="/images/down.png"
              alt=""
              className={expand.fourth ? "expand" : ""}
              onClick={() => setExpand({ ...expand, fourth: !expand.fourth })}
            />
          </div>
          <div className="question" style={{ marginBottom: "1em" }}>
            <div>
              <p>Is my investment secured?</p>
              {expand.fifth && <span></span>}
            </div>
            <img
              src="/images/down.png"
              alt=""
              className={expand.fifth ? "expand" : ""}
              onClick={() => setExpand({ ...expand, fifth: !expand.fifth })}
            />
          </div>
        </div>
      </Wrap>
      <Footer>
        <div className="semi-circle"></div>
        <div className="one">
          <img src="/images/Trone.svg" alt="" />
          <p>Km 15, Agbor-Asaba road, Agbor, Delta State </p>
        </div>
        <div className="two">
          <h5>Company</h5>
          <Link>
            <motion.p whileHover={{ scale: 1.1 }}>About Us</motion.p>
          </Link>
          <Link>
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
        </div>
      </Footer>
    </FAQcont>
  );
}

export default Faq;
