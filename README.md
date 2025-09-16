
A Spring Boot service for generating AI replies for gmail. It is available as a browser extension and a web page.

---

## ✨ Features
- **One-click AI replies** inside Gmail  
- Powered by **Gemini AI** for high-quality, context-aware responses  
- Multiple tones & styles (formal, friendly, concise, etc.)  
- Works seamlessly within the Gmail UI (extension popup + compose window)  
- Local prompt processing + secure API calls (no email stored on servers)
- Also available as a website!

---

## 🧱 Tech Stack
- **Extension:** HTML, CSS, JavaScript (Manifest V3)
- **FrontEnd:** ReactJS, Material UI
- **Backend API:** Spring Boot (handles Gemini API calls & authentication)  
- **AI Model:** Google Gemini API
- **Cloud:** Spring Boot is hosted on an EC2 Instance
- **DNS:** Obtained from freeDNS
- **Browser:** Chrome (Extension APIs)  

---

## Full Architecture:


<img width="736" height="371" alt="Aws_auto_emailer_diagram (1)" src="https://github.com/user-attachments/assets/873daf2d-8332-4b1a-a087-52f8b5a20b95" />


## How to Run:

The backend must be running for the model to be able to process the replies

### Extension: 
- Enable developer mode in ```chrome://extensions/``` 
- Click Load Unpacked and select email-writer-extension

### Frontend:
- cd into auto-emailer-react/auto-email-writer
- npm run dev

### Backend:
- Run auto-emailer from IntelliJ for local server
- Have to enable EC2 Instance and it should work automatically

