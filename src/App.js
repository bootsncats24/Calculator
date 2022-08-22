import {useState} from 'react';


function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("" );

  const ops = ['/', '*', '+','-','.'];
  

  const updateCalc = vaLue => {
    if (
      ops.includes(vaLue) && calc === ' ' ||
      ops.includes(vaLue) && ops.includes(calc.slice(-1))
    ){
      return;
    }

    setCalc(calc + vaLue);
    if (!ops.includes(vaLue)) {
      setResult(eval(calc + vaLue).toString());
    }
  }

  const createDigits = () => {
    const digits = [];


    for (let i=1; i < 10; i++) {
      digits.push(
        <button
        onClick={() => updateCalc(i.toString())}
         key={i}>
          {i}
          </button>
      )
    }
    return digits;
  }

  const calculate = ()=> {
    setCalc(eval(calc).toString());
  }

const deleteLast = () => {
  if (calc == ' ') {
    return;
  }
  const vaLue = calc.slice(0, -1);
  setCalc(vaLue);
}






  return (
   <div className="app">
   <div className="calulator">
    <div className="display">
   {result ? <span>({result})</span> : ' '} &nbsp;
   {calc || "0"}
    </div>
    
   <div className="operators">
    <button onClick={()=> updateCalc('/')}>/</button>
    <button onClick={()=> updateCalc('*')}>*</button>
    <button onClick={()=> updateCalc('+')}>+</button>
    <button onClick={()=> updateCalc('-')}>-</button>

    <button onClick={deleteLast}>Delete</button>
   </div>
   <div className="digits">
    {createDigits()}
    <button  onClick={()=> updateCalc('0')}>0</button>
    <button  onClick={()=> updateCalc('.')}>.</button>

    <button onClick={calculate}>=</button>
   </div>
   </div>
   </div>

  );
}

export default App;
