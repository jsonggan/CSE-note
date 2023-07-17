import React from 'react';
import '../styles/checkbox.css'; 

interface TodoListComponentProps {
  title: string;
  index: number;
}

function TodoListComponent({title, index}:TodoListComponentProps) {
  return (
    <label className={`flex text-center items-center ${index === 0 ? '' : 'pt-padding-component-small'}`}>        
      <input type="checkbox" className='checkbox-round'/>
      <p className='pl-padding-component-small'>{title}</p>
    </label>
  );
}

export default TodoListComponent;
