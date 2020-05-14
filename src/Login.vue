  <template>
  <div id="Login">
    <h1>OAUTH Login</h1>
    <hr>
          <input type="button" value="Google" @click="login"/>
  </div>
</template>

<script>
import client from './lib/client';

export default {
  
  data () {
    return {
      oauthData:{},
    }
  },
  methods:{
     login(){
          return document.location.href =this.oauthData.google.url;
      }
  },
    async created(){
    client.oauthStart().then((res)=>{
        this.oauthData = res.providers;
    })
}
}
</script>

<style>

</style>
