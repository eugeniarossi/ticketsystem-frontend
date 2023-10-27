<script>
import axios from 'axios';

export default {
    name: 'NewTicket',
    data() {
        return {
            ticket: {
                title: '',
                category: '',
                created_by: '',
                content: ''
            },
            categories: [],
        }
    },
    methods: {
        getCategories() {
            // chiamata api per le categorie
            axios.get('http://127.0.0.1:8000/api/categories')
                .then((response) => {
                    // salvo le categorie
                    this.categories = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        submitForm() {
            axios.post('http://127.0.0.1:8000/api/tickets', this.ticket)
                .catch(error => {
                    console.error(error);
                });
        }
    },
    created() {
        this.getCategories();
    }
}
</script>

<template>
    <div class="px-5">
        <h4 class="pb-4">Nuovo ticket</h4>

        <!-- new ticket form -->
        <form @submit.prevent="submitForm">
            <!-- titolo -->
            <div class="form-group my-2">
                <label for="title">Titolo</label>
                <input v-model="ticket.title" type="text" class="form-control" id="title" placeholder="Titolo" required>
            </div>
            <!-- categoria -->
            <div class="form-group my-2">
                <label for="category">Categoria</label>
                <select class="form-control" id="categoty">
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>
            </div>
            <!-- creato da -->
            <div class="form-group my-2">
                <label for="created_by">Creato da</label>
                <input v-model="ticket.created_by" type="text" class="form-control" id="created_by" placeholder="Id utente"
                    required>
            </div>
            <!-- messaggio -->
            <div class="form-group my-2">
                <label for="content">Messaggio</label>
                <textarea class="form-control" id="content" rows="3"></textarea>
            </div>
            <!-- submit button -->
            <button type="submit" class="btn btn-primary my-2">Crea Ticket</button>
        </form>
        <!-- new ticket form -->

    </div>
</template>

<style scoped lang="scss"></style>