import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import { FaTimes, FaCommentDots } from 'react-icons/fa';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const chatWindowRef = useRef(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = async (message) => {
        if (!message.trim()) return;
        const userMessage = { text: message, isBot: false };
        setMessages([...messages, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch('http://localhost:2999/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ask: message }),
            });

            if (response.ok) {
                const data = await response.json();
                const botResponse = { text: data.data, isBot: true };
                setMessages(prevMessages => [...prevMessages, botResponse]);
            } else {
                const errorResponse = { text: "Có lỗi xảy ra từ phía server.", isBot: true };
                setMessages(prevMessages => [...prevMessages, errorResponse]);
            }
        } catch (error) {
            const errorResponse = { text: "Có lỗi xảy ra. Vui lòng thử lại sau.", isBot: true };
            setMessages(prevMessages => [...prevMessages, errorResponse]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);

    const createMarkup = (html) => {
        return { __html: html };
    };

    return (
        <div>
            <div className={`chatbot-icon ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
                <FaCommentDots />
            </div>
            {isOpen && (
                <div className="chatbot-popup">
                    <div className="chat-header">
                        <span>Chatbot</span>
                        <FaTimes onClick={toggleChat} className="close-btn" />
                    </div>
                    <div className="chat-content">
                        <div className="chat-window" ref={chatWindowRef}>
                            {messages.map((message, index) => (
                                <div key={index} className={`message ${message.isBot ? 'bot' : 'user'}`}>
                                    {message.isBot
                                        ? <p dangerouslySetInnerHTML={createMarkup(message.text)}></p>
                                        : <p>{message.text}</p>}
                                </div>
                            ))}
                            {loading && ( // Hiển thị khi đang xử lý
                                <div className="message bot loading">
                                    <div className="typing">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Hỏi gì đó..."
                                onKeyPress={(e) => { if (e.key === 'Enter') handleSend(input); }}
                            />
                            <button onClick={() => handleSend(input)}>Gửi</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
