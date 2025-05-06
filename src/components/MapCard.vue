<script setup lang="ts">
defineProps<{
  id: string
  name: string
  vetted: boolean
  picked: boolean
}>()
</script>

<template>
  <div class="card transition-all" :class="[`de_${id}`, vetted && 'vetted', picked && 'picked']">
    <div class="banner">
      {{ vetted ? 'Vetado' : picked ? 'Escolhido' : 'Banir' }}
    </div>
    <div class="icon">
      <i v-if="picked" class="fas fa-check"></i>
      <i v-else class="fas fa-times"></i>
    </div>
    <div class="absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-center">
      <h2>{{ name }}</h2>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;
  border-color: #dc3545;
  border-style: solid;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  min-height: 350px;
  min-width: 200px;
}

.card::before {
  content: '';
  background-position: center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -2;
}

.card:not(.vetted):not(.picked):hover {
  border-width: 6px;
}

.card:hover .banner,
.card:hover .icon {
  opacity: 1;
}

.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  width: 100%;
  font-size: 24px;
  transition: opacity 0.3s ease-in-out;
}

.icon {
  align-items: center;
  border-radius: 50%;
  display: flex;
  font-size: 42px;
  height: 60px;
  justify-content: center;
  left: 50%;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;
  width: 60px;
}

.card:not(.vetted):not(.picked) .banner,
.card:not(.vetted):not(.picked) .icon {
  background-color: #dc3545;
}

.card.vetted {
  border-width: 6px;
  border-color: #212121;
  cursor: not-allowed;
}

.card.vetted::before {
  filter: grayscale(1) blur(4px);
}

.card.vetted .banner,
.card.vetted .icon {
  opacity: 1;
  background-color: #212121;
}

.card.picked {
  border-width: 6px;
  border-color: #28a745;
  cursor: default;
}

.card.picked .icon {
  opacity: 1;
  background-color: #28a745;
}

.card.picked .banner {
  opacity: 1;
  background-color: #28a745;
}

.card.picked::after {
  content: '';
  height: 100%;
  width: 100%;
  background-color: #28a745;
  opacity: 40%;
  filter: brightness(180%);
  inset: 0;
  position: absolute;
  z-index: -1;
}
</style>
