<template>
  <div>
    <div id="form-view" class="mb-5">
      <div id="form-header" class="has-background-primary-light p-2">
        <h1
          id="step-number"
          class="is-size-6 has-text-weight-normal has-background-info has-text-white has-text-centered px-1"
        >
          STEP1
        </h1>
        <h2 class="is-size-6 has-text-centered">
          <font-awesome-icon icon="id-card" />お客様の情報を入力してください
        </h2>
      </div>

      <form>
        <div id="form-content" class="p-5">
          <div class="controll">
            <p class="q-title has-text-info">-{{ titleOfSexuality }}-</p>
            <input
              v-model="sexuality"
              type="radio"
              name="sexuality"
              value="男性"
              id="male"
            />
            <label for="male" class="mr-2">男性</label>
            <input
              v-model="sexuality"
              type="radio"
              name="sexuality"
              value="女性"
              id="female"
            />
            <label for="female">女性</label>
          </div>

          <div class="controll">
            <p class="q-title has-text-info">-{{ titleOfBirthday }}-</p>
            <div class="is-flex">
              <div class="is-flex">
                <div class="select">
                  <select v-model="birthYear" name="year">
                    <option
                      v-for="year in years"
                      :value="getBirthYearValue(year)"
                      :key="year.year_value"
                    >
                      {{ getBirthYearChoice(year) }}
                    </option>
                  </select>
                </div>
                <div
                  class="is-flex is-justify-content-center is-flex-direction-column ml-1"
                >
                  <p>年</p>
                </div>
              </div>

              <div class="is-flex ml-3">
                <div class="select">
                  <select v-model="birthMonth" name="month">
                    <option v-for="month in months" :value="month" :key="month">
                      {{ month }}
                    </option>
                  </select>
                </div>
                <div
                  class="is-flex is-justify-content-center is-flex-direction-column ml-1"
                >
                  <p>月</p>
                </div>
              </div>

              <div class="is-flex ml-3">
                <div class="select">
                  <select v-model="birthDay" name="day">
                    <option v-for="day in days" :value="day" :key="day">
                      {{ day }}
                    </option>
                  </select>
                </div>
                <div
                  class="is-flex is-justify-content-center is-flex-direction-column ml-1"
                >
                  <p>日</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      years: [],
      months: [],
      days: [],
    };
  },
  mounted() {
    this.checkStep1();
    this.years = this.yearsGenerator();
    this.months = this.monthsGenerator();
    this.days = this.daysGenerator();
  },
  methods: {
    checkStep1() {
      if (
        this.$store.getters.sexuality &&
        this.$store.getters.birthYear &&
        this.$store.getters.birthMonth &&
        this.$store.getters.birthDay
      ) {
        this.buttonActive();
      } else {
        this.buttonInactive();
      }
    },
    buttonActive() {
      this.$emit("buttonActive");
    },
    buttonInactive() {
      this.$emit("buttonInactive");
    },
    yearsGenerator() {
      const years = [];
      for (let y = 1920; y <= 2000; y++) {
        if (y > 1988) {
          years.push({
            choice: `${y} (平成${y - 1988}年)`,
            value: y,
          });
        } else if (y > 1925) {
          years.push({
            choice: `${y} (昭和${y - 1925}年)`,
            value: y,
          });
        } else if (y > 1911) {
          years.push({
            choice: `${y} (大正${y - 1911}年)`,
            value: y,
          });
        }
      }
      return years;
    },
    monthsGenerator() {
      const months = [];
      for (let m = 1; m <= 12; m++) {
        months.push(m);
      }
      return months;
    },
    daysGenerator() {
      const days = [];
      for (let d = 1; d <= 31; d++) {
        days.push(d);
      }
      return days;
    },
  },
  computed: {
    titleOfSexuality() {
      return this.$store.getters.titleOfSexuality;
    },
    titleOfBirthday() {
      return this.$store.getters.titleOfBirthday;
    },
    sexuality: {
      get() {
        return this.$store.getters.sexuality;
      },
      set(value) {
        this.$store.dispatch("updateSexuality", value);
        this.checkStep1();
      },
    },
    birthYear: {
      get() {
        return this.$store.getters.birthYear;
      },
      set(value) {
        this.$store.dispatch("updateBirthYear", value);
        this.checkStep1();
      },
    },
    getBirthYearChoice() {
      return function (year) {
        return year.choice;
      };
    },
    getBirthYearValue() {
      return function (year) {
        return year.value;
      };
    },
    birthMonth: {
      get() {
        return this.$store.getters.birthMonth;
      },
      set(value) {
        this.$store.dispatch("updateBirthMonth", value);
        this.checkStep1();
      },
    },
    birthDay: {
      get() {
        return this.$store.getters.birthDay;
      },
      set(value) {
        this.$store.dispatch("updateBirthDay", value);
        this.checkStep1();
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
