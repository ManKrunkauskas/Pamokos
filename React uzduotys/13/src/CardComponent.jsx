import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = () => {
  const [isDone, setIsDone] = useState(false);

  const toggleStatus = () => {
    setIsDone(!isDone);
  };

  return (
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {isDone ? "Task Completed" : "Task Pending"}
            </h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <button
              className={`btn ${isDone ? "btn-success" : "btn-danger"}`}
              onClick={toggleStatus}
            >
              {isDone ? "Mark as Pending" : "Mark as Done"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
