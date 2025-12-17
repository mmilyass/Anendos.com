import React from "react";

export default function Test() {
  //   let count = 0;
  const [count, setCount] = React.useState(0);

  return (
    <div>
      {/* <h1>{count}</h1> */}
      <button
        className="text-white"
        onClick={() => {
          console.log(count);
          //   count += 1;
          setCount((prev) => prev + 1);
        }}
      >
        count: {count}
      </button>
    </div>
  );
}
