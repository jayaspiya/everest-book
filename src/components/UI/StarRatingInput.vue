<template>
  <div class="rating rating-input">
    <ul class="list">
      <li @click="rate(star)" v-for="star in 5" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
      <i :class="star <= stars ? 'fas fa-star' : 'far fa-star'"></i> 
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  props: ['grade'],
  emits: ['setStar'],
  data() {
    return {
      stars: this.grade
    }
  },
  methods: {
    rate(star) {
      if (typeof star === 'number' && star <= 5 && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star
        this.$emit("setStar",star)
      }
    }
  },
}
</script>
