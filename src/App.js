import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Header Section */}
        <h1>Thami Herris Mabaso</h1>
        <p>Software Developer & Quality Assurance Specialist</p>

        {/* Portfolio Projects */}
        <section className="projects">
          <h2>My Projects</h2>
          <ul>
            <li>
              <h3>Earthnique Investment Management Site</h3>
              <p>A platform for investment management, designed to help users manage and track their investments.</p>
            </li>
            <li>
              <h3>Pocket Translator</h3>
              <p>A mobile-friendly translation app that helps users translate text between multiple languages instantly.</p>
            </li>
            <li>
              <h3>LivestockFella for Farming</h3>
              <p>A web application designed for farmers to track their livestock, manage farming operations, and monitor growth.</p>
            </li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="contact">
          <h2>Contact Me</h2>
          <p>Feel free to get in touch with me via:</p>
          <p>WhatsApp: <a href="https://wa.me/27726884521" target="_blank" rel="noopener noreferrer">Click to Chat</a></p>
          <p>Email: <a href="mailto:thamiherris@gmail.com">Email</a></p>
        </section>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 Thami Herris Mabaso</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
