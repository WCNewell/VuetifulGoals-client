<template>
    <DailyForm :dailygoal="dailygoal" :onSubmit="submit"> </DailyForm>
</template>

<script>
import DailyForm from '@/components/DailyForm'
import API from '@/library/api'

export default {
    components: {
        DailyForm
    }, 
    data () {
        return {
            dailygoal: {},
        }
    },
    mounted () {
        const { id } = this.$route.params;
        this.load(id)
    },
    methods: {
        load (id) {
            API.getDailyGoal(id)
            .then((dailygoal) => {
                this.dailygoal = dailygoal
            })
        },
        submit() {
            // this.dailygoal.due = Number(this.dailygoal.due)
            API.updateDailyGoal(this.dailygoal.id, this.dailygoal)
                .then(() => {
                    this.$router.push({
                        name: 'DailyGoal',
                        params: {
                        id: this.dailygoal.id
                        }
                    })
                })
        }
    }
}
</script>