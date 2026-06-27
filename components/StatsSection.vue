<script setup lang="ts">
const { $gsap } = useNuxtApp()
const sectionRef = ref<HTMLElement | null>(null)

const stats = [
  { value: '150%', label: 'de ROI généré sur les campagnes clients' },
  { value: '3+', label: "ans d'expérience en gestion de budgets publicitaires" },
  { value: '5', label: 'plateformes maîtrisées : Meta, Google, YouTube, Instagram, TikTok' },
  { value: '20+', label: "heures économisées chaque mois grâce à l'automatisation IA" }
]

onMounted(() => {
  if (!sectionRef.value) return
  $gsap.utils.toArray<HTMLElement>(sectionRef.value.querySelectorAll('.reveal-up')).forEach((el, i) => {
    $gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: i * 0.07,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' }
    })
  })
})
</script>

<template>
  <section class="relative py-16 border-y border-line">
    <div ref="sectionRef" class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div v-for="s in stats" :key="s.label" class="reveal-up text-center md:text-left">
          <p class="font-display font-bold text-[clamp(34px,4vw,48px)] text-accent leading-none">
            {{ s.value }}
          </p>
          <p class="mt-3 text-sm text-base-content/55 leading-snug max-w-[190px] mx-auto md:mx-0">
            {{ s.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
