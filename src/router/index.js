import { createRouter, createWebHistory } from 'vue-router'
import SplashView from '../views/SplashView.vue'
import SpecialtyView from '../views/SpecialtyView.vue'
import ModalitydateView from '../views/ModalitydateView.vue'
import RateView from '../views/RateView.vue'
import StudentView from '../views/StudentView.vue'
import AddressVue from '../views/AddressVue.vue'
import PaymentVue from '../views/PaymentVue.vue'
import PageNotFound from '../views/PageNotFound.vue'
import LandingVue from '../views/LandingVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: SplashView,
      meta: {
        next: 'Especialidad',
        prev: ''
      }
    },
    {
      path: '/especialidad',
      name: 'Especialidad',
      component: SpecialtyView,
      meta: {
        next: 'Horario',
        prev: 'Inicio'
      }
    },
    {
      path: '/horario',
      name: 'Horario',
      component: ModalitydateView,
      meta: {
        next: 'Tarifa',
        prev: 'Especialidad'
      }
    },
    {
      path: '/tarifa',
      name: 'Tarifa',
      component: RateView,
      meta: {
        next: 'Datos',
        prev: 'Horario'
      }
    },
    {
      path: '/datos-personales',
      name: 'Datos',
      component: StudentView,
      meta: {
        next: 'Direccion',
        prev: 'Tarifa'
      }
    },
    {
      path: '/direccion',
      name: 'Direccion',
      component: AddressVue,
      meta: {
        next: 'Pago',
        prev: 'Datos'
      }
    },
    {
      path: '/forma-de-pago',
      name: 'Pago',
      component: PaymentVue,
      meta: {
        next: 'Reserva',
        prev: 'Direccion'
      }
    },
    {
      path: '/reserva',
      name: 'Reserva',
      component: LandingVue,
      meta: {
        next: '',
        prev: 'Pago'
      }
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: PageNotFound,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next()
})
export default router
