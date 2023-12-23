<template>
  <div class="forms-list">
    <div class="label-block">
      <h1>Формы</h1>
      <button class="btn">Создать форму</button>
    </div>
    <ul>
      <li>

        <h3>Форма регистрации участников</h3>
        <h5>Автор: user 1</h5>
        <h6>Дата создания: 01.01.23</h6>
        <button class="btn btn__transparent">Редактировать</button>
        <button class="btn btn__transparent btn__no-border">Удалить</button>
      </li>

    </ul>
  </div>
</template>

<style scoped>
.forms-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8rem 11.45vw 9rem 3rem;
  width: 100%;
  background: #F6F6F6;
}

.label-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
</style>
