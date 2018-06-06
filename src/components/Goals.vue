<template>
      <v-layout row wrap>
    <v-flex xs4 md4 v-for="dailygoal in dailygoals" :key="dailygoal.id">
      <v-card>
        <v-card-media :src="dailygoal.image" height="400px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ dailygoal.goal }}</h3>
            <div>{{ dailygoal.due  }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn
          :to="{
                name: 'DailyGoal',
                params: {
                    id: dailygoal.id
                }
            }"
          flat color="orange">View</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import API from '@/library/api'

export default {
  data() {
    return {
      dailygoals: []
    }
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      API.getDailyGoals()
      .then(dailygoals => {
        this.dailygoals = dailygoals
      })
    }
  }
}
</script>