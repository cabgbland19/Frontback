export const RecievedController = {
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
    recievedbase: async () => {
      const { data } = await $nuxt.$api.get("bases/recibida/");
      return data;
    },
  },
  put: {
    recievedbase: async (payload) => {
      payload.is_active = true;
      const { data } = await $nuxt.$api.put(
        `bases/recibida/${payload.id}/`,
        payload
      );
      console.log(
        "🚀 ~ file: recieved.controller.js ~ line 29 ~ recievedbase: ~ data",
        data
      );
      // return data;
    },
  },
};
