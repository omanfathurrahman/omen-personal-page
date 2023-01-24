<template>
  <div class="px-32 py-20">
    <h2 class="text-5xl text-center mb-10">About Me.</h2>
    <p class="text-center mb-5">{{ description1 }}</p>
    <p class="text-center">{{ description2 }}</p>
  </div>
</template>

<script>
export default {
  name: "MyContainer2",
  data() {
    return {
      description1:
        "Hi! Welcome to Fathur's Digital Curriculum Vitae. Fathur or always called by Oman is diploma student who studies Information System at Telkom University. He is kind person to each people. He interesting to be Data Scientist. As a friendly person, he is easy to make new friends. He is also active, easily adapted, and easy going.",
      description2:
        "By studying in Information System, He always learn everywhere anytime specially in learning Python technologies and Machine learning. Moreover, he interested to learn Web Development and other programming languages. He loves to make a new relation, Let's connect :)",
    };
  },
};
</script>

<style scoped></style>
