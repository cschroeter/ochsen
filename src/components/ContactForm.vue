<template>
  <v-form 
    ref="form"
    v-model="valid" 
    name="contact" 
    netlify 
    lazy-validation>
    <v-text-field
      v-model="name"
      label="Name"
      required
    />
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    />
    <v-textarea
      v-model="message"
      auto-grow
      label="Nachricht"
      rows="1"
    />
    <v-btn
      :disabled="!valid"
      color="primary"
      @click="submit"
    >
      submit
    </v-btn>
  </v-form>
</template>

<script>
export default {
   data: () => ({
      valid: true,
      name: '',
      email: '',
      message: ''
      }),
         methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          console.log('submit post', this.$refs.form.action)
        }
      },
    }
}
</script>
