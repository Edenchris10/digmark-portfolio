<script setup lang="ts">
const { $gsap } = useNuxtApp()
const sectionRef = ref<HTMLElement | null>(null)

const form = reactive({ name: '', email: '', message: '' })

function submitForm() {
  const subject = encodeURIComponent(`Nouveau message depuis le portfolio — ${form.name}`)
  const body = encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
  window.location.href = `mailto:mboribrandon@gmail.com?subject=${subject}&body=${body}`
}

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
  <section id="contact" ref="sectionRef" class="py-32 bg-ink-alt">
    <div class="max-w-6xl mx-auto px-6">
      <p class="reveal-up text-sm font-semibold uppercase tracking-wider text-accent mb-4">Contact</p>
      <h2 class="reveal-up font-display font-bold text-[clamp(30px,4.5vw,46px)]">Travaillons ensemble.</h2>

      <div class="grid md:grid-cols-[1fr_1.1fr] gap-16 mt-14">
        <div class="reveal-up flex flex-col gap-7">
          <div>
            <span class="block text-xs uppercase tracking-wider text-base-content/50 font-semibold mb-1">Email</span>
            <a class="font-display font-semibold text-lg hover:text-accent" href="mailto:mboribrandon@gmail.com">
              mboribrandon@gmail.com
            </a>
          </div>
          <div>
            <span class="block text-xs uppercase tracking-wider text-base-content/50 font-semibold mb-1">Téléphone / WhatsApp</span>
            <a class="font-display font-semibold text-lg hover:text-accent block" href="tel:+241077089776">+241 077 089 776</a>
            <a class="font-display font-semibold text-lg hover:text-accent block" href="tel:+241065973019">+241 065 973 019</a>
          </div>
          <div>
            <span class="block text-xs uppercase tracking-wider text-base-content/50 font-semibold mb-1">Réseaux</span>
            <div class="flex gap-3.5 mt-1">
              <a
                href="https://www.linkedin.com/in/brandon-mbori/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                class="w-11 h-11 rounded-full border border-line flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /><path d="M10 9v12M10 13c0-2 2-4 4-4s4 2 4 4v8" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <form class="reveal-up flex flex-col gap-5" @submit.prevent="submitForm">
          <div class="form-control">
            <label class="text-sm text-base-content/60 mb-1.5" for="name">Nom</label>
            <input id="name" v-model="form.name" type="text" required placeholder="Votre nom" class="bg-transparent border-0 border-b border-line focus:border-accent focus:outline-none py-3 text-[15px]">
          </div>
          <div class="form-control">
            <label class="text-sm text-base-content/60 mb-1.5" for="email">Email</label>
            <input id="email" v-model="form.email" type="email" required placeholder="votre@email.com" class="bg-transparent border-0 border-b border-line focus:border-accent focus:outline-none py-3 text-[15px]">
          </div>
          <div class="form-control">
            <label class="text-sm text-base-content/60 mb-1.5" for="message">Message</label>
            <textarea id="message" v-model="form.message" required rows="4" placeholder="Parlez-moi de votre projet..." class="bg-transparent border-0 border-b border-line focus:border-accent focus:outline-none py-3 text-[15px] resize-none" />
          </div>
          <button type="submit" class="btn rounded-full bg-accent text-ink border-none self-start px-8 hover:-translate-y-1 transition-transform">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
