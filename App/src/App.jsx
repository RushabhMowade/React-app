import { useState } from 'react';
import './App.css'

// function Greet(props){
//   return <h1>Greet1:Hello {props.name}, How are youu</h1>;

// }
// function Greet2({name}){
//   return <h1>Greet2:Hello {name}, How are youu</h1>;

// }
// function App() {
//   const name = getname();
//   const age = 20;
//   const [show, setshow] = useState(true);

//   function toggleshow(){
//     setshow(!show);
//   }

//   return (<div>
    
//     <Greet2 name={getname()} />
//     <button onClick={toggleshow}>Show</button>
//     {show && <Greet name={"Rushabh"}/>
//     }   
//     </div>
//     );


//   function getname(){
//     return "Vaishnavi";
//   }
  
// }


// function App() {
//   const [name, setName] = useState("");

//   function handleChange(event) {
//     const value = event.target.value;
//     setName(value);
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Name.."
//         onChange={handleChange}
//       />

//       <h1>{name}</h1>
//     </div>
//   );
// }

function TodoList(){
  const todos = [
    {id : 1, text: " Learn JSX"},
    {id:2,text : "Understand props"},
    {id: 3, text : "Master state & events"},
  ];
  return (
    <div>
      <h2>My React Todos</h2>
      {/* <ul>
        <li>Learn JSX</li>
        <li>Understand props</li>
        <li>Master state & events</li>
      </ul> */}
      <ul>{
        todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))
        }</ul>
    </div>
  )
}
function App(){
  return (
    <div>
      <TodoList />
    </div>
  )
}

export default App;