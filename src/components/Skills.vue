<template>
  <div id="hello">
    <div class="holder">
    <ul>
      <li v-for="(data, index) in skills" :key='index'>{{ data.skill}}</li>
    </ul>

    <p>These are the skills that you possess</p>
    <!--
      <p v-if="skills.length >= 1">You have more than 1 skills</p>
      <p v-else>You have less than or equal to 1 skill</p>
    -->
    <!-- <div v-bind:class="{ alert: showAlert, 'another-class': showClass }"></div> -->
    <!-- <div v-bind:class="alertObject"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      skills: [
        {"skill": "Vue.js"},
        {"skill": "Frontend Developer"}
      ],
     alertObject: {
       alert: true,
     }
    }
  }
}
</script>

<style  scoped>
  .alert {
    background-color: yellow;
    width: 100%;
    height: 30px;
  }
  .another-class {
    border: 5px solid black;
  }

  .holder {
    background: #fff;
  }

  ul {
    margin:0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3eb3f6;
    margin-bottom: 2px;
    color: #3E5252;
  }


  p {
    text-align: center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

</style>
