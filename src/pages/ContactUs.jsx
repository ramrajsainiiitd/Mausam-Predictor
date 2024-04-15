import React from "react";

export default function ContactUS() {
  return (
    <div style={{margin:'20px'}}  >
      <div className="row" style={{display:'flex', flexDirection:'column', width:'400px', gap:'20px', marginBottom:'20px'}} >
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
      </div>
      <button className="btn btn-outline-success" type="submit">Submit</button>
    </div>
  );
}


