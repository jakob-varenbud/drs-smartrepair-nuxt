<template>
  <div>
    <!-- Prüft, ob wir uns in Schritt 1 des Formulars befinden -->
    <div v-if="step === 1">
      <!-- Erstellt ein Raster-Layout für die Checkboxen -->
      <div class="grid grid-cols-2 mb-4">
        <!-- Erstellt eine Schleife, die für jede Checkbox in den Daten eine Checkbox im UI erstellt -->
        <div
          class="flex gap-2"
          v-for="checkbox in checkboxData"
          :key="checkbox.id"
        >
          <!-- Die Checkbox, mit verschiedenen dynamischen Attributen -->
          <input
            type="checkbox"
            :id="checkbox.id"
            :value="checkbox.id"
            :checked="selectedCheckboxes.includes(checkbox.id)"
            @change="handleCheckboxChange(checkbox.id)"
          />
          <!-- Zeigt das Label für die Checkbox, das aus den Daten gezogen wird -->
          <label :for="checkbox.id">{{ checkbox.label }}</label>
        </div>
      </div>
      <!-- Ein Button, der den Nutzer zum nächsten Schritt führt, nur aktiv, wenn Schritt 1 abgeschlossen ist -->
      <button :disabled="!isStepOneComplete" @click="step++">Next</button>
    </div>

    <!-- Prüft, ob wir uns in Schritt 2 des Formulars befinden -->
    <div v-if="step === 2">
      <!-- Formularfelder für verschiedene Arten von Daten -->
      <input type="text" v-model="formData.preName" placeholder="Pre Name" />
      <input type="text" v-model="formData.name" placeholder="Name" />
      <input type="email" v-model="formData.email" placeholder="Email" />
      <input type="tel" v-model="formData.phone" placeholder="Phone" />
      <textarea
        v-model="formData.message"
        placeholder="Your message"
      ></textarea>
      <!-- Ein Button, der das Formular absendet, nur aktiv, wenn Schritt 2 abgeschlossen ist -->
      <button :disabled="!isStepTwoComplete" @click="submitForm">Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
interface CheckboxData {
  id: number;
  label: string;
}

interface FormData {
  preName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Definiert die Struktur für Checkbox-Daten.
interface CheckboxData {
  id: number;
  label: string;
}

// Definiert die Struktur für das Formulardaten-Objekt.
interface FormData {
  preName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default {
  setup() {
    // Initialisiert den Schrittzähler für das Formular mit dem ersten Schritt.
    const step: Ref<number> = ref(1);

    // Initialisiert die Liste der ausgewählten Checkboxen (beginnt mit der Checkbox mit der ID 3 als vorausgewählt).
    const selectedCheckboxes: Ref<number[]> = ref([3]);

    // Initialisiert die Formulardaten mit vorgegebenen Werten.
    const formData: Ref<FormData> = ref({
      preName: "Hans",
      name: "IMGlück",
      email: "foo@bar.com",
      phone: "0098765434567",
      message: "geht doch",
    });

    // Definiert die Daten für die darzustellenden Checkboxen.
    const checkboxData: CheckboxData[] = [
      { id: 1, label: "Delle" },
      { id: 2, label: "Kratzer" },
      { id: 3, label: "Innenraum" },
      { id: 4, label: "Felge" },
      { id: 5, label: "Hagelschaden" },
    ];

    // Funktion, die aufgerufen wird, wenn eine Checkbox angeklickt wird.
    // Fügt die Checkbox-ID zur Liste hinzu oder entfernt sie, abhängig davon, ob sie bereits ausgewählt wurde.
    const handleCheckboxChange = (checkboxId) => {
      const index = selectedCheckboxes.value.indexOf(checkboxId);
      index !== -1 //wenn Index -1 ist, befindet sich die Checkbox nicht im Array, und wurde bereits ausgewählt
        ? selectedCheckboxes.value.splice(index, 1) // Entfernt die Checkbox aus der Auswahl.
        : selectedCheckboxes.value.push(checkboxId); // Fügt die Checkbox zur Auswahl hinzu.
    };

    // Berechnete Eigenschaft, die wahr ist, wenn mindestens eine Checkbox ausgewählt ist.
    const isStepOneComplete: ComputedRef<boolean> = computed((): boolean => {
      return selectedCheckboxes.value.length > 0;
    });

    // Berechnete Eigenschaft, die wahr ist, wenn alle Felder im Formular für Schritt 2 ausgefüllt sind.
    const isStepTwoComplete: ComputedRef<boolean> = computed((): boolean => {
      return (
        formData.value.preName !== "" &&
        formData.value.name !== "" &&
        formData.value.email !== "" &&
        formData.value.phone !== ""
      );
    });

    // Asynchrone Funktion zum Absenden des Formulars.
    // Kann mit der Logik zum Senden der Daten an einen Server erweitert werden.
    const submitForm = async (): Promise<void> => {
      try {
        // Protokolliert die Formulardaten in der Konsole.
        console.log("Formulardaten:", formData.value);
        //senden an eigenen Server
        const responste = await useFetch("/api/hallo", {
          method: "post",
        });
        // Hier könnte Ihr Code zum Senden der Formulardaten stehen.
      } catch (error) {
        // Protokolliert Fehler beim Senden des Formulars.
        console.error("Fehler beim Senden des Formulars:", error);
      }
    };

    // Stellt die definierten Variablen und Funktionen dem Template der Komponente zur Verfügung.
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
