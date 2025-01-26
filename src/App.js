import { useReducer ,useRef, useState, useEffect, useMemo} from 'react';
import { useHistory } from 'react-router-dom';

export default function App() {
  const [show, setShow] = useState(true)

  // const history = useHistory();

  // const handleNavigate = () => {
  //   history.push('/article');
  // };
  
  return (
    <div>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Son />}
      {/* <button onClick={handleNavigate}>Go to Article</button> */}
    </div>
  )
}

function Son () {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('timer')
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
  return <div>it is son </div>
}

