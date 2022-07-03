import HomeIcon from '@mui/icons-material/Home';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import {FiHome} from 'react-icons/fi';
import {BsListTask, BsCardChecklist} from 'react-icons/bs';
import {MdOutlineQuestionAnswer} from 'react-icons/md';
import {AiFillSetting} from 'react-icons/ai';
import {BiTask} from 'react-icons/bi';

export const SideNavConst = [
    {
        name: 'Home',
        icon: <FiHome className='sideNavIcon'/>,
        link: "/",
    },
    {
        name: 'Question',
        icon: <BiTask className='sideNavIcon'/>,
        link: "/question",
    },
    {
        name: 'Task',
        icon: <BsListTask className='sideNavIcon'/>,
        link: "/task",
    },
    {
        name: 'Recommend List',
        icon: <BsCardChecklist className='sideNavIcon'/>,
        link: "/recommend",
    },
    {
        name: 'Resources',
        icon: <MdOutlineQuestionAnswer className='sideNavIcon'/>,
        link: "/resources",
    },
    {
        name: 'Youtube',
        icon: <MdOutlineQuestionAnswer className='sideNavIcon'/>,
        link: "/youtube",
    },
    {
        name: 'Setting',
        icon: <AiFillSetting className='sideNavIcon'/>,
        link: "/Setting",
    },
    
]