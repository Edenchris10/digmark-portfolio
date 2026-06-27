<script setup lang="ts">
const { $gsap } = useNuxtApp()
const sectionRef = ref<HTMLElement | null>(null)

const services = [
  {
    title: 'Publicité en ligne',
    color: '#dfff1c',
    items: [
      'Stratégie et gestion de campagnes Meta Ads, Google Ads & TikTok Ads',
      "Ciblage d'audience et structuration de campagnes",
      'Optimisation du ROI et du coût par acquisition',
      'A/B testing de créas et de messages',
      'Suivi de performance et reporting clair'
    ]
  },
  {
    title: 'Design graphique',
    color: '#ff3d6e',
    items: [
      'Identité visuelle et déclinaisons de branding',
      'Création de visuels publicitaires performants',
      'Supports de communication (réseaux sociaux, flyers, affiches)',
      'Maquettes, mise en page et habillage de contenus'
    ]
  }
]

onMounted(() => {
  if (!sectionRef.value) return
  $gsap.utils.toArray<HTMLElement>(sectionRef.value.querySelectorAll('.reveal-up')).forEach((el, i) => {
    $gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: i * 0.05,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    })
  })
})
</script>

<template>
  <section id="services" ref="sectionRef" class="py-32 bg-ink-alt">
    <div class="max-w-6xl mx-auto px-6">
      <p class="reveal-up text-sm font-semibold uppercase tracking-wider text-accent mb-4">Ce que je fais</p>
      <h2 class="reveal-up font-display font-bold text-[clamp(30px,4.5vw,46px)] max-w-xl">
        Deux expertises, une seule mission : faire grandir votre marque.
      </h2>

      <div class="grid md:grid-cols-2 gap-8 mt-16">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="reveal-up card bg-ink border border-line rounded-3xl p-11 hover:-translate-y-2 hover:border-accent transition-all duration-300"
          :class="i === 1 ? 'md:translate-y-7' : ''"
        >
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center mb-7"
            :style="{ background: service.color + '1f' }"
          >
            <svg v-if="i === 0" width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="service.color" stroke-width="2"><path d="M3 11l18-8-8 18-2-8-8-2z" /></svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="service.color" stroke-width="2"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18" /></svg>
          </div>
          <h3 class="font-display font-bold text-2xl mb-4">{{ service.title }}</h3>
          <ul class="flex flex-col gap-3">
            <li v-for="item in service.items" :key="item" class="flex gap-2.5 text-[15px] text-base-content/60">
              <span class="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" :style="{ background: service.color }" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
