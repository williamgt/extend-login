<template>
  <fieldset>
    <!--    NB!! NEED UNIQUE IDS. DOES THIS WORK?? Also, consider using v-bind="$attrs" (read about fallthrough attributes)   -->
    <label for="uuid">{{ labelName }}</label>
    <input
      type="text"
      id="uuid"
      v-bind="inputValue"
      :value="inputValue"
      @input="$emit('update:inputValue', $event.target.value)"
    />
    <!-- Add an $emit onchange, maybe. Maybe that is too much. Add some way to emit the value, at least -->
  </fieldset>
</template>

<script>
import UniqueID from "../utils/uuid";
export default {
  name: "InputReusable",
  props: {
    labelName: {
      type: String,
      required: true, //Maybe add default value
    },
    inputValue: { //Rename to modelValue if issues
      type: [String, Number],
      default: "",
    },
  },
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid, //TODO Does this work as uuid over?????
    };
  },
};
</script>

<style scoped></style>
