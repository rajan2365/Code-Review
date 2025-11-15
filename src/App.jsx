


import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

export default function App() {
  const [code, setCode] = useState(`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`);
  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      const response = await axios.post("https://code-review-backend-pi.vercel.app/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (e) {
      setReview("⚠️ Error: Could not reach server.");
      console.log(e);
    }
  }

  return (
    <div className="app-container">
      <header className="header text-black">
        {/* <img src="/logo.png" className="logo" alt="" /> */}
         {/* <span className="text-purple-600 text-2xl">⚡</span> */}
        <h1>⚡AI Code Review⚡</h1>
        {/* <p>
          Get instant, intelligent feedback on your code. Our AI analyzes your
          code for bugs, security vulnerabilities, performance issues, and best
          practices.
        </p> */}
      </header>

      <main className="main-layout">
        <div className="left-side">
          <label className="label">Programming Language</label>
          <select className="dropdown">
            <option>JavaScript</option>
            <option>Python</option>
            <option>Java</option>
          </select>

          <div className="editor-box">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={12}
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 15,
                minHeight: "350px",
              }}
            />
          </div>

          <button className="review-btn" onClick={reviewCode}>
            Review Code
          </button>
        </div>

        <div className="right-side">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </div>
  );
}
