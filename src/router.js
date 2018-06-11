import Vue from 'vue'
import Router from 'vue-router'
import Goals from '@/components/Goals.vue'
import DailyGoal from '@/components/DailyGoal.vue'
// import WeeklyGoal from '@/components/WeeklyGoal'
// import AddWeekly from '@/components/AddWeekly'
import CreateDaily from '@/components/CreateDaily'
import EditDaily from '@/components/EditDaily'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goals',
      name: 'Goals',
      component: Goals
    },
    {
      path: '/goals/:id',
      name: 'DailyGoal',
      component: DailyGoal
    },
    {
      path: '/goals/entry',
      name: 'CreateDaily',
      component: CreateDaily
    },
    {
      path: '/goals/:id/edit',
      name: 'EditDaily',
      component: EditDaily
    }
  ]
})
