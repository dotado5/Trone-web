import styled from "styled-components";

export const Container = styled.div`
  .hamburger-closed {
    display: none;
  }

  .hamburger-menu {
    display: none;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      align-items: center;
      position: fixed;
      background: white;
      z-index: 100001;
      transition: 0.3s ease;
      transition-delay: 1s;

      ul {
        list-style-type: none;
        margin-left: -4em;
      }
      li {
        width: 100vw;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        padding: 10px;
        cursor: pointer;
        color: #091e0f;
        border-bottom: 0.5px solid #bccfac;
        padding-left: 43%;
        margin-right: 10px;
        margin-bottom: 1em;
      }

      .buttons {
        display: flex;
        flex-direction: column;
      }

      .signin {
        border-radius: 10px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        background: white;
        margin-right: 30px;
        color: #000;
        cursor: pointer;
        width: 382px;
        height: 60px;
        border: 2px solid #7a9f5a;
        border-radius: 10px;
        margin-bottom: 1.5em;
      }

      .create {
        width: 382px;
        height: 60px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        background: linear-gradient(255.4deg, #091e0f 12.67%, #7a9f5a 100%);
        border-radius: 10px;
        border: none;
        cursor: pointer;
        color: white;
      }

      a {
        text-decoration: none;
      }
    }
  }

  .header {
    position: fixed;
    top: -1em;
    z-index: 10000;

    @media (max-width: 768px) {
      position: sticky;
      top: 0;
      z-index: 10000;
    }
  }
`;

export const Header = styled.nav`
  display: flex;
  /* justify-content: space-evenly; */
  /* margin: 1em; */
  /* margin-left: 3em; */
  /* padding: 1em; */
  padding-left: 2em;
  width: 100vw;
  height: 100px;
  position: sticky;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  z-index: 100001;
  margin-top: 10px;

  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    /* margin-left: 2em; */
    margin-top: 0px;
    padding-right: 1em;
    width: auto;
  }

  img {
    width: 200px;
    height: 100px;

    @media (max-width: 768px) {
      width: 130px;
    }
  }

  ul {
    list-style-type: none;
    display: flex;

    a {
      text-decoration: none;
      color: black;
    }
  }
  li {
    margin: 10px;
    margin-left: 1em;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
    transition: 0.5s ease;
    position: relative;

    &::before {
      transition: 0.5s ease;
      transform: scaleX(0);
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      height: 2px;
      width: 100%;
      background: #7a9f5a;
      opacity: 0;
    }

    &:hover {
      color: #7a9f5a;
      transform: scale(1.2);

      &::before {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  .nav {
    display: flex;
    margin-left: 19em;
    margin-top: 10px;

    .buttons {
      margin-top: 10px;
      margin-left: 20px;
    }

    .signin {
      width: 180px;
      height: 55px;
      border: 2px solid black;
      border-radius: 10px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      background: transparent;
      margin-right: 30px;
      color: black;
      cursor: pointer;

      &:hover {
        background: black;
        color: white;
        border: none;
      }
    }

    .create {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      background: linear-gradient(255.4deg, #091e0f 12.67%, #7a9f5a 100%);
      border-radius: 10px;
      width: 180px;
      height: 55px;
      border: none;
      cursor: pointer;
      color: white;

      &:hover {
        background: linear-gradient(255.4deg, #7a9f5a 12.67%, #091e0f 100%);
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .top {
    right: -7em;
    height: 4px;
    width: 40px;
    background: black;
    border-radius: 50px;
    position: absolute;
    transition: 0.3s ease;
    top: 0;
    transform: rotate(0);
  }
  .middle {
    right: -7em;
    height: 4px;
    width: 40px;
    background: black;
    border-radius: 50px;
    position: absolute;
    transition: 0.3s ease;
    top: 0;
    transform: rotate(0);
    transform: translateY(12px);
  }
  .bottom {
    right: -7em;
    height: 4px;
    width: 40px;
    background: black;
    border-radius: 50px;
    position: absolute;
    transition: 0.3s ease;
    top: 0;
    transform: rotate(0);
    transform: translateY(24px);
  }

  .hamburger {
    display: none;

    @media (max-width: 768px) {
      position: relative;
      right: 8em;
      cursor: pointer;
      display: flex;
      justify-content: center;
      height: 60px;
      margin-top: 1.2em;
    }
  }

  .open {
    display: none;

    @media (max-width: 768px) {
      position: absolute;
      right: 9em;
      cursor: pointer;
      display: flex;
      justify-content: center;
      height: 60px;
      margin-top: 1.5em;
      transform: rotate(90deg);
      transform: translateY(0px);
    }
    .top {
      transform: rotate(45deg) translateY(6px) translate(6px);
    }

    .middle {
      display: none;
    }

    .bottom {
      transform: rotate(-45deg) translateY(6px) translate(-6px);
    }
  }
`;

export const FirstSection = styled.div`
  margin-left: 4em;
  display: flex;
  margin-top: 9em;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    margin-left: 3em;
    width: 360px;
    max-width: 350px;
  }

  .left-first {
    width: 600px;
    margin-top: 4em;

    @media (max-width: 768px) {
      width: 350px;
    }

    h1 {
      font-style: normal;
      font-weight: 550;
      font-size: 45px;
      line-height: 67px;
      color: #7a9f5a;
      width: 450px;
      margin-bottom: 0px;

      @media (max-width: 768px) {
        width: 308px;
        height: 72px;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
      }
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      color: #404040;
      width: 450px;

      @media (max-width: 768px) {
        width: 330px;
        height: 73px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
    }

    .buttons {
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin-left: 5em;
        margin-top: 3em;
      }

      .app-buttons {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        box-sizing: border-box;
        border: 1px solid #7a9f5a;
        border-radius: 10px;
        background: white;
        display: flex;
        align-content: center;
        margin-right: 15px;
        padding: 5px;
        width: 180px;
        cursor: pointer;

        img {
          margin: 5px;
          margin-top: 0px;
        }

        @media (max-width: 768px) {
          margin-bottom: 1em;
        }
      }
    }
  }

  .right-first {
    margin-left: 2em;
    margin-top: -3em;

    @media (max-width: 768px) {
      margin-top: 2em;
    }

    img {
      width: 600px;

      @media (max-width: 768px) {
        width: 350px;
        margin-left: -2em;
      }
    }
  }
`;

export const SecondSection = styled.section`
  margin-left: 4em;
  display: flex;
  align-items: center;
  margin-top: 4em;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 6em;
    margin-left: 3em;
  }

  .left-second {
    margin-top: -3em;
    margin-right: 6em;

    @media (max-width: 768px) {
      margin-left: 3em;
      margin-bottom: 1em;
    }

    h1 {
      font-style: normal;
      font-weight: 550;
      font-size: 45px;
      line-height: 67px;
      color: #7a9f5a;
      width: 450px;
      margin-bottom: 0px;

      @media (max-width: 768px) {
        width: 258px;
        height: 80px;
        font-style: normal;
        font-weight: 550;
        font-size: 32px;
        line-height: 38px;
      }
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      width: 381px;
      color: #404040;
      width: 450px;

      @media (max-width: 768px) {
        width: 372px;
        height: 48px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
    }

    button {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      background: linear-gradient(255.4deg, #091e0f 12.67%, #7a9f5a 100%);
      border-radius: 10px;
      width: 180px;
      height: 55px;
      border: none;
      color: white;
      cursor: pointer;

      @media (max-width: 768px) {
        width: 110px;
        height: 36px;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 28px;
      }
    }
  }

  .right-second {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 768px) {
      margin-left: -4em;
      margin-top: 2em;
    }

    .tl-sq {
      width: 320px;
      height: 269px;
      box-shadow: -4px -2px 10px rgba(0, 0, 0, 0.5);
      border-top-left-radius: 30px;
      margin: 10px;
      background: url("/images/real estate.jpg");
      background-position: center;
      background-size: 105%;
      background-repeat: no-repeat;
      transition: 0.5s ease;
      position: relative;

      &:hover {
        background-size: 140%;
      }

      @media (max-width: 768px) {
        width: 160.28px;
        height: 139.07px;

        &:hover {
          background-size: 105%;
        }
      }

      span {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 45%;
        font-style: normal;
        font-weight: 500;
        font-size: 38px;
        line-height: 38px;
        text-shadow: 0px 4px 5px #000000;
        color: #ffffff;

        @media (max-width: 768px) {
          font-weight: 500;
          font-size: 20px;
          line-height: 20px;
        }
      }
    }

    .tr-sq {
      width: 320px;
      height: 269px;
      box-shadow: -4px -2px 10px rgba(0, 0, 0, 0.5);
      border-top-right-radius: 30px;
      margin: 10px;
      background: url("/images/agriculture.jpg");
      background-position: center;
      background-size: 105%;
      background-repeat: no-repeat;
      transition: 0.5s ease;
      position: relative;

      span {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 45%;
        font-style: normal;
        font-weight: 500;
        font-size: 38px;
        line-height: 38px;
        text-shadow: 0px 4px 5px #000000;
        color: #ffffff;

        @media (max-width: 768px) {
          font-weight: 500;
          font-size: 20px;
          line-height: 20px;
        }
      }

      &:hover {
        background-size: 140%;
      }

      @media (max-width: 768px) {
        width: 160.28px;
        height: 139.07px;

        &:hover {
          background-size: 105%;
        }
      }
    }

    .bl-sq {
      width: 320px;
      height: 269px;
      box-shadow: -4px -2px 10px rgba(0, 0, 0, 0.5);
      border-bottom-left-radius: 30px;
      margin: 10px;
      background: url("/images/stocks.jpg");
      background-position: center;
      background-size: 105%;
      background-repeat: no-repeat;
      transition: 0.5s ease;
      position: relative;

      span {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 45%;
        font-style: normal;
        font-weight: 500;
        font-size: 38px;
        line-height: 38px;
        text-shadow: 0px 4px 5px #000000;
        color: #ffffff;

        @media (max-width: 768px) {
          font-weight: 500;
          font-size: 20px;
          line-height: 20px;
        }
      }

      &:hover {
        background-size: 140%;
      }

      @media (max-width: 768px) {
        width: 160.28px;
        height: 139.07px;

        &:hover {
          background-size: 105%;
        }
      }
    }
    .br-sq {
      width: 320px;
      height: 269px;
      box-shadow: -4px -2px 10px rgba(0, 0, 0, 0.5);
      border-bottom-right-radius: 30px;
      margin: 10px;
      background: url("/images/logistics.jpg");
      background-position: center;
      background-size: 115%;
      background-repeat: no-repeat;
      transition: 0.5s ease;
      position: relative;

      span {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 45%;
        font-style: normal;
        font-weight: 500;
        font-size: 38px;
        line-height: 38px;
        text-shadow: 0px 4px 5px #000000;
        color: #ffffff;

        @media (max-width: 768px) {
          font-weight: 500;
          font-size: 20px;
          line-height: 20px;
        }
      }

      &:hover {
        background-size: 140%;
      }

      @media (max-width: 768px) {
        width: 160.28px;
        height: 139.07px;

        &:hover {
          background-size: 115%;
        }
      }
    }
  }
`;

export const ThirdSection = styled.section`
  display: flex;
  align-items: center;
  margin-left: 3em;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 2.5em;
  }

  .left-third {
    img {
      width: 600px;
      margin-top: 2em;

      @media (max-width: 768px) {
        width: 350px;
        margin-top: 2em;
      }
    }
  }

  .right-third {
    margin-left: 4em;

    @media (max-width: 768px) {
      margin-left: -20px;
    }

    h1 {
      font-style: normal;
      font-weight: 550;
      font-size: 45px;
      line-height: 67px;
      color: #7a9f5a;
      width: 450px;
      margin-bottom: 0px;

      @media (max-width: 768px) {
        font-style: normal;
        font-weight: 550;
        font-size: 32px;
        line-height: 38px;
        width: 330px;
        margin-left: -1em;
      }
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      width: 381px;
      color: #404040;
      width: 500px;

      @media (max-width: 768px) {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        width: 350px;
        margin-left: -2em;
      }
    }

    button {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      background: linear-gradient(255.4deg, #091e0f 12.67%, #7a9f5a 100%);
      border-radius: 10px;
      width: 180px;
      height: 55px;
      border: none;
      color: white;

      @media (max-width: 768px) {
        width: 110px;
        height: 36px;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 28px;
        margin-left: -2em;
      }
    }
  }
`;

export const FourthSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5em;

  @media (max-width: 768px) {
    /* width: 350px; */
    /* margin: auto; */
  }

  .top-div {
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 50px;
      line-height: 67px;
      width: 765px;
      height: 76px;
      margin-bottom: 0px;
      margin-left: 1.5em;

      @media (max-width: 768px) {
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 38px;
        width: 340px;
        height: 44px;
        text-align: center;
        margin-left: 0px;
      }
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      width: 765px;
      /* height: 76px; */
      color: #404040;
      text-align: center;
      order: 1;
      margin-top: 0px;

      @media (max-width: 768px) {
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 24px;
        width: 340px;
        text-align: center;
        margin-top: 3em;
      }
    }
  }

  .bottom-div {
    display: flex;
    margin-left: 0em;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      margin-left: 0px;
      width: 350px;
    }

    .box {
      box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.25);
      background: #ffffff;
      height: 280px;
      /* margin: 0.5em; */
      margin-top: 2em;
      padding: 1em;
      position: relative;
      transition: 0.5s ease;

      &:hover {
        background: #7a9f5a;

        p,
        h3,
        .quote {
          color: white;
        }
      }

      @media (max-width: 768px) {
        background: white;
        width: 330px;

        &:hover {
          background: white;
          h3,
          .quote {
            color: #7a9f5a;
          }

          p {
            color: black;
          }
        }
      }

      p {
        width: 372px;
        height: 120px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #404040;
        text-align: center;

        @media (max-width: 768px) {
          width: 320px;
        }
      }

      .quote {
        color: #7a9f5a;
        font-size: 23px;
      }

      h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        color: #7a9f5a;
        margin-left: 7em;
        padding-top: 10px;
      }

      &::after {
        content: "";
        position: absolute;
        width: 60px;
        height: 60px;
        left: 10px;
        bottom: 0.5em;
        border-radius: 50%;

        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(122, 159, 90, 0.5) 100%
        );
        filter: blur(5px);
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100vw;
  background: #7a9f5a;
  height: 350px;
  padding-left: 3em;
  padding-top: 5em;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  margin-left: 0em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding-top: 4em;
    padding-bottom: 4em;
    padding-left: 4em;
    height: 500px;
    margin-left: 0px;
    width: auto;
  }

  &::before {
    content: "";
    position: absolute;
    width: 80px;
    height: 80px;
    bottom: 20px;
    left: 5em;
    background: radial-gradient(
        62.5% 62.5% at 70% 25%,
        #ffffff 0%,
        #b2cf9a 25.52%,
        #8cb767 49.48%,
        #478b0c 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 50px;
    bottom: 0;
    right: 13em;
    border-radius: 50px 50px 0px 0px;

    background: radial-gradient(
        62.5% 62.5% at 70% 25%,
        #ffffff 0%,
        #b2cf9a 25.52%,
        #8cb767 49.48%,
        #478b0c 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      display: none;
    }
  }

  .semi-circle {
    content: "";
    position: absolute;
    width: 90px;
    height: 45px;
    left: 20em;
    border-radius: 0px 0px 50px 50px;

    background: radial-gradient(
        62.5% 62.5% at 70% 25%,
        #ffffff 0%,
        #b2cf9a 25.52%,
        #8cb767 49.48%,
        #478b0c 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      left: 13em;
    }
  }

  .one {
    @media (max-width: 768px) {
      margin-left: -2em;
    }

    img {
      width: 150px;

      @media (max-width: 768px) {
        width: 102px;
      }
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 38px;
      width: 268px;
      height: 116px;

      @media (max-width: 768px) {
        width: 133px;
        height: 154px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 38px;
      }
    }
  }

  .two {
    @media (max-width: 768px) {
      margin-left: -4em;
    }

    h5 {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      margin: 0px;
      margin-top: 0.3em;

      @media (max-width: 768px) {
        width: 91px;
        height: 26px;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 38px;
      }
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 38px;
      margin: 0px;
      margin-top: 20px;

      @media (max-width: 768px) {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 38px;
        width: 74px;
      }
    }
  }

  .three {
    margin-left: -2em;

    @media (max-width: 768px) {
      margin-top: -4em;
    }
    h5 {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      margin: 0px;
      margin-top: 0.3em;

      @media (max-width: 768px) {
        width: 91px;
        height: 26px;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 38px;
      }
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 38px;
      margin: 0px;
      margin-top: 20px;

      @media (max-width: 768px) {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 38px;
        width: 111px;
      }
    }
  }

  .four {
    margin-left: -4em;

    @media (max-width: 768px) {
      margin-top: -4em;
    }
    h5 {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      margin: 0px;
      margin-top: 0.3em;

      @media (max-width: 768px) {
        width: 121px;
        height: 26px;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 38px;
      }
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 38px;
      margin: 0px;
      margin-top: 20px;

      @media (max-width: 768px) {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 38px;
        width: 74px;
      }
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
