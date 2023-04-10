import styled from "styled-components";

export const AboutWrap = styled.div`
  .mission {
    background: linear-gradient(
      101.14deg,
      #7a9f5a -3.3%,
      #8aaa6e 41.79%,
      #e4ecde 64.37%,
      #ffffff 83.37%
    );
    /* filter: blur(10px); */
    height: 644px;
    width: 100vw;
    margin-top: 100px;
    padding-top: 10em;
    padding-left: 3em;

    h1 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 800;
      font-size: 56px;
      line-height: 57px;
      color: #ffffff;
      letter-spacing: 0.1em;
    }

    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 67px;
      letter-spacing: 0.1em;
      color: #ffffff;
      width: 600px;
    }
  }

  .vision {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(
      101.14deg,
      #7a9f5a -3.3%,
      #8aaa6e 41.79%,
      #e4ecde 64.37%,
      #ffffff 83.37%
    );
    /* filter: blur(10px); */
    transform: matrix(-1, 0, 0, 1, 0, 0);
    height: 644px;

    h1 {
      text-align: start;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 800;
      font-size: 56px;
      line-height: 57px;
      color: #ffffff;
      letter-spacing: 0.1em;
      margin: 0px;
      width: 600px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 67px;
      letter-spacing: 0.1em;
      color: #ffffff;
      width: 600px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
  }
`;
