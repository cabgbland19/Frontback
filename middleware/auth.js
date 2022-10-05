export default function ({ $api, redirect, store }) {
  const token = store.state.localStorage.token;

  if (token === null) {
    $api.setHeader(false);
    redirect({
      name: "index",
    });
  } else {
    $api.setHeader("Authorization", "Token " + token);
  }
}
