<script>
import axios from 'axios';

export default {
    name: 'TicketsList',
    data() {
        return {
            tickets: [],
        }
    },
    methods: {
        getTickets() {
            // chiamata api 
            axios.get('http://127.0.0.1:8000/api/tickets')
                .then((response) => {
                    // salvo dati dei tickets
                    this.tickets = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
    created() {
        this.getTickets();
    }
}
</script>

<template>
    <container>
        <h4 class="px-5 py-3">Lista dei Ticket</h4>

        <!-- lista ticket -->
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 px-5">

            <!-- ticket -->
            <div class="col" v-for="ticket in tickets" :key="ticket.id">
                <div class="card rounded-3 text-center bg-light border-secondary" style="width: 18rem;">
                    <!-- card-body -->
                    <div class="card-body">
                        <!-- titolo -->
                        <h2 class="card-title">{{ ticket.title }}</h2>
                        <!-- categoria -->
                        <p class="card-subtitle">Categoria: {{ ticket.category_id }}</p>
                        <!--<p>Categoria: {{ ticket.category.name }}</p>-->
                        <!-- autore -->
                        <p>Creato da: {{ ticket.created_by }}</p>
                        <!-- stato -->
                        <p v-if="ticket.closed">Stato: Chiuso</p>
                        <p v-else>Stato: Aperto</p>
                    </div>
                    <!-- /card-body -->
                </div>
            </div>
            <!-- /ticket -->
            
        </div>
        <!-- /lista ticket -->

    </container>
</template>

<style scoped lang="scss"></style>