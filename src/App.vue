<template>
    <div class="card">
        <img class="head" :src="user.head" alt="" v-seat>
        <div class="right">
            <div class="name" v-seat="{data: user.name}"></div>
            <div class="desc" v-seat="{data: user.desc, config: {background: 'red'}}"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'App',
        data() {
            return {
                user: {
                    desc: ''
                }
            }
        },
        created() {
            setTimeout(() => {
                this.user = {
                    head: 'https://si.geilicdn.com/img-14e500000169228e2fac0a217216_592_592.jpg',
                    name: '戏铃人',
                    desc: '这是一个vue占位指令'
                }
            }, 1000)
        }
    }
</script>
<style lang='less' scoped>
.card {
    display: flex;
    width: 700px;
    margin: 0 auto;
    height: 300px;
    padding: 40px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
    .head {
        width: 40px;
        height: 40px;
        border-radius: 4px;
    }
    .right {
        margin-left: 20px;
        .name {
            width: 160px;
            height: 45px;
            font-size: 32px;
        }
        .desc {
            width: 320px;
            height: 45px;
            margin-top: 12px;
            font-size: 24px;
            color: #ddd;
        }
    }
    
}
</style>
