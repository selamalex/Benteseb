import { useEffect, useState } from "react";
import "./Counter.css";

function CounterBox({ target, duration, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    const increment = Math.ceil(end / (duration / 20));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="counter-box">
      <span className="counter">{count}+</span>
      <span className="counter-label">{label}</span>
    </div>
  );
}

export default function Counter() {
  return (
    <div className="counter-container">
      <CounterBox target={10} duration={1500} label="Patients Supported" />
      <CounterBox target={50} duration={1500} label="Active Members" />
      <CounterBox target={5} duration={1500} label="Planned Programs" />
      <CounterBox target={5000} duration={2000} label="ETB Collected" />
    </div>
  );
}
