<script setup lang="ts">
const { $gsap } = useNuxtApp()
const sectionRef = ref<HTMLElement | null>(null)

const roles = [
  {
    title: 'Freelance Media Buyer & Spécialiste Marketing Digital',
    place: 'À distance',
    period: '2022 — Présent',
    items: [
      'Conception et pilotage de campagnes publicitaires full-funnel sur Meta, Google, YouTube et TikTok pour des clients e-commerce et services, avec un ROI allant jusqu’à 150%.',
      'Construction d’avatars clients détaillés et cartographie des niveaux de maturité d’achat pour affiner le ciblage et réduire le gaspillage budgétaire.',
      'Tests A/B continus sur les formats publicitaires, les messages et les pages de destination, afin d’identifier et de scaler les combinaisons les plus performantes.',
      'Intégration d’outils IA dans la production créative et le reporting client, pour des délais plus courts sans compromis sur la qualité.'
    ]
  },
  {
    title: 'Consultant Marketing Digital',
    place: 'APC Imprimerie Numérique · Libreville, Gabon',
    period: 'Juillet 2024 — Présent',
    items: [
      'Création et gestion de campagnes Meta et TikTok Ads dédiées à la génération de leads, générant un flux constant de demandes qualifiées pour les services d’impression.',
      'Élaboration de stratégies de contenu calées sur les temps forts locaux et saisonniers, renforçant l’engagement organique en complément des campagnes payantes.',
      'Déploiement d’automatisations IA dans la chaîne de production de contenu, avec plus de 20 heures économisées chaque mois et une régularité accrue des résultats.'
    ]
  },
  {
    title: 'Consultant Marketing Digital',
    place: 'Imprimerie Numérique Silicon Valley · Libreville, Gabon',
    period: 'Janvier — Juillet 2025',
    items: [
      'Pilotage de campagnes Meta et TikTok Ads orientées résultats pour une marque d’impression locale, avec une amélioration nette de la qualité des leads grâce à un ciblage affiné.',
      'Conception de stratégies de contenu data-driven, exploitant les tendances de plateforme et les spécificités du marché local pour maximiser portée et engagement.'
    ]
  }
]

const expertise = [
  'Niveaux de maturité d’achat',
  'Création publicitaire assistée par IA',
  'Construction d’avatars & ciblage d’audience',
  'Analyse des points de friction client',
  'Ciblage contextuel & audiences similaires',
  'Tests A/B & tests créatifs',
  'Analyse de données & reporting',
  'Optimisation de comptes publicitaires',
  'Optimisation de flux produits (Shopping Feed)',
  'Scaling budgétaire maîtrisé',
  'Maximisation du ROI'
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
  <section id="experience" ref="sectionRef" class="py-32">
    <div class="max-w-6xl mx-auto px-6">
      <p class="reveal-up text-sm font-semibold uppercase tracking-wider text-accent mb-4">Expériences</p>
      <h2 class="reveal-up font-display font-bold text-[clamp(30px,4.5vw,46px)] max-w-xl">
        Un parcours bâti sur des résultats mesurables.
      </h2>

      <div class="mt-16 flex flex-col gap-10">
        <div
          v-for="role in roles"
          :key="role.title"
          class="reveal-up grid md:grid-cols-[0.85fr_2fr] gap-6 md:gap-10 pb-10 border-b border-line last:border-0"
        >
          <div>
            <p class="font-display font-semibold text-accent text-sm uppercase tracking-wider">{{ role.period }}</p>
            <p class="text-base-content/50 text-sm mt-1.5">{{ role.place }}</p>
          </div>
          <div>
            <h3 class="font-display font-bold text-xl mb-3.5">{{ role.title }}</h3>
            <ul class="flex flex-col gap-2.5">
              <li v-for="item in role.items" :key="item" class="flex gap-2.5 text-[15px] text-base-content/60 leading-relaxed">
                <span class="text-accent font-bold flex-shrink-0">→</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="reveal-up mt-16 pt-12 border-t border-line">
        <p class="text-sm font-semibold uppercase tracking-wider text-accent2 mb-5">Expertise & méthodologie</p>
        <div class="flex flex-wrap gap-2.5">
          <span
            v-for="e in expertise"
            :key="e"
            class="badge badge-outline border-line text-base-content/60 py-3 px-4"
          >
            {{ e }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
