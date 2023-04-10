import styled from "styled-components";

export const Container = styled.div`
  background: #bccfac;
  position: relative;
  /* height: 100vh; */

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
  height: calc(100vh - 6.5em);
  border-top-left-radius: 100px;
  padding: 4em;
  padding-top: 1.5em;
  /* box-shadow: 0px 5px 20px 4px #7a9f5a; */

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    margin-left: 1em;
  }

  .boxes {
    display: flex;
    margin-left: 3em;

    .box {
      width: 340px;
      height: 240px;
      box-shadow: 0px 5px 20px 4px #7a9f5a;
      border-radius: 20px;
      margin: 10px;
      margin-right: 2.5em;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: space-between; */

      .balancetype {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #404040;
        margin-bottom: 15px;
      }

      p {
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 67px;
        color: #7a9f5a;
        margin: 0px;
        padding: 0px;
        border-bottom: 1px solid #404040;
        padding-bottom: 8px;
        margin-bottom: 10px;
      }

      .percent {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #404040;
      }
    }

    .siginbtn {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      width: 280px;
      background: #7a9f5a;
      border-radius: 10px;
      color: #ffffff;
      border: none;
      padding: 10px;
      margin-top: 0.8em;
    }
  }

  .recent {
    display: flex;
    flex-direction: column;
    margin-top: 2em;

    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }

    .activities {
      display: flex;
      border: 1px solid #bfbfbf;
      border-radius: 10px;
      width: 902px;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      padding: 5px;
      margin-bottom: 20px;

      div {
        display: flex;
        margin-left: 5px;

        img {
          width: 40px;
        }

        p {
          display: flex;
          flex-direction: column;
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

export const ResCont = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;

    .top {
      display: flex;
      align-items: center;
      position: relative;
      margin-left: 1em;

      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: #404040;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        width: 102px;
        margin-left: 1em;
        margin-top: 2em;
      }

      .boxes {
        display: flex;
        /* margin-left: 3em; */
        margin-top: 2em;

        .box {
          width: 205px;
          height: 175px;
          box-shadow: 0px 5px 20px 4px #7a9f5a;
          border-radius: 20px;
          margin: 10px;
          margin-right: 2.5em;
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          /* justify-content: space-between; */

          .balancetype {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #404040;
            margin-bottom: 5px;
          }

          p {
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 38px;
            color: #7a9f5a;
            margin: 0px;
            padding: 0px;
            border-bottom: 1px solid #404040;
            padding-bottom: 8px;
            margin-bottom: 10px;
            width: 224px;
            text-align: center;
          }

          .percent {
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            color: #404040;
          }
        }

        .siginbtn {
          box-shadow: 0px 5.6033px 11.2066px rgba(0, 0, 0, 0.1);
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
          width: 158px;
          background: #7a9f5a;
          border-radius: 10px;
          color: #ffffff;
          border: none;
          padding: 10px;
          margin-top: 0.8em;
        }
      }

      .progress {
        display: flex;
        margin-top: 0.5em;
        position: absolute;
        bottom: -2em;
        right: 38%;

        .green {
          background: #9bb783;
          border-radius: 50%;
          height: 15px;
          width: 15px;
          margin: 6px;
          cursor: pointer;
        }

        .white {
          width: 15px;
          height: 15px;
          background: #dee7d6;
          border-radius: 100px;
          margin: 6px;
          cursor: pointer;
        }
      }
    }

    .recent {
      display: flex;
      flex-direction: column;
      margin-top: 2em;
      margin-left: 1em;

      h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
      }

      .activities {
        display: flex;
        border: 1px solid #bfbfbf;
        border-radius: 10px;
        width: 380px;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        padding: 5px;
        margin-bottom: 20px;

        div {
          display: flex;
          margin-left: 5px;

          img {
            width: 40px;
            margin-right: 5px;
          }

          p {
            display: flex;
            flex-direction: column;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #404040;
          }
        }
      }
    }
  }
`;
