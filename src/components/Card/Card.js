import React from "react";


export default function Card({ ipAddress }) {
  return (
    <div className="card">
          <h3>This is my IP: {ipAddress}</h3>
    </div>
  )
}
