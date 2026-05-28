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

// function TodoList(){
//   const todos = [
//     {id : 1, text: " Learn JSX"},
//     {id:2,text : "Understand props"},
//     {id: 3, text : "Master state & events"},
//   ];
//   return (
//     <div>
//       <h2>My React Todos</h2>
//       {/* <ul>
//         <li>Learn JSX</li>
//         <li>Understand props</li>
//         <li>Master state & events</li>
//       </ul> */}
//       <ul>{
//         todos.map((todo) => (
//           <li key={todo.id}>{todo.text}</li>
//         ))
//         }</ul>
//     </div>
//   )
// }
// function App(){
//   return (
//     <div>
//       <TodoList />
//     </div>
//   )
// }


// import SignupForm from './components/Signupform';

// function App(){
//   return (<div>
//     <SignupForm />
//   </div>);
// }

import { BrowserRouter,Link,Route, Routes} from "react-router-dom"


// function Homepage(){
//   return ( <h1 style={{display: "center"}}>Home Page</h1>)
// }
// function Aboutpage(){
//   return ( <h1>About Page</h1>)
// }
// function App(){
//   return (
//     <div>
//       <nav style={{display: "flex",gap:"1rem",marginBottom:"1rem"}}>
//         <Link to="/">Home</Link>{"     "}
//         <Link to="/about">About</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Homepage />}/>
//         <Route path="/about" element={<Aboutpage />}/>
//         <Route path="*" element={<h1>404 Not Found</h1>}/>
//       </Routes>
//       <div>FOOTER</div>
//     </div>
//   )
// }

function Homepage(){
  return ( <div style={{padding:"0 1.5rem"}}>
    <h1 style={{display: "flex"}}>Home</h1>
    <p>You are not logged in. Got to the login page to sign in.</p>
    </div>);
}
function Profile(){
  return (<div>
    <h1>Profile</h1>
    <p>Name : [name]</p>
    <p>show all users</p>
    </div>);
}



  function LoginPage(){
    const [name,setName] = useState("");
    const [user,setUser] = useState({name:"",isAuth:false});
  
    function handleSubmit(e){
      e.preventDefault();
      if (!name.trim()) return;
      setUser({name:name,isAuth:true})
    }
    return (
      <div style={{padding:"0 1.5rem"}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{marginTop: "1rem"}}>
          <label>
            Name
            <input 
            type="text"
            placeholder="type your name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{marginLeft : "0.5rem"}}
            />
          </label>
          <button type="submit" style={{marginLeft:"0.5rem"}}>
            Login in
          </button>
        </form>
        {user.isAuth && <p>User Logged IN</p>}
      </div>
    );
  }
  function Navbar(){
    return (
      <header
        style={{
          padding:"1rem 1.5rem",
          marginBottom : "1rem",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          justifyContent : "space-between",
        }}>
          <nav style = {{gap:"1rem",display:"flex"}}>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          </nav>
          <div>
            <Link to ="/login">Login</Link>
          </div>
      </header>
    );}
  function App(){
    return (
      <div><Navbar />
        <Routes>
          <Route path="/" element={<Homepage /> }/>
          <Route path="/profile" element={<Profile /> }/>
          <Route path="/login" element={<LoginPage /> }/>
          <Route path="*" element={<h1 style = {{padding:"0 1.5rem"}}>404 Not Found</h1>}/>
        </Routes>
      </div>
    )
  }


export default App; 