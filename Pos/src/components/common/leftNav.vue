<template>
    <div class="left-nav">
        <ul>
            <li>
                <div><router-link to="/Shop">店铺</router-link></div>

            </li>
            <li>
                <div><router-link to="/">收银</router-link></div>
            </li>
            <li>
                <div>商品</div>
            </li>
            <li>
                <div>其他</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    name:"leftNav",
    data(){
        return{

        }
    }
}
</script>
<style>
.left-nav{
       color:#fff;
       font-size:10px;
       height:100%;
       background-color: #1D8ce0;
       float:left;
       width:5%;
    }
    .iconfont{
       font-size:24px;
    }
    .left-nav ul{
        padding:0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom:1px solid #20a0ff;
        padding:10px 0;
        margin:20px 0;
        font-size:1.2rem;
    }
    .left-nav li a{
        text-decoration: none;

    }

    .left-nav li router-link-active{
        color:rgb(32, 180, 131);
    }
</style>