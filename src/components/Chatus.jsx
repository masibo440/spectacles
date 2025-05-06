import React, { useState } from 'react';

const chatPairs = [
  { pattern: /hi|hello|hey/i, responses: [
    "Hello, Welcome to Kony Optic. How can I assist you today?",
    "Hi there! Welcome to Kony Optic. How can I help?"
  ]},
  { pattern: /how are you\?/i, responses: [
    "I'm doing great, thanks for asking!",
    "I'm good, how about you?",
    "I'm doing marvelous, and you?"
  ]},
  { pattern: /treatement/i, responses: [
    "We cater for different types of diseases. Which one are you facing?"
  ]},
  { pattern: /spectacle|gogles/i, responses: [
    "We have different types of spectacles. Please state the type or disease for proper prescription."
  ]},
  { pattern: /beauty gogles/i, responses: [
    "We offer beauty goggles which serve as ornaments/jewelry. They are for both male and female. What gender are you?"
  ]},
  { pattern: /male/i, responses: [
    "Wow! Here are some of our male ornamented goggles:\n1. Sundark Optica\n2. Eagle-like Optica\n3. 03Lily Optica"
  ]},
  { pattern: /female/i, responses: [
    "Wow! Here are some of our female ornamented goggles:\n1. Sundark Optica\n2. Potent Optica\n3. Transparent Optica"
  ]},
  { pattern: /color/i, responses: [
    "I like all colors! What about you?",
    "I don't have a favorite color!"
  ]},
  { pattern: /short distance/i, responses: [
    "This is where the patient cannot recognize objects near them. Would you like to know more or are you experiencing this?"
  ]},
  { pattern: /long distance/i, responses: [
    "This is where a patient can’t see nearby objects but can view distant ones. Would you like to know more?"
  ]},
  { pattern: /ametropia/i, responses: [
    "There are different types of ametropia. Which one do you have?"
  ]},
  { pattern: /hyperopia|farsighted/i, responses: [
    "You are in danger of losing your sight. Use PLUS SPHERICAL LENS."
  ]},
  { pattern: /myopia|nearsighted/i, responses: [
    "One focal point is in front of the retina. Use MINUS SPHERICAL LENS."
  ]},
  { pattern: /astigmatism/i, responses: [
    "There may be two focal points, one or both not on the retina. Use CYLINDER or SPHEROCYLINDER LENS."
  ]},
  { pattern: /anisometropis/i, responses: [
    "This condition means the two eyes have unequal refractive power. One eye may be nearsighted, the other farsighted."
  ]},
  { pattern: /amblyopia/i, responses: [
    "It is a decrease in vision in one or both eyes without structural abnormalities explaining it."
  ]},
  { pattern: /recommendation/i, responses: [
    "Regular use is recommended."
  ]}
];

function getBotResponse(input) {
  for (let pair of chatPairs) {
    if (pair.pattern.test(input)) {
      const responses = pair.responses;
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  return "Sorry, I didn't understand that. Could you ask something else?";
}

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    const botMessage = { sender: 'bot', text: getBotResponse(input) };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Kony Optic ChatBot</h1>
      <div className="border p-3 h-64 overflow-y-auto bg-gray-50 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-green-100'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 border p-2 rounded-l"
          placeholder="Type your message..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded-r">Send</button>
      </div>
    </div>
  );
}
