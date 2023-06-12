"use client";

import React, { useState } from "react";
import styles from "../page.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.navbar}>
      <li>
        <a href="home">Home</a>
        <a href="about">About</a>
      </li>
    </div>
  );
}
