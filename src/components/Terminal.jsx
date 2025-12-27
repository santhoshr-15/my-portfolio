import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  // Initial state with welcome message
  const [history, setHistory] = useState([
    { type: 'output', content: 'Initializing Secure Connection... [OK]' },
    { type: 'output', content: 'User detected. Access granted.' },
    { type: 'output', content: 'Type "help" to see available commands.' },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  // Auto-scroll to the bottom when history changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // COMMAND PROCESSOR
  const handleCommand = (cmd) => {
    const args = cmd.trim().toLowerCase();
    let response = '';
    let type = 'output';

    switch (args) {
      case 'help':
        response = 'Available commands: [about] [skills] [projects] [contact] [clear]';
        break;
      
      case 'about':
        response = 'I am a passionate Developer and Cybersecurity Student. I build secure, high-performance systems and love breaking things to make them stronger.';
        break;

      case 'skills':
        response = `
          >> LANGUAGES:  Rust, Python, JavaScript (React/Astro)
          >> SECURITY:   Penetration Testing, Cryptography, Network Analysis
          >> TOOLS:      Wireshark, Burp Suite, Docker, Git
        `;
        break;

      case 'projects':
        response = `
          LOADING CLASSIFIED PROJECTS...
          --------------------------------
          1. CYBER-HYBRID PORTFOLIO (This website)
             > Tech: Astro, React, Tailwind
             > Status: deployed
          
          2. RUST-ENCRYPTOR (CLI Tool)
             > Tech: Rust, WASM
             > Status: In Progress
        `;
        break;

      case 'contact':
        response = 'Email: your.email@example.com | GitHub: github.com/yourusername';
        break;

      case 'clear':
        setHistory([]);
        return; // Exit early to avoid adding the "clear" command to history
      
      case 'sudo':
        response = 'ACCESS DENIED: You do not have root privileges.';
        type = 'error';
        break;

      case '':
        response = '';
        break;

      default:
        response = `Command not found: "${args}". Type "help" for assistance.`;
        type = 'error';
    }

    // Update history with User Input + System Response
    if (args !== '') {
      setHistory((prev) => [
        ...prev,
        { type: 'input', content: `visitor@portfolio:~$ ${cmd}` },
        { type: 'output', content: response, style: type } // Pass style type
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 md:mt-20 p-6 bg-black/90 border border-green-500 shadow-[0_0_30px_rgba(0,255,65,0.2)] rounded-lg font-mono text-base md:text-lg relative z-10">
      
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 border-b border-green-900 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-sm text-green-700 font-bold">BASH -- 80x24</span>
      </div>

      {/* Output Area */}
      <div className="h-[60vh] overflow-y-auto space-y-2 mb-4 scrollbar-hide font-bold">
        {history.map((line, i) => (
          <div key={i} className={`${line.type === 'input' ? 'text-white' : line.style === 'error' ? 'text-red-500' : 'text-green-400'} whitespace-pre-wrap`}>
            {line.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div className="flex items-center border-t border-green-900 pt-4">
        <span className="text-green-500 mr-2 animate-pulse">➜</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-white placeholder-green-800 font-bold"
          placeholder="Enter command (e.g., help)..."
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;