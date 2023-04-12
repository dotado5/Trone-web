import React, { useState } from "react";
import {
  Container,
  FirstSection,
  Footer,
  FourthSection,
  Header,
  SecondSection,
  ThirdSection,
} from "../styles/homePageStyle";
import { ImQuotesLeft } from "react-icons/im";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
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
      <FirstSection>
        <motion.div
          initial={{ y: -250 }}
          whileInView={{
            y: 0,
            transition: { ease: "linear", duration: 0.8 },
          }}
          className="left-first"
        >
          <h1>A New Way To Save And Invest.</h1>
          <p>
            Trone provides the best valued investment opportunities to its
            customers with tangible asset and suitable return on investment.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="right-first"
        >
          <img src="/images/Investing-amico.svg" alt="" />
        </motion.div>
      </FirstSection>
      <SecondSection>
        <div className="left-second">
          <motion.h1
            initial={{ x: "-150px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5, ease: "easeIn" }}
          >
            INVESTMENT OPPORTUNITIES
          </motion.h1>
          <motion.p
            initial={{ x: "-150px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5, ease: "easeIn" }}
          >
            We provide investment opportunities for our clients through these
            plans.
          </motion.p>
          <motion.button
            initial={{ x: "100px" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.2 }}
            onClick={signup}
          >
            Invest Now
          </motion.button>
        </div>
        <div className="right-second">
          <motion.div
            initial={{ x: "-20px", y: "-20px" }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "linear" }}
            className="tl-sq"
          >
            <span>Real Estate</span>
          </motion.div>
          <motion.div
            initial={{ x: "20px", y: "-20px" }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "linear" }}
            className="tr-sq"
          >
            <span>Agriculture</span>
          </motion.div>
          <motion.div
            initial={{ x: "-20px", y: "20px" }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "linear" }}
            className="bl-sq"
          >
            <span>Stocks</span>
          </motion.div>
          <motion.div
            initial={{ x: "20px", y: "20px" }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "linear" }}
            className="br-sq"
          >
            <span>Logistics</span>
          </motion.div>
        </div>
      </SecondSection>
      <ThirdSection>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="left-third"
        >
          <img src="/images/pink-pig.svg" alt="" />
        </motion.div>
        <div className="right-third">
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5, ease: "linear" }}
          >
            Set and Achieve Goals
          </motion.h1>
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5, ease: "linear" }}
          >
            At Trone, you may invest towards a goal such as retirement, further
            education, house savings, or vacation expenses. Or set your own
            objectives and make regular commitments to reach your saving goal.
          </motion.p>
          <motion.button
            initial={{ x: "-50px" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.2 }}
            onClick={signup}
          >
            Save Now
          </motion.button>
        </div>
      </ThirdSection>
      <FourthSection>
        <div className="top-div">
          <h1>What our clients are saying?</h1>
          <p>
            At Trone we aim to be the best and most reliable investment outfit
            in Africa by providing you with innovative and revolutionary product
            leading to financial freedom and stability.
          </p>
        </div>
        <div className="bottom-div">
          <div className="box">
            <ImQuotesLeft className="quote" />
            <p>
              Trone Capitals has helped me to not just save but also earn more
              inorder to pursue my dream as a skitmaker.
            </p>
            <h3>~ Femi Oladapo ~</h3>
          </div>
          <div className="box">
            <ImQuotesLeft className="quote" />
            <p>
              Planning Events Usually comes as a rush with little time to plan
              for my personal life and finance, Using Trone has really helped me
              to manage my inflow of fund effectively and also plan for my
              business expansion.
            </p>
            <h3>~ Uche Baker ~</h3>
          </div>
          <div className="box">
            <ImQuotesLeft className="quote" />
            <p>
              The stress of logistics of moving my cows around the country for
              business and sales and also managing my finances has been reduced
              since i started using Trone, they have arrange my inflow over
              annum and added interest, it’s a wonderful and easy way for me and
              my investment.
            </p>
            <h3 style={{ marginTop: "1.7em" }}>~ Alhaji Ibrahim Bello ~</h3>
          </div>
        </div>
      </FourthSection>
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

export default Homepage;
