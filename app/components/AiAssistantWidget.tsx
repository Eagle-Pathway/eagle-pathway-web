// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

// interface Message {
//   role: 'user' | 'assistant' | 'system';
//   content: string;
// }

// const ADMIN_API_URL = 'https://eagle-pathway-79kn.vercel.app/api/assistant';

// export default function AiAssistantWidget() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim() || isLoading) return;

//     const userMessage: Message = { role: 'user', content: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const response = await fetch(ADMIN_API_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ messages: [...messages, userMessage] }),
//       });

//       if (!response.ok || !response.body) throw new Error('Network response was not ok');

//       const reader = response.body.getReader();
//       const decoder = new TextDecoder('utf-8');
//       let buffer = '';

//       setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

//       while (true) {
//         const { done, value } = await reader.read();
//         if (done) break;

//         buffer += decoder.decode(value, { stream: true });
//         const lines = buffer.split('\n');
//         buffer = lines.pop() || '';

//         for (const line of lines) {
//           const trimmed = line.trim();
//           if (!trimmed || !trimmed.startsWith('data: ')) continue;

//           const dataStr = trimmed.slice(6);
//           if (dataStr === '[DONE]') continue;

//           try {
//             const data = JSON.parse(dataStr);
//             const content = data.choices?.[0]?.delta?.content;
//             if (content) {
//               setMessages((prev) => {
//                 const next = [...prev];
//                 const last = next[next.length - 1];
//                 if (last && last.role === 'assistant') {
//                   return [...next.slice(0, -1), { ...last, content: last.content + content }];
//                 }
//                 return next;
//               });
//             }
//           } catch {
//             /* ignore partial json */
//           }
//         }
//       }
//     } catch (error) {
//       console.error('Failed to send message:', error);
//       setMessages((prev) => [
//         ...prev,
//         { role: 'assistant', content: 'Sorry, I am currently unavailable. Please try again later.' },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="assistant-root">
//       {isOpen && (
//         <div className="assistant-panel">
//           <div className="assistant-header">
//             <div className="assistant-title">
//               <Image src="/icon.png" alt="" width={22} height={22} className="assistant-logo" />
//               Pathway Advisor
//             </div>
//             <button
//               type="button"
//               onClick={() => setIsOpen(false)}
//               aria-label="Close chat"
//               className="assistant-close"
//             >
//               <X size={20} />
//             </button>
//           </div>

//           <div className="assistant-messages">
//             {messages.length === 0 && (
//               <div className="assistant-empty">
//                 <Image src="/icon.png" alt="" width={40} height={40} className="assistant-empty-icon" />
//                 <p>Ask about scholarships, tutoring or how Eagle Pathway works.</p>
//               </div>
//             )}

//             {messages.map((msg, index) => (
//               <div key={index} className={`assistant-bubble-row ${msg.role}`}>
//                 <div className={`assistant-bubble ${msg.role}`}>{msg.content}</div>
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>

//           <form className="assistant-form" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Ask about scholarships..."
//               disabled={isLoading}
//               className="assistant-input"
//             />
//             <button
//               type="submit"
//               disabled={!input.trim() || isLoading}
//               aria-label="Send message"
//               className="assistant-send"
//             >
//               {isLoading ? <Loader2 size={18} className="spin" /> : <Send size={18} />}
//             </button>
//           </form>
//         </div>
//       )}

//       <button
//         type="button"
//         onClick={() => setIsOpen((v) => !v)}
//         aria-label={isOpen ? 'Hide assistant' : 'Open assistant'}
//         className={`assistant-toggle ${isOpen ? 'hidden' : ''}`}
//       >
//         <MessageCircle size={26} />
//       </button>
//     </div>
//   );
// }
