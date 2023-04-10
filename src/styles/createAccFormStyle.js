import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    width: 180px;
    margin-top: 2em;

    @media (max-width: 768px) {
      width: 130px;
    }
  }
`;

export const Wrap = styled.div`
  width: 500px;
  margin: auto;
  margin-top: 2em;
  background: #ffffff;
  border: 1px solid #7a9f5a;
  box-shadow: 0px 4px 10px 4px rgba(122, 159, 90, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2em;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    width: 380px;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    width: 430px;
    font-size: 35px;
    line-height: 48px;
    color: #091e0f;
    margin: 0px;
    text-align: center;
    margin-top: 1em;

    @media (max-width: 768px) {
      width: 340px;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
    }
  }

  .cred {
    color: rgba(0, 0, 0, 0.7);

    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 38px;
    margin-top: 0px;
    width: 480px;
    text-align: center;

    @media (max-width: 768px) {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      width: 340px;

      color: rgba(0, 0, 0, 0.7);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 400px;

    @media (max-width: 768px) {
      width: 340px;
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
      height: 48px;
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
  }

  .siginbtn {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    width: 405px;
    background: #7a9f5a;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    padding: 10px;
    margin-top: 1em;

    @media (max-width: 768px) {
      width: 340px;
      margin-top: 1em;
    }
  }

  .donthaveacc {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    margin: 0px;
    margin-top: 12px;

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
`;
