<template>
  <div class="register-wrapper">
    <form action="" class="register-form">
      <label for="" class="register-form__label">Форма регистрации участников</label>
      <input type="text" class="register-form__input" placeholder="Фамилия">
      <input type="text" class="register-form__input" placeholder="Имя">
      <div class="register-form__rights">
        <input type="ratio" class="rights__input">
        <p class="rights__description">Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности</p>
      </div>
      <button class="btn">Отправить</button>
    </form>
  </div>
</template>

<style scoped>
.register-wrapper {
  font-family: 'PT Sans', sans-serif;
  background: #3EA748;
  display: flex;
  width: 100%;
  padding: 8.8rem 6.94vw;
  justify-content: end;
}

.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
  background: #FFF;
  width: 34.9rem;
  height: 50.4rem;
  padding: 4rem;
}

.register-form__label {
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: start;
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
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.4rem;
  border: 1px solid #3EA748;
}

.register-form__rights {
  display: flex;
  flex-direction: row;
  justify-content: start;
  text-align: start;
  gap: 1.6rem;
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