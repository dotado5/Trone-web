import React from "react";
import {
  Container,
  ResCont,
  Wrap,
} from "../../styles/dashboardStyles/homeStyle";
import Sidebar from "./Sidebar";

function AccStatement() {
  return (
    <Container style={{ height: "calc(100vh + 5.5em)" }}>
      <Sidebar />
      {/* <Wrap>
        <div className="recent">
          <h3>Account Statement</h3>
          <div className="activities">
            {history.map((his, index) => (
              <>
                <div>
                  <img src="/images/Group.svg" alt="" />
                  <p className="date">
                    {his[1]} <span>{his[0]} </span>
                  </p>
                </div>
                <p>#{his[2]} </p>
              </>
            ))}
          </div>
        </div>
      </Wrap> */}
    </Container>
  );
}

export default AccStatement;
