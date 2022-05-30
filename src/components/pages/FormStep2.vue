<template>
  <div>
    <div id="form-view" class="mb-5">
      <div id="form-header" class="has-background-primary-light p-2">
        <h1
          id="step-number"
          class="is-size-6 has-text-weight-normal has-background-info has-text-white has-text-centered px-1"
        >
          STEP2
        </h1>
        <h2 class="is-size-6 has-text-centered">
          <font-awesome-icon icon="chalkboard-teacher" />以下にお答えください
        </h2>
      </div>

      <form>
        <div id="form-content" class="p-5">
          <div class="controll">
            <p class="q-title has-text-info">{{ titleOfLifeInsurance }}</p>
            <label class="radio">
              <input
                v-model="lifeInsurance"
                type="radio"
                name="lifeInsurance"
                value="はい"
              />はい
            </label>
            <label class="radio">
              <input
                v-model="lifeInsurance"
                type="radio"
                name="lifeInsurance"
                value="いいえ"
              />いいえ
            </label>
          </div>

          <div class="controll">
            <p class="q-title has-text-info">{{ titleOfHospitalization }}</p>
            <label class="radio">
              <input
                v-model="hospitalization"
                type="radio"
                name="hospitalization"
                value="はい"
              />はい
            </label>
            <label class="radio">
              <input
                v-model="hospitalization"
                type="radio"
                name="hospitalization"
                value="いいえ"
              />いいえ
            </label>
          </div>

          <div class="controll">
            <p class="q-title has-text-info">{{ titleOfMedicalCare }}</p>
            <label class="radio">
              <input
                v-model="medicalCare"
                type="radio"
                name="medicalCare"
                value="はい"
              />はい
            </label>
            <label class="radio">
              <input
                v-model="medicalCare"
                type="radio"
                name="medicalCare"
                value="いいえ"
              />いいえ
            </label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.checkStep2();
  },
  methods: {
    checkStep2() {
      if(this.$store.getters.lifeInsurance && this.$store.getters.hospitalization && this.$store.getters.medicalCare) {
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
    titleOfLifeInsurance() {
      return this.$store.getters.titleOfLifeInsurance;
    },
    titleOfHospitalization() {
      return this.$store.getters.titleOfHospitalization;
    },
    titleOfMedicalCare() {
      return this.$store.getters.titleOfMedicalCare;
    },

    lifeInsurance: {
      get() {
        return this.$store.getters.lifeInsurance;
      },
      set(value) {
        this.$store.dispatch('updateLifeInsurance', value);
        this.checkStep2();
      },
    },
    hospitalization: {
      get() {
        return this.$store.getters.hospitalization;
      },
      set(value) {
        this.$store.dispatch('updateHospitalization', value);
        this.checkStep2();
      },
    },
    medicalCare: {
      get() {
        return this.$store.getters.medicalCare;
      },
      set(value) {
        this.$store.dispatch('updateMedicalCare', value);
        this.checkStep2();
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
