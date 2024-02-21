<template>
  <div class="container size-full max-w-7xl ml-auto mr-auto">
    <div class="height-hero flex flex-col lg:flex-row justify-between gap-2">
      <div class="flex flex-col justify-center w-full lg:w-1/2">
        <h1>DRS Smart Repair</h1>
        <h2 class="mb-4">Kleine Schäden schnell beheben</h2>
        <div class="flex items-center space-x-2">
          <img
            class="h-6 w-6"
            src="https://uploads-ssl.webflow.com/642d8b6e384132be9f422e44/64b6a406763bbe2df43a5d51_tick-circle-trans-green.svg"
            alt="Häkchen Icon"
          />
          <div>
            Für Parkschäden, Dellen, Kratzer, Steinschläge und Innenraum
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <img
            class="h-6 w-6"
            src="https://uploads-ssl.webflow.com/642d8b6e384132be9f422e44/64b6a406763bbe2df43a5d51_tick-circle-trans-green.svg"
            alt="Häkchen Icon"
          />
          <div>Kostengünstig und schnell</div>
        </div>
        <div class="flex items-center space-x-2 mb-4">
          <img
            class="h-6 w-6"
            src="https://uploads-ssl.webflow.com/642d8b6e384132be9f422e44/64b6a406763bbe2df43a5d51_tick-circle-trans-green.svg"
            alt="Häkchen Icon"
          />
          <div>Einfach Foto schicken und zum Festpreis reparieren lassen</div>
        </div>
        <a
          class="bg-drs-red font-color text-white p-4 rounded-3xl flex justify-center font-bold mb-4"
          >In 3 Schritten zur Anfrage</a
        >
        <div class="flex">
          <div class="w-16 h-12 relative lg:h-20">
            <img
              src="https://uploads-ssl.webflow.com/642d8b6e384132be9f422e44/64b50e3b8bf9fbe2a94e92a3_top%20100.webp"
              alt="Top 100"
              class="object-contain w-full h-full"
            />
          </div>
          <div class="w-16 h-12 relative lg:h-20">
            <img
              src="https://uploads-ssl.webflow.com/642d8b6e384132be9f422e44/64b50e3b8bf9fbe2a94e92a3_top%20100.webp"
              alt="Top 100"
              class="object-contain w-full h-full"
            />
          </div>
          <div class="w-16 h-12 relative lg:h-20">
            <img
              src="https://uploads-ssl.webflow.com/642d8b6e384132be9f422e44/64b50e3b8bf9fbe2a94e92a3_top%20100.webp"
              alt="Top 100"
              class="object-contain w-full h-full"
            />
          </div>
          <div class="w-16 h-12 relative lg:h-20">
            <img
              src="https://uploads-ssl.webflow.com/642d8b6e384132be9f422e44/64b50e3b8bf9fbe2a94e92a3_top%20100.webp"
              alt="Top 100"
              class="object-contain w-full h-full"
            />
          </div>
          <div class="w-16 h-12 relative lg:h-20">
            <img
              src="https://uploads-ssl.webflow.com/642d8b6e384132be9f422e44/64b50e3b8bf9fbe2a94e92a3_top%20100.webp"
              alt="Top 100"
              class="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center w-full h-full">
        <div class="background-image"></div>
      </div>
    </div>
  </div>
</template>

<style>
.background-image {
  background-image: url("~/assets/images/drs-smartrepair-hero.png");
  background-size: cover; /* Stellt sicher, dass das Bild den Container vollständig abdeckt */
  background-position: center; /* Zentriert das Bild */
  @apply rounded-2xl h-3/4;
}
</style>
