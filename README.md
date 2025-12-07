🚀 AI-Powered Code Review System

An advanced AI-driven platform that automatically reviews source code using Gemini AI, detecting errors, vulnerabilities, code smells, and offering best-practice suggestions.
Built using React.js, Node.js, Express.js, Tailwind CSS, and Gemini API.

🔥 Features

⚡ Real-time AI code analysis

🔍 Detects bugs, syntax issues & runtime risks

🛡 Identifies security vulnerabilities

🧹 Highlights code smells

✨ Suggests optimizations & improvements

🧾 Severity levels: Low, Medium, High

🎨 Modern UI using React + Tailwind CSS

🔗 REST API backend with Node.js + Express

🛠 Tech Stack

Frontend:

React.js

Tailwind CSS

Backend:

Node.js

Express.js

AI Engine:

Gemini AI (Google)

Tools:

Git, GitHub

VS Code

Postman

📁 Project Structure
/client
  └── src
      ├── components
      ├── pages
      ├── utils
      ├── App.js
      └── index.js

/server
  ├── controllers
  ├── routes
  ├── services
  ├── geminiConfig.js
  ├── index.js
  └── package.json

🔧 How It Works

User pastes code into the web editor

Frontend sends the code to the backend API

Backend forwards code to Gemini AI

AI returns a detailed report:

❌ Errors

🛡 Security issues

⚠️ Code smells

🔧 Optimization suggestions

🎯 Formatting fixes

UI displays the analysis with severity tags

🖥 Installation & Setup
1️⃣ Clone the Project
git clone https://github.com/rajan2365/Code-Review.git
cd Code-Review

2️⃣ Install Dependencies
Client
cd client
npm install

Server
cd ../server
npm install

🔐 Environment Variables

Create a .env file inside /server:

GEMINI_API_KEY=your_api_key_here
PORT=5000

▶️ Run Locally
Start Frontend:
cd client
npm start

Start Backend:
cd server
npm start

📌 Future Roadmap

🌐 Multi-language support (Python, Java, C++, etc.)

🛠 Auto-fix suggestions

🧑‍💻 User authentication + saved reports

📁 File upload support

🔗 GitHub/GitLab pull request integration
