<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Create Student</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" class="form-control" v-model="student.name" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="text" name="email" id="email" class="form-control" v-model="student.email" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" name="phone" id="phone" class="form-control" v-model="student.phone" required>
        </div>
        <div class="form-group">
          <button class="btn btn-danger btn-block">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      student: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods:{
    handleSubmitForm(){
      let apiURL = 'http://localhost:4000/api/create-student';
      
      axios.post(apiURL, this.student).then(() => {
        this.$router.push('/view')
        this.student = {
          name: '',
          email: '',
          phone: ''
        }
      }).catch(error => {
          console.log(error)
      });      
    }
  }
}
</script>