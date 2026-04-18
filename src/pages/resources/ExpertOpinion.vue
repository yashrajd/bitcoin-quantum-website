<script setup>
import { computed } from "vue";
import { useHead } from "@vueuse/head";
import PageContainer from "../../components/PageContainer.vue";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import { formatDate } from "../../utils/date.js";

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
    title: "Bitcoin and the Quantum Problem – Part II: The Quantum Supremacy",
    source: "Nic Carter",
    date: "2025-11-26",
    description:
      "Nic Carter argues the expected value of a CRQC is sufficiently negative for Bitcoin to warrant action today, surveying qubit scaling, investment inflection, government timelines, and the vulnerability of exposed UTXOs.",
    link: "https://murmurationstwo.substack.com/p/bitcoin-and-the-quantum-problem-part-47f",
  },
  {
    title: "Taproot Quantum Spend Paths",
    source: "BitMEX Research",
    date: "2026-01-25",
    description:
      "An analysis of how Taproot's script-path architecture can serve as the foundation for a dual quantum-safe / quantum-vulnerable spend model, minimising disruption ahead of Q-day.",
    link: "https://www.bitmex.com/blog/Taproot-Quantum-Spend-Paths",
  },
  {
    title: "Bitcoin and Quantum Computing",
    source: "Neha Narula",
    date: "2026-04-05",
    description:
      "MIT DCI director frames the CRQC risk as a probability-weighted existential threat and argues the Bitcoin community must prioritise post-quantum signature upgrades now.",
    link: "https://nehanarula.org/2026/04/03/bitcoin-and-quantum-computing.html",
  },
  {
    title: "Quantum Computing Bombshells That Are Not April Fools",
    source: "Scott Aaronson",
    date: "2026-04-01",
    description:
      "UT Austin quantum computing researcher examines two April 2026 results — lower fault-tolerance overhead (Caltech) and a reduced-qubit Shor's circuit (Google) — and their implications for cryptographic timelines.",
    link: "https://scottaaronson.blog/?p=9665",
  },
  {
    title: "I Spent 200 Hours Reading Quantum Computing Papers So You Don't Have To. Bitcoin Is Fine.",
    source: "NVK",
    date: "2026-04-05",
    description:
      "Debunks quantum FUD around Bitcoin, explaining why the threat is overhyped while identifying the real concern: roughly 6.26 million BTC with exposed public keys.",
    link: "https://bitcoinquantum.space/part1/",
  },
  {
    title: "I Went Deeper Down the Quantum Rabbit Hole. The Industry Is Full of Shit.",
    source: "NVK",
    date: "2026-04-07",
    description:
      "Exposes the quantum computing industry's financial incentives and failed timelines, while arguing Bitcoin should still upgrade its cryptography for defense-in-depth.",
    link: "https://bitcoinquantum.space/part2/",
  },
  {
    title: "I Read Every Bitcoin Quantum Proposal. Here's Where We Actually Are.",
    source: "NVK",
    date: "2026-04-09",
    description:
      "Surveys all fourteen post-quantum proposals for Bitcoin, mapping developer positions, cryptographic gaps, and the governance bottleneck.",
    link: "https://bitcoinquantum.space/part3/",
  },
];

const sortedOpinions = computed(() =>
  [...opinions].sort((a, b) => new Date(b.date) - new Date(a.date))
)
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />

    <h1>Expert Opinion</h1>

    <div class="opinions-list">
      <article
        v-for="opinion in sortedOpinions"
        :key="opinion.title"
        class="opinion-card"
      >
        <h3>{{ opinion.title }}</h3>
        <div class="card-meta">
          <span class="source">{{ opinion.source }}</span>
          <time class="card-date" :datetime="opinion.date">{{ formatDate(opinion.date) }}</time>
        </div>
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
.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
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
}
.card-date {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
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
