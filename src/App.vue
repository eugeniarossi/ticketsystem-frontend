<script>
import AppHome from './components/AppHome.vue';
import TicketsList from './components/TicketsList.vue';

export default {
  name: 'App',
  components: {
    AppHome,
    TicketsList
  }
}
</script>

<template>
  <AppHome />
  <TicketsList />
</template>

<style lang="scss"></style>