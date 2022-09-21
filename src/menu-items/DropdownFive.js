// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const DropdownFive = {
    id: 'pages',
    // title: 'Pages',
    // caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Material Discrepancy Note',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'MDN Form Genertion',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'MDN Form Status',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'MDN Form Reports',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        }
    ]
};

export default DropdownFive;
