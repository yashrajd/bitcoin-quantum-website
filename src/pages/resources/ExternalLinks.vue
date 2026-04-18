<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
useHead({
  title: 'External Links - Bitcoin Quantum Hub',
  meta: [{ name: 'description', content: 'Additional resources and community links.' }]
})

const breadcrumbs = [
  { label: 'Resources', path: '/resources' },
  { label: 'External Links' }
]

const links = [
  { category: 'Community', items: [
    { name: 'Bitcoin-Dev Mailing List', url: 'https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev', desc: 'Technical discussions among Bitcoin developers' },
    { name: 'Bitcoin StackExchange', url: 'https://bitcoin.stackexchange.com', desc: 'Q&A for Bitcoin developers and users' }
  ]},
  { category: 'Research', items: [
    { name: 'NIST PQC', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography', desc: 'Post-Quantum Cryptography standardization' },
    { name: 'arXiv Quantum Physics', url: 'https://arxiv.org/list/quant-ph/recent', desc: 'Latest quantum computing research papers' },
    { name: 'Post-Quantum Bitcoin', url: 'https://pq-bitcoin.org/', desc: 'Research blog on Bitcoin\'s quantum vulnerability and CRQC response planning by Anthony Milton & Clara Shikhelman' },
    { name: 'Bitcoin & Quantum Computing', url: 'https://bitcoinquantum.space/', desc: 'Three-part research series examining quantum computing\'s impact on Bitcoin by NVK (Coinkite)' },
    { name: 'Bitcoin Post-Quantum Work Tracker', url: 'https://gist.github.com/Roasbeef/563f173fe44e2005e003a082716e586f', desc: 'Living index of active post-quantum developer work, proposals, and discussions, maintained by Olaoluwa Osuntokun (roasbeef)' }
  ]}
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>External Links</h1>
    
    <div v-for="section in links" :key="section.category" class="link-section">
      <h2>{{ section.category }}</h2>
      <ul>
        <li v-for="item in section.items" :key="item.name">
          <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
          <p>{{ item.desc }}</p>
        </li>
      </ul>
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a { color: var(--accent-primary); text-decoration: none; }
.link-section { margin-bottom: var(--space-8); }
.link-section h2 { color: var(--accent-primary); margin-bottom: var(--space-4); }
.link-section ul { list-style: none; padding: 0; }
.link-section li { margin-bottom: var(--space-4); }
.link-section a { color: var(--accent-primary); font-weight: 600; text-decoration: none; }
.link-section a:hover { text-decoration: underline; }
.link-section p { color: var(--text-secondary); margin: var(--space-1) 0 0; font-size: var(--text-sm); }
</style>
