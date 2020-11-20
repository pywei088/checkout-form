<template>
  <div class="w-3/12 bg-purple-700 pt-64 px-16 text-white">
    <div class="flex" v-for="(step, index) in steps" :key="step.step">
      <div class="flex flex-col items-center">
        <div
          class="w-10 h-12 mb-3 mt-3 rounded-lg border-2 border-gray-400 opacity-75 justify-center items-center flex"
          :class="currentStepBorder(index)"
        >
          <span
            class="font-semibold tracking-wider text-gray-300 opacity-75"
            :class="currentStepNumber(index)"
            >0{{ step.step + 1 }}</span
          >
        </div>
        <div
          v-if="index !== 3"
          :class="currentStepLine(index)"
          class="w-0.5 h-10 bg-gray-300 opacity-50"
        ></div>
      </div>
      <div class="ml-6 mt-3">
        <div
          class="text-xs font-bold tracking-widest text-gray-300 opacity-75"
          :class="currentStepNumber(index)"
        >
          STEP 0{{ step.step + 1 }}
        </div>
        <div class="text-lg mt-1" :class="currentStepTitle(index)">
          {{ step.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        { step: 0, title: 'Basic Details' },
        { step: 1, title: 'Interests' },
        { step: 2, title: 'Invite Team' },
        { step: 3, title: 'Payment' },
      ],
    }
  },
  methods: {
    currentStepBorder(index) {
      return {
        'border-yellow-300 opacity-100': index <= this.currentStep,
      }
    },
    currentStepNumber(index) {
      return {
        'text-yellow-300 opacity-100': index <= this.currentStep,
      }
    },
    currentStepTitle(index) {
      return {
        'text-white': index <= this.currentStep,
        'text-gray-300': index > this.currentStep,
        'font-semibold': index === this.currentStep,
      }
    },
    currentStepLine(index) {
      return {
        'bg-yellow-300 opacity-100': this.currentStep > index,
      }
    },
  },
  computed: {
    currentStep() {
      return this.$store.state.currentStep
    },
  },
}
</script>
