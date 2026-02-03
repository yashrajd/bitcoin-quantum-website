<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'Contact - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Get in touch or contribute to the Bitcoin Quantum Hub.' }]
})


const breadcrumbs = [
  { label: 'About', path: '/about' },
  { label: 'Contact' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Contact & Contribute</h1>
    
    <div class="contact-sections">
      <section class="contact-method">
        <h2>Report Errors</h2>
        <p>Found an inaccuracy or broken link? Help us maintain high standards by reporting errors.</p>
        <a href="mailto:contact@bitcoinquantumhub.org" class="contact-link">contact@bitcoinquantumhub.org</a>
      </section>
      
      <section class="contact-method">
        <h2>Suggest Content</h2>
        <p>Have a topic you'd like us to cover or a resource to add? We'd love to hear your suggestions.</p>
        <a href="mailto:suggestions@bitcoinquantumhub.org" class="contact-link">suggestions@bitcoinquantumhub.org</a>
      </section>
      
      <section class="contact-method">
        <h2>Contribute</h2>
        <p>Developers can contribute to this project on GitHub. Help us improve the site and keep information current.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="contact-link">GitHub Repository ↗</a>
      </section>
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.contact-sections { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
.contact-method {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
}
.contact-method h2 { color: var(--accent-primary); margin-bottom: var(--space-3); }
.contact-method p { color: var(--text-secondary); margin-bottom: var(--space-4); }
.contact-link { color: var(--accent-primary); font-weight: 600; text-decoration: none; }
.contact-link:hover { text-decoration: underline; }
@media (max-width: 900px) { .contact-sections { grid-template-columns: 1fr; } }
</style>
