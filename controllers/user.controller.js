export const UsersController = {
  //   post: {
  //     login: async (payload) => {
  //       const { data } = await $nuxt.$api.post("login/", payload);

  //       if (data.token) {
  //         $nuxt.$store.dispatch("localStorage/actUpdateValue", {
  //           key: "token",
  //           value: data.token,
  //         });
  //         $nuxt.$store.dispatch("localStorage/actUpdateValue", {
  //           key: "username",
  //           value: data.username,
  //         });
  //         $nuxt.$router.push({ name: "management" });
  //       }
  //     },
  //   },
  get: {
    users: async () => {
      const { data } = await $nuxt.$api.get("users/user/");
      return data.rows;
    },
  },
  //   put: {
  //     recievedbase: async (payload) => {
  //       payload.is_active = true;

  //       await $nuxt.$api.put(`bases/recibida/gtc/${payload.id}/`, payload);
  //     },
  //   },
};
