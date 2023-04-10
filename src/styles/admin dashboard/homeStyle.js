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
  width: 80%;
  height: calc(100vh - 6em);
  border-top-left-radius: 100px;
  /* padding-top: 1.5em; */

  .pie {
    width: 200px;
    height: 200px;
  }

  .home {
    margin-left: 4em;
    margin-top: 2em;

    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 48px;
      width: 200px;
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;

      span {
        color: #7a9f5a;
      }
    }

    .charts {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }

    .des {
      margin-left: 22em;

      div {
        display: flex;
        align-items: center;

        .blue {
          background: #3c2fd1;
          width: 60px;
          height: 30px;
          margin-right: 10px;
        }

        .red {
          background: #ea6565;
          width: 60px;
          height: 30px;
          margin-right: 10px;
        }

        p {
          margin-left: 10px;
        }
      }
    }
  }
`;
