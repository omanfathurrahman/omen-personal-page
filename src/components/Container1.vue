<template>
  <main class="h-full flex items-center pb-52 px-32">
    <div class="flex flex-col gap-5">
      <p class="text-lg bg-amber-400 in w-fit line py-2 px-5 rounded-md">
        Hi! I'm
      </p>
      <h1 class="text-7xl">{{ name }}</h1>
      <h2 class="text-2xl">{{ job }}</h2>
    </div>

    <div class="absolute bottom-0 right-0">
      <img src="../../public/img/omenhehe.png" alt="" class="relative z-10" />
      <div
        class="h-[600px] w-[600px] bg-gradient-radial rounded-full absolute top-0"
      ></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MyContainer1",
  data() {
    return {
      name: "Fathur Rahman N",
      job: "Student | Web Developer",
      
    };
  },
};
</script>

<style scoped></style>
