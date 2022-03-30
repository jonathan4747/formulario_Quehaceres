import './App.css';
import {useState} from 'react';
import Actividades from './componentes/Actividades/Actividades';

function App() {

  const todosQuehaceres =[];
  const [todos, setTodos] = useState(todosQuehaceres);
  const [ nuevoQuehacer,setNuevoQuehacer]=useState('');

 const agregarQuehacer=(event)=>{
  event.preventDefault();
  let Quehaceres={
    quehacer:nuevoQuehacer,
  }
  setTodos((PrevTodos)=>[...todos,Quehaceres]);
  setNuevoQuehacer('');
 }
 const remove=(quehacer)=>{
   setTodos(todos.filter((element) =>(quehacer!=element.quehacer)))
 }
 //console.log(todos)
  return (
    <div className='pagina'>
      <form onSubmit={agregarQuehacer}>
            <input type="text" id='quehacer' 
                   value={nuevoQuehacer} 
                   onChange={(event)=> setNuevoQuehacer(event.target.value)}/>
            <div>
              <button type='submit' className='button1'>
                  ADD
              </button>
            </div>
      </form>
      <div>
        {
          todos.map((todo, indice) => {
            return(
              <Actividades todo={todo} key={'todo_' + indice} remove={remove}/>
              )
            })
        }
      </div>
    </div>
  );
}

export default App;
