<script setup>
import { useHead } from '@vueuse/head'
import PageContainer from '../../components/PageContainer.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'

useHead({
  title: 'Quantum Computing History - Bitcoin Quantum Hub',
  meta: [{
    name: 'description',
    content: 'The evolution of quantum computing from theoretical concept to practical technology.'
  }]
})


const breadcrumbs = [
  { label: 'Learn', path: '/learn' },
  { label: 'Quantum Computing 101', path: '/learn/quantum-computing-101' },
  { label: 'History & Origins' }
]
</script>

<template>
  <PageContainer>
    <Breadcrumbs :items="breadcrumbs" />
    
    <h1>History & Origins of Quantum Computing</h1>
    
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-marker">1980s</div>
        <div class="timeline-content">
          <h3>The Theoretical Foundation</h3>
          <p>
            Physicist Richard Feynman proposed that quantum systems could be used to perform 
            computations that were impossible for classical computers. This planted the seed 
            for the field of quantum computing.
          </p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-marker">1994</div>
        <div class="timeline-content">
          <h3>Shor's Algorithm</h3>
          <p>
            Peter Shor developed a quantum algorithm that could efficiently factor large numbers 
            and solve discrete logarithm problems—the mathematical foundations of modern 
            cryptography, including Bitcoin's.
          </p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-marker">1998</div>
        <div class="timeline-content">
          <h3>First Quantum Gate</h3>
          <p>
            The first experimental demonstration of a quantum gate marked the transition from 
            theory to practice in quantum computing.
          </p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-marker">Present</div>
        <div class="timeline-content">
          <h3>The Race to Scale</h3>
          <p>
            Today, major technology companies and governments are investing billions in quantum 
            research, pursuing machines with millions of physical qubits that could solve 
            problems beyond the reach of even the most powerful classical supercomputers.
          </p>
        </div>
      </div>
    </div>
  </PageContainer>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: var(--space-8);
}

.timeline:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--border-primary);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--space-8);
  padding-left: var(--space-6);
}

.timeline-item:before {
  content: '';
  position: absolute;
  left: calc(-1 * var(--space-8) - 5px);
  top: var(--space-2);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--accent-primary);
  border: 2px solid var(--bg-primary);
}

.timeline-marker {
  font-family: var(--font-family-mono);
  font-weight: 700;
  color: var(--accent-primary);
  font-size: var(--text-sm);
  margin-bottom: var(--space-2);
}

.timeline-content h3 {
  margin-bottom: var(--space-2);
}

.timeline-content p {
  color: var(--text-secondary);
  margin: 0;
}
</style>
