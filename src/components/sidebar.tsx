import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

// redux
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { onContentChange } from '../redux/note-content';

import networkSecurity from '../data/network_security/network_security.json';
 
export default function Sidebar() {
  // redux
  // const pagePadding = useSelector((state: RootState) => state.pagePadding.value)
  // const sidebar = useSelector((state: RootState) => state.sidebar.value)
  const dispatch = useDispatch()

  const changeContent = () => {
    console.log("content is being changed");
    dispatch(onContentChange(networkSecurity));
  }  

  return (
    <Card className={`fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5`}>
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem onClick={changeContent}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" onClick={changeContent}/>
          </ListItemPrefix>
          Network Security
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}