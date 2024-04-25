import React from "react";

function Note(details) {
    return <div className="note">
        <p>{details.id}</p>
        <h1>{details.name}</h1>
        <p>{details.usn}</p>
    </div>
}
export default Note 