import styled from "styled-components";

export const Container = styled.div`
  background: #bccfac;
  position: relative;
  /* height: 115vh; */
`;

export const Wrap = styled.div`
  background: white;
  position: absolute;
  right: 0;
  top: 6em;
  width: 78%;
  height: 86vh;
  border-top-left-radius: 100px;

  .full {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    padding: 3em;

    img {
      margin-right: 10em;
    }
  }

  .home {
    margin-left: 5em;
    margin-top: 4em;

    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 48px;
    }

    div {
      width: 818px;
      border-bottom: 1px solid #dee7d6;
      display: flex;
      justify-content: space-between;
      padding: 5px;

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
      }

      img {
        cursor: pointer;
      }
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .back {
    position: absolute;
    top: 2em;
    left: 4.3em;
    width: 50px;
    cursor: pointer;
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    margin-left: 3.5em;
  }

  .userdetails {
    margin-left: 9em;

    .user {
      display: flex;
      border-bottom: 1px solid #c1c7c3;
      align-items: center;
      width: 650px;
      padding-bottom: 2em;

      .imagebox {
        width: 200px;
        height: 200px;
        background: #c1c7c3;
        position: relative;
        margin-right: 2em;

        p {
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          line-height: 38px;
          color: #ffffff;
          margin: auto;
          position: absolute;
          top: 40%;
          left: 20%;
        }
      }

      div {
        p {
          font-style: normal;
          font-weight: 500;
          font-size: 27px;
          line-height: 38px;
          margin: 0px;
          margin-bottom: 0.5em;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 450px;
      margin-left: -1.5em;

      button {
        width: 400px;
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
    }

    .approved {
      display: flex;
      margin-left: 7em;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
    }
  }
`;
