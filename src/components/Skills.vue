<template>
  <div id="hello">
    <div class="holder">

      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter a skill you have.." v-model="skill" v-validate="'min:5'" name="skill">

        <transition name="alert-in">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>
      </form>

      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{data.skill}}
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
        </li>
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
      skill: '',
      skills: [
        {"skill": "Vue.js"},
        {"skill": "Frontend Developer"}
      ],
     alertObject: {
       alert: true,
     }
    }
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if(result) {
          this.skills.push({skill: this.skill});
          this.skill = '';
        } else {
          console.log('not valid');
        }
      })
    },
    remove(id) {
      this.skills.splice(id, 1);
    }
  }
}
</script>

<style  scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

  .alert {
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

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687f7f;
  }

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  i {
    float: right;
  }
</style>
 