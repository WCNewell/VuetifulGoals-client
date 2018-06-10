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
            dailygoal: {}
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
                this.dailygoal = dailygoal.dailygoal
            })
        },
        submit() {
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