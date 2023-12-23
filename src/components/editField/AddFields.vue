<template>
  <section class="add-wrapper">
    <div class="fields-editor">
      <h1 class="fields-editor__label">Поля</h1>
      <h2 class="fields-editor__h2">Скрытые поля</h2>
      <base-dots-button buttonText="Добавить поле"></base-dots-button>
      <h2 class="fields-editor__h2">Поля</h2>
      <div>
        <div><span>Фамилия</span> <span>Контакт</span> <span>Удалить поле</span>
          <input type="text" placeholder="Фамилия">
          <div>
            <input type="ratio"> <label for="">Сделать поле обязательным</label>
          </div>
        </div>
      </div>
      <!--  -->
      <base-dots-button buttonText="Добавить поле"></base-dots-button>
      <base-dots-button buttonText="Добавить страницу формы"></base-dots-button>

    </div>
  </section>
</template>

<style scoped>
.add-wrapper {
  background: #3EA748;
}

.fields-editor {
  border-radius: 0rem 1rem 1rem 0rem;
  background: #F9F9F9;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 8rem 2.9rem 8rem 3rem;
  align-items: start;
  justify-content: space-between;
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
</style>