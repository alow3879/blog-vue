<template>
  <section id="contact-me" class="contact-me">
    <div class="text">
      <h2 class="title">Свяжитесь со мной</h2>
      <ul class="list-info">
        <li class="list-info-item">адресс адресс адресс</li>
        <li class="list-info-item">Телефон: +00(000) 000 00 00</li>
        <li class="list-info-item">email@gmail.com</li>
      </ul>
      <form action="">
        <div class="form-inputs">
          <input type="text" placeholder="Имя" required>
          <input type="email" placeholder="Email" required>
          <input type="text" placeholder="Тема" required>
        </div>
        <textarea name="message" placeholder="Сообщение"></textarea>
        <button class="submit-btn" type="submit">Отправить</button>
      </form>
    </div>
    <div class="photo">
      <img src="/images/photos/gallery/5.jpg" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactMe'
}
</script>
