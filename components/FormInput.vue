<template>
  <input
    class="form-input block w-full text-sm font-bold leading-5 focus:border-purple-700 focus:shadow-outline-purple"
    :type="text"
    :name="name"
    :id="name"
  />
</template>

<script>
export default {
  props: {
    text: String,
    name: String,
    id: String,
  },
}
</script>
