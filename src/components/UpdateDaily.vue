<template>
    <DailyForm :dailygoal="dailygoal" :onSubmit="submit"> </DailyForm>
</template>

<script>
import ProductForm from '@/components/DailyForm'
import API from '@/library/api'

export default {
    components: {
        ProductForm
    }, 
    data () {
        return {
            product: {},
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
            this.dailygoal.quantity = Number(this.dailygoal.quantity);
            API.updateDailyGoal(this.dailygoal.id, this.dailygoal)
                .then(() => {
                    this.$router.push({
                        name: 'DailyGoal',
                        params: {
                        id: this.dailygoal.id,
                        },
                    });
                });
        },
    }
}
</script>