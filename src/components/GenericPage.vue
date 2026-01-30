<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'

useHead({
  title: pageTitle,
  meta: [{
    name: 'description',
    content: pageDescription
  }]
})

const props = defineProps({
  pageTitle: { type: String, default: 'Bitcoin Quantum Hub' },
  pageDescription: { type: String, default: '' },
  breadcrumbs: { type: Array, default: () => [] },
  content: { type: String, default: '' }
})
</script>

<template>
  <PageContainer>
    <nav v-if="breadcrumbs.length" class="breadcrumbs" aria-label="Breadcrumb">
      <template v-for="(crumb, i) in breadcrumbs" :key="i">
        <router-link v-if="crumb.path" :to="crumb.path">{{ crumb.label }}</router-link>
        <span v-else class="current">{{ crumb.label }}</span>
        <span v-if="i < breadcrumbs.length - 1">/</span>
      </template>
    </nav>
    
    <h1>{{ pageTitle }}</h1>
    <p v-if="pageDescription" class="lead">{{ pageDescription }}</p>
    
    <div class="content" v-html="content"></div>
    
    <slot />
  </PageContainer>
</template>

<style scoped>
.breadcrumbs {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--space-6);
}

.breadcrumbs a {
  color: var(--accent-primary);
  text-decoration: none;
}

.lead {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}

.content {
  color: var(--text-secondary);
  line-height: 1.8;
}

.content p {
  margin-bottom: var(--space-4);
}
</style>
