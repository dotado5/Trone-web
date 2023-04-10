import styled from "styled-components";

export const Container = styled.div`
  background: #bccfac;
  position: relative;
  /* height: 100vh; */
`;

export const Wrap = styled.div`
  background: white;
  position: absolute;
  right: 0;
  top: 6em;
  width: 79.5%;
  border-top-left-radius: 100px;

  .form {
    position: relative;
    padding-bottom: 3em;

    img {
      width: 50px;
      position: absolute;
      top: 0.5em;
      left: 2em;
    }

    h1 {
      text-align: center;
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 48px;
    }

    .topform {
      display: flex;
      width: 100%;
      margin-left: 1em;
      position: relative;

      .type {
        position: absolute;
        border: 1px solid #000000;
        border-radius: 20px;
        width: 470px;
        top: 75%;
        left: 50.5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 14px;
        padding-right: 14px;
        cursor: pointer;

        p {
          margin: 0px;
          font-size: 18px;
          line-height: 48px;
        }

        .flip {
          transform: rotate(180deg);
        }
      }

      form {
        display: flex;
        flex-direction: column;
        margin: 10px;

        input {
          border: 1px solid #000000;
          border-radius: 20px;
          width: 470px;
          padding: 15px;
          background: white;
          margin: 5px;

          &::placeholder {
            font-size: 18px;
            line-height: 48px;
            color: #000000;
          }
        }
      }
    }

    .bottomform {
      display: flex;
      margin-left: 2em;
      margin-right: 10px;
      border: 1px solid #000000;
      border-radius: 20px;
      transition: 0.3s ease;

      div {
        width: 48%;
        padding: 5px;

        h2 {
          text-align: center;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 48px;
        }

        form {
          select {
            border: 1px solid #000000;
            border-radius: 20px;
            width: 490px;
            padding: 15px;
            background: white;
            margin: 5px;
            font-size: 18px;
            line-height: 48px;
            color: #000000;
          }

          input {
            border: 1px solid #000000;
            border-radius: 20px;
            width: 460px;
            padding: 15px;
            background: white;
            margin: 5px;

            &::placeholder {
              font-size: 18px;
              line-height: 48px;
              color: #000000;
            }
          }
        }
      }
    }

    button {
      width: 220px;
      background: #7a9f5a;
      border-radius: 15px;
      color: #ffffff;
      border: none;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 38px;
      margin-top: 2em;
      margin-left: 40%;
    }
  }
`;
