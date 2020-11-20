<template>
  <div>
    <label :for="name" class="pl-0.5 mb-0.5 block text-xs text-gray-600">
      {{ label }}
    </label>
    <input
      class="form-input block w-full text-sm font-bold leading-5 focus:border-purple-700 focus:shadow-outline-purple"
      :class="{ 'border-red-500': checkError() }"
      :type="type"
      :name="name"
      :id="name"
      @change="commitInput(value, name)"
      v-model="value"
    />
    <label class="pl-1 text-xs text-red-500" v-if="checkError()" for="name"
      >* required</label
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    }
  },
  props: {
    type: String,
    name: String,
    label: String,
    section: String,
  },
  methods: {
    commitInput(value, name) {
      const section =
        this.section === 'payment'
          ? 'paymentDetails'
          : this.section === 'address'
          ? 'billingAddress'
          : null

      this.$store.commit('updatePayment', { value, name, section })
    },
    checkError() {
      if (this.$store.state.formErrors.includes('no' + this.name)) {
        return true
      }
      return false
    },
  },
  computed: {},
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
