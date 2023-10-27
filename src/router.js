
import { createRouter, createWebHistory } from "vue-router";

import TicketsList from './components/TicketsList.vue';
import NewTicket from './components/NewTicket.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name: 'ticketlist',
            component: TicketsList
        },
        {
            path: '/newticket',
            name: 'newticket',
            component: NewTicket
        }
    ]
});

export { router };
