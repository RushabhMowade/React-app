
import './App.css'

function Greet(props){
  return <h1>Greet1:Hello {props.name}, How are youu</h1>;

}
function Greet2({name}){
  return <h1>Greet2:Hello {name}, How are youu</h1>;

}
function App() {
  const name = getname();
  const age = 20;
  const show = false;

  function toggleshow(){
    if(show) show = false;
    else show = true;
  }

  return (<div>
    
    <Greet2 name={getname()} />
    <button onClick={toggleshow}>Show</button>
    {show && <Greet name={"Rushabh"}/>
    }   
    </div>
    );


  function getname(){
    return "Vaishnavi";
  }
  
}

export default App
