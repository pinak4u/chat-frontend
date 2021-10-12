import './App.css';
import MessageComponent from './components/MessageComponent';
import UserChatComponent from './components/UserChatComponent';

function App() {
  return (
    <div className="App">
      <UserChatComponent/>
      <MessageComponent/>
    </div>
  );
}

export default App;
