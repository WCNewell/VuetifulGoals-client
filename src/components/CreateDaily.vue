<template>
    <DailyForm :dailygoal="dailygoal" :onSubmit="submit"> </DailyForm>
</template>

<script>
import API from '@/library/API'
import DailyForm from '@/components/DailyForm'

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
                image: ''
            }
        }
    },
    methods: {
        submit() {
             API.createDailyGoal(this.dailygoal)
                .then(() => {
                    this.$router.push({ name: 'Goals' })
                })
        }
    }
}
</script>