<template>
  <div class="forms-list">
    <div class="label-block">
      <h1 class="label-block__title">Формы</h1>
      <button class="btn">Создать форму</button>
    </div>
    <ul class="list-block">

      <li class="list-item">
        <h3 class="list-item__label">Форма регистрации участников</h3>
        <h5 class="text-font__description flex-1">Автор: user 1</h5>
        <h6 class="text-font__description">Дата создания: 01.01.23</h6>
        <button class="btn btn__transparent list__btn">Редактировать</button>
        <button class="btn btn__transparent btn__no-border list__btn ">Удалить</button>
      </li>

      <li class="list-item">
        <h3 class="list-item__label">Форма регистрации участников</h3>
        <h5 class="text-font__description flex-1">Автор: user 1</h5>
        <h6 class="text-font__description">Дата создания: 01.01.23</h6>
        <button class="btn btn__transparent list__btn list__btn">Редактировать</button>
        <button class="btn btn__transparent btn__no-border list__btn ">Удалить</button>
      </li>

      <li class="list-item">
        <h3 class="list-item__label">Форма регистрации участников</h3>
        <h5 class="text-font__description flex-1">Автор: user 1</h5>
        <h6 class="text-font__description">Дата создания: 01.01.23</h6>
        <button class="btn btn__transparent list__btn list__btn">Редактировать</button>
        <button class="btn btn__transparent btn__no-border list__btn ">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.forms-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8rem 11.45vw 9rem 3rem;
  width: 100%;
  background: #F6F6F6;
  gap: 4.8rem;
}

.label-block__title {
  color: #000;
  font-family: 'PT Sans', sans-serif;
  font-size: 4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.label-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.list-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: none;
  gap: 3rem;
  width: 100%;
}

.list-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 19rem;
  gap: .8rem;
  align-items: start;
  border-radius: 1rem;
  background: #FFF;
  padding: 2.4rem;
}


.list-item__label {
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 3px;
}

.flex-1 {
  padding-top: .6rem;
  margin-bottom: 4.8rem;
}

.list__btn {
  align-self: end;
  width: 17.9rem;
  height: 4.2rem;
  padding: 1.6rem 3.2rem;
}
</style>
