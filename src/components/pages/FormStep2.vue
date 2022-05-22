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
            <p class="q-title has-text-info">
              現在、生命保険に加入されていますか？
            </p>
            <label class="radio">
              <input
                v-model="lifeInsurance"
                type="radio"
                name="lifeInsurance"
                value="yes"
              />はい
            </label>
            <label class="radio">
              <input
                v-model="lifeInsurance"
                type="radio"
                name="lifeInsurance"
                value="no"
              />いいえ
            </label>
          </div>

          <div class="controll">
            <p class="q-title has-text-info">
              現在入院中ですか？または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことありますか？
            </p>
            <label class="radio">
              <input
                v-model="hospitalization"
                type="radio"
                name="hospitalization"
                value="yes"
              />はい
            </label>
            <label class="radio">
              <input
                v-model="hospitalization"
                type="radio"
                name="hospitalization"
                value="no"
              />いいえ
            </label>
          </div>

          <div class="controll">
            <p class="q-title has-text-info">
              過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？
            </p>
            <label class="radio">
              <input
                v-model="medicalCare"
                type="radio"
                name="medicalCare"
                value="yes"
              />はい
            </label>
            <label class="radio">
              <input
                v-model="medicalCare"
                type="radio"
                name="medicalCare"
                value="no"
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
