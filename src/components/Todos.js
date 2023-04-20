import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';

export const Todos = ({handleEditClick, editFormVisibility}) => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos from the store
  const todos = useSelector((state)=>state.operationsReducer);
  return todos.map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
            )}
            <p style={todo.completed===true?{textDecoration:'line-through',color:'white'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <span onClick={()=>handleEditClick(todo)} style={{padding: '5px',top: '2px',position: 'relative',boxShadow: '0px 0px 20px lavender',borderRadius: '50%',}}><Icon icon={edit2}/></span>
                  <span onClick={()=>dispatch(removeTodo(todo.id))} style={{padding: '5px',top: '2px',position: 'relative',boxShadow: '0px 0px 20px lavender',borderRadius: '50%',}}><Icon icon={trash}/></span>
                </>
              )}
        </div>
    </div>
  ))
}
