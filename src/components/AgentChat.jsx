import { useEffect, useRef, useState } from "react";
import { getAgentReply, promptButtons, seedMessages } from "../data/agent.js";

function AgentChat() {
  const [isMinimized, setIsMinimized] = useState(() =>
    window.matchMedia("(max-width: 720px)").matches
  );
  const [isPending, setIsPending] = useState(false);
  const [messages, setMessages] = useState(seedMessages);
  const [input, setInput] = useState("");
  const chatLogRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!chatLogRef.current) return;
    chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const submitPrompt = (message) => {
    const trimmed = message.trim();
    if (!trimmed || isPending) return;

    clearTimeout(timeoutRef.current);
    setMessages((items) => [...items, { author: "You", message: trimmed }]);
    setIsPending(true);
    timeoutRef.current = window.setTimeout(() => {
      setMessages((items) => [...items, { author: "Agent", message: getAgentReply(trimmed) }]);
      setIsPending(false);
    }, 260);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitPrompt(input);
    setInput("");
  };

  return (
    <aside className={`agent-chat${isMinimized ? " is-minimized" : ""}`} aria-label="Mock agent chat">
      <div className="chat-header">
        <div>
          <span className="agent-status" aria-hidden="true"></span>
          <strong>Nova agent</strong>
        </div>
        <button
          type="button"
          data-chat-toggle
          aria-label={`${isMinimized ? "Expand" : "Minimize"} agent chat`}
          onClick={() => setIsMinimized((minimized) => !minimized)}
        >
          {isMinimized ? "+" : "−"}
        </button>
      </div>
      <div className="agent-chat-body">
        <div className="context-strip" aria-label="Current agent context">
          <span>ACH batch #8421</span>
          <span>$980K</span>
          <span>2 exceptions</span>
        </div>
        <div className="chat-log" data-chat-log aria-live="polite" ref={chatLogRef}>
          {messages.map((item, index) => (
            <article
              className={`chat-message ${item.author === "You" ? "user-message" : "agent-message"}`}
              key={`${item.author}-${index}-${item.message}`}
            >
              <span>{item.author}</span>
              <p>{item.message}</p>
            </article>
          ))}
        </div>
        <div className="prompt-row" aria-label="Suggested prompts">
          {promptButtons.map((button) => (
            <button
              type="button"
              data-prompt={button.prompt}
              key={button.prompt}
              disabled={isPending}
              onClick={() => submitPrompt(button.prompt)}
            >
              {button.label}
            </button>
          ))}
        </div>
        <form className="chat-composer" data-chat-form onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="agent-message">
            Message the agent
          </label>
          <input
            id="agent-message"
            name="message"
            type="text"
            placeholder="Ask about this batch..."
            autoComplete="off"
            value={input}
            disabled={isPending}
            onChange={(event) => setInput(event.target.value)}
          />
          <button className="button button-small" type="submit" disabled={isPending}>
            {isPending ? "Sending" : "Send"}
          </button>
        </form>
      </div>
    </aside>
  );
}

export default AgentChat;
