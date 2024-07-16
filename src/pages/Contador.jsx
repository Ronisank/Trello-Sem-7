import React, { useState } from "react";

export function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid text-bg-info p-3 ">
      <h1 className="text-h1">Contador</h1>
      <div className="d-flex flex-row mb-4 d-flex justify-content-center">
        <div className="p-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setCount(count > 0 ? count - 1 : count)}
          >
            -
          </button>
        </div>
        <p className="text-center fs-2 text-success">{count}</p>
        <div className="p-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
