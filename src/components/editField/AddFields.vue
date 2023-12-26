<template>
  <section class="add-wrapper">
    <div class="fields-editor">
      <h1 class="fields-editor__label">Поля</h1>
      <h2 class="fields-editor__h2">Скрытые поля</h2>
      <base-dots-button buttonText="Добавить поле" @click="toggleAddList"></base-dots-button>
      <div class="modal-list" v-show="isAddListOpen">
        <ul class="add-list">
          <li class="add-list__elem" @click="addfield('Фамилия')" id="Фамилия"><span>Фамилия</span> <img
              src="/assets/icons/plus-icon.svg" alt="plus string.">
          </li>
          <li class="add-list__elem" @click="addfield('Имя')" id="Имя"><span>Имя</span> <img
              src="/assets/icons/plus-icon.svg" alt="plus string.">
          </li>
          <li class="add-list__elem" @click="addfield('Строка')" id="Строка"><span>Строка</span> <img
              src="/assets/icons/plus-icon.svg" alt="plus string.">
          </li>
          <li class="add-list__elem" @click="addfield('Число')" id="Число"><span>Число</span> <img
              src="/assets/icons/plus-icon.svg" alt="plus number.">
          </li>
          <li class="add-list__elem" @click="addfield('Список')" id="Список"><span>Список</span> <img
              src="/assets/icons/plus-icon.svg" alt="plus list.">
          </li>
        </ul>
      </div>
      <h2 class="fields-editor__h2 mr-tp">Поля</h2>
      <div class="fields-block">
        <div class="fields-block__elem" v-for="field in getFieldsData">
          <div class="elem-box">
            <div class="label-box"><span class="label-box__label">{{ field.id }}</span><span
                class="label-box__label">Контакт</span> </div>
            <button class="elem-box__btn" @click="addfield(field.id)">Удалить поле</button>
          </div>
          <input type="text" :placeholder="field.id" class="elem__input">
          <div class="ratio-box">
            <input type="checkbox" class="ratio-box__input" name="last_name" @click="toggleRequared(field.id)">
            <label for="last_name" class="ratio-box__label">Сделать поле обязательным</label>
          </div>
        </div>
        <!-- <div class="fields-block__elem">
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
        </div> -->

        <!-- <div class="fields-block__elem">
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
        </div> -->
      </div>
      <!--  -->
      <base-dots-button buttonText="Добавить поле" @click="toggleAddList"></base-dots-button>
      <base-dots-button buttonText="Добавить страницу формы"></base-dots-button>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isAddListOpen: false,
      counter: 0,
    }
  },
  // mounted() {
  //   this.getFieldsData.forEach(el => this.createClassList(el))
  // },
  methods: {
    toggleAddList() {
      this.isAddListOpen = !this.isAddListOpen
      if (this.counter == 0) {
        this.getFieldsData.forEach(el => this.createClassList(el.id))
        this.counter++
      }
    },
    toggleRequared(id) {
      this.$store.commit('fields/toggleReguired', id)
    },
    addfield(id) {
      this.toggleClassList(id)
      this.$store.commit('fields/addField', id)
    },
    createClassList(id) {
      document.getElementById(`${id}`).classList.add('add-list__elem__active')
    },
    toggleClassList(id) {
      if (this.getFieldsData.map(el => el.id).includes(id)) {
        document.getElementById(`${id}`).classList.remove('add-list__elem__active')
      } else {
        document.getElementById(`${id}`).classList.add('add-list__elem__active')
      }
    }
  },
  computed: {
    getFieldsData() {
      return this.$store.getters['fields/getCurrentFields']
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
  overflow-y: scroll;
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

.add-list__elem__active {
  background: rgb(62, 167, 72, 0.3)
}
</style>