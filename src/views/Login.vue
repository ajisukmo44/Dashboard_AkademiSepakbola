<template>
  <div class="min-h-screen min-w-screen bg-login-texture bg-cover flex items-center justify-center  px-4">
    <div class="max-w-md w-full">
    

      <Form class="bg-white  border rounded px-10 pt-10 pb-8 mb-4" @submit="handleLogin" :validation-schema="schema">
        <!-- <h2 class="text-center text-xl font-light text-gray-800 mb-4">Cyber Fusion Center</h2> -->   
        <!-- <h2 class="text-center text-sm font-bold text-gray-800 mt-4 mb-1">
          Login to your account
        </h2> -->

        <img class="mx-auto  my-auto mb-3 px-4" :src="'/static/logo.png'" width="80"/> 
         <h2 class="text-center text-xl font-bold text-gray-600 tracking-widest px-2 pb-8">AKADEMI SEPAKBOLA</h2>  
           <div v-if="message" role="alert" class="mb-3">
        <div class="bg-red-100 text-red-500 rounded-t px-4 py-2">
          Gagal password atau email tidak sesuai !
        </div>
        <!-- <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>{{ message }}</p>
        </div> -->
      </div>
        <div class="mb-4">
          <!-- <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label> -->
          <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <Field
            id="email"
            name="email"
            v-model="email"
            type="email"
            autocomplete="email"
            class="
              w-full
              py-4
              text-sm text-gray-900
              rounded-md
              pl-10
              border border-gray-300
              focus:outline-none
              focus:ring-green-500
              focus:border-green-500
              focus:z-10
            "
            placeholder="Email"
            required=""
          />
        </div>
        <ErrorMessage name="email" class="text-red-500 text-xs italic" />
        </div>

        <div class="mb-6">
          <!-- <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label> -->
          <div class="relative text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <Field
                id="password"
                name="password"
                type="password"
                v-model="password"
                autocomplete="current-password"
                required=""
                class="
                  w-full
                  py-4
                  text-sm text-gray-900
                  rounded-md
                  pl-10
                  border border-gray-300
                  focus:outline-none
                  focus:ring-green-500
                  focus:border-green-500
                  focus:z-10
                "
                placeholder="Password"
              />
            </div>
            <ErrorMessage name="password" class="text-red-500 text-xs italic " />
        </div>
        <div>
          <button
            type="submit"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-3
              px-6
              mb-2
              border border-transparent
              font-medium
              rounded-md
              text-white
              bg-green-700 hover:bg-green-900
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-green-500
            "
            :disabled="loading"
          >
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>MASUK</span>
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Email is required"),
      password: yup.string().required("Password is required"),
    });
    return {
      loading: false,
      message: "",
      schema,
      user: {
        email: 'admin@admin.com',
        password: 'xyber!@#'
      }
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      console.log(this.schema);
      this.$store.dispatch("auth/login", this.user).then(
        () => {
        this.$router.go('/');
         console.log('sukses');
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style scoped>
.bg-login-texture {
  /* background-size: cover; */
  background-color: #f4f4f4;
}
</style>