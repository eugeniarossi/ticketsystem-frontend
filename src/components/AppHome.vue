<script>

export default {
    name: 'AppHome',
}
</script>

<template>
    <div class="py-4 px-5 d-flex justify-content-between align-items-center">
        <h2 class="py-4">Ticket System</h2>
        <!-- new ticket button -->
        <router-link :to="{ name: 'newticket' }">
            <button class="px-3 py-2">Crea Ticket</button>
        </router-link>
        <!-- /new ticket button -->
    </div>
</template>

<style scoped lang="scss"></style>