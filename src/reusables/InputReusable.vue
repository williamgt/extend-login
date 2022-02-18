<template>
  <fieldset>
    <!--    NB!! NEED UNIQUE IDS. DOES THIS WORK?? Also, consider using v-bind="$attrs" (read about fallthrough attributes)   -->
    <label for="uuid">{{ labelName }}</label>
    <input
      type="text"
      id="uuid"
      :placeholder="labelName"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
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
    modelValue: { //Rename to modelValue if issues. update: I had issues, but they were resolved after changing to modelValue
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
