import React from "react";

function TestPromise() {
  let promise = new Promise((resolve, reject) => {
    resolve("texto ejemplo");
  });

  return <div>Promises</div>;
}

export default TestPromise;