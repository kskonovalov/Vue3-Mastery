const app = Vue.createApp({
  data: function() {
    return {
      product: 'Vue3 Socks',
      description: 'Vue3 test description',
      image: './assets/images/socks_green.jpg',
      credits: {
        url: 'https://www.vuemastery.com/courses/intro-to-vue-3/',
        title: 'Intro to Vue 3'
      },
    }
  }
})
