import React, { useEffect, useState } from "react";
import './App.css';
import { Arsh } from './Componant/Arsh';



function App() {
   const toRotate = [" a Full-stack Developer.", " a Freelacner."];
    const period = 2000;
  
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(200);
  
    useEffect(() => {
      const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1);
  
        setText(updatedText);
  
        let newDelta = 200 - Math.random() * 100;
        if (isDeleting) {
          newDelta /= 2;
        }
  
        if (!isDeleting && updatedText === fullText) {
          newDelta = period;
          setIsDeleting(true);
        } else if (isDeleting && updatedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          newDelta = 500;
        }
  
        setDelta(newDelta);
      };
  
      const timer = setTimeout(tick, delta);
      return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, delta]);


    // here
  


  return (
    
    <>

    <Arsh  typedText={text}/>
    </>
  );
}

export default App;
