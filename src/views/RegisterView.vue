<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <!-- <router-link :to="{ name: 'login' }">
              Need an account?
            </router-link> -->
          </p>
          VALIDATION ERRORS
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Password"
              />
            </fieldset>
            <button
              :disabled="isSubmitting"
              class="btn btn-lg btn-success pull-xs-right"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'McvRegister',
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    },
  },
  methods: {
    onSubmit() {
      console.log('subbmitted form')
      this.$store.dispatch('register', {
        email: 'gggbasxvseidoyoegsvs@mail.ru',
        username: 'gdhfsvvxxvgnfgnehehee',
        password: 'g35uy53jtedhu5',
      })
    },
  },
}
</script>
