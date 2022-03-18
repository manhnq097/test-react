import React from "react";
import { reverse } from "utils/function";

const testStr = reverse("Manh Ngo");

const App: React.FC = () => {
  return <div className="app">{testStr}</div>;
};

export default App;
