import {useState}from "react";
import './App.css';
import user1Icon from "./Avatar User2.svg";
import user2Icon from "./Avatar User.png";
import sendIcon from "./send.png"


function App() {
    // UseState and Functions

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
        user: "User1",
        text: inputUser1,
        timestamp: Date.now(),
      };
      setMessages([...messages, newMessage]);
      setInputUser1("");
    };
  
    const user2Send = (e) => {
      e.preventDefault();
      const newMessage = {
        user: "User2",
        text: inputUser2,
        timestamp: Date.now(),
      };
      setMessages([...messages, newMessage]);
      setInputUser2("");
    };
  
    // sort messages
    const sortedMessages = messages.slice().sort((a, b) => a.timestamp - b.timestamp);
  
    return (
      <div className="app">
      <div className="container">
        <div className="chat">

            {/* output */}

        <div className="output">
          {sortedMessages.map((message, index) => (
            <div className={`message ${message.user}`} key={index}>
              
              {/* change user Icons */}

              {message.user === "User1" ? (
                <img src={user1Icon} alt="User1 Icon" className="user-icon" />
              ) : (
                <img src={user2Icon} alt="User2 Icon" className="user-icon" />
              )}
            <div className="message-text">   {message.text}</div>
            </div>
          ))}
        </div>

           {/* Input */}

          <div className="input">
            <form onSubmit={user1Send}>
              <h1>User 1</h1>
              <input
                type="text"
                onChange={user1InputChange}
                value={inputUser1}
              />
                <img src={sendIcon} alt="Icon" className="icon" />
            </form>
  
            <form onSubmit={user2Send}>
              <h2>User 2</h2>
              <input
                type="text"
                onChange={user2InputChange}
                value={inputUser2}
                
              />
              <img src={sendIcon} alt="Icon" className="icon" />
            </form>
          </div>
        </div>
      </div>
      </div>
    );
    
  }
  
export default App;
