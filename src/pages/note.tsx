import '../styles/checkbox.css'; 
import TodoListComponent from '../components/todo-list';
import todoList from '../data/mock-data/todolist.json';
import Sidebar from '../components/sidebar';
import '../styles/sidebar.css';
import { usePagePadding } from './function/pagePadding';
import CustomNavbar from '../components/navbar';
import NoteContent from '../components/note_content';

// redux
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { onSidebarChange } from '../redux/sidebar';

function Note() {
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
    <div>
      <CustomNavbar />
      <div className={`page-container ${sidebar ? 'ml-80' : ''}`}>
        
        {sidebar && <Sidebar />}
        <div className='' style={pageContentStyle}>
          <NoteContent />
        </div>
      </div>
    </div>
  );
}

export default Note;
