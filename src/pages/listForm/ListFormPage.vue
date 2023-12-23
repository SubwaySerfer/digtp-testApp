<template>
  <main>
    <the-sidebar buttonText="Выход" modeBtn="btn__transparent">
      <ul class="sidebar__slot text-font">
        <li class="text-font__green">Формы</li>
        <li>Пользователи</li>
      </ul>
    </the-sidebar>
  </main>
</template>

<script>

</script>

<style scoped>
.sidebar__slot {
  list-style-type: none;
  flex: 1;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
</style>