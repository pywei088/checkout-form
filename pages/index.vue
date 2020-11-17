<template>
  <div class="bg-gray-200 h-screen pt-20 px-20 flex">
    <div class="w-4/5">
      <div class="w-2/3">
        <h1 class="text-3xl font-bold text-gray-800">Confirm order and pay</h1>
        <p class="text-gray-600">
          Please make the payment, after that you can enjoy all the features and
          benefits.
        </p>
      </div>
      <div class="mt-20 flex">
        <div class="w-2/3 p-6 bg-white mr-10 rounded-lg space-y-4">
          <h3 class="text-sm font-bold">PAYMENT DETAILS</h3>
          <form action="payment">
            <label for="name" class="block text-xs text-gray-600">
              Name on card
            </label>
            <input
              class="form-input block w-full text-sm font-bold leading-5 focus:border-purple-700 focus:shadow-outline-purple"
              type="text"
              name="name"
              id="name"
            />
          </form>
        </div>
        <div class="w-1/3 h-64 bg-purple-700 rounded-lg"></div>
      </div>
    </div>
    <div class="w-1/5"></div>
  </div>
</template>

<script>
export default {}
</script>
