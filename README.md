# Проект: "Forms for 'Сибтехнологии'"

---

## Описание:

"
Тестовое задание (необходимо использовать Vue версия 3)

1. сверстать экраны - [по макету](https://www.figma.com/file/pObrgEFHQniLC9K5zXpcoF/Тестовое?type=design&node-id=0%3A1&mode=design&t=U0n14JDnerpDrqzE-1)

2. реализовать логику экрана "Добавление полей"
   2.1) добавление на форму полей типа: строка, число, список (единичный и множественный выбор)
   2.2) удаление полей из формы
   2.3) установка обязательности заполнения полей
   !2.4) отображение актуальных настроек формы в области предпросмотра

3. реализовать открытие формы с актуальными настройками на отдельной веб-странице" //Нажмите кнопку "сохранить"

[Ссылка на деплой](https://preeminent-kitten-83a2eb.netlify.app)

[Ссылка на макет](https://www.figma.com/file/pObrgEFHQniLC9K5zXpcoF/Тестовое?type=design&node-id=0%3A1&mode=design&t=U0n14JDnerpDrqzE-1)

---

## Страницы

- [Логин](https://preeminent-kitten-83a2eb.netlify.app/login)
- [Формы](https://preeminent-kitten-83a2eb.netlify.app/forms)
- [Редактор полей](https://preeminent-kitten-83a2eb.netlify.app/fields)
- [Отдельная страница с формой](https://preeminent-kitten-83a2eb.netlify.app/form-perfome)

---

#### Стэк технологий:

Vue3, Vuex, JS, CSS, Vite, Vue-router

---

## Установка

- `npm install` — установить зависимости
- `npm run dev` — запуск сервера разработки
- `npm run build` — сборка проекта

---

## Пример кода:

```
toggleReguired(state, payload) {
    let index = state.currentFields.map(el => el.id == payload).indexOf(true)
    state.currentFields[index].required = !state.currentFields[index].required
  }
```
