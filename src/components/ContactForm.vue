<template>
  <form
    novalidate
    data-netlify="true"
    netlify-honeypot="bot-field"
    @submit.prevent="validateBeforeSubmit">
    <v-text-field
      v-validate="'required'"
      v-model="name"
      :error-messages="errors.collect('name')"
      label="Name"
      name="name"
      data-vv-name="name"
      required
    />
    <v-text-field
      v-validate="'required|email'"
      v-model="email"
      :error-messages="errors.collect('email')"
      label="E-mail"
      name="email"
      data-vv-name="email"
      required
    />
    <v-btn 
      type="submit" 
      color="primary">Senden</v-btn>
  </form>
</template>

<script>
import encode from 'form-urlencoded';

export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.$data })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
        }
      })
    }
  }
}
</script>
