<template>
  <section>
    <div class="book">
      <img :src="sideCover" alt="side" class="img-side" />
      <img :src="frontCover" alt="front" class="img-front" />
      <img :src="backCover" alt="back" class="img-back" />
    </div>
  </section>
</template>
<script>
export default {
  props: ["frontCover", "backCover", "sideCover"],
};
</script>
<style scoped>
section {
  margin: 4rem auto;
  width: fit-content;
  transform-style: preserve-3d;
  perspective: 1000px;
}
.book {
  position: relative;
  width: 250px;
  height: 400px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transform: rotateY(35deg);
  transition: all 0.5s ease-out;
}
section:hover > .book {
  transform: rotateY(180deg);
}
img {
  pointer-events: none;
  background: #fff;
}
.img-side {
  position: absolute;
  width: 30px;
  height: 100%;
  transform-origin: left;
  background-position: center;
  transform: rotateY(90deg);
}
.img-back {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  background-position: center;
  transform: rotateY(180deg) translateZ(30px);
}
.img-front {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
