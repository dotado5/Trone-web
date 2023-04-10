import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;

  .logo {
    width: 150px;
    margin-top: 3em;
  }

  .display-logo {
    width: 35px;
    height: 35px;
    margin-top: 2em;
  }

  h1 {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 48px;
    margin-top: 0.5em;
    text-align: center;
  }

  P {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.7);
    width: 400px;
    margin-top: 0px;
    /* margin-bottom: 10px; */

    @media (max-width: 768px) {
      width: 350px;
    }

    span {
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 38px;
      color: #7a9f5a;
    }
  }

  div {
    color: rgba(0, 0, 0, 0.7);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 38px;

    span {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 38px;
      color: #7a9f5a;
      cursor: pointer;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    position: relative;

    img {
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  label {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    margin-top: 15px;

    @media (max-width: 768px) {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      margin-top: 15px;
    }
  }

  input {
    width: 400px;
    height: 38px;
    border-radius: 10px;
    border: none;
    margin-top: 10px;

    @media (max-width: 768px) {
      width: 340px;
    }

    &::placeholder {
      font-style: normal;
      font-size: 14px;
      line-height: 38px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .siginbtn {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    width: 410px;
    background: #7a9f5a;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    padding: 10px;
    margin-top: 1em;

    @media (max-width: 768px) {
      width: 350px;
      margin-top: 1em;
    }
  }

  .cons {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: -20px;

    .circle {
      margin: 0px;
      width: 20px;
      height: 20px;
      background: #d9d9d9;
      border-radius: 50%;
      margin-right: 5px;
      margin-top: 10px;
    }

    .greencircle {
      margin: 0px;
      width: 20px;
      height: 20px;
      background: #7a9f5a;
      border-radius: 50%;
      margin-right: 5px;
      margin-top: 10px;
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 28px;
      margin: 0px;
      margin-top: 10px;
      width: 350px;
      text-align: start;
    }
  }
`;
