<template>
  <main class="edit-page">
    <the-sidebar buttonText="Сохранить" secondButton="Скрипт">
      <div><img src="" alt=""><span>Назад</span></div>
      <ul class="edit-sidebar">
        <li>Тип формы</li>
        <li>Сущности</li>
        <li>Поля</li>
        <li>Правила показа полей</li>
        <li>Другие настройки</li>
      </ul>
    </the-sidebar>
    <add-fields></add-fields>
    <signup-form></signup-form>
  </main>
</template>

<script>
import SignupForm from '../../components/editField/SignupForm.vue'
import AddFields from '../../components/editField/AddFields.vue';

export default {
  components: {
    SignupForm,
    AddFields
  }
}
</script>

<style scoped>
.edit-page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.edit-sidebar {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  text-align: start;
  flex: 1;
}
</style>