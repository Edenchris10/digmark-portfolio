<script setup lang="ts">
import { portfolioItems } from '~/data/portfolio'
import type { PortfolioCategory } from '~/types/portfolio'

const { $gsap } = useNuxtApp()
const sectionRef = ref<HTMLElement | null>(null)
const activeFilter = ref<'all' | PortfolioCategory>('all')
const lightboxItem = ref<string | null>(null)

const filters: { key: 'all' | PortfolioCategory; label: string }[] = [
  { key: 'all', label: 'Tous' },
  { key: 'pub', label: 'Publicité en ligne' },
  { key: 'design', label: 'Design graphique' }
]

const filteredItems = computed(() =>
  activeFilter.value === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter.value)
)

function openLightbox(image: string) {
  lightboxItem.value = image
}
function closeLightbox() {
  lightboxItem.value = null
}

function animateGrid() {
  nextTick(() => {
    const cards = sectionRef.value?.querySelectorAll('.pf-card')
    if (!cards || !cards.length) return
    $gsap.fromTo(
      cards,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out' }
    )
  })
}

watch(activeFilter, animateGrid)
onMounted(animateGrid)
</script>

<template>
  <section id="portfolio" ref="sectionRef" class="py-32">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p class="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Portfolio</p>
          <h2 class="font-display font-bold text-[clamp(30px,4.5vw,46px)]">Quelques exemples de projets.</h2>
        </div>

        <div class="flex gap-2 flex-wrap">
          <button
            v-for="f in filters"
            :key="f.key"
            class="btn btn-sm rounded-full border-line"
            :class="activeFilter === f.key ? 'bg-accent text-ink border-accent' : 'bg-transparent text-base-content/60'"
            @click="activeFilter = f.key"
          >
            {{ f.label }}
          </button>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        <button
          v-for="item in filteredItems"
          :key="item.slug"
          class="pf-card group relative aspect-[4/5] rounded-2xl overflow-hidden border border-line text-left"
          @click="openLightbox(item.image)"
        >
          <img
            :src="item.thumb"
            :alt="item.title"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
          <div class="absolute inset-0 flex flex-col justify-end p-6">
            <p class="text-xs uppercase tracking-wider font-semibold text-base-content/75 mb-1.5">
              {{ item.categoryLabel }}
            </p>
            <p class="font-display font-bold text-lg leading-tight">{{ item.title }}</p>
            <p class="text-xs text-base-content/50 mt-1">{{ item.client }}</p>
          </div>
        </button>
      </div>
    </div>

    <div
      v-if="lightboxItem"
      class="fixed inset-0 z-[60] bg-ink/95 flex items-center justify-center p-6 cursor-zoom-out"
      @click="closeLightbox"
    >
      <img :src="lightboxItem" alt="" class="max-h-[90vh] max-w-full rounded-2xl object-contain">
      <button class="absolute top-6 right-6 btn btn-circle btn-sm bg-ink-alt border-line" @click="closeLightbox">✕</button>
    </div>
  </section>
</template>
