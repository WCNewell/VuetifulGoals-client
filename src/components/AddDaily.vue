<template>
    <DailyForm :goal="goal" :onSubmit="submit"> </DailyForm>
</template>

<script>
import DailyForm from '@/components/DailyForm'
import API from '@/library/api'

export default {
    components: {
        AddDaily
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
                this.dailygoal.quantity = Number(this.dailygoal.quantity)
                API.createDailyGoal(this.dailygoal)
                .then(({ id }) => {
                    this.$router.push({
                        name: 'dailygoal',
                        params: {
                            id
                        }
                    })
                })
        }
    }
}
</script>