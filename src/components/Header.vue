<template>
    <div class="col-md-12 row" id="hdr">
        <div class="col-md-10">
            <h3 class="float-left" id="arvan">Arvan Challenge</h3>
            <h6 class="float-left" id="welcome">Welcome {{user.name}}</h6>
        </div>
        <div class="col-md-2">
            <button class="btn" id="logout-btn">
                Logout
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            user: {
                name: 'farzane'
            }
        }
    }
}
</script>

<style >
    #hdr {
        background-color: #55595C;
        height: 3em;
        color: white;
        margin: auto;
    }
    #logout-btn {
        border-color: #56C0E0;
        color: #56C0E0;
    }
    #arvan {
        padding: 5px
    }
    #welcome {
        padding: 0.5em;
        margin-top: 0.5em;
    }
</style>
