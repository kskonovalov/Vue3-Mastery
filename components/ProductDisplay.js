app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: false
    }
  },
  template:
  `
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" :alt="product" :class="{ 'out-of-stock-img': inventory <= 0}">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="onSale"><b>Currently on sale!</b></p>

        <button class="button" :class="{ disabledButton: inventory <= 0}" v-on:click="addToCart" :disabled="inventory <= 0">
          Add to Cart
        </button>

        <p>Here we go the {{ description + '!' }}</p>
        <p v-if="inventory > 10">In stock</p>
        <p v-else-if="inventory > 0">Almost sold out!</p>
        <p v-else>Out of stock</p>
        <!--            <p v-show="inventory > 0">It's in stock!</p>-->

        <p>Shipping: {{ shipping }}</p>

        <div style="display: flex">
          <div v-for="(variant, index) in variants" :key="variant.id"
               @mouseover="updateProduct(index)">
            <span
              :style="{color: '#fff', backgroundColor: variant.color}">{{ variant.color }}</span><br>
            <img :src="variant.image" :alt="variant.color" style="width:100px; margin: 5px;">
          </div>
        </div>
      </div>
    </div>
  </div>`,
  data() {
    return {
      product: 'Vue3 Socks',
      brand: 'Mastery',
      description: 'Vue3 test description',
      selectedVariant: 0,
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          inventory: 50,
          onSale: false
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          inventory: 0,
          onSale: true
        },
      ],
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      const saleText = this.onSale ? ' is on sale!' : '';
      return this.brand + ' ' + this.product + ' ' + this.color + ' ' + saleText;
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inventory() {
      return this.variants[this.selectedVariant].inventory
    },
    onSale() {
      return this.variants[this.selectedVariant].onSale
    },
    color() {
      return this.variants[this.selectedVariant].color
    },
    shipping() {
      return (this.premium) ? 'Free!' : '10$'
    }
  }
});
