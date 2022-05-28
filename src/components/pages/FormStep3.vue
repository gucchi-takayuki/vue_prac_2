<template>
  <div>
    <div id="form-view" class="mb-5">
      <div id="form-header" class="has-background-primary-light p-2">
        <h1
          id="step-number"
          class="is-size-6 has-text-weight-normal has-background-info has-text-white has-text-centered px-1"
        >
          STEP3
        </h1>
        <h2 class="is-size-6 has-text-centered">
          <font-awesome-icon icon="file-alt" />ご相談内容をご記入ください
        </h2>
      </div>

      <form>
        <div id="form-content" class="p-5">
          <div class="controll">
            <p class="q-title has-text-info">-ご相談内容-</p>
            <textarea v-model="consultation" class="textarea"></textarea>
          </div>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    this.checkStep3();
  },
  methods: {
    checkStep3() {
      if(this.$store.getters.consultation) {
        this.buttonActive();
      } else {
        this.buttonInactive();
      }
    },
    buttonActive() {
      this.$emit('buttonActive');
    },
    buttonInactive() {
      this.$emit('buttonInactive');
    },
  },
  computed: {
    consultation: {
      get() {
        return this.$store.getters.consultation;
      },
      set(value) {
        this.$store.dispatch('updateConsultation', value);
        this.checkStep3();
      }
     }
  }
  
};
</script>

<style lang="scss" scoped>
.textarea {
  height: 100vh;
}
</style>