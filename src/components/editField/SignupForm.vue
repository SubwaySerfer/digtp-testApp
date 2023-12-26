<template>
  <div class="register-wrapper">
    <form action="" class="register-form">
      <label for="" class="register-form__label">Форма регистрации участников</label>
      <ul class="register-list">
        <li v-for="field in getFieldsData">
          <input type="text" class="register-form__input" :placeholder=field.id :required=field.required>
        </li>
        <!-- <li> <input type="text" class="register-form__input" placeholder="Имя">
        </li> -->
      </ul>
      <div class="register-form__rights">
        <input type="checkbox" class="rights__input">
        <p class="rights__description">Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности</p>
      </div>
      <button class="btn register__btn">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    getFieldsData() {
      return this.$store.getters['fields/getCurrentFields']
    }
  }
}

</script>

<style scoped>
.register-wrapper {
  font-family: 'PT Sans', sans-serif;
  background: #3EA748;
  display: flex;
  width: 100%;
  padding: 8.8rem 6.81vw;
  justify-content: center;
}

.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  border-radius: 2rem;
  background: #FFF;
  width: 34.9rem;
  /* height: 50.4rem; */
  height: min-content;
  /* min-height: 50.4rem; */
  padding: 4rem;
}

.register-form__label {
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: start;
  margin-bottom: 2.7rem;
}

.register-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.register-form__input {
  display: flex;
  width: 26.9rem;
  height: 7rem;
  padding: 0rem 17.1rem 0rem 3rem;
  align-items: center;
  border-radius: 1rem;
  background: #F6F6F6;
  opacity: 0.5;
  border: none;
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: 'PT Sans', sans-serif;
}

.rights__input {
  width: 5rem;
  height: 2.4rem;
  border-radius: 0.4rem;
  border: 1px solid #3EA748;
  margin: 0;
  margin-top: .55rem;
  align-self: start;

}

.register-form__rights {
  display: flex;
  flex-direction: row;
  justify-content: start;
  text-align: start;
  gap: 1.6rem;
  margin-top: 1.5rem;
  margin-bottom: 3.5rem;
}

.register__btn {
  width: 100%;
}

.rights__description {
  color: #212121;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: .5;
}
</style>