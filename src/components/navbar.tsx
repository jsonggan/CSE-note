import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
} from "@material-tailwind/react";
import {
  CalculatorIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

// redux
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { onSidebarChange } from '../redux/sidebar';

// nav list menu
const cseMenuItems = [
  {
    title: "Network Security",
    description:
      "Basic knowledge about network security"
  },
  {
    title: "try",
    description:
      "Basic knowledge about network security"
  },
];

function CseMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = cseMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <CalculatorIcon className="h-[18px] w-[18px]" /> CSE{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden w-[20rem] grid-cols-4 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <CseMenu />
    </ul>
  );
}
 
export default function CustomNavbar() {

  const sidebar = useSelector((state: RootState) => state.sidebar.value)
  const dispatch = useDispatch()

  const toggleSidebar = () => {
    dispatch(onSidebarChange(!sidebar));
  };

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <Navbar className="bg-orange sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
        <img src={require('../assets/svg/sidebar.svg').default} alt='mySvgImage' onClick={toggleSidebar} className='hover:cursor-pointer'/>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          
        </div>
          <div className="flex items-center gap-4">
            <NavList />
            {/* <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Buy Now</span>
            </Button> */}
          </div>
        </div>
      </Navbar>
    </>
  );
}