    <script setup>
    import Button from "primevue/button";
      
    </script>
<template>
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="text-6xl leading-tight">11 ПРИЗНАКОВ ТОГО, ЧТО ПЕРЕД ВАМИ КАРТИНА СЮРРЕАЛИСТОВ</h1>
      <p class="py-2 text-lg">
        Полулюди-полурыбы, бесконечные побережья, отвратительные насекомые и
        человек, разорванный на части
      </p>
      <Button label="Читать журнал" class="primary-button" icon="pi pi-arrow-right" iconPos="right" />

    </div>
  </div>
</template>


<style scoped>
.hero-container {
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background-color: #000000A3;
}

.hero-content {
  color: white;
  text-align: center;
  max-width: 800px;
}

.hero-image {
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
}

Button {
  color: white;
  background-color: #3C4BDC;
  border: none;
}


@media (min-width: 768px) {
  .hero-container {
    flex-direction: row;
    justify-content: space-between;
  }

  .hero-content {
    text-align: left;
  }

  .hero-image {
    margin-top: 0;
  }
}
</style>
