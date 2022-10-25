import { useState } from "react";
import Main from "./pages/main";

function App() {

  const [chat, setChat] = useState([]);
  const [leftChat, setLeftChat] = useState({});
  const [rightChat, setRightChat] = useState({});


  function sendToLeft(){
    setChat([...chat, leftChat]);
    document.getElementById('input-left').value = ''
  }

  function sendToRight(){
    setChat([...chat, rightChat]);
    document.getElementById('input-right').value = ''
  }

  return (
    <div>
      <p>
        Fake Chat Flter App
      </p>
      <p>
        This word not allowed (shit)
      </p>
      <Main chat={chat}/>
      <div>
        <div>
          <input id="input-left" onChange={(e) => setLeftChat({message: e.target.value, type: 'left'})}/>
          <button onClick={sendToLeft}>Kirim </button>
        </div>

        <div>
          <input id="input-right" onChange={(e) => setRightChat({message: e.target.value, type: 'right'})}/>
          <button  onClick={sendToRight}>Kirim </button>
        </div>

      </div>
    </div>
  );
}

export default App;
