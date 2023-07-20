<template lang='pug'>
  vue-scroll-snap(:fullscreen="true")
    div(class="item")
      div(class="text-grid")
        div(class="text")
          span Мы предлагаем широкий спектр высококачественных продуктов, которые позволят вам создать мощную и надежную систему для работы, игр или творчества.
        div(class="text")
          span Мы используем передовые технологии и инженерные решения, чтобы создавать продукты, которые соответствуют самым высоким стандартам качества и производительности.
        div(class="text")
          span Наша команда опытных инженеров и профессионалов стремится к инновациям, чтобы предложить вам компоненты, которые превзойдут ваши ожидания и помогут вам достичь максимальных результатов.
        div(class="text")
          span Мы стремимся предложить вам лучшее соотношение цены и качества, чтобы вы могли получить максимум от вашего компьютера.
        div(class="text")
          span Мы стремимся устанавливать долгосрочные партнерские отношения с нашими клиентами, предлагая им не только отличные продукты, но и высокий уровень обслуживания.
        div(class="text")
          span Если вы ищете компоненты для компьютеров, на которые можно положиться, обратитесь к нам — мы готовы помочь вам создать идеальную систему, отвечающую вашим требованиям.

    div(class="item")
      section здесь фото с гор. скроллом (сотрудники мб)
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";

export default {
  name: 'TheAbout',
  components: {
    VueScrollSnap,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.item {
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #797878;
}

.item:first-child {
  background-image: url(../assets/sl-1.jpg);
}

.item:nth-child(2) {
  background-image: url(../assets/sl-2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.text-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10px;
}

.text {
  color: aliceblue;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(216, 113, 130);
  border-radius: 5px;
  padding: 10px;
}

.scroll-snap-container {
  height: 500px;
  width: auto;
}
</style>
