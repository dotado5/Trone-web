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
    width: 250px;
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
      font-size: 22px;
      line-height: 40px;
      text-decoration: none;
      margin: 5px;
      display: flex;
      align-items: center;
      padding: 10px;
      width: 250px;

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
    width: 250px;
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
