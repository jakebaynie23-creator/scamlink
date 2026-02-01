import { useState } from "react";
import Asking from "./components/Asking";
import Success from "./components/Success";
import "./App.css";

export default function App() {
  const [answeredYes, setAnsweredYes] = useState(false);

  return (
    <div className="App">
      {answeredYes ? (
        <Success />
      ) : (
        <Asking onYes={() => setAnsweredYes(true)} />
      )}
    </div>
  );
}
