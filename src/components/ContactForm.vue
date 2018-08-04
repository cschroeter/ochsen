<template>
  <div>
    <form 
      name="contact" 
      netlify 
      netlify-honeypot="bot-field" 
      hidden>
      <input 
        type="text" 
        name="name" >
      <input 
        type="email" 
        name="email" >
      <textarea name="message"/>
    </form>
    <form
      novalidate
      @submit.prevent="validateBeforeSubmit">
      <v-text-field
        v-validate="'required'"
        v-model="name"
        :error-messages="errors.collect('name')"
        data-vv-as="Name"
        label="Name"
        name="name"
        required
      />
      <v-text-field
        v-validate="'required|email'"
        v-model="email"
        :error-messages="errors.collect('email')"
        data-vv-as="E-Mail"
        label="E-mail"
        type="email"
        name="email"
        required
      />
      <v-textarea
        v-validate="'required'"
        v-model="message"
        :error-messages="errors.collect('message')"
        data-vv-as="Nachricht"
        auto-grow
        label="Nachricht"
        rows="1"
        name="message"
        required
      />
      <v-btn 
        type="submit" 
        color="primary">Senden</v-btn>
    </form>
  </div>
</template>

<script>
import encode from 'form-urlencoded';

export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      message: ''
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
