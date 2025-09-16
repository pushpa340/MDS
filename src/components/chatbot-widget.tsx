
'use client';

import { useState, useEffect, useRef } from 'react';

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [query, setQuery] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); // Added name field

  const chatWindowRef = useRef<HTMLDivElement>(null);
  const chatButtonRef = useRef<HTMLButtonElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target as Node) &&
        chatButtonRef.current &&
        !chatButtonRef.current.contains(event.target as Node)
      ) {
        closeChat();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim() || !email.trim()) {
      alert('Please fill in your query and email address.');
      return;
    }
    if (phone.trim() && !/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Simulate API call and show success
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Simulating query submission:", { name, email, phone, query });

      setShowSuccess(true);
      setQuery('');
      setPhone('');
      setEmail('');
      setName('');

      setTimeout(() => {
        setShowSuccess(false);
        closeChat();
      }, 3000);

    } catch (error) {
      console.error(error);
      alert('There was an error submitting your query. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        .chatbot-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
        }
        .chat-button {
            width: 60px;
            height: 60px;
            background: #0C3C60;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(12, 60, 96, 0.4);
            transition: all 0.3s ease;
            border: none;
        }
        .chat-button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(12, 60, 96, 0.5);
        }
        .chat-button i {
            color: white;
            font-size: 24px;
            transition: all 0.3s ease;
        }
        .chat-button.active i:before {
            content: "\\f00d";
        }
        .chat-window {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 350px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
            transform: scale(0) translateY(20px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            overflow: hidden;
        }
        .chat-window.open {
            transform: scale(1) translateY(0);
            opacity: 1;
            visibility: visible;
        }
        .chat-header {
            background: #0C3C60;
            color: white;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
        }
        .chat-header h3 {
            font-size: 18px;
            font-weight: 600;
            margin: 0;
            display: flex;
            align-items: center;
        }
        .chat-header i {
            margin-right: 8px;
        }
        .minimize-btn {
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            padding: 5px;
            border-radius: 4px;
            transition: background 0.2s;
        }
        .minimize-btn:hover {
            background: rgba(255, 255, 255, 0.1);
        }
        .team-images {
            display: flex;
            justify-content: center;
            margin: 15px 0 10px;
            position: relative;
        }
        .team-member {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border: 3px solid white;
            margin: 0 -8px;
            background: #ddd;
            overflow: hidden;
            position: relative;
            animation: float 3s ease-in-out infinite;
        }
        .team-member img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .team-member:nth-child(1) { background: linear-gradient(135deg, #3498db, #2980b9); }
        .team-member:nth-child(2) { background: linear-gradient(135deg, #95a5a6, #7f8c8d); animation-delay: -1s; }
        .team-member:nth-child(3) { background: linear-gradient(135deg, #f39c12, #d68910); animation-delay: -2s; }
        .contact-info {
            text-align: center;
            margin-bottom: 15px;
        }
        .phone-number {
            color: white;
            font-size: 20px;
            font-weight: bold;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 5px;
        }
        .phone-number i {
            margin-right: 8px;
        }
        .availability {
            color: rgba(255, 255, 255, 0.9);
            font-size: 12px;
        }
        .chat-form {
            padding: 25px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 6px;
            color: #555;
            font-weight: 500;
            font-size: 14px;
        }
        .form-control {
            width: 100%;
            padding: 12px;
            border: 2px solid #e1e5e9;
            border-radius: 8px;
            font-size: 14px;
            transition: all 0.3s ease;
            background: #f8f9fa;
            color: #333;
        }
        .form-control:focus {
            outline: none;
            border-color: #0C3C60;
            background: white;
            box-shadow: 0 0 0 3px rgba(12, 60, 96, 0.1);
        }
        .form-control::placeholder {
            color: #aaa;
        }
        textarea.form-control {
            min-height: 80px;
            resize: vertical;
        }
        .phone-input {
            display: flex;
            gap: 8px;
        }
        .country-flag {
            width: 70px;
            background: #e9ecef;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: none;
            border-radius: 8px 0 0 8px;
        }
        .country-code {
            width: 60px;
            text-align: center;
            background: #e9ecef;
            border-right: none;
        }
        .phone-main {
            flex: 1;
            border-radius: 0 8px 8px 0;
        }
        .submit-btn {
            width: 100%;
            padding: 14px;
            background: #0C3C60;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(12, 60, 96, 0.3);
        }
        .submit-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }
        .success-message {
            background: #d4edda;
            border: 1px solid #c3e6cb;
            color: #155724;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            display: none;
        }
        .success-message.show {
            display: block;
        }
        @media (max-width: 480px) {
            .chat-window {
                width: 320px;
                right: -10px;
            }
            .chatbot-widget {
                right: 10px;
                bottom: 10px;
            }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(12, 60, 96, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(12, 60, 96, 0); }
          100% { box-shadow: 0 0 0 0 rgba(12, 60, 96, 0); }
        }
        .chat-button {
          animation: pulse 2s infinite;
        }
      `}</style>
      <div className="chatbot-widget">
        <button className={`chat-button ${isOpen ? 'active' : ''}`} id="chatButton" ref={chatButtonRef} onClick={toggleChat}>
          <i className="fas fa-comments"></i>
        </button>

        <div className={`chat-window ${isOpen ? 'open' : ''}`} id="chatWindow" ref={chatWindowRef}>
          <div className="chat-header">
            <div>
              <h3><i className="fas fa-headset"></i> Drop us a Query</h3>
              <div className="team-images">
                <div className="team-member">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" alt="Team Member 1" data-ai-hint="woman portrait" />
                </div>
                <div className="team-member">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Team Member 2" data-ai-hint="man portrait" />
                </div>
                <div className="team-member">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" alt="Team Member 3" data-ai-hint="woman smiling" />
                </div>
              </div>
              <div className="contact-info">
                <a href="tel:+918447242558" className="phone-number">
                  <i className="fas fa-phone"></i>
                  +91 8447242558
                </a>
                <div className="availability">Available 24x7 for your queries</div>
              </div>
            </div>
            <button className="minimize-btn" id="minimizeBtn" onClick={closeChat}>
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>

          <div className="chat-form">
            <div className={`success-message ${showSuccess ? 'show' : ''}`} id="successMessage">
              <i className="fas fa-check-circle"></i> Thank you! We'll get back to you soon.
            </div>

            <form id="queryForm" onSubmit={handleSubmit}>
               <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  id="query"
                  placeholder="Type your query here*"
                  required
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="phone-input">
                  <div className="country-flag">🇮🇳</div>
                  <input
                    type="text"
                    className="form-control country-code"
                    value="+91"
                    readOnly
                  />
                  <input
                    type="tel"
                    className="form-control phone-main"
                    id="phone"
                    placeholder="Enter contact"
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      if (value.length <= 10) {
                        setPhone(value);
                      }
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Id</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="marcomdigitalsolution@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button type="submit" className="submit-btn" id="submitBtn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><i className="fas fa-spinner fa-spin"></i> Submitting...</>
                ) : (
                  <><i className="fas fa-paper-plane"></i> Submit Query</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
