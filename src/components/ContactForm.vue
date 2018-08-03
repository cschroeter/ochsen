<template>

  <div class="container">
    <h1 class="title">
      Contact
    </h1>
    <div class="content">
      <form 
        ref="form"
        name="contact"
        data-netlify="true" 
        method="post"
        @submit.prevent="onSubmit">
        <input 
          type="hidden" 
          name="form-name" 
          value="contact" >
        <label 
          class="form-label" 
          for="name">
          Name:
        </label>
        <input 
          id="name" 
          class="form-field" 
          name="name" >
        <label 
          class="form-label" 
          for="email">
          Email:
        </label>
        <input 
          id="email" 
          class="form-field" 
          name="email" >
        <label 
          class="form-label" 
          for="message">
          Message:
        </label>
        <textarea 
          id="message" 
          class="form-field" 
          name="message"/>
        <input 
          class="form-button" 
          type="submit" 
          value="Send message" >
      </form>
    </div>
  </div>
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
        onSubmit() {
          console.log('onsubmit')
          return true;
        }
    }
}
</script>
