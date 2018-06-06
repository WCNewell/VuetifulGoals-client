import ezFetch from 'ez-fetch'

const apiUrlDaily = 'https://fierce-springs-96129.herokuapp.com/dailygoals'

export default {
  getDailyGoals () {
    return ezFetch.get(apiUrlDaily)
  },
  getDailyGoal (id) {
    return ezFetch.get(`${apiUrlDaily}/${id}`)
  },
  createDailyGoal (dailygoal) {
    return ezFetch.post(apiUrlDaily, dailygoal)
  },
  updateDailyGoal (id, dailygoal) {
    return ezFetch.put(`${apiUrlDaily}/${id}`, dailygoal)
  },
  deleteDailyGoal (id) {
    return ezFetch.delete(`${apiUrlDaily}/${id}`)
  }
}
