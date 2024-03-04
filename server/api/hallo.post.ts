export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  const apiKey = config.private.apiKey;

  const result = await $fetch(
    `https://api.hubapi.com/crm/v3/objects/contacts`,
    {
      method: "post",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: {
        properties: {
          email: body.email,
          firstname: body.preName,
          lastname: body.name,
          phone: body.phone,
        },
      },
      json: true,
    }
  );
  console.log(result);
});
