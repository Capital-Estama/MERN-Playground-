import React, {useState} from 'react';

const Todo = () => {
    //vars
    let [TodoName, setTodoName] = useState("");
    let [Status, setStatus] = useState(false);
    // let [IsChecked, setIsChecked] = useState(false);
    let [TodoList, setTodoList] = useState([]);
    
        /////// onSubmit= {NewAdd} (e) => {{?}}
        const NewAdd = (e) => {

            e.preventDefault();
            // New todo Obj
            let newTodo = {TodoName, Status};
            // e.target.value setTodoName("");
            setTodoName("");

            setTodoList([...TodoList, newTodo]);
        }

        ////
        const Push = (i) =>{
            // Todo: Move to ...Spread 
            TodoList[i].Status = !TodoList[i].Status;
            //{var } = [...!TodoList[i]]
            setTodoList(TodoList);
            //const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
            //const [firstAnimal, secondAnimal] = animals;
 
        }
        

        ///
        const Delete =(i) =>{
             //  array.filter(function(currentValue, index, arr), thisValue)
            let Filter = TodoList.filter((item, index) =>{
                return index != i
            })

            setTodoList(Filter)
        }
        // bootstrap instead 
        // const boxStyle = {backgroundColor: "#87cefa", color:'#d3d3d3', borderRadius: '50px'};


    return (
        <div className='m-3 text-center p-3 mb-2 bg-secondary text-white'>

            <form onSubmit= {NewAdd} >
                <label className='m-3' htmlFor="todo">Todo:</label>
                <input  onChange={(e) => {setTodoName(e.target.value)} }  name='todo' type="text" value={TodoName} />
                

                <input className='m-2 btn  btn-warning' type="submit" value="submit" />
            </form>

            <div>
                {

                    TodoList.map((task, i) =>{
                        return <div className="d-flex justify-content-center" key={i}>
                            <h1 style={{textDecoration: task.Status? 'line-through' 
                            : null}}>{task.TodoName}</h1>

                            
                                
                                <div className='m-2'>  
                                    <button className='btn btn-danger' onClick={() => Delete(i)}>Delete</button>
                                </div>
                                
                                <div className='m-2'>
                                    <input  id='checkBox' type="checkbox" onClick={() => Push(i)}  />  
                                </div>
                           
                            
                            
                            
                        </div>
                    })

                }
            </div>

        </div>
    );
};


export default Todo;