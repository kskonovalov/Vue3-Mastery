const app = Vue.createApp({
  data: function() {
    return {
      product: 'Vue3 Socks',
      description: 'Vue3 test description',
      image: './assets/images/socks_green.jpg',
      inventory: 2,
      onSale: true,
      details: [
        '50% cotton',
        '50% wool',
        '50% polyester',
        '50% fakes'
      ],
      sizes: [
        'S',
        'M',
        'L',
        'XL',
        'XXL',
        'XXXL'
      ],
      variants: [
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue' },
      ],
      credits: {
        url: 'https://www.vuemastery.com/courses/intro-to-vue-3/',
        title: 'Intro to Vue 3'
      },
    }
  }
})
