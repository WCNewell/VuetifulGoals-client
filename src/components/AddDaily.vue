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
            dailygoal: {
                goal: '',
                due: '',
                done: '',
                comment: '',
                image: '',
            },
        }
    },
    methods: {
        submit () {
                // this.dailygoal.due = String(this.dailygoal.due)
                API.createDailyGoal(this.dailygoal)
                .then(() => {
                    this.$router.push({ name: 'Goals' })
                })
        }
    }
}
</script>