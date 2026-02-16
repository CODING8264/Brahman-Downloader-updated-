import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <div style={{ padding: 40 }}>
      <h1>Brahman Media Tool</h1>

      <input
        type="text"
        placeholder="Paste media URL here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "100%", padding: 10 }}
      />

      <button
        style={{ marginTop: 20, padding: 10 }}
        onClick={() => alert("URL submitted: " + url)}
      >
        Submit
      </button>
    </div>
  );
}
