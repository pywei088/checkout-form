<template>
  <div class="w-1/3 p-7 bg-purple-700 rounded-lg text-white">
    <div>
      <span class="text-xs">You have to pay</span>
    </div>
    <div class="flex items-end">
      <div class="flex -ml-3">
        <div class="mt-1 font-semibold text-lg text-gray-300">$</div>
        <div class="font-semibold text-4xl text-yellow-200">
          {{ amountInt }}
        </div>
      </div>
      <div class="mb-2 font-semibold text-lg text-gray-300">
        {{ amountDec }}
      </div>
    </div>
    <div class="text-gray-300 leading-tight text-xs mt-4">
      Enjoy all features and perks after you complete the payment.
    </div>
    <div class="text-yellow-200 text-xs mt-2">Know all features</div>
    <div class="relative leading-tight text-gray-50 text-xs mt-5">
      <div class="ralative rounded-lg bg-gray-50 opacity-25 w-full h-12"></div>
      <div class="absolute top-0 px-3 pt-2">
        100% guarantueed support and updates for 5 years.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    amountDec: String,
    amountInt: Number,
  },
}
</script>
