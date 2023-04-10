import styled from "styled-components";

export const FAQcont = styled.div`
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
      z-index: 1000;
      transition: 0.3s ease;

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

export const Wrap = styled.div`
  .watermark {
    background: linear-gradient(180deg, #7a9f5a 0%, #263238 100%);
    height: 464px;
    width: 100vw;
    margin-top: 100px;
    position: relative;

    &::before {
      content: "FAQ ";
      position: absolute;
      top: 40%;
      font-style: normal;
      font-weight: 700;
      font-size: 400px;
      line-height: 67px;
      color: transparent;
      text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05);
      width: 100%;
    }

    &::after {
      content: "?";
      position: absolute;
      top: 40%;
      right: 0;
      left: 0;
      text-align: end;
      font-style: normal;
      font-weight: 700;
      font-size: 400px;
      line-height: 67px;
      color: transparent;
      text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05);
      width: 94%;
    }

    h2 {
      position: absolute;
      text-align: center;
      left: 0;
      right: 0;
      top: 28%;
      font-family: "Spline Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 56px;
      letter-spacing: 0.1em;
      line-height: 67px;
      color: #ffffff;
    }
  }

  .questions {
    .top-question {
      background: #dee7d6;
      border-radius: 30px;
      width: 1200px;
      padding: 10px;
      margin: auto;
      margin-top: 2em;

      h4 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 38px;
        color: #091e0f;
      }

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 38px;
      }
    }

    .question {
      border: 1px solid #000000;
      border-radius: 30px;
      box-sizing: border-box;
      width: 1220px;
      margin: auto;
      padding: 10px;
      margin-top: 2em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

      p {
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 38px;
        color: #091e0f;
      }

      span {
        width: 600px;

        ul {
          margin-left: 0em;

          li {
            margin: 0px;
            margin-bottom: 5px;
          }
        }
      }

      img {
        margin-right: 20px;
        cursor: pointer;
        transition: 0.5s ease;
      }
    }

    .expand {
      transform: rotate(180deg);
    }
  }
`;
