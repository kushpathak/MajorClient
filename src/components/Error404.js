import React, { useState } from "react";
import { ErrorBox } from "./styles/ErrorStyle";

function Error404() {
  return (
    <ErrorBox>
      <div className="error-content">
        <h1 className="emoji">&#128547;</h1>
        <h1 className="header">Uh Oh!! Some Error Occurred</h1>
        <button className="btn-success btn-retry">Retry</button>
      </div>
    </ErrorBox>
  );
}

export default Error404;
