import Vue from 'vue';
import Router from 'vue-router';
import Form from './components/pages/Form.vue';
import FormStep1 from './components/pages/FormStep1.vue'
import FormStep2 from './components/pages/FormStep2.vue'
import FormStep3 from './components/pages/FormStep3.vue'
import FormStep4 from './components/pages/FormStep4.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // この課題の便宜上'/form/step1'にリダイレクトさせる
      redirect: '/form/step1'
    },
    {
      path: '/form',
      component: Form,
      redirect: '/form/step1',
      children: [
        {
          path: '/form/step1',
          component: FormStep1,
        },
        {
          path: '/form/step2',
          component: FormStep2,
        },
        {
          path: '/form/step3',
          component: FormStep3,
        },
        {
          path: '/form/step4',
          component: FormStep4,
        },
      ],
    },
  ]
});