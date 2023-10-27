<script>
import AppHome from './components/AppHome.vue';
import TicketsList from './components/TicketsList.vue';
import NewTicket from './components/NewTicket.vue';

export default {
  name: 'App',
  components: {
    AppHome,
    TicketsList,
    NewTicket
  }
}
</script>

<template>
  <AppHome />
  <router-view></router-view>
</template>

<style lang="scss"></style>