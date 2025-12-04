/**
 * Root - Global wrapper component for Docusaurus
 *
 * This component wraps the entire Docusaurus application,
 * allowing us to add global UI elements like the chatbot.
 */
import React from 'react';

interface RootProps {
  children: React.ReactNode;
}

export default function Root({ children }: RootProps): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const sendMessage = async (question: string) => {
    if (!question.trim()) return;

    const userMessage = {
      role: 'user' as const,
      content: question,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      console.log('Sending question to API:', question);
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      console.log('API response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', errorText);
        throw new Error(`API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('API response data:', data);

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant' as const,
          content: data.answer,
          sources: data.sources,
          timestamp: new Date(),
        },
      ]);
    } catch (err) {
      console.error('Chatbot error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant' as const,
          content: `❌ **Error**: ${errorMessage}\n\nPlease check the browser console for details, or try asking another question.`,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {children}

      {/* Floating chatbot icon */}
      <button
        className="chatbot-icon"
        onClick={toggleOpen}
        aria-label="Open chatbot"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
          cursor: 'pointer',
          color: 'white',
          fontSize: '24px',
          zIndex: 1000,
        }}
      >
        💬
      </button>

      {/* Chatbot modal */}
      {isOpen && (
        <div
          className="chatbot-overlay"
          onClick={toggleOpen}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
          }}
        >
          <div
            className="chatbot-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '90%',
              maxWidth: '600px',
              height: '80vh',
              maxHeight: '700px',
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3 style={{ margin: 0 }}>💬 Textbook Assistant</h3>
              <button
                onClick={toggleOpen}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  color: 'white',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1.25rem',
                }}
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {messages.length === 0 && (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                  <p>👋 Hi! I'm your Physical AI textbook assistant.</p>
                  <p>Ask me anything about the course content!</p>
                </div>
              )}

              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div
                    style={{
                      maxWidth: '80%',
                      padding: '1rem 1.25rem',
                      borderRadius: '16px',
                      background:
                        msg.role === 'user'
                          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                          : '#f1f5f9',
                      color: msg.role === 'user' ? 'white' : '#1e293b',
                    }}
                  >
                    <p style={{ margin: 0 }}>{msg.content}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: '16px',
                      background: '#f1f5f9',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>⏳</span>
                      <span>Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = (e.target as any).question;
                sendMessage(input.value);
                input.value = '';
              }}
              style={{
                padding: '1.5rem',
                borderTop: '1px solid #e2e8f0',
                display: 'flex',
                gap: '0.75rem',
              }}
            >
              <input
                name="question"
                type="text"
                placeholder="Ask a question..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '0.75rem 1rem',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                }}
              >
                ➤
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
