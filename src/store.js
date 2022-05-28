import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sexuality: '',
    birthday: {
      year: '',
      month: '',
      day: '',
    },
    lifeInsurance: '',
    hospitalization: '',
    medicalCare: '',
    consultation: '',
  },
  getters: {
    sexuality: state => state.sexuality,
    birthYear: state => state.birthday.year,
    birthMonth: state => state.birthday.month,
    birthDay: state => state.birthday.day,
    lifeInsurance: state => state.lifeInsurance,
    hospitalization: state => state.hospitalization,
    medicalCare: state => state.medicalCare,
    consultation: state => state.consultation,
  },
  mutations: {
    updateSexuality(state, newSexuality) {
      state.sexuality = newSexuality;
    },
    updateBirthYear(state, newBirthYear) {
      state.birthday.year = newBirthYear;
    },
    updateBirthMonth(state, newBirthMonth) {
      state.birthday.month = newBirthMonth;
    },
    updateBirthDay(state, newBirthDay) {
      state.birthday.day = newBirthDay;
    },
    updateLifeInsurance(state, newLifeInsurance) {
      state.lifeInsurance = newLifeInsurance;
    },
    updateHospitalization(state, newHospitalization) {
      state.hospitalization = newHospitalization;
    },
    updateMedicalCare(state, newMedicalCare) {
      state.medicalCare = newMedicalCare;
    },
    updateConsultation(state, newConsultation) {
      state.consultation = newConsultation;
    },
  },
  actions: {
    updateSexuality({ commit }, newSexuality) {
      commit("updateSexuality", newSexuality);
    },
    updateBirthYear({ commit }, newBirthYear) {
      commit("updateBirthYear", newBirthYear);
    },
    updateBirthMonth({ commit }, newBirthMonth) {
      commit("updateBirthMonth", newBirthMonth);
    },
    updateBirthDay({ commit }, newBirthDay) {
      commit("updateBirthDay", newBirthDay);
    },
    updateLifeInsurance({ commit }, newLifeInsurance) {
      commit("updateLifeInsurance", newLifeInsurance);
    },
    updateHospitalization({ commit }, newHospitalization) {
      commit("updateHospitalization", newHospitalization);
    },
    updateMedicalCare({ commit }, newMedicalCare) {
      commit("updateMedicalCare", newMedicalCare);
    },
    updateConsultation({ commit }, newConsultation) {
      commit("updateConsultation", newConsultation);
    },
  }
});