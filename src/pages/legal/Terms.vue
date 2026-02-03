/**
 * Terms.vue - Terms of Use Page (Placeholder)
 */

<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'

useHead({
  title: 'Terms of Use - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Terms of use for the Bitcoin Quantum Hub website.'
  }]
})
</script>

<template>
  <PageContainer>
    <h1>Terms of Use</h1>
    
    <div class="content-section">
      <h2>Coming Soon</h2>
      <p>
        This page is currently under development. Complete terms of use will be 
        published soon.
      </p>
      
      <h2>Educational Content Disclaimer</h2>
      <p>
        The Bitcoin Quantum Hub is an educational resource. All content provided on 
        this website is for informational purposes only and should not be construed 
        as financial, legal, or technical advice.
      </p>
      
      <p>
        Users should conduct their own research and consult with qualified professionals 
        before making any decisions related to Bitcoin, cryptocurrency, or quantum computing.
      </p>
      
      <h2>No Warranties</h2>
      <p>
        This website and its content are provided "as is" without any warranties, 
        express or implied. We make no guarantees about the accuracy, completeness, 
        or timeliness of the information provided.
      </p>
      
      <div class="contact-note">
        <p>
          For questions about these terms, please <router-link to="/about/contact">contact us</router-link>.
        </p>
      </div>
    </div>
  </PageContainer>
</template>

<style scoped>
.content-section {
  max-width: 800px;
}

.content-section h2 {
  color: var(--accent-primary);
  margin-top: var(--space-8);
  margin-bottom: var(--space-4);
}

.content-section p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-4);
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
