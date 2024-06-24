import { useState } from "react";

import Header from "./components/subcomponents/Header";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
