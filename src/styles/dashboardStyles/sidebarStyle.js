import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 300px;
  margin-left: 2em;
  position: sticky;
  top: 0;
  left: 0;

  img {
    width: 150px;
    margin-top: 20px;
    cursor: pointer;
  }

  .active {
    color: #7a9f5a;
    text-decoration: none;
    background: white;
    padding-left: 1em;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 6em;

    a {
      color: white;
      border-radius: 20px 0px 0px 20px;
      width: 200px;
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      line-height: 40px;
      text-decoration: none;
      margin: 5px;
      display: flex;
      align-items: center;
      padding: 10px;

      span {
        margin-left: 5px;
      }

      &:hover {
        color: #7a9f5a;
        text-decoration: none;
        background: white;
        padding-left: 1em;
      }
    }
  }

  .logout {
    position: absolute;
    bottom: 1em;
    color: white;
    border-radius: 20px 0px 0px 20px;
    width: 200px;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 40px;
    text-decoration: none;
    margin: 5px;
    padding: 10px;
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
    }

    &:hover {
      color: #7a9f5a;
      text-decoration: none;
      background: white;
      padding-left: 1em;
    }
  }
`;

export const ResCont = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: relative;

    .hamburger {
      position: absolute;
      right: 0;
      top: 3em;
      width: 200px;
      z-index: 10001;
      box-shadow: -4px 4px 20px rgba(0, 0, 0, 0.2);
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      transition: 0.5 ease;
      background: white;

      .top {
        height: 68px;
        width: 200px;
        background: #bccfac;
        border-top-left-radius: 16px;
        margin-left: 0em;

        img {
          position: absolute;
          right: 0;
          top: 1.3em;
          right: 10px;
          width: 35px;
          cursor: pointer;
        }
      }

      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;

        li {
          width: 150px;
          border-bottom: 0.3px solid #a4b199;
          text-align: center;
          margin-left: -1em;
          padding-bottom: 5px;
          margin-bottom: 5px;
        }

        a {
          text-decoration: none;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 40px;
          color: #7a9f5a;
          width: 200px;
          text-align: center;
        }
      }
    }

    .nav {
      background: #bccfac;
      backdrop-filter: blur(10px);
      display: flex;
      justify-content: space-between;
      height: 100px;
      padding-right: 20px;
      padding-left: 20px;

      .burger {
        width: 40px;
        margin-top: 3em;
        cursor: pointer;
      }

      div {
        display: flex;
        align-items: center;
        color: white;
        margin-top: 3em;

        p {
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 40px;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
`;
