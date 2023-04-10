import styled from "styled-components";

export const Container = styled.div`
  background: #bccfac;
  position: relative;
  height: calc(100vh + 22.5em);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Wrap = styled.div`
  background: white;
  position: absolute;
  right: 0;
  top: 6.5em;
  width: 75%;
  height: calc(100vh + 8em);
  border-top-left-radius: 100px;
  padding: 4em;
  padding-top: 4em;

  a {
    text-decoration: none;
  }

  .kyc {
    position: absolute;
    right: 0;
    top: 0;
    width: 500px;
    background: white;
    height: calc(100vh + 12em);
    box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.25);
    border-radius: 100px 0px 0px 0px;
    padding: 2em;

    .form {
      margin-top: 5em;
      margin-left: 2em;
    }

    p {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #7a9f5a;
    }

    .input {
      width: 375px;
      height: 51px;
      border: 1px solid #bfbfbf;
      background: white;
    }

    .cloud {
      width: 250px;
      height: 250px;
      background: white;
      position: relative;
      border: 1px solid #bfbfbf;
      margin-left: 4.5em;
      position: relative;

      img {
        width: 75px;
        height: 75px;
        position: absolute;
        top: 31%;
        left: 34%;
      }

      input {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        opacity: 0;
      }

      .inputClear {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        opacity: 1;
      }
    }

    button {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      width: 161px;
      background: #7a9f5a;
      border-radius: 5px;
      color: #ffffff;
      border: none;
      padding: 10px;
      margin-left: 5.7em;
      margin-top: 1em;
    }
  }

  .account {
    display: flex;
    flex-direction: column;
    margin-left: 1.5em;

    h2 {
      margin: 0px;
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 48px;
      color: #404040;
    }

    p {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #808080;
      margin-top: 0px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 1em;

    h3 {
      margin-left: 10px;
      color: #7a9f5a;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      margin-top: 25px;
    }

    .settings {
      border: 1px solid #bfbfbf;
      border-radius: 10px;
      box-sizing: border-box;
      width: 660px;
      height: 55px;
      margin: 10px;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: white;

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #404040;
      }
    }
  }
`;

export const ResCont = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding-bottom: 1em;

    a {
      text-decoration: none;
    }

    .kyc {
      position: absolute;
      right: 0;
      top: 0;
      width: 370px;
      background: white;
      height: calc(100vh + 12em);
      box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.25);
      border-radius: 100px 0px 0px 0px;
      padding: 2em;

      .form {
        margin-top: 5em;
        margin-left: 2em;
      }

      p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #7a9f5a;
      }

      .input {
        width: 340px;
        height: 51px;
        border: 1px solid #bfbfbf;
        background: white;
      }

      .cloud {
        width: 150px;
        height: 150px;
        background: white;
        position: relative;
        border: 1px solid #bfbfbf;
        margin-left: 4.5em;

        img {
          width: 55px;
          height: 55px;
          position: absolute;
          top: 31%;
          left: 34%;
        }

        input {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          opacity: 0;
        }

        .inputClear {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          opacity: 1;
        }
      }

      button {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        width: 261px;
        background: #7a9f5a;
        border-radius: 5px;
        color: #ffffff;
        border: none;
        padding: 10px;
        margin-left: 1.3em;
        margin-top: 1em;
      }
    }

    .account {
      display: flex;
      flex-direction: column;
      margin-left: 1.5em;
      margin-top: 1em;

      h2 {
        margin: 0px;
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 38px;
        color: #404040;
      }

      p {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #808080;
        margin-top: 0px;
      }
    }

    div {
      /* display: flex;
      flex-direction: column; */
      /* margin-left: 1em; */
      /* ACCOUNT */

      h3 {
        margin-left: 10px;
        color: #7a9f5a;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        margin-top: 25px;
        margin-left: 1em;
      }

      .settings {
        border: 1px solid #bfbfbf;
        border-radius: 10px;
        box-sizing: border-box;
        width: 382px;
        height: 44px;
        margin: 10px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: white;
        margin-left: 1em;

        span {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #404040;
        }
      }
    }
  }
`;
