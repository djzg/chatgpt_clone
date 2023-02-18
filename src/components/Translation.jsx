import React from "react";


export default function Translation({doStuff, setInput, result}) {
  return (
    <div>
      <textarea 
        className="text-area" 
        cols={50} 
        rows={20} 
        onChange={(e) => setInput(e.target)}>
      </textarea>
      <button className="action-btn" onClick={doStuff}>DO SOME STUFF</button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>

    );
}