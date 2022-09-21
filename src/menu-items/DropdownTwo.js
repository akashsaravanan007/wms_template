// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const DropdownTwo = {
    id: 'pages',
    // title: 'Pages',
    // caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Reports',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Custom Reports',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Pallet Transfer Reports',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'TO Reports',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                },
                {
                    id: 'login3',
                    title: 'Put Away Reports',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Stock Take Reports',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Gate Pass Reprint',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        }
    ]
};

export default DropdownTwo;
