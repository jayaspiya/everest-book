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
    margin: 1rem;
    max-width: 100%;
}
/* Tablet View */
@media only screen and (max-width: 768px) {
  .card{
    max-width: 90%;
  }
}
/* Mobile View */
@media only screen and (max-width: 576px) {
  .card{
    max-width: 100%;
  }
}
</style>