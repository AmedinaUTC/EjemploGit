<template>
  <div class="container">
      <div class="row">
          <h1>http</h1>
          <div class="form-group">
            <label>Username:</label>
            <input v-model="user.username" class="form-control" type="text">
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input v-model="user.email" class="form-control" type="text">
          </div>
          <button @click="Submit" class="btn btn-primary">Submit</button>
      </div>
  </div>
</template>
json; charset=utf-8", cache-control: "no-cache"}
request: XMLHttpRequest {onreadystatechange: ƒ, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
status
<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data(){
    return{
      user:{
        username:"",
        email:""
      },
      users:{}
    }
  },
  methods:{
    Submit(){

     axios.post("https://formas-afaec.firebaseio.com/Usuario.json",
     this.user).then(response =>{
       
       axios.get("https://formas-afaec.firebaseio.com/Usuario.json").then(
         response =>{this.users.push(response.data[0]);
         }
       );
       console.log(response);}
       
    );
    
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
