<template>
  <div>
    <div id="form-section" class="section is-large is-centered">
      <router-view @buttonActive="buttonActive()" @buttonInactive="buttonInactive()"></router-view>

      <div class="is-flex is-justify-content-center">
        <div class="has-text-centered mx-3" v-show="stepNumber !== 1">
          <button
            @click="toBackStep"
            class="button has-background-primary has-text-white"
          >
            前へ戻る<font-awesome-icon class="ml-3" icon="chevron-right" />
          </button>
        </div>

        <div class="has-text-centered mx-3" v-show="stepNumber !== 4">
          <button
            @click="toNextStep"
            :disabled="isActive"
            class="button has-background-primary has-text-white"
          >
            次へ進む<font-awesome-icon class="ml-3" icon="chevron-right" />
          </button>
        </div>

        <div class="has-text-centered mx-3" v-show="stepNumber === 4">
          <button class="button has-background-primary has-text-white">
            送信<font-awesome-icon class="ml-3" icon="chevron-right" />
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepNumber: 1,
      isActive: true,
    };
  },
  mounted() {
    this.toStepNumberPage();
  },
  created() {
    window.addEventListener("beforeunload", this.confirmSave);
  },
  methods: {
    buttonActive() {
      this.isActive = false;
      console.log('isActive!');
    },
    buttonInactive() {
      this.isActive = true;
      console.log('isInactive!');
    },
    confirmSave(e) {
      e.returnValue = '';
    },
    toStepNumberPage() {
      this.$router.push({ path: `/form/step${this.stepNumber}` });      
    },
    toBackStep() {
      this.stepNumber--;
      this.toStepNumberPage();
    },
    toNextStep() {
      this.stepNumber++;
      this.toStepNumberPage();
    },
  },
};
</script>

<style lang="scss">
#form-view {
  border: 1px solid hsl(171, 100%, 41%);
}

#form-header {
  border-bottom: 1px solid hsl(171, 100%, 41%);
  position: relative;
}

#step-number {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
}

.controll:not(:last-child) {
  margin-bottom: 2rem;
}

.q-title {
  margin-bottom: 0.5rem;
}

button {
  width: 8rem;
}
</style>
