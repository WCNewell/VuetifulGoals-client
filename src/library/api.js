import ezFetch from 'ez-fetch'

const API_URL = 'https://fierce-springs-96129.herokuapp.com/dailygoals'

export default {
  // getDailyGoals () {
  //   return fetch(API_URL)
  //     .then(response => response.json())
  // }
  getDailyGoals () {
    return ezFetch.get(API_URL)
  },
  getDailyGoal (id) {
    return ezFetch.get(`${API_URL}/${id}`)
  },
  createDailyGoal (dailygoal) {
    return ezFetch.post(API_URL, dailygoal)
  },
  updateDailyGoal (id, dailygoal) {
    return ezFetch.put(`${API_URL}/${id}`, dailygoal)
  },
  deleteDailyGoal (id) {
    return ezFetch.delete(`${API_URL}/${id}`)
  }
}
