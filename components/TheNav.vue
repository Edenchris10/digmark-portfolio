<script setup lang="ts">
const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Formation', href: '#formation' },
  { label: 'Contact', href: '#contact' }
]

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line py-3' : 'py-5 border-b border-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <a href="#accueil" class="font-display font-bold text-lg tracking-tight">
        BRANDON<span class="text-accent">.</span>MBORI
      </a>

      <nav class="hidden md:flex gap-9">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-base-content/60 hover:text-base-content transition-colors"
        >
          {{ link.label }}
        </a>
      </nav>

      <a href="#contact" class="hidden md:inline-flex btn btn-sm rounded-full border-line bg-transparent hover:bg-accent hover:text-ink hover:border-accent">
        Me contacter
      </a>

      <button class="md:hidden flex flex-col gap-1.5" aria-label="Menu" @click="mobileOpen = !mobileOpen">
        <span class="w-6 h-0.5 bg-base-content block" />
        <span class="w-6 h-0.5 bg-base-content block" />
        <span class="w-6 h-0.5 bg-base-content block" />
      </button>
    </div>

    <div v-if="mobileOpen" class="md:hidden mt-4 mx-6 rounded-2xl border border-line bg-ink-alt p-6 flex flex-col gap-4">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="text-sm font-medium text-base-content/80"
        @click="closeMobile"
      >
        {{ link.label }}
      </a>
    </div>
  </header>
</template>
