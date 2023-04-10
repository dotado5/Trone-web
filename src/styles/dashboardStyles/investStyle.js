import styled from "styled-components";

export const Container = styled.div`
  background: #bccfac;
  position: relative;
  height: calc(100vh + 5em);

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
  padding-top: 0em;
  padding-bottom: 5em;
`;

export const Savings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-left: -0.8em;
  transition: 0.5s ease;

  img {
    position: absolute;
    right: -3.5em;
    top: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 67px;
    color: #7a9f5a;
  }

  .plans {
    display: flex;

    .plansgreen {
      width: 293px;
      height: 380px;
      background: #9bb783;
      margin: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;

      p {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        margin: 0px;
        margin-top: 1.5em;
      }

      .price {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: #ffffff;
        width: 201px;
      }

      span {
        text-align: center;
        font-style: normal;
        font-size: 15px;
        line-height: 28px;
        color: #dee7d6;
      }

      button {
        width: 200px;
        height: 60px;
        background: #ffffff;
        border-radius: 20px;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #091e0f;
        text-align: center;
        border: none;
        margin-top: 2.5em;
      }
    }

    .plansblue {
      width: 293px;
      height: 380px;
      background: #9bb783;
      margin: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      background: #091e0f;

      p {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        margin: 0px;
        margin-top: 1.5em;
      }

      .price {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: #ffffff;
        width: 201px;
      }

      span {
        text-align: center;
        font-style: normal;
        font-size: 15px;
        line-height: 28px;
        color: #dee7d6;
      }

      button {
        width: 200px;
        height: 60px;
        background: #ffffff;
        border-radius: 20px;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #091e0f;
        text-align: center;
        border: none;
        margin-top: 2.5em;
      }
    }
  }

  .progress {
    display: flex;
    margin-top: 3em;
    position: absolute;
    top: 4em;

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
`;

export const Investment = styled(Savings)`
  transition: 0.5s ease;

  img {
    right: auto;
    left: -3em;
  }
`;

export const ResCont = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    .next {
      position: absolute;
      right: 30%;
      top: 0;
      width: 50px;
      height: 50px;
      cursor: pointer;
      width: 40px;
    }

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
    }

    .plans {
      display: flex;
      flex-direction: column;

      .plansgreen {
        width: 382px;
        height: 288px;
        background: #9bb783;
        margin: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        padding-top: 0px;

        p {
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          color: #ffffff;
          margin: 0px;
          margin-top: 1.5em;
        }

        .price {
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #ffffff;
          width: 201px;
        }

        span {
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #dee7d6;
        }

        button {
          width: 200px;
          height: 60px;
          background: #ffffff;
          border-radius: 20px;
          font-style: normal;
          font-weight: 700;
          font-size: 23px;
          line-height: 28px;
          color: #7a9f5a;
          text-align: center;
          border: none;
          margin-top: 1em !important;
        }
      }

      .plansblue {
        width: 382px;
        height: 288px;
        background: #9bb783;
        margin: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        padding-top: 0px;

        p {
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          color: #ffffff;
          margin: 0px;
          margin-top: 1.5em;
        }

        .price {
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #ffffff;
          width: 201px;
        }

        span {
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #dee7d6;
        }

        button {
          width: 200px;
          height: 60px;
          background: #ffffff;
          border-radius: 20px;
          font-style: normal;
          font-weight: 700;
          font-size: 23px;
          line-height: 28px;
          color: #7a9f5a;
          text-align: center;
          border: none;
          margin-top: 1em !important;
        }
      }
    }

    .prev {
      left: 32%;
      top: 0;
      width: 40px;
    }
  }
`;
