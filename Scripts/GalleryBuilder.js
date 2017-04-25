var GalleryBuilder=function(){
	
	var noPostsFound=function(res){
		return (res===undefined)||(res.data==undefined) || (res.data.children.length==0);
	}
	
	var buildGallery=function(res){
		/*
			Builds the array of picutres of requested subreddit.
			Parameter: Results object from the API.
			Return: array of matching subreddits.
		*/
		
		if(noPostsFound(res))
		{
			return;
		}
		
		var retVal=[];
		StateHolder.NameOfFirstImageInPage=PaginationMethods.getFirstImageInPage(res.data.children);
		StateHolder.NameOfLastImageInPage=PaginationMethods.getLastImageInPage(res.data.children);
		var tempArr=[];
		var j=0;
		for (var i = 0; i < res.data.children.length; i++) {
			var subRedditData = res.data.children[i].data;
			
            var thumb=subRedditData.thumbnail;
			tempArr.push({ Thumbnail: thumb, Title: subRedditData.title,Link:StateHolder.redditURL+subRedditData.permalink });
			if ((i+1)%3==0){
				retVal.push(tempArr.slice());
				tempArr=[];
				j=0;
			}
			      
        }
		retVal.push(tempArr.slice());
		
		return retVal;
		
	}
	
	
	var hasError=function(obj){
		return obj.hasOwnProperty('error');
	} 
	var ChangeGallery =function(onFinishedAsync){
		/*
			Sets a new gallery with matching name.
			Parameter: A function that will run when async call returns.	
		*/
		
		myFetch.getFetchFunction(StateHolder.subRedditInUse,StateHolder.SearchMethod,{limit:StateHolder.POSTS_PER_PAGE}).fetch(function (res) {
			
			GalleryFetch.fetch(res,onFinishedAsync);
        });
        
    }
	
	
	
	return{
		ChangeGallery:ChangeGallery,
		buildGallery:buildGallery
	}
}();