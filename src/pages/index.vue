<template>
  <div class="title">
    <h2>Main content</h2>
    <app-logo />
    <v-btn color="primary">Primary button</v-btn>
    <v-btn color="secondary">Secondary button</v-btn>
    <v-btn color="success">Success</v-btn>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
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

