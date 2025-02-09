import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="flex items-center justify-center h-screen bg-teal-500">
      <h1 className="text-5xl font-bold text-white">React And Tailwind</h1>

      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrement</button>
    </div>
  );
};

export default App;
