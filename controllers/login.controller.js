export const LoginController = {
  post: {
    login: async (payload) => {
      const { data } = await $nuxt.$api.post("login/", payload);

      if (data.token) {
        $nuxt.$store.dispatch("localStorage/actUpdateValue", {
          key: "token",
          value: data.token,
        });
        $nuxt.$store.dispatch("localStorage/actUpdateValue", {
          key: "username",
          value: data.username,
        });
        $nuxt.$router.push({ name: "management" });
      }
    },
  },
};
