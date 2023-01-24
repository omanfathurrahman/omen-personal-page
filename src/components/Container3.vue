<template>
  <div class="px-32 py-20">
    <h3 class="text-xl">My Skill</h3>
    <h2 class="text-5xl mb-8">My Expertise</h2>
    <div class="grid grid-cols-4 gap-10 px-8">
      <div v-for="(skill, index) in skills" v-bind:key="index" class="py-4 px-6 rounded-md" :class="`bg-[${ colors[index] }]`">
        <h3 class="text-2xl mb-2">{{ skill.skill }}</h3>
        <ul class="text-md">
          <li v-for="item in skill.detail" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyContainer3",
  props: ["colors"],
	data() {
		return {
      skills: [
        {
          skill: "UI Design",
          detail: [
            "UI Designs",
            "Figma, Photoshop and Illustrator",
            "More in the future"
          ]
        },
        {
          skill: "Frontend Dev",
          detail: [
            "HTML, CSS and Javascript",
            "TailwindCSS, SASS and VueJS",
            "More in the future"
          ]
        },
        {
          skill: "Backend Dev",
          detail: [
            "PHP",
            "Laravel and Flask",
            "More in the future"
          ]
        },
        {
          skill: "Data Mining",
          detail: [
            "Python",
            "Pandas, Numpy, Scikit-Learn and Matplotlib",
            "More in the future"
          ]
        },
      ],
		}
	}
};
</script>

<style scoped></style>
