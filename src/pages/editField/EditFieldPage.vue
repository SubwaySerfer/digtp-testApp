<template>
  <main class="edit-page">
    <the-sidebar buttonText="Сохранить" secondButton="Скрипт" secModeBtn="btn__transparent" :buttonFunc=cll>
      <div class="back-page"><img src="/assets/icons/arrow-icon.svg" alt="arrow back page."><span>Назад</span></div>
      <ul class="edit-sidebar">
        <li>Тип формы</li>
        <li>Сущности</li>
        <li class="item__active">Поля</li>
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
  },
  methods: {
    cll() {
      this.$router.push('/form-perfome')
    }
  }
}
</script>

<style scoped>
.back-page {
  display: flex;
  align-items: center;
  gap: .8rem;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: .5rem;
}

.edit-page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-y: hidden;
}

.edit-sidebar {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  text-align: start;
  flex: 1;
  font-size: 1.55rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2.3rem;
}

.item__active {
  color: #3EA748;
}
</style>