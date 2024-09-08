<template>
    <footer class="footer bg-gray-100 rounded-lg p-6 flex flex-wrap justify-between space-y-6 md:space-y-0">
      <div class="footer-section flex-1 md:mr-4 space-y-4">
        <div class="logo flex items-center">
          <img :src="logo" alt="Journal Logo" class="w-100 h-10 mr-2" />
        </div>
        <p class="citation text-sm text-gray-600">
          При цитировании материалов Сайта, включая охраняемые авторские произведения, ссылка на Сайт обязательна.
        </p>
        <div class="faq flex items-center text-lg text-gray-700">
          <i class="pi pi-info-circle mr-2"></i> FAQ
        </div>
      </div>
  
      <div class="footer-section flex-1 md:mr-4">
        <h4 class="text-xl font-bold mb-4">Меню</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-800 hover:text-blue-600">Журналы</a></li>
          <li><a href="#" class="text-gray-800 hover:text-blue-600">Статья</a></li>
          <li><a href="#" class="text-gray-800 hover:text-blue-600">Авторы</a></li>
          <li><a href="#" class="text-gray-800 hover:text-blue-600">Организации</a></li>
          <li><a href="#" class="text-gray-800 hover:text-blue-600">Контакт</a></li>
        </ul>
      </div>
  
      <div class="footer-section flex-1 md:mr-4">
        <h4 class="text-xl font-bold mb-4">Пресс-служба</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-800 hover:text-blue-600">Конференция</a></li>
          <li><a href="#" class="text-gray-800 hover:text-blue-600">Семинар</a></li>
          <li><a href="#" class="text-gray-800 hover:text-blue-600">Видеотека</a></li>
          <li><a href="#" class="text-gray-800 hover:text-blue-600">Новости</a></li>
        </ul>
      </div>
  
      <div class="footer-section flex-1 md:mr-4">
        <h4 class="text-xl font-bold mb-4">Контакт</h4>
        <p class="text-gray-800">Телефон:<br />(+99871) 203-01-01, 242-48-93</p>
        <p class="text-gray-800">Адрес:<br />г. Ташкент, Узбекистан</p>
        <p class="text-gray-800">E-mail:<br /><a href="mailto:farmkomitet@ssv.uz" class="text-blue-600 hover:underline">farmkomitet@ssv.uz</a></p>
      </div>
  
      <div class="footer-section flex-1">
        <h4 class="text-xl font-bold mb-4">Социальной сети</h4>
        <div class="social-icons flex space-x-4 text-2xl text-gray-600">
          <i class="pi pi-facebook cursor-pointer hover:text-blue-600"></i>
          <i class="pi pi-telegram cursor-pointer hover:text-blue-600"></i>
          <i class="pi pi-instagram cursor-pointer hover:text-pink-600"></i>
          <i class="pi pi-youtube cursor-pointer hover:text-red-600"></i>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import logo from '@/assets/journeyLogo.png';
  </script>
  
 