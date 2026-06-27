<script setup lang="ts">
const { $gsap } = useNuxtApp()
const heroRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!heroRef.value) return
  const tl = $gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.from('.hero-eyebrow', { y: 16, opacity: 0, duration: 0.6 })
    .from('.hero-title', { y: 30, opacity: 0, duration: 0.8 }, '-=0.3')
    .from('.hero-sub', { y: 20, opacity: 0, duration: 0.7 }, '-=0.4')
    .from('.hero-cta', { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.3')
    .from('.hero-photo', { scale: 0.85, opacity: 0, duration: 0.9, ease: 'back.out(1.4)' }, '-=0.6')
    .from('.hero-badge', { y: 12, opacity: 0, duration: 0.5 }, '-=0.3')
    .from('.hero-marquee', { opacity: 0, duration: 0.6 }, '-=0.2')
})
</script>

<template>
  <section
    id="accueil"
    ref="heroRef"
    class="relative min-h-screen flex flex-col justify-center pt-32 overflow-hidden"
  >
    <div
      class="absolute -top-1/4 -right-1/4 w-[60%] h-[140%] opacity-10 blur-3xl rotate-6"
      style="background: linear-gradient(135deg, #ff3d6e, #dfff1c); clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);"
    />

    <div class="relative z-10 max-w-6xl mx-auto px-6 w-full">
      <div class="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
        <div>
          <p class="hero-eyebrow inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-accent mb-6">
            <span class="w-2 h-2 rounded-full bg-accent inline-block" />
            Publicité en ligne · Design graphique
          </p>

          <h1 class="hero-title font-display font-bold leading-[1.05] max-w-3xl text-[clamp(40px,7vw,84px)]">
            Des campagnes qui <span class="text-accent">convertissent</span>.<br>
            Des visuels qui <span class="text-accent2">marquent</span>.
          </h1>

          <p class="hero-sub mt-7 text-base-content/60 max-w-xl text-[clamp(16px,2vw,19px)] leading-relaxed">
            Je suis Brandon Mbori, j'aide les marques à se démarquer en ligne en combinant stratégie
            publicitaire digitale et créativité visuelle, du brief jusqu'aux résultats.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">
            <a href="#contact" class="hero-cta btn rounded-full bg-accent text-ink border-none px-8 hover:-translate-y-1 transition-transform">
              Démarrer un projet
            </a>
            <a href="#portfolio" class="hero-cta btn btn-outline rounded-full border-line px-8 hover:border-base-content">
              Voir mes travaux
            </a>
          </div>
        </div>

        <div class="hero-photo relative mx-auto lg:mx-0 w-[230px] sm:w-[280px] lg:w-full lg:max-w-[340px]">
          <div
            class="absolute -inset-6 rounded-full opacity-25 blur-2xl"
            style="background: linear-gradient(160deg, #dfff1c, #ff3d6e);"
          />
          <div class="relative aspect-square rounded-full overflow-hidden border-[3px] border-accent shadow-2xl">
            <img
              src="/images/portfolio/pic01-enhanced.webp"
              alt="Brandon Mbori, expert publicité en ligne et design graphique"
              class="w-full h-full object-cover"
            >
          </div>
          <div
            class="hero-badge absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 bg-ink-alt border border-line rounded-full px-5 py-2.5 shadow-xl whitespace-nowrap"
          >
            <span class="text-xs font-semibold uppercase tracking-wider text-base-content/80">
              <span class="text-accent">●</span> Disponible en freelance
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-marquee relative z-10 mt-20 border-y border-line py-4 overflow-hidden whitespace-nowrap">
      <div class="inline-block animate-marquee font-display font-bold text-sm tracking-wider uppercase text-base-content/50">
        META ADS <span class="text-accent mx-2">•</span> GOOGLE ADS <span class="text-accent mx-2">•</span> TIKTOK ADS
        <span class="text-accent mx-2">•</span> BRANDING <span class="text-accent mx-2">•</span> IDENTITÉ VISUELLE
        <span class="text-accent mx-2">•</span> DIRECTION CRÉATIVE <span class="text-accent mx-2">•</span> OPTIMISATION ROI
        <span class="text-accent mx-2">•</span> DESIGN GRAPHIQUE <span class="text-accent mx-2">•</span>
        META ADS <span class="text-accent mx-2">•</span> GOOGLE ADS <span class="text-accent mx-2">•</span> TIKTOK ADS
        <span class="text-accent mx-2">•</span> BRANDING <span class="text-accent mx-2">•</span> IDENTITÉ VISUELLE
        <span class="text-accent mx-2">•</span> DIRECTION CRÉATIVE <span class="text-accent mx-2">•</span> OPTIMISATION ROI
        <span class="text-accent mx-2">•</span> DESIGN GRAPHIQUE <span class="text-accent mx-2">•</span>
      </div>
    </div>
  </section>
</template>
