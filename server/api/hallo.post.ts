export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  //console.log(body.delle.join(";"));

  //return;

  let validData = false;
  // hier daten checken
  validData = true;

  // und wenn fehlerhaft, entsprechende nachricht an vue client senden
  if (!validData) {
    console.log("Daten invalide, meldung an client");
    return "Fehler bei der Dateneingabe";
  }

  const config = useRuntimeConfig();
  const apiKey = config.env.apiKey;

  const result = await $fetch("https://api.hubapi.com/contacts/v1/contact/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: {
      properties: [
        { property: "email", value: body.email },
        { property: "firstname", value: body.preName },
        { property: "lastname", value: body.name },
        //{ property: "website", value: "http://hubspot.com" },
        //{ property: "company", value: "HubSpot" },
        { property: "phone", value: body.phone },
        //{ property: "address", value: "25 First Street" },
        //{ property: "city", value: "Cambridge" },
        //{ property: "state", value: "MA" },
        //{ property: "zip", value: "02139" },
        { property: "delle", value: body.delle.join(";") },
      ],
    },
    json: true,
  });

  console.log(result);

  /*
  if (result.msg === "ok") {
    console.log("Daten übermittelt");
  } else {
    console.log("Fehlew");
  }
*/
  //return body;
});
