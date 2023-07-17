import '../styles/checkbox.css'; 
import TodoListComponent from '../components/todo-list';
import todoList from '../data/mock-data/todolist.json';
import Sidebar from '../components/sidebar';
import '../styles/sidebar.css';
import { usePagePadding } from './function/pagePadding';

// redux
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { onSidebarChange } from '../redux/sidebar';

function Todo() {
  // redux
  const pagePadding = useSelector((state: RootState) => state.pagePadding.value)
  const sidebar = useSelector((state: RootState) => state.sidebar.value)
  const dispatch = useDispatch()

  const toggleSidebar = () => {
    dispatch(onSidebarChange(!sidebar));
  };

  usePagePadding();

  const pageContentStyle = {
    paddingLeft: `${pagePadding}rem`,
    paddingRight: `${pagePadding}rem`,
  };

  return (
    <div className={`page-container ${sidebar ? 'ml-80' : ''}`}>
      <button onClick={toggleSidebar}>Toggle</button>
      {sidebar && <Sidebar />}
      <div className='pt-padding-heading1' style={pageContentStyle}>
        <h1 className="text-3xl font-bold">
          Task
        </h1>
        <div className='pt-padding-component-medium'></div>
        {todoList['todolist'].map((title, index) => (
          <TodoListComponent key={index} title={title} index={index}/>
        ))}
      </div>
    </div>
  );
}

export default Todo;
