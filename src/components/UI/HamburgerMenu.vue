;<template>
  <div class="burger" :class="{toggle: navActive}">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
</template>

<script>
export default {
    props:[
        "navActive"
    ]
}
</script>
<style scoped>
.burger {
    cursor: pointer;
}

.burger div {
    width: 25px;
    height: 3px;
    background-color: var(--base-color);
    margin: 5px;
    transition: all 0.3s ease;
}

.toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
}
.toggle .line2 {
    opacity: 0;
}
.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
}
</style>