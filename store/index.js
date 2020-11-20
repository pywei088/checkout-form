export const state = () => ({
  amountToPay: 840.12,
  currentStep: 1,
  paymentDetails: {
    name: null,
    cardNumber: null,
    cardExpiry: null,
    cardCvv: null,
  },
  billingAddress: {
    street: null,
    city: null,
    state: null,
    zip: null,
  },
  formErrors: [],
})

export const mutations = {
  incrementStep(state) {
    state.currentStep++
  },
  decrementStep(state) {
    state.currentStep--
  },
  updatePayment(state, payload) {
    state[payload.section][payload.name] = payload.value
  },
  addErrors(state, payload) {
    state.formErrors = []
    state.formErrors = payload.errors
  },
}
