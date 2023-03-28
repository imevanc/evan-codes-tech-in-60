import React from "react";

const App = () => {
  React.useEffect(() => {
    console.log("counter");
    return () => console.log("counter - unmount");
  }, [counter]);

  return <div></div>;
};

export default App;
