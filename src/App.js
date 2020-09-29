import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# sup");

  return (
    <div className="app">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <ReactMarkdown source={markdown} />
    </div>
  );
}
