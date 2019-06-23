<template>
    <div>
        <h3>
            LOGIN
        </h3>
        <form action="post">
            <input type="text" placeholder="Email">
            <input type="password" placeholder="Password">

            <button type="submit">
                <router-link to="/articles">Login</router-link>
            </button>
        </form>

        <span>Don't have an account?</span>
        <router-link to="/register">Register Now</router-link>
        
    </div>
</template>


<script>
export default {
    name: 'login',
    
    methods : {
        
    }
}
</script>
