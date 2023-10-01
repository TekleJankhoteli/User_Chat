import {useState}from "react";
import './App.css';
import user1Icon from "./Avatar User2";


function App() {
    const [messages, setMessages] = useState([]);
    const [inputUser1, setInputUser1] = useState("");
    const [inputUser2, setInputUser2] = useState("");
  
    const user1InputChange = (e) => {
      setInputUser1(e.target.value);
    };
  
    const user2InputChange = (e) => {
      setInputUser2(e.target.value);
    };
  
    const user1Send = (e) => {
      e.preventDefault();
      const newMessage = {
        user: "User 1",
        text: inputUser1,
        timestamp: Date.now(),
      };
      setMessages([...messages, newMessage]);
      setInputUser1("");
    };
  
    const user2Send = (e) => {
      e.preventDefault();
      const newMessage = {
        user: "User 2",
        text: inputUser2,
        timestamp: Date.now(),
      };
      setMessages([...messages, newMessage]);
      setInputUser2("");
    };
  
    
    const sortedMessages = messages.slice().sort((a, b) => a.timestamp - b.timestamp);
  
    return (
      <div className="container">
        <div className="chat">
          <div className="output">
            {sortedMessages.map((message, index) => (
              <div className={`message ${message.user}`} key={index}>
                {message.user}: {message.text}
              </div>
            ))}
          </div>
          <div className="input">
            <form onSubmit={user1Send}>
              <h1>User 1</h1>
             <img src={user1Icon} alt="" />
              <input
                type="text"
                onChange={user1InputChange}
                value={inputUser1}
              />
            </form>
  
            <form onSubmit={user2Send}>
              <h2>User 2</h2>
              <input
                type="text"
                onChange={user2InputChange}
                value={inputUser2}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
  
export default App;
