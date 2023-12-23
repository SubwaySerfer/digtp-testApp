<template>
  <main class="listform-page">
    <the-sidebar buttonText="Выход" modeBtn="btn__transparent">
      <ul class="sidebar__slot text-font">
        <li class="text-font__green">Формы</li>
        <li>Пользователи</li>
      </ul>
    </the-sidebar>
    <forms-list></forms-list>
  </main>
</template>

<script>
import FormsList from '../../components/listForm/FormsList.vue';

export default {
  components: { FormsList }
}
</script>

<style scoped>
.listform-page {
  display: flex;
}

.sidebar__slot {
  list-style-type: none;
  flex: 1;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>