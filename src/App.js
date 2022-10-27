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

  const title = {
    fontSize: '24pt',
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: '1em'
  }

  const subTitle = {
    fontSize: '16pt',
    color: 'white',
    paddingLeft: '1.5em'
  }

  const leftInput = {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  const rightInput = {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  const container = {
    display: 'flex'
  }
  

  return (
    <div>
      <p style={title}>
        Fake Chat Filter App
      </p>
      <p style={subTitle}>
        This word not allowed (shit)
      </p>
      <Main chat={chat}/>
      <div style={container }>
        <div style={leftInput}>
          <div style={leftInput}>
            <input  id="input-left" onChange={(e) => setLeftChat({message: e.target.value, type: 'left'})}/>
            <button onClick={sendToLeft}>Kirim </button>
          </div>
        </div>

        <div style={rightInput}>
          <div style={rightInput}>
            <input id="input-right" onChange={(e) => setRightChat({message: e.target.value, type: 'right'})}/>
            <button  onClick={sendToRight}>Kirim </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
