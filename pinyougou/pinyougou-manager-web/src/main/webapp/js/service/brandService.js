//品牌服务
app.service('brandService',function($http){
	//读取列表数据绑定到表单中
	this.findAll=function(){
		return $http.get('../brand/findAll.do');
	}
	//分页
	this.findPage=function(page,rows){
		return $http.get('../brand/findPage.do?page='+page+'&rows='+rows);
	}
	//添加
	this.add=function(entity){
		return $http.post('../brand/add.do',entity);
	}
	//更新
	this.update=function(entity){
		return $http.post('../brand/update.do',entity);
	}
	//查找实体
	this.findOne=function(id){
		return $http.get('../brand/findOne.do?id='+id);
	}
	//删除
	this.dele=function(ids){
		return $http.post('../brand/delete.do?ids='+ids);
	}
	//搜索
	this.search=function(page,rows,searchEntity){
		return $http.post('../brand/search.do?page='+page+"&rows="+rows, searchEntity);
	}   
	
});