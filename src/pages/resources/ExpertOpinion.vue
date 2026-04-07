<script setup>
import { useHead } from "@vueuse/head";
import PageContainer from "../../components/PageContainer.vue";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
useHead({
  title: "Expert Opinion - Bitcoin Quantum Hub",
  meta: [
    {
      name: "description",
      content:
        "Blog posts and analysis from leading researchers and practitioners.",
    },
  ],
});

const breadcrumbs = [
  { label: "Resources", path: "/resources" },
  { label: "Reading List", path: "/resources/reading-list" },
  { label: "Expert Opinion" },
];

const opinions = [
  {
    title: "Taproot Quantum Spend Paths",
    source: "BitMEX Research",
    description:
      "An analysis of how Taproot's script-path architecture can serve as the foundation for a dual quantum-safe / quantum-vulnerable spend model, minimising disruption ahead of Q-day.",
    link: "https://www.bitmex.com/blog/Taproot-Quantum-Spend-Paths",
  },
  {
    title: "Bitcoin and Quantum Computing",
    source: "Neha Narula",
    description:
      "MIT DCI director frames the CRQC risk as a probability-weighted existential threat and argues the Bitcoin community must prioritise post-quantum signature upgrades now.",
    link: "https://nehanarula.org/2026/04/03/bitcoin-and-quantum-computing.html",
  },
  {
    title: "Quantum Computing Bombshells That Are Not April Fools",
    source: "Scott Aaronson",
    description:
      "UT Austin quantum computing researcher examines two April 2026 results — lower fault-tolerance overhead (Caltech) and a reduced-qubit Shor's circuit (Google) — and their implications for cryptographic timelines.",
    link: "https://scottaaronson.blog/?p=9665",
  },
];
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />

    <h1>Expert Opinion</h1>

    <div class="opinions-list">
      <article
        v-for="opinion in opinions"
        :key="opinion.title"
        class="opinion-card"
      >
        <h3>{{ opinion.title }}</h3>
        <span class="source">{{ opinion.source }}</span>
        <p>{{ opinion.description }}</p>
        <a
          :href="opinion.link"
          target="_blank"
          rel="noopener noreferrer"
          class="opinion-link"
        >
          View Article ↗
        </a>
      </article>
    </div>
  </PageContainer>
</template>

<style scoped>
.breadcrumbs a {
  color: var(--accent-primary);
  text-decoration: none;
}
.opinions-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.opinion-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
}
.opinion-card h3 {
  margin-bottom: var(--space-2);
}
.source {
  display: inline-block;
  padding: var(--space-1) var(--space-2);
  background-color: rgba(0, 229, 255, 0.1);
  color: var(--accent-info);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  margin-bottom: var(--space-3);
}
.opinion-card p {
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}
.opinion-link {
  color: var(--accent-primary);
  font-weight: 600;
}
</style>
