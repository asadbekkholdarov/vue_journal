<script setup></script>
<template>
  <div class="contact-container">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 p-2 shadow-lg rounded-3xl" style="height: 350px;">
        <h2 class="text-4xl font-bold m-4">Мы находимся 
            в офисе Ташкент</h2>
        
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:mr-4 m-4">
            <p class="text-gray-700 font-bold">Phone:</p>
            <a href="tel:+998712030101" class="text-grey-500"
              >(+99871) 203-01-01, 242-48-93</a
            >
          </div>
          <div class="md:mr-4 m-4">
            <p class="text-gray-700 font-bold">Email:</p>
            <a href="mailto:farmkomitetssv.uz" class="text-grey-500"
              >farmkomitetssv.uz</a
            >
          </div>
        </div>
        <div class="md:mr-4 m-4 address">
          <p class="text-gray-700 font-bold">Address:</p>
          <p class="text-gray-700">
            Republic of Uzbekistan, Tashkent, Mirabad district, Kizil Arvat
            str. 2-passage, house 37
          </p>
        </div>
      </div>
      <div class="md:w-1/2 p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11988.346389362328!2d69.2833793!3d41.3069797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad59297d1cf%3A0xda0402847aed7b96!2sWestminster%20International%20University%20in%20Tashkent!5e0!3m2!1sen!2s!4v1725705702613!5m2!1sen!2s"
          width="700"
          height="330"
          style="border: 0; border-radius: 24px;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style >
.address {
    display: block;
}

.contact-container {
    margin-bottom: 40px;
}
</style>