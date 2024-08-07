import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/terminal.module.css";
import DOMPurify from "dompurify";

const CustomTerminal: React.FC = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Focus on the input field when the terminal is loaded
    inputRef.current?.focus();
  }, []);

  const sanitizeHTML = (html: string) => {
    return DOMPurify.sanitize(html);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      executeCommand(input);
      setInput("");
    }
    scrollToBottom(); // Call scroll function
  };

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const executeCommand = (command: string) => {
    let newOutput: string[] = [
      ...output,
      `<span style="color: #97c1a9">~guest</span><span style="color: #c6dbda">@rods-terminal</span>$&nbsp;${command}`,
    ];
    switch (command.trim()) {
      case "exit":
        newOutput = [...newOutput, "Goodbye!"];
        router.push("/");
        break;
      case "clear":
        newOutput = [];
        break;
      case "":
        newOutput = [...newOutput, ""];
        break;
      case "sudo":
        newOutput = [...newOutput, "Bet you wish you could sudo!"];
        break;
      case "help":
        newOutput = [
          ...newOutput,
          " Available commands:",
          "&nbsp;clear - Clear the terminal screen",
          "&nbsp;help - Show this help message",
          "&nbsp;about - Information about the terminal",
          "&nbsp;tools - List available tools",
          "&nbsp;games - List available games",
          "&nbsp;echo <text> - Print text to the terminal",
        ];
        break;
      case "tools":
        newOutput = [
          ...newOutput,
          "Available tools:",
          "&nbsp; React",
          "&nbsp; Next.js",
          "&nbsp; Node.js",
          "&nbsp; Express",
          "&nbsp; MongoDB",
          "&nbsp; GraphQL",
        ];
        break;
      case "games":
        newOutput = [
          ...newOutput,
          "Available games:",
          "&nbsp; Chess",
          "&nbsp; Checkers",
          "&nbsp; Tic Tac Toe",
          "&nbsp; Connect Four",
          "&nbsp; Hangman",
        ];
        break;
      default:
        newOutput = [...newOutput, `Command not found: ${command}`];
        break;
    }
    setOutput(newOutput);
    // Scroll to the bottom of the terminal output
    // terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
    scrollToBottom();
  };

  return (
    <div
      ref={terminalRef}
      className={styles.terminal}
      onClick={() => inputRef.current?.focus()}
    >
      {output.map((line, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(line) }}
        />
      ))}
      <div className={styles.line}>
        <span style={{ color: "#97c1a9" }}>~guest</span>
        <span style={{ color: "#c6dbda" }}>@rods-terminal</span>$&nbsp;
        <input
          ref={inputRef}
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          className={styles.input}
          // style={{
          //   backgroundColor: "transparent",
          //   color: "#ffffff",
          //   border: "none",
          //   outline: "none",
          //   fontFamily: "monospace",
          //   fontSize: "14px",
          //   position: "relative",
          //   padding: 0,
          //   margin: 0,
          //   zIndex: 1,
          //   width: "60%",
          //   cursor: "none",
          //     }
          // }
        />
        {/* <div ref={cursorRef} className={styles.cursor}>
          █
        </div> */}
      </div>
    </div>
  );
};

export default CustomTerminal;
