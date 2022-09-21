// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const DropdownThree = {
    id: 'pages',
    // title: 'Pages',
    // caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Put Away',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Put Away Monitor',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                }
            ]
        }
    ]
};

export default DropdownThree;
