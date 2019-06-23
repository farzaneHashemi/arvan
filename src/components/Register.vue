<template>
    <div>
        <h3>
            REGISTER
        </h3>
        <form action="post">
            <input type="text" placeholder="User">
            <input type="text" placeholder="Email">
            <input type="password" placeholder="Password">

            <button type="submit">Register</button>
        </form>

        <span>Already registered?</span>
        <router-link to="/login"> Login</router-link>
        
    </div>
</template>


<script>
export default {
    name: 'register'
}
</script>
