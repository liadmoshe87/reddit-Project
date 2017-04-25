var ErrorCheck=function(){
	
var hasError=function(obj){
	
return obj==undefined || obj.hasOwnProperty('error') || (obj.data.children.length==0);
}
	return{
		HasError:hasError	
	}
	
}();