import React from "react";

export default function Hero({children}) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Think, Code, Deploy</h1>
        <h2>Embrace your choices - we do</h2>
        {children}
      </div>
    </div>
  )
}
