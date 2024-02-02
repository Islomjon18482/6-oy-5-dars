import './App.css'
import Header from './Components/Header'
import Input from './Components/Input'
import List from './Components/List'
import { useState } from 'react' 
import { useEffect } from 'react'

function App() {
  const [inpValue, setInpValue] = useState("")


  function getInpValue(e){
    setInpValue(e.target.value)
  }


  function validate(){
    if(!inpValue){
      alert("Matn kiritilishi shart")
      return false
    }
    if(!inpValue.trim()){
      alert("Matn probellardan iborat bo'lishi mumkin emas")
      return false
    }
    return true
  }


  function hendleClick() {
    if (validate()) {
      const userText = {
        text: inpValue,
        id: Date.now(),
      };
  
      let data = localStorage.getItem("info") ? JSON.parse(localStorage.getItem("info")) : [];
  
      data = [...data, userText]; 
  
      localStorage.setItem("info", JSON.stringify(data));

      setInpValue("")
    }
  }

  function Delete(id) {
    let newData = data.filter(todo => todo.id !== id);
    localStorage.setItem("info", JSON.stringify(newData));
  }


  function create() {
    let data = JSON.parse(localStorage.getItem("info")) || [];
    return data.length > 0 && data.map((el) => (
      <List key={el.id} id={el.id} text={el.text} onClick={Delete}></List>
    ));
  }

  return (
    <>
    <div className="todo">
      <Header></Header>
      <Input value={inpValue} onChange={getInpValue} onClick={hendleClick}></Input>
      <div>{create()}</div>
    </div>
    </>
  )
}

export default App
