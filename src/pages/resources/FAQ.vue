/**
 * FAQ.vue - Frequently Asked Questions
 */

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'

useHead({
  title: 'FAQ - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'Frequently asked questions about quantum computing and Bitcoin security.'
  }]
})

const faqs = [
  {
    question: 'Is Bitcoin currently vulnerable to quantum attacks?',
    answer: 'No. Quantum computing is not currently an existential threat to Bitcoin. The technology needed to break Bitcoin\'s cryptography does not yet exist. However, academic surveys of the field highlight the need for proactive preparation.',
    category: 'General'
  },
  {
    question: 'When will quantum computers be able to break Bitcoin?',
    answer: 'Estimates vary widely. Academic research suggests that while a full-scale quantum computer capable of breaking ECDSA is likely years away, the long-term nature of Bitcoin\'s security model necessitates preparing for this eventuality well in advance. Government agencies like the UK NCSC have set migration deadlines (e.g., 2031 for high-risk systems), indicating a serious medium-term timeline.',
    category: 'Timeline'
  },
  {
    question: 'Which Bitcoin addresses are most vulnerable?',
    answer: 'Addresses with exposed public keys are most vulnerable. This includes: Pay-to-Public-Key (P2PK) addresses (including Satoshi\'s coins), any address that has been reused (has sent a transaction), and all Taproot addresses due to their key-path spend feature. Addresses that have only received funds (never sent) keep their public keys hidden behind SHA-256 hashes and are more secure.',
    category: 'Vulnerabilities'
  },
  {
    question: 'What happens if I don\'t migrate to a quantum-resistant address?',
    answer: 'If you don\'t migrate from a quantum-vulnerable address before a quantum computer capable of breaking ECDSA emerges, your funds could be stolen. However, the migration process would be possible once such a computer is known to exist—the threat isn\'t instantaneous. The perception of vulnerability could also affect market prices before any practical attack occurs.',
    category: 'Migration'
  },
  {
    question: 'Will BIP-360 require a hard fork?',
    answer: 'No. BIP-360 is designed as a soft fork upgrade, meaning it can be implemented without forcing all network participants to update. This maintains backward compatibility while introducing quantum-resistant features for those who adopt them.',
    category: 'BIP-360'
  },
  {
    question: 'How will BIP-360 affect transaction fees and speed?',
    answer: 'Post-quantum signatures typically require more data storage, which could increase transaction fees. However, BIP-360 places this data in the witness segment, which is already discounted under SegWit, helping to mitigate the impact on transaction costs. The exact impact will depend on implementation details and adoption levels.',
    category: 'BIP-360'
  },
  {
    question: 'What if I lose my private keys after migrating to BIP-360?',
    answer: 'Like with current Bitcoin addresses, if you lose your private keys after migrating to BIP-360, you will lose access to your funds. Quantum resistance doesn\'t change the fundamental importance of securing your private keys.',
    category: 'BIP-360'
  },
  {
    question: 'Can the Lightning Network and other layer-2 solutions be quantum-resistant?',
    answer: 'Yes. Since Lightning and other layer-2 solutions build on Bitcoin\'s base layer, they can inherit quantum resistance from underlying protocol upgrades like BIP-360. Research into quantum-resistant layer-2 protocols is ongoing.',
    category: 'Technical'
  }
]

const openIndex = ref(null)

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>Frequently Asked Questions</h1>
    <p class="lead">
      Common questions about quantum computing, Bitcoin security, and the path to 
      post-quantum resistance.
    </p>
    
    <div class="faq-list">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item"
        :class="{ open: openIndex === index }"
      >
        <button
          class="faq-question"
          @click="toggleFaq(index)"
          :aria-expanded="openIndex === index"
        >
          <span class="category-badge">{{ faq.category }}</span>
          <span class="question-text">{{ faq.question }}</span>
          <span class="toggle-icon" aria-hidden="true">
            {{ openIndex === index ? '−' : '+' }}
          </span>
        </button>
        <div
          v-show="openIndex === index"
          class="faq-answer"
        >
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
    
    <div class="contact-cta">
      <h2>Didn't find your answer?</h2>
      <p>Contact us or check the Reading List for more resources.</p>
      <div class="cta-buttons">
        <router-link to="/about/contact" class="btn btn-primary">Contact Us</router-link>
        <router-link to="/resources/reading-list" class="btn btn-secondary">Reading List</router-link>
      </div>
    </div>
  </PageContainer>
</template>

<style scoped>
.lead {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-10);
}

.faq-list {
  margin-bottom: var(--space-10);
}

.faq-item {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius);
  margin-bottom: var(--space-3);
  overflow: hidden;
}

.faq-item.open {
  border-color: var(--accent-primary);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  background: none;
  border: none;
  color: var(--text-primary);
  text-align: left;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.faq-question:hover {
  background-color: var(--bg-tertiary);
}

.category-badge {
  padding: var(--space-1) var(--space-2);
  background-color: var(--bg-tertiary);
  color: var(--text-muted);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  white-space: nowrap;
  flex-shrink: 0;
}

.question-text {
  flex: 1;
  font-weight: 600;
}

.toggle-icon {
  font-size: var(--text-xl);
  color: var(--accent-primary);
  width: 24px;
  text-align: center;
  flex-shrink: 0;
}

.faq-answer {
  padding: 0 var(--space-6) var(--space-6);
  color: var(--text-secondary);
}

.faq-answer p {
  margin: 0;
}

.contact-cta {
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--space-8);
  text-align: center;
}

.contact-cta h2 {
  margin-bottom: var(--space-3);
}

.contact-cta p {
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
}

.cta-buttons {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .faq-question {
    flex-wrap: wrap;
  }
  
  .category-badge {
    order: 2;
  }
  
  .question-text {
    width: 100%;
    order: 1;
  }
  
  .toggle-icon {
    order: 3;
  }
}
</style>
