module.exports = {
  content: [
    [
      'posts',
      {
        page: '/_slug',
        permalink: '/posts/:slug',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ]
  ],
  api: function(isStatic) {
    return {
      browserBaseURL: isStatic ? 'https://cranky-yalow-6eddd9.netlify.com' : '',
      baseURL: 'http://localhost:3000'
    };
  }
};
