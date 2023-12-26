<template>
  <section class="add-wrapper">
    <div class="fields-editor">
      <h1 class="fields-editor__label">Поля</h1>
      <h2 class="fields-editor__h2">Скрытые поля</h2>
      <base-dots-button buttonText="Добавить поле" @click="addCl"></base-dots-button>
      <div class="modal-list">
        <ul class="add-list">
          <li class="add-list__elem"><span>Строка</span> <img src="/assets/icons/plus-icon.svg" alt="plus string."></li>
          <li class="add-list__elem"><span>Число</span> <img src="/assets/icons/plus-icon.svg" alt="plus number."></li>
          <li class="add-list__elem"><span>Список</span> <img src="/assets/icons/plus-icon.svg" alt="plus list."></li>
        </ul>
      </div>
      <h2 class="fields-editor__h2 mr-tp">Поля</h2>
      <div class="fields-block">
        <div class="fields-block__elem">

          <div class="elem-box">
            <div class="label-box"><span class="label-box__label">Фамилия</span><span
                class="label-box__label">Контакт</span> </div>
            <button class="elem-box__btn">Удалить поле</button>
          </div>
          <input type="text" placeholder="Фамилия" class="elem__input">
          <div class="ratio-box">
            <input type="checkbox" class="ratio-box__input" name="last_name">
            <label for="last_name" class="ratio-box__label">Сделать поле обязательным</label>
          </div>
        </div>
        <div class="fields-block__elem">
          <div class="elem-box">
            <div class="label-box"><span class="label-box__label">Имя</span><span class="label-box__label">Контакт</span>
            </div>
            <button class="elem-box__btn">Удалить поле</button>
          </div>
          <input type="text" placeholder="Имя" class="elem__input">
          <div class="ratio-box">
            <input type="checkbox" class="ratio-box__input" name="first_name">
            <label for="first_name" class="ratio-box__label">Сделать поле обязательным</label>
          </div>
        </div>
      </div>
      <!--  -->
      <base-dots-button buttonText="Добавить поле"></base-dots-button>
      <base-dots-button buttonText="Добавить страницу формы"></base-dots-button>

    </div>
  </section>
</template>

<script>
export default {
  methods: {
    addCl() {
      console.log('hh')
    }
  }
}

</script>

<style scoped>
.mr-tp {
  margin-top: 2rem;
}

.add-wrapper {
  background: #3EA748;
  font-family: 'PT Sans', sans-serif;
}

.fields-editor {
  border-radius: 0rem 1rem 1rem 0rem;
  background: #F9F9F9;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.81rem;
  padding: 7.7rem 2.9rem 8rem 3rem;
  align-items: start;
  /* justify-content: space-between; */
}

.fields-editor__label {
  font-size: 4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.fields-editor__h2 {
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem;
}

.fields-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
}

.fields-block__elem {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.ratio-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;
  margin-top: 1.1rem;
  margin-bottom: .3rem;
}

.ratio-box__input {
  display: flex;
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.4rem;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.ratio-box__label {
  color: #212121;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

}

.elem-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transform: translateY(-4px);
}

.label-box {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: .5;
}

.elem__input {
  width: 41.5rem;
  height: 7rem;
  padding: 0rem 31.7rem 0rem 3rem;
  border-radius: 1rem;
  background: #FFF;
  border: none;
  color: #000;
  font-family: 'PT Sans', sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.elem-box__btn {
  color: var(--primary_color, #3EA748);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0;
  border: none;
  background: transparent;
}

.modal-list {
  padding: 1rem;
  border: 1px solid #3EA748;
  width: 41.5rem;
  border-radius: 1rem;
}

.add-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: .8rem;
}

.add-list__elem {
  border: 1px dotted #3EA748;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  color: #000;
  /* font-family: Cera Pro; */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 1rem
}
</style>