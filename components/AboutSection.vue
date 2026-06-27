<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()
const sectionRef = ref<HTMLElement | null>(null)

const skills = ['Meta Ads', 'Google Ads', 'Branding', 'Adobe Photoshop', 'Illustrator', 'Canva Pro']

const points = [
  "Approche orientée résultats : chaque campagne est pensée pour un objectif clair (notoriété, leads, ventes).",
  "Une double compétence rare : je gère aussi bien la stratégie média que la création des visuels qui l'accompagnent.",
  'Disponible pour des missions freelance, des collaborations ponctuelles ou un accompagnement régulier.'
]

onMounted(() => {
  if (!sectionRef.value) return
  $gsap.utils.toArray<HTMLElement>(sectionRef.value.querySelectorAll('.reveal-up')).forEach((el) => {
    $gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    })
  })
})
</script>

<template>
  <section id="apropos" ref="sectionRef" class="py-32">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
        <div class="reveal-up">
          <div class="relative">
            <div
              class="absolute -inset-3 rounded-[2rem] opacity-20 blur-2xl -z-10"
              style="background: linear-gradient(160deg, #ff3d6e, #dfff1c 70%);"
            />
            <div class="aspect-[3/4] rounded-3xl overflow-hidden border border-line">
              <img
                src="/images/portfolio/about-portrait.webp"
                alt="Brandon Mbori, expert en publicité en ligne et design graphique"
                class="w-full h-full object-cover"
              >
            </div>
          </div>
          <div class="flex flex-wrap gap-2.5 mt-6">
            <span v-for="s in skills" :key="s" class="badge badge-outline border-line text-base-content/60 py-3 px-4">
              {{ s }}
            </span>
          </div>
        </div>

        <div class="reveal-up">
          <p class="text-sm font-semibold uppercase tracking-wider text-accent mb-4">À propos</p>
          <h2 class="font-display font-bold text-[clamp(30px,4.5vw,46px)] max-w-xl">
            Stratège digital le jour, créatif visuel toujours.
          </h2>
          <p class="text-base-content/60 text-lg leading-relaxed mt-6 max-w-xl">
            Passionné par la performance digitale et l'esthétique, j'accompagne les marques et indépendants
            qui veulent exister en ligne avec impact. D'un côté, je pilote des campagnes publicitaires pensées
            pour convertir ; de l'autre, je conçois les visuels qui donnent à ces campagnes leur identité.
          </p>
          <ul class="mt-8 flex flex-col gap-3.5">
            <li v-for="p in points" :key="p" class="flex gap-3.5 items-start text-[15px]">
              <span class="text-accent font-bold">→</span>
              <span>{{ p }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
