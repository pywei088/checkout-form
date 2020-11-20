<template>
  <div class="h-screen" style="font-family: 'Poppins', sans-serif">
    <div class="p-2">
      Control Panel
      <button @click="$store.commit('decrementStep')" class="p-2 bg-red-400">
        Step down
      </button>
      <button @click="$store.commit('incrementStep')" class="p-2 bg-green-400">
        Step up
      </button>
    </div>
    <div class="w-full h-16 bg-gray-200"></div>
    <div class="bg-gray-50 flex">
      <div class="w-9/12 px-16 z-30 shadow-lg pb-20">
        <div class="w-2/3 mt-20 h-24">
          <h1 class="text-3xl font-semibold text-gray-800">
            Confirm order and pay
          </h1>
          <p class="text-gray-400 pr-7 font-semibold">
            Please make the payment, after that you can enjoy all the features
            and benefits.
          </p>
        </div>
        <div class="mt-20 flex items-start">
          <!-- Takes users payment information -->
          <FormCheckout />

          <AmountCard
            :amountDec="removeZero(amountDec)"
            :amountInt="amountInt"
          />
        </div>
        <div class="w-2/3 pr-7 mt-10 flex justify-between">
          <button class="text-gray-300 font-semibold text-sm pr-3">
            Previous step
          </button>
          <button
            class="px-9 py-4 rounded-md bg-purple-700 text-white font-semibold text-sm"
            @click="checkForm"
          >
            Pay ${{ amountInt }}
          </button>
        </div>
      </div>
      <div class="w-14 bg-gray-200"></div>

      <StepBar />
    </div>
  </div>
</template>

<script>
import StepBar from '../components/StepBar.vue'
import AmountCard from '../components/AmountCard.vue'
import FormCheckout from '../components/FormCheckout.vue'
export default {
  components: { FormCheckout, AmountCard, StepBar },
  computed: {
    amount() {
      return this.$store.state.amountToPay
    },
    amountDec() {
      return this.amount - this.amountInt
    },
    amountInt() {
      return Math.floor(this.amount)
    },
  },
  methods: {
    removeZero() {
      const number = this.amountDec.toFixed(2)
      const length = number.length
      let removedZero = ''
      for (let i = 0; i < length; i++) {
        if (i > 0) {
          removedZero += number[i]
        }
      }
      return removedZero
    },
    checkForm() {
      const errors = []
      for (const key in this.$store.state.paymentDetails) {
        if (!this.$store.state.paymentDetails[key]) {
          errors.push('no' + key)
        }
      }
      for (const key in this.$store.state.billingAddress) {
        if (!this.$store.state.billingAddress[key]) {
          errors.push('no' + key)
        }
      }
      this.$store.commit('addErrors', { errors })
    },
  },
}
</script>
