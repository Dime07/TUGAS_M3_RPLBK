import { useEffect, useState } from 'react';

export default function RightChat(props) {
  const bubble = {
    padding: '10px',
    borderRadius: '3px 5px 3px 5px',
    backgroundColor: 'blue',
    width: 'fit-content',
    height: 'fit-content',
    marginLeft: 'auto',
  };

  const [message, setMessage] = useState(props.message);

  useEffect(() => {
    if (props.message.includes('shit')) {
      alert('heei anda berkata kasar');
    }
  }, [message]);

  return <div style={bubble}>{message}</div>;
}
