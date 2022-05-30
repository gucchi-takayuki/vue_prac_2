import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sexuality: {
      title: '性別',
      answer: '', 
    },
    birthday: {
      title: '生年月日',
      answer: {
        year: '1990',
        month: '1',
        day: '1',
      },
    },
    lifeInsurance: {
      title: '現在、生命保険に加入されていますか？',
      answer: '',
    },
    hospitalization: {
      title: '現在入院中ですか？または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことありますか？',
      answer: '',
    },
    medicalCare: {
      title: '過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？',
      answer: '',
    },
    consultation: {
      title: 'ご相談内容',
      answer: '',
    },
  },
  getters: {
    // 質問のタイトルgetters
    titleOfSexuality: state => state.sexuality.title,
    titleOfBirthday: state => state.birthday.title,
    titleOfLifeInsurance: state => state.lifeInsurance.title,
    titleOfHospitalization: state => state.hospitalization.title,
    titleOfMedicalCare: state => state.medicalCare.title,
    titleOfConsultation: state => state.consultation.title,

    // 質問の答えgetters
    sexuality: state => state.sexuality.answer,
    birthYear: state => state.birthday.answer.year,
    birthMonth: state => state.birthday.answer.month,
    birthDay: state => state.birthday.answer.day,
    lifeInsurance: state => state.lifeInsurance.answer,
    hospitalization: state => state.hospitalization.answer,
    medicalCare: state => state.medicalCare.answer,
    consultation: state => state.consultation.answer,
  },
  mutations: {
    updateSexuality(state, newSexuality) {
      state.sexuality.answer = newSexuality;
    },
    updateBirthYear(state, newBirthYear) {
      state.birthday.answer.year = newBirthYear;
    },
    updateBirthMonth(state, newBirthMonth) {
      state.birthday.answer.month = newBirthMonth;
    },
    updateBirthDay(state, newBirthDay) {
      state.birthday.answer.day = newBirthDay;
    },
    updateLifeInsurance(state, newLifeInsurance) {
      state.lifeInsurance.answer = newLifeInsurance;
    },
    updateHospitalization(state, newHospitalization) {
      state.hospitalization.answer = newHospitalization;
    },
    updateMedicalCare(state, newMedicalCare) {
      state.medicalCare.answer = newMedicalCare;
    },
    updateConsultation(state, newConsultation) {
      state.consultation.answer = newConsultation;
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