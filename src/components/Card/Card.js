import React from "react";

export default function Card({ ipAddress, isLoading }) {
  return (
    <div>
        {isLoading ? (
         <div>
         <p>Loading IP address...</p>
         <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
         </div>
        ) : (
          <div>
          <h3>This is my IP: {ipAddress}</h3>
          </div>
      )}
    </div>
  )
}
