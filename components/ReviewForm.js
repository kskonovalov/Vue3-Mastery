app.component('review-form', {
  template: `
<form class="review-form" @submit.prevent="onSubmit">
  <h3>Leave a review</h3>
  <label for="name">Name:</label>
  <input type="text" id="name" v-model="name">

  <label for="recommend">Would you recommend this product?:</label>
  <label class="radio"><input type="radio" name="recommend" id="recommend" v-model="recommend" value="yes"> Yes!</label>
  <label class="radio"><input type="radio" name="recommend" v-model="recommend" value="no"> No :( </label>

  <label for="review">Review:</label>
  <textarea name="review" id="review" cols="30" rows="10" v-model="review"></textarea>

  <label for="rating">Rating:</label>
  <select name="rating" id="rating" v-model.number="rating">
    <option value="5">5</option>
    <option value="4">4</option>
    <option value="3">3</option>
    <option value="2">2</option>
    <option value="1">1</option>
  </select>

  <p v-if="msg.length">{{ msg }}</p>
  <input type="submit" class="button" value="Submit">
</form>
  `,
  data() {
    return {
      name: '',
      review: '',
      recommend: '',
      rating: null,
      msg: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.recommend === '' || this.rating === null) {
        this.msg = 'Review is incomplete!';
        return;
      }
      this.msg = 'Review has been added!';
      let productReview = {
        name: this.name,
        recommend: this.recommend,
        review: this.review,
        rating: this.rating
      }
      this.$emit('review-submitted', productReview)

      this.name = ''
      this.review = ''
      this.recommend = ''
      this.rating = null
    }
  }
})
