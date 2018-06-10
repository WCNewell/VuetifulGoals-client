<template lang="html">
  <v-layout>
    <v-flex xs12>
      <v-form ref="form" v-model="valid">
        <v-text-field
          label="Goal"
          v-model="dailygoal.goal"
          :rules="goalRules"
          required
        ></v-text-field>
        <v-text-field
          label="Due Date"
          v-model="dailygoal.due"
          required
          :rules="dueRules"
        ></v-text-field>
        <v-text-field
          label="Done?"
          v-model="dailygoal.done"
          :rules="doneRules"
          required
        ></v-text-field>
        <v-text-field
          label="Comments"
          v-model="dailygoal.comment"
          multi-line
        ></v-text-field>
        <v-text-field
          label="Image"
          v-model="dailygoal.image"
          required
          :rules="imageRules"
        ></v-text-field>
        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['dailygoal', 'onSubmit'],
  data() {
    return {
      valid: true,
      goalRules: [(goal) => {
        if (goal.trim() === '') return 'Goal must not be empty.';
        return true;
      }],
      dueRules: [(due) => {
        if (due.trim() === '') return 'Due date must not be empty.';
        return true;
      }],
      doneRules: [(done) => {
        if (done.trim() === '') return 'Done must not be empty.';
        return true;
      }],
      imageRules: [(image) => {
        if (image.trim() === '') return 'Image must not be empty.';
        return true;
      }],
    };
  },
  methods: {
    submit() {
      if (this.valid) {
        this.onSubmit()
      }
    },
    clear() {
      this.$refs.form.reset()
    }
  }
}
</script>