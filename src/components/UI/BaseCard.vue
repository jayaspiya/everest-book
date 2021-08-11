;<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style scoped>
.card{
    border-radius: 12px;
    background: #ffffff;
    box-shadow:
     0 3.9px 4.6px rgba(0, 0, 0, 0.08),
     0 12.3px 8.4px rgba(0, 0, 0, 0.056),
     0 18.8px 19.2px rgba(0, 0, 0, 0.037),
     0 22px 40px rgba(0, 0, 0, 0.019)
;
    padding: 1rem;
    margin: 2rem auto;
    max-width: 60%;
}
</style>