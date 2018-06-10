<template>
  <div>
    <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-media :src="dailygoal.image" height="600px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ dailygoal.goal }}</h3>
            <div>{{ dailygoal.due  }}</div>
            <h4>{{ dailygoal.done }}</h4>
            <h4>{{ dailygoal.comment }}</h4>
          </div>
        </v-card-title>
        
        <v-card-actions>
          <v-btn color="info"
            :to="{
                name: 'EditDaily',
                params: {
                    id: dailygoal.id
                }
            }"
          >Edit</v-btn>
        </v-card-actions>

        <v-card-actions>
          <v-btn @click="deleteDailyGoal()" color="error">Delete</v-btn>
        </v-card-actions>

      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import API from '@/library/API'

export default {
    data() {
        return {
            dailygoal: { id: -1 }
        }
    },
    mounted() {
        const { id } = this.$route.params
        this.load(id)
    },
    methods: {
        load (id) {
            API.getDailyGoal (id)
            .then (dailygoal => {
                this.dailygoal = dailygoal.dailygoal
            })
        },
        deleteDailyGoal () {
            const { id } = this.$route.params

            API.deleteDailyGoal (id)
              .then((response) => {})
              this.$router.push({ name: 'Goals' })
        }
    }
}

</script>


