import React, { useEffect, useState } from "react";
import styles from "./Portfolio.module.css";
export default function Portfolio() {
  let [state, setState] = useState(0);
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <div>Portfolio</div>
      <p>Hello Portfolio</p>
    </>
  );
}
