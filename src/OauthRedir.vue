<template>
    <h1>Signing in....</h1>
</template>

<script>
import client from './lib/client';

export default {
  methods:{
  },
    async created(){
    client.oauthStart().then((res)=>{
        this.oauthData = res.providers;
    })
    await client.tokenLogin(this.$route.params.token);
        setTimeout(() => {
    console.log(this.$route.params.token);
    this.$router.push('/home');
        }, 100);

}
}
</script>