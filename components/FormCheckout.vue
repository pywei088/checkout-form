<template>
  <form
    action="payment"
    class="w-2/3 p-7 bg-white mr-10 rounded-lg space-y-4 shadow-lg"
  >
    <h3 class="text-xs font-bold tracking-widest text-gray-800">
      PAYMENT DETAILS
    </h3>
    <div>
      <FormInput
        section="payment"
        type="text"
        name="name"
        label="Name on card"
      />
    </div>
    <div class="flex space-x-5">
      <FormInput
        class="w-7/12"
        section="payment"
        type="number"
        name="cardNumber"
        label="Card number"
      />
      <FormInput
        class="w-3/12"
        section="payment"
        type="number"
        name="cardExpiry"
        label="Expiry"
      />
      <FormInput
        class="w-2/12"
        section="payment"
        type="number"
        name="cardCvv"
        label="CVV"
      />
    </div>
    <h3 class="text-xs font-bold pt-6 tracking-widest text-gray-800">
      BILLING ADDRESS
    </h3>
    <div class="flex space-x-10">
      <FormInput
        class="w-1/2"
        section="address"
        type="text"
        name="street"
        label="Street address"
      />
      <FormInput
        class="w-1/2"
        section="address"
        type="text"
        name="city"
        label="City"
      />
    </div>
    <div class="flex space-x-10">
      <FormInput
        class="w-1/2"
        section="address"
        type="text"
        name="state"
        label="State"
      />
      <FormInput
        class="w-1/2"
        section="address"
        type="number"
        name="zip"
        label="Zip code"
      />
    </div>
  </form>
</template>

<script>
import FormInput from '../components/FormInput.vue'

export default {
  components: { FormInput },
}
</script>
