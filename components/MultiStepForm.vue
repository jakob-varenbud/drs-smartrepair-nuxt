<template>
  <div>
    <!-- Render the current step -->
    <div v-if="step === 1">
      <div class="grid grid-cols-2 mb-4">
        <!--for each lopp like v-for -->
        <div
          class="flex gap-2"
          v-for="checkbox in checkboxData"
          :key="checkbox.id"
        >
          <input
            type="checkbox"
            :id="checkbox.id"
            :value="checkbox.id"
            :checked="selectedCheckboxes.includes(checkbox.id)"
            @change="handleCheckboxChange(checkbox.id)"
          />
          <!-- v-bind : and {{  }} for rendering dynamic value like checbockbox data-->
          <label :for="checkbox.id">{{ checkbox.label }}</label>
        </div>
      </div>
      <button :disabled="!isStepOneComplete" @click="step++">Next</button>
    </div>

    <div v-if="step === 2">
      <input
        type="text"
        name="preName"
        v-model="formData.preName"
        placeholder="Pre Name"
      />
      <input
        type="text"
        name="name"
        v-model="formData.name"
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        v-model="formData.email"
        placeholder="Email"
      />
      <input
        type="tel"
        name="phone"
        v-model="formData.phone"
        placeholder="Phone"
      />
      <textarea
        name="message"
        v-model="formData.message"
        placeholder="Your message"
      />
      <button :disabled="!isStepTwoComplete" @click="submitForm">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const step = ref(1);
    const selectedCheckboxes = ref([3]);
    const formData = ref({
      preName: "Hans",
      name: "IMGlück",
      email: "foo@bar.com",
      phone: "0098765434567",
      message: "geht doch",
    });

    const checkboxData = [
      { id: 1, label: "Delle" },
      { id: 2, label: "Kratzer" },
      { id: 3, label: "Innenraum" },
      { id: 4, label: "Felge" },
      { id: 5, label: "Hagelschaden" },
    ];

    const handleCheckboxChange = (checkboxId) => {
      const index = selectedCheckboxes.value.indexOf(checkboxId);
      if (index !== -1) {
        selectedCheckboxes.value.splice(index, 1);
      } else {
        selectedCheckboxes.value.push(checkboxId);
      }
    };

    // Berechnete Eigenschaft, die prüft, ob Bedingungen für Schritt 1 erfüllt sind
    const isStepOneComplete = computed(() => {
      return selectedCheckboxes.value.length > 0;
    });

    // Für Schritt 2, prüfen Sie, ob alle erforderlichen Felder ausgefüllt sind
    const isStepTwoComplete = computed(() => {
      return (
        formData.value.preName &&
        formData.value.name &&
        formData.value.email &&
        formData.value.phone
      );
    });

    const submitForm = async () => {
      try {
        console.log("Formular Daten:", formData.value);
        // Formdaten an eigenen Endpunkt senden
        const response = await useFetch("/api/hallo", {
          method: "post",
          body: {
            preName: formData.value.preName,
            name: formData.value.name,
            email: formData.value.email,
            phone: formData.value.phone,
            message: formData.value.message,
          },
        });
        console.log("Serverantwort:", response);
      } catch (error) {
        console.error("Fehler beim Senden des Formulars:", error);
      }
    };

    return {
      step,
      selectedCheckboxes,
      formData,
      checkboxData,
      isStepOneComplete,
      isStepTwoComplete,
      handleCheckboxChange,
      submitForm,
    };
  },
};
</script>
