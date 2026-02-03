/**
 * Privacy.vue - Privacy Policy Page (Placeholder)
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'

useHead({
  title: 'Privacy Policy - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Privacy policy for the Bitcoin Quantum Hub website.'
  }]
})

const breadcrumbs = [
  { label: 'Legal', path: '/legal' },
  { label: 'Privacy Policy' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />

    <h1>Privacy Policy</h1>
    
    <div class="content-section">
      <h2>Coming Soon</h2>
      <p>
        This page is currently under development. The Bitcoin Quantum Hub is committed 
        to protecting your privacy and will publish a comprehensive privacy policy soon.
      </p>
      
      <h2>Current Practice</h2>
      <p>
        This website currently does not collect, store, or process any personal information. 
        We do not use cookies, analytics, or tracking technologies.
      </p>
      
      <p>
        All content is served statically and no user data is transmitted to our servers.
      </p>
      
      <div class="contact-note">
        <p>
          For privacy-related questions, please <router-link to="/about/contact">contact us</router-link>.
        </p>
      </div>
    </div>
  </PageContainer>
</template>

<style scoped>
.content-section {
  max-width: 768px;
}

.contact-note {
  background: linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(0, 229, 255, 0.05));
  border: 1px solid var(--accent-info);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  margin-top: var(--space-8);
}

.contact-note p {
  margin: 0;
}

.contact-note a {
  color: var(--accent-primary);
  font-weight: 600;
}
</style>
