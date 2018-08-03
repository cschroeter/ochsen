<template>
  <form 
    netlify
    @submit.prevent="validateBeforeSubmit">
    <div class="column is-12">
      <label class="label">Email</label>
      <p class="control has-icon has-icon-right">
        <input 
          type="hidden" 
          name="form-name" 
          value="contact" >
        <input 
          v-validate="'required|email'" 
          v-model="email" 
          :class="{'input': true, 'is-danger': errors.has('email') }" 
          name="email" 
          type="text" 
          placeholder="Email">
        <i 
          v-show="errors.has('email')" 
          class="fa fa-warning"/>
        <span 
          v-show="errors.has('email')" 
          class="help is-danger">{{ errors.first('email') }}</span>
      </p>
    </div>
    <div class="column is-12">
      <label class="label">Name</label>
      <p class="control has-icon has-icon-right">
        <input 
          v-validate="'required|alpha'" 
          v-model="name" 
          :class="{'input': true, 'is-danger': errors.has('name') }" 
          name="name" 
          type="text" 
          placeholder="Name">
        <i 
          v-show="errors.has('name')" 
          class="fa fa-warning"/>
        <span 
          v-show="errors.has('name')" 
          class="help is-danger">{{ errors.first('name') }}</span>
      </p>
    </div>
    <div class="column is-12">
      <label class="label">Phone</label>
      <p class="control has-icon has-icon-right">
        <input 
          v-validate="'required|numeric'" 
          v-model="phone" 
          :class="{'input': true, 'is-danger': errors.has('phone') }" 
          name="phone" 
          type="text" 
          placeholder="Phone">
        <i 
          v-show="errors.has('phone')" 
          class="fa fa-warning"/>
        <span 
          v-show="errors.has('phone')" 
          class="help is-danger">{{ errors.first('phone') }}</span>
      </p>
    </div>
    <div class="column is-12">
      <label class="label">Website</label>
      <p class="control has-icon has-icon-right">
        <input 
          v-validate="'required|url'" 
          v-model="url" 
          :class="{'input': true, 'is-danger': errors.has('url') }" 
          name="url" 
          type="text" 
          placeholder="Website">
        <i 
          v-show="errors.has('url')" 
          class="fa fa-warning"/>
        <span 
          v-show="errors.has('url')" 
          class="help is-danger">{{ errors.first('url') }}</span>
      </p>
    </div>

    <div class="column is-12">
      <p class="control">
        <button 
          class="button is-primary" 
          type="submit">Submit</button>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    email: '',
    name: '',
    phone: '',
    url: ''
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          return;
        }
        alert('Correct them errors!');
      });
    }
  }
};
</script>
