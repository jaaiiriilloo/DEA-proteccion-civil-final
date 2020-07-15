export default ({ app }) => {
  app.router.afterEach((to, from) => {
            $(document).trigger('router-loaded');
  })
}
