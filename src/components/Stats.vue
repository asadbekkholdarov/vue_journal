<script setup></script>

<template>
  <div class="container">
    <div class="stat_infos">
      <div>
        <h2>5000+</h2>
        <p>Журналы</p>
      </div>
      <div>
        <h2>120+</h2>
        <p>Авторы</p>
      </div>
      <div>
        <h2>80+</h2>
        <p>Организации</p>
      </div>
      <div>
        <h2>200+</h2>
        <p>Семинары</p>
      </div>
    </div>
  </div>
</template>

<style>
.container {
    display: flex;
    justify-content: center;
}
.stat_infos {
  display: flex;
  justify-items: center;
  align-items: center;
}

.stat_infos div {
  border: 1px solid gray;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 -10px;
}

.stat_infos div:hover {
  color: #3c4bdc;
  border-color: #3c4bdc;
}
h2 {
font-size: 56px;
font-weight: 600;
line-height: 84px;
text-align: center;
}
</style>
