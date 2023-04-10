import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &::before {
    content: "";
    width: 100px;
    height: 100px;
    position: absolute;
    right: 60px;
    top: 5.86%;
    background: linear-gradient(218.81deg, #091e0f -8.08%, #7a9f5a 112.48%);
    filter: blur(10px);
    z-index: 10000;
    border-radius: 50%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    left: 700px;
    bottom: -1em;
    background: linear-gradient(218.81deg, #7a9f5a -8.08%, #000000 112.48%);
    filter: blur(10px);
    border-radius: 50%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .logo {
    display: none;

    @media (max-width: 768px) {
      display: flex;
      width: 130px;
      place-self: center;
      margin-top: 3em;
    }
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 700px);
  margin-top: 5em;

  @media (max-width: 768px) {
    width: 100vw;
    margin-top: 2em;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 67px;
    color: #091e0f;
    margin: 0px;

    @media (max-width: 768px) {
      width: 340px;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      text-align: center;
    }
  }

  .cred {
    color: #404040;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    margin-top: 0px;

    @media (max-width: 768px) {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      width: 340px;
      margin-top: 1em;

      color: rgba(0, 0, 0, 0.5);
    }
  }

  .google {
    border: 1px solid #7a9f5a;
    border-radius: 10px;
    width: 361px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3px;
    background: white;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 38px;
    }

    img {
      width: 25px;
    }
  }

  .or {
    position: relative;
    display: flex;
    align-items: center;

    .left-line {
      width: 165px;
      height: 1px;
      background: black;
    }

    .right-line {
      width: 165px;
      height: 1px;
      background: black;
    }

    p {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    position: relative;

    @media (max-width: 768px) {
      width: 350px;
    }

    img {
      position: absolute;
      width: 20px;
      height: 20px;
    }

    label {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      margin-top: 5px;

      @media (max-width: 768px) {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
      }
    }

    input {
      width: 361px;
      height: 48px;
      border-radius: 10px;
      border: none;
      margin-top: 10px;

      @media (max-width: 768px) {
        width: 350px;
      }

      &::placeholder {
        font-style: normal;
        font-size: 14px;
        line-height: 38px;
        color: rgba(0, 0, 0, 0.5);
      }
    }

    .forgot {
      color: #404040;
      @media (max-width: 768px) {
        width: 350px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
    }

    .siginbtn {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      width: 361px;
      background: #7a9f5a;
      border-radius: 5px;
      color: #ffffff;
      border: none;
      padding: 10px;

      @media (max-width: 768px) {
        width: 350px;
      }
    }

    .donthaveacc {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;

      @media (max-width: 768px) {
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
      }

      span {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: #7a9f5a;
      }
    }
  }
`;

export const RightSection = styled.div`
  background: linear-gradient(205.84deg, #7a9f5a -4.64%, #000000 106.33%);
  position: absolute;
  right: 0;
  width: 700px;
  height: 100vh;
  display: flex;
  justify-content: center;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  img {
    width: 550px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
