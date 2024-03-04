export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiKey = config.env.apiKey;

  const result = await $fetch(
    "https://api.hubapi.com/contacts/v1/contact/vid/401/profile",
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      json: true,
    }
  );

  //console.log(result);

  return result;
});
