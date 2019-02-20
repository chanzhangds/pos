<template>
    <div class="Pos">
        <div>
            <el-row>
                <el-col :span="8" id="PosOrder">
                    <el-tabs type="border-card">
                        <el-tab-pane label="点餐">
                            <el-table :data="tableData" style="width: 100%">
                                <el-table-column prop="goodsName" label="商品"></el-table-column>
                                <el-table-column prop="count" label="量"></el-table-column>
                                <el-table-column prop="price" label="金额"></el-table-column>
                                <el-table-column label="操作" width="145" fixed="right"> 
                                        <template scope="scope">
                                            <el-button type="success" size="small" @click="addOrderOne(scope.row)" circle>-1</el-button>
                                            <el-button type="danger" size="small" @click="delSingleGoods(scope.row)"circle>删</el-button>
                                            <el-button type="success" size="small" @click="addOrderList(scope.row)"circle>+1</el-button>
                                        </template>
                                </el-table-column>
                            </el-table>
                            <el-button class="button1" type="primary">挂单</el-button>
                            <el-button class="button1" type="danger" @click="delAllGoods">删除</el-button>
                            <el-button class="button1" type="primary" @click="checkOut()">结账</el-button>
                        </el-tab-pane>
                        <el-tab-pane label="挂单"></el-tab-pane>
                        <el-tab-pane label="外卖"></el-tab-pane>
                    </el-tabs>
                    <div class="totalDiv">
                        <small>数量：</small>
                        <strong>{{totalCount}}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                        <small>总计：</small>
                        <strong>{{totalMoney}}</strong> 元
                    </div>
                </el-col>
                <el-col :span="16" id="PosProduct">
                   <div class="oftenGoods">
                       <div class="title">
                        <span>常用商品</span>
                       </div>
                       <div class="oftenGoodsList">
                        <ul>
                            <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                                <span>{{goods.goodsName}}</span>
                                <span class="price">{{goods.price}}</span>
                            </li>
                        </ul>
                       </div>
                   </div>

                   <div class="content">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="汉堡" name="first">
                               <ul class="cookList">
                                   <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                       <span class="foodImg"><img src="goods.goodsImg" alt=""></span>
                                       <span class="foodName">{{goods.goodsName}}</span>
                                       <span class="foodPrice">{{goods.price}}</span>
                                   </li>
                               </ul> 
                            </el-tab-pane>
                            <el-tab-pane label="小食" name="second"></el-tab-pane>
                            <el-tab-pane label="饮料" name="third"></el-tab-pane>
                            <el-tab-pane label="套餐" name="fourth"></el-tab-pane>

                        </el-tabs>
                   </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default{
        name:"Pos",
        mounted:function(){
            var orderHeight=document.body.clientHeight;
            document.getElementById('PosOrder').style.height=orderHeight+'px';
            document.getElementById('PosProduct').style.height=orderHeight+'px';
        },
        data() {
            return{
                activeName:'first',
                tableData: [],
        oftenGoods:[
          {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }
      ],
      type0Goods:[
          {
              goodsId:1,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId: 5,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }
      ],
      totalCount : 0,
      totalMoney : 0,
                }
        },
    
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
            },

        addOrderList(goods){
            this.totalCount=0;
            this.totalMoney=0;
            let isHave = false;
            for(let i = 0;i<this.tableData.length;i++){
                console.log(this.tableData[i].goodsId);
                if(this.tableData[i].goodsId == goods.goodsId){
                    isHave = true;
                }
            }
            if(isHave){
                let arr = this.tableData.filter(o =>o.goodsId==goods.goodsId)
                arr[0].count++;

            }else{
                let newGoods = {
                    goodsId:goods.goodsId,
                    goodsName:goods.goodsName,
                    price:goods.price,
                    count:1};
                this.tableData.push(newGoods);
                                    }
            this.getAllMoney();
        },
        
        addOrderOne(goods){
            this.totalCount=0;
            this.totalMoney=0;                       
            let arr = this.tableData.filter(o =>o.goodsId==goods.goodsId)
            arr[0].count--; 
            if(arr[0].count==0){
                this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
            }          
            this.getAllMoney();
        
        },
        delSingleGoods(goods){
            this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
            this.getAllMoney();
        } ,
        
        delAllGoods(){
            this.tableData = [];
            this.totalCount = 0;
            this.totalMoney = 0;    
        },
        getAllMoney(){
            this.totalCount = 0;
            this.totalMoney = 0;
            if(this.tableData){
                this.tableData.forEach((element) => {
                    this.totalCount += element.count;
                    this.totalMoney += element.count*element.price;
                });
                }
            },   
        
        checkOut(){
            if (this.totalCount!=0) {
                this.tableData = [];
                this.totalCount = 0;
                this.totalMoney = 0;
                this.$message({
                    message: '结账成功，感谢你又为店里出了一份力!',
                    type: 'success'
                });
            }else{
                this.$message.error('不能空结。老板了解你急切的心情！');
            }
 }
        }
    }
</script>

<style scoped>

#PosProduct{
    background:#fff;
    
}
.oftenGoods{
    height:40%;
    background:#5F9EA0;
}
.title{
    height:10%;
    font-size: 1.5em;
    background:	#4682B4  ;
    padding:4px;
}
.title span{
    margin-left:10px;
    color:#fff;
}

.oftenGoodsList ul{
    list-style:none;
}
.oftenGoodsList ul li {
    
    float:left;
    padding:20px;
    margin: 20px;
    background: #DCDCDC ;
    
}
.oftenGoodsList ul li:hover{
    box-shadow:4px 4px 3px  gray;
    
}
.content{
    padding: 10px;
    }
.cookList{
    list-style: none;
}
.cookList li{
    float:left;
    padding:20px;
    margin: 20px;
    background: #DCDCDC;
    border-radius: 30px;
}
.cookList li:hover{
    box-shadow:3px 2px 2px  gray;
}
.totalDiv{
    font-size:1.5rem;

}
.totalDiv strong{
    color:red;

}
.button1{
    float:right;
    margin:10px;
}
</style>