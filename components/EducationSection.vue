<script setup lang="ts">
const { $gsap } = useNuxtApp()
const sectionRef = ref<HTMLElement | null>(null)

const cards = [
  {
    color: '#dfff1c',
    label: 'Certification',
    title: 'Certified Media Buyer',
    detail: 'Lead Gen & eCommerce · Google, YouTube & Meta',
    sub: 'Wynbrooke Advertising Academy — Octobre 2025'
  },
  {
    color: '#ff3d6e',
    label: 'Mentorat',
    title: 'Accompagnement par Dominic Camany',
    detail: 'Fondateur & Coach, Wynbrooke Academy',
    sub: 'Perfectionnement avancé en stratégie média et scaling'
  }
]

const languages = [
  { lang: 'Anglais', level: 'Langue maternelle' },
  { lang: 'Français', level: 'Niveau professionnel' }
]

onMounted(() => {
  if (!sectionRef.value) return
  $gsap.utils.toArray<HTMLElement>(sectionRef.value.querySelectorAll('.reveal-up')).forEach((el, i) => {
    $gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: i * 0.06,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    })
  })
})
</script>

<template>
  <section id="formation" ref="sectionRef" class="py-32 bg-ink-alt">
    <div class="max-w-6xl mx-auto px-6">
      <p class="reveal-up text-sm font-semibold uppercase tracking-wider text-accent mb-4">Formation & certifications</p>
      <h2 class="reveal-up font-display font-bold text-[clamp(30px,4.5vw,46px)] max-w-xl">
        Une expertise reconnue, sans cesse affinée.
      </h2>

      <div class="grid md:grid-cols-2 gap-8 mt-14">
        <div
          v-for="c in cards"
          :key="c.title"
          class="reveal-up card bg-ink border border-line rounded-3xl p-9 hover:-translate-y-1.5 hover:border-accent transition-all duration-300"
        >
          <p class="text-xs font-semibold uppercase tracking-wider" :style="{ color: c.color }">{{ c.label }}</p>
          <h3 class="font-display font-bold text-xl mt-3 mb-2">{{ c.title }}</h3>
          <p class="text-base-content/60 text-[15px]">{{ c.detail }}</p>
          <p class="text-base-content/40 text-sm mt-3">{{ c.sub }}</p>
        </div>
      </div>

      <div class="reveal-up mt-14 pt-12 border-t border-line flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p class="text-sm font-semibold uppercase tracking-wider text-accent2 mb-4">Langues</p>
          <div class="flex flex-wrap gap-6">
            <div v-for="l in languages" :key="l.lang">
              <p class="font-display font-semibold">{{ l.lang }}</p>
              <p class="text-base-content/50 text-sm">{{ l.level }}</p>
            </div>
          </div>
        </div>
        <p class="text-base-content/60 text-[15px] max-w-sm">
          Basé à Libreville, Gabon — bilingue franco-anglophone, disponible immédiatement pour des missions à distance
          partout en Afrique et à l'international.
        </p>
      </div>
    </div>
  </section>
</template>
