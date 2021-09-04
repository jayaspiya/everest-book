<template>
  <div class="rating">
    <ul class="list">
      <li v-for="star in 5" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
      <i :class="star <= stars ? 'fas fa-star' : 'far fa-star'"></i> 
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  props: ['grade'],
  data() {
    return {
      stars: this.grade
    }
  },
}
</script>