<template>
  <div class="login-background">
    <img class="login-background__image1" src="/assets/images/box-1.png" alt="green glass box.">
    <img class="login-background__image2" src="/assets/images/box-2.png" alt="green glass box.">
    <img class="login-background__image3" src="/assets/images/box-3.png" alt="green glass box.">
    <img class="login-background__image4" src="/assets/images/box-4.png" alt="green glass box.">
    <img class="login-background__image5" src="/assets/images/box-5.png" alt="green glass box.">
    <img class="login-background__image6" src="/assets/images/box-6.png" alt="green glass box.">
  </div>
</template>

<style scoped>
.login-background {
  background: #3EA748;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

.login-background__image1 {
  grid-area: 1 / 1 / 3 / 3;
  align-self: center
}

.login-background__image2 {
  grid-area: 1 / 4 / 2 / 6;
  align-self: end;
  justify-self: center;
}

.login-background__image3 {
  grid-area: 1 / 1 / 5 / 6;
  align-self: center;
  justify-self: center;
}

.login-background__image4 {
  grid-area: 4 / 1 / 5 / 3;
}

.login-background__image5 {
  grid-area: 4 / 4 / 5 / 6;
  align-self: end
}

.login-background__image6 {
  grid-area: 3 / 4 / 4 / 6;
  justify-self: center;
  align-self: end
}
</style>