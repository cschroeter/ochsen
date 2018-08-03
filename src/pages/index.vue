<template>
<div>
    <app-logo />
    <v-card flat>
       <v-card-text>
        <contact-form />
       </v-card-text>
    </v-card>
</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    AppLogo, ContactForm
  },
  head: {
    script: [
      { src: '/redirect.js', body: true },
    ]
  },
  asyncData: async ({ app, route, payload }) => ({
    posts: (await app
      .$content('/posts')
      .query({ exclude: ['body'] })
      .getAll()).sort((a, b) => new Date(b.date) - new Date(a.date))
  })
};
</script>

