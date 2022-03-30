import './Actividades.css'
function Actividades (props){
    
    return(
        <div>
          <input type="checkbox" name="quehacer" id="quehacer" value={props.todo.quehacer} className='quehacer'/>
          <label htmlFor="quehacer">{props.todo.quehacer}</label>
          <button onClick={() => props.remove(props.todo.quehacer)}>
              Eliminar
          </button>
        </div>
    )
}
export default Actividades