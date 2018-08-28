<template>
  <div class="menus">
    <ul class="accordion">
      <li class="menu-header">菜单栏</li>
      <li v-for="linkRout in linkRouts"
          class="tree" :class="{active:linkRout.id == currentLink}" >
        <div class="tree-first" @click="getCurrentBase(linkRout)">
          <i class="fa" :class="[linkRout.fontStyle]"></i><span class="tree-tilte">{{linkRout.name}}</span><i class="fa fa-angle-left pull-right-container"></i>
        </div>
        <ul class="tree-second">
          <li class="tree-second-li"
              v-for="childRout in getChildLinks(linkRout.id)"
              :class="{active:childRout.id == currentChildLink}"
              @click="getCurrentLink(childRout.id)">
            <router-link :to="childRout.addr">
              <i class="fa" :class="[childRout.fontStyle]"></i>
              <span class="tree-tilte">{{ childRout.name }}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Menus",
        data:function () {
          return {
            linkRouts:[
              { name:"结算单管理",id:"1" ,fontStyle:"fa-file-text-o"},
              { name:"机构管理",id:"2" ,fontStyle:"fa-user-o"},
              { name:"角色管理",id:"3" ,fontStyle:"fa-user-o"}
            ],
            childRouts:[
              { name:"查看结算单",id:"4" ,fontStyle:"fa-circle-o",parentId:"1",addr:"/"},
              { name:"新增结算单",id:"5" ,fontStyle:"fa-circle-o",parentId:"1",addr:"/pagination"},
              { name:"测试单元",id:"7" ,fontStyle:"fa-circle-o",parentId:"1",addr:"/hello"},
              { name:"新增机构",id:"8" ,fontStyle:"fa-circle-o",parentId:"2",addr:"/"},
              { name:"编辑机构",id:"9" ,fontStyle:"fa-circle-o",parentId:"2",addr:"/Bar"},
              { name:"角色信息",id:"10" ,fontStyle:"fa-circle-o",parentId:"3",addr:"/"},
              { name:"新增角色",id:"11" ,fontStyle:"fa-circle-o",parentId:"3",addr:"/Bar"},
              { name:"编辑角色",id:"12" ,fontStyle:"fa-circle-o",parentId:"3",addr:"/"}
            ],
            currentLink:"",
            currentChildLink:""
          }
        },
        methods:{
          getCurrentBase : function (linkRout) {
            if(this.currentLink == linkRout.id){
              this.currentLink = "";
            }else{
              this.currentLink = linkRout.id;
            }
          },
          getChildLinks:function (linkRoutId) {
            return this.childRouts.filter(function (obj) {
              return obj.parentId == linkRoutId;
            })
          },
          getCurrentLink:function (childId) {
            if(this.currentChildLink != childId){
              this.currentChildLink = childId;
            }
          }
        }
    }
</script>

<style scoped>
.menus{
  width: 230px;
  position: fixed;
  top:0;
  left:0;
  background-color: #222d32;
  height:100%;
  color:#FFFFFF;
  padding-top:50px;
}
.accordion .menu-header{
  padding:12px 15px 12px 15px;
  text-align: center;
  background-color: #374850;
}

.accordion>.tree>.tree-first{
  width: 230px;
  padding: 12px 15px 12px 15px;
  display:block ;
  border-left:3px solid transparent;
  cursor: pointer;
  position: relative;
}
.tree-second-li>a{
  width: 230px;
  padding: 12px 15px 12px 15px;
  display:block ;
  border-left:3px solid transparent;
  cursor: pointer;
  position: relative;
  color:#b8c7ce;
}

.accordion>.tree>.tree-second{
  display: none;
}
.accordion>.tree.active>.tree-second{
  display: block;
  background-color: #2c3b41;
}
.accordion>.tree.active>.tree-first{
  border-left-color:#3c8dbc;
  color:#FFFFFF;
  background-color: #1e282c;
}

.pull-right-container{
  position: absolute;
  right: 15px;
  top: 50%;
  margin-top:-7px;
  transition: transform 0.2s ease,min-height 0.2s ease;
  -moz-transition: transform 0.2s ease,min-height 0.2s ease;	/* Firefox 4 */
  -webkit-transition: transform 0.2s ease,min-height 0.2s ease;	/* Safari 和 Chrome */
  -o-transition: transform 0.2s ease,min-height 0.2s ease;
}

.accordion>.tree.active .pull-right-container{
  transform:rotate(-90deg);
  -ms-transform:rotate(-90deg); 	/* IE 9 */
  -moz-transform:rotate(-90deg); 	/* Firefox */
  -webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
  -o-transform:rotate(-90deg);
}
  .tree-tilte{
    padding-left:15px;
  }
  li,li>a{
    width: 230px;
    color:#b8c7ce;
    background-color: transparent;
    text-decoration: none;
  }
  li:hover,li>a:hover{
    width: 230px;
    color:#FFFFFF;
    background-color: #2c3b41;
    text-decoration: none;
  }
  .tree-second-li.active>a{
    color:#FFFFFF;
  }


</style>
