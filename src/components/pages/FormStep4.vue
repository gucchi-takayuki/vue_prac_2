<template>
  <div>
    <div id="form-view" class="mb-5">
      <div id="form-header" class="has-background-primary-light p-2">
        <h1
          id="step-number"
          class="is-size-6 has-text-weight-normal has-background-info has-text-white has-text-centered px-1"
        >
          STEP4
        </h1>
        <h2 class="is-size-6 has-text-centered">
          <font-awesome-icon icon="file-alt" />以下の内容をご確認ください
        </h2>
      </div>

      <div id="form-content" class="p-5">
        <div class="controll">
          <div class="mb-5">
            <p class="q-title has-text-info mb-2">-{{ titleOfSexuality }}-</p>
            <p class="ml-5">{{ sexuality }}</p>
          </div>
          <div class="mb-5">
            <p class="q-title has-text-info mb-2">-{{ titleOfBirthday }}-</p>
            <p class="ml-5">{{ `${birthYear}年${birthMonth}月${birthDay}日` }}</p>
          </div>
          <div class="mb-5">
            <p class="q-title has-text-info mb-2">-{{ titleOfLifeInsurance }}-</p>
            <p class="ml-5">{{ lifeInsurance }}</p>
          </div>
          <div class="mb-5">
            <p class="q-title has-text-info mb-2">-{{ titleOfHospitalization }}-</p>
            <p class="ml-5">{{ hospitalization }}</p>
          </div>
          <div class="mb-5">
            <p class="q-title has-text-info mb-2">-{{ titleOfMedicalCare }}-</p>
            <p class="ml-5">{{ medicalCare }}</p>
          </div>
          <div class="mb-5">
            <p class="q-title has-text-info mb-2">-{{ titleOfConsultation }}-</p>
            <p class="ml-5">{{ consultation }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    titleOfSexuality() {
      return this.$store.getters.titleOfSexuality;
    },
    titleOfBirthday() {
      return this.$store.getters.titleOfBirthday;
    },
    titleOfLifeInsurance() {
      return this.$store.getters.titleOfLifeInsurance;
    },
    titleOfHospitalization() {
      return this.$store.getters.titleOfHospitalization;
    },
    titleOfMedicalCare() {
      return this.$store.getters.titleOfMedicalCare;
    },
    titleOfConsultation() {
      return this.$store.getters.titleOfConsultation;
    },

    sexuality() {
      return this.$store.getters.sexuality;
    },
    birthYear() {
      return this.$store.getters.birthYear;
    },
    birthMonth() {
      return this.$store.getters.birthMonth;
    },
    birthDay() {
      return this.$store.getters.birthDay;
    },
    lifeInsurance() {
      return this.$store.getters.lifeInsurance;
    },
    hospitalization() {
      return this.$store.getters.hospitalization;
    },
    medicalCare() {
      return this.$store.getters.medicalCare;
    },
    consultation() {
      return this.$store.getters.consultation;
    },
  }
};
</script>

<style lang="scss" scoped>
.textarea {
  height: 100vh;
}
</style>