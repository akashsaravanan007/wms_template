// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const DropdownFour = {
    id: 'pages',
    // title: 'Pages',
    // caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Transfer Order',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'TO Checkpoint',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                }
            ]
        }
    ]
};

export default DropdownFour;
