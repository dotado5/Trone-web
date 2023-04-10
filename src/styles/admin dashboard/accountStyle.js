import styled from "styled-components";

export const Container = styled.div`
  background: #bccfac;
  position: relative;
  height: 167vh;
`;

export const Wrap = styled.div`
  background: white;
  position: absolute;
  right: 0;
  top: 6em;
  width: 79%;
  height: 153.2vh;
  border-top-left-radius: 100px;

  .main {
    margin-left: 3em;
    margin-top: 3em;
  }

  .top {
    display: flex;
    justify-content: space-between;

    button {
      width: 270px;
      background: #7a9f5a;
      border-radius: 15px;
      color: #ffffff;
      border: none;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 38px;
      margin-top: 0.5em;
    }

    .input {
      width: 200px;
      border: 0.5px solid #7a9f5a;
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      padding: 5px;
      margin-right: 1em;

      img {
        width: 30px;
        cursor: pointer;
      }

      input {
        background: white;
        padding: 0px;
        outline: none;
        width: 200px;

        &::placeholder {
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 38px;
          background: none;
        }
      }
    }
  }

  .bottom {
    table {
      margin-top: 3em;
      text-align: center;
      margin-right: 5px;

      th {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #ffffff;
        width: 220px;
        background: #7a9f5a;
        padding: 10px;
      }

      td {
        font-style: normal;
        font-size: 20px;
        line-height: 48px;
        border: 1px solid #000000;
      }
    }
  }

  .details {
    margin-left: 3em;
    padding-bottom: 2em;

    .savings {
      position: relative;

      button {
        position: absolute;
        right: 7em;
        top: 4.7em;
        width: 220px;
        background: #7a9f5a;
        border-radius: 15px;
        color: #ffffff;
        border: none;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 38px;
        margin-top: 0.5em;
      }

      img {
        position: absolute;
        width: 50px;
        right: 2em;
        top: 50%;
      }

      h1 {
        text-align: center;
        width: 80%;
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 67px;
      }

      h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        margin-top: 0px;
        margin-bottom: 0px;
      }

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 48px;
      }
    }

    .progress {
      display: flex;
      margin-top: 2em;
      margin-left: 28em;

      .green {
        background: #9bb783;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        margin: 6px;
        cursor: pointer;
      }

      .white {
        width: 20px;
        height: 20px;
        background: #dee7d6;
        border-radius: 100px;
        margin: 6px;
        cursor: pointer;
      }
    }
  }
`;
