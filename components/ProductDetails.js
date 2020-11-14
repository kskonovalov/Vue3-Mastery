app.component('product-details', {
  template: `
        <p>Available sizes:</p>
        <ul>
          <li v-for="size in sizes" :id="size">{{ size }}</li>
        </ul>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>  
  `,
  data() {
    return {
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
    }
  }
})
