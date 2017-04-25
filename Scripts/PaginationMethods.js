var PaginationMethods=function (){
	/*Functions responsible for the pagination mechanism*/
	
	var getFirstImageInPage=function(images){
		var retVal=null;
		if (images.length>0)
		{
			retVal= images[0].data.name;
		}
		return retVal;
	}
	
	var getLastImageInPage=function(images){
		var retVal=null;
		if (images.length>0)
		{
			retVal= images[images.length-1].data.name;
		}
		return retVal;
	}
	
	var Previous=function(onFinishedAsync){
		myFetch.getFetchFunction(StateHolder.subRedditInUse,StateHolder.SearchMethod,{limit:StateHolder.POSTS_PER_PAGE,before:StateHolder.NameOfFirstImageInPage}).fetch(function (res) {
			if(canEnablePagination(res.data.children)){
				GalleryFetch.fetch(res,onFinishedAsync);
			}
			});
	}
	
	var Next=function(onFinishedAsync){
		myFetch.getFetchFunction(StateHolder.subRedditInUse,StateHolder.SearchMethod,{limit:StateHolder.POSTS_PER_PAGE,after:StateHolder.NameOfLastImageInPage}).fetch(function (res) {
			if(canEnablePagination(res.data.children)){
				GalleryFetch.fetch(res,onFinishedAsync);
			}
			});
	}
	
	var canEnablePagination=function(arr){
		return (arr!=undefined) && (arr.length>0);
	}
	
	return{
		getFirstImageInPage:getFirstImageInPage,
		getLastImageInPage:getLastImageInPage,
		Next:Next,
		Previous:Previous,
		canEnablePagination:canEnablePagination
	}
}();