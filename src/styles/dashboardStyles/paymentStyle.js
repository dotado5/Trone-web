import styled from "styled-components";

export const Container = styled.div`
  background: #bccfac;
  position: relative;
  height: 118.5vh;

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
  /* height: calc(100vh + 8em); */
  border-top-left-radius: 100px;
  padding: 4em;
  padding-top: 4em;
`;

export const Box = styled.div`
  background: #dee7d6;
  border-radius: 30px;
  width: 480px;
  height: 590px;
  margin: auto;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    width: 370px;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  .back {
    position: absolute;
    left: 3em;
    top: 15px;
    height: 20px;
    cursor: pointer;
  }

  .progress {
    display: flex;
    position: relative;
    width: 186px;
    /* left: 30%; */
    justify-content: space-between;
    top: 10px;

    &::before {
      content: "";
      position: absolute;
      left: 10px;
      right: 10px;
      border: 1px solid #bfbfbf;
      top: 50%;
      z-index: 1;
    }

    .green {
      background: #9bb783;
      border-radius: 50%;
      height: 15px;
      width: 15px;
      margin: 6px;
      cursor: pointer;
      z-index: 100;
    }

    .circle {
      background: #bccfac;
      border-radius: 50%;
      height: 15px;
      width: 15px;
      margin: 6px;
      cursor: pointer;
      z-index: 100;
    }
  }

  form {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;

    input {
      width: 380px;
      height: 57px;
      margin-top: 10px;
      padding: 0px;
      background: white;

      @media (max-width: 768px) {
        width: 330px;
      }
    }

    label {
      margin-top: 10px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }

    select {
      width: 380px;
      height: 57px;
      margin-top: 10px;
      border: none;
      outline: none;
      background: white;

      @media (max-width: 768px) {
        width: 330px;
      }
    }

    button {
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 38px;
      width: 250px;
      border: 3px solid #7a9f5a;
      border-radius: 19px;
      padding: 10px;
      margin-top: 1.5em;
    }
  }

  .deposit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;

    .dep {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;

      @media (max-width: 768px) {
        width: 300px;
        text-align: center;
      }
    }
    .details {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
      }

      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        margin: 0px;
      }
    }

    .trans {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      width: 328px;
    }

    button {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      width: 250px;
      border: 3px solid #7a9f5a;
      border-radius: 19px;
      padding: 10px;
      @media (max-width: 768px) {
        margin-top: 1.5em;
      }
    }
  }

  .receipt {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;

    p {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      width: 260px;
    }

    div {
      width: 250px;
      height: 250px;
      background: white;
      margin-top: -1em;
      position: relative;

      img {
        position: absolute;
        top: 40%;
        left: 40%;
      }

      input {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
      }

      .inputClear {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        opacity: 1;
        background: white;
      }
    }

    button {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      width: 200px;
      height: 60px;
      background: #bccfac;
      border-radius: 19px;
      border: none;
    }
  }

  .success {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: white;
      position: relative;
      margin-top: 7em;
      margin-bottom: 7em;

      img {
        width: 100px;
        position: absolute;
        top: 25%;
        left: 25%;
      }
    }

    p {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      width: 260px;
      text-align: center;
    }
  }
`;

export const ResCont = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
