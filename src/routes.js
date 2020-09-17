import PickingScreen from './views/pickingScreen.vue'
import ConfirmationScreen from './views/confirmationScreen'

export const routes = [
  {
    path: '/',
    name: 'homePage',
    component : PickingScreen
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: ConfirmationScreen,
    props: true
  },
  {
    path:'*',
    component: PickingScreen
  }
]
