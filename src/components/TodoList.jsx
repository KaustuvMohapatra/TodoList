import React from 'react';
import TodoCard from './TodoCard'; // Make sure this import path is correct

export default function TodoList(props) {
  const {todos}=props
  
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {  
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}> {/* Pass key as a variable */}
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
