import Vue from 'vue'
import Router from 'vue-router'
import Goals from '@/components/Goals.vue'
import DailyGoal from '@/components/DailyGoal.vue'
// import WeeklyGoal from '@/components/WeeklyGoal'
import AddDaily from '@/components/AddDaily'
// import AddWeekly from '@/components/AddWeekly'
import DailyForm from '@/components/DailyForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goals',
      component: Goals
    },
    {
      path: '/dailygoal',
      name: 'DailyGoal',
      component: DailyGoal
    },
    // {
    //   path: '/weeklygoal',
    //   name: 'WeeklyGoal',
    //   component: WeeklyGoal
    // },
    {
      path: '/add_dailygoal',
      name: 'AddDaily',
      component: AddDaily
    },
    // {
    //   path: '/add_weeklygoal',
    //   name: 'AddWeekly',
    //   component: AddWeekly
    // },
    {
      path: '/dailyform',
      name: 'DailyForm',
      component: DailyForm
    }
  ]
})
