var GalleryFetch=function(){
	
var fetch=function(res,onFinishedAsync){
	  if (ErrorCheck.HasError(res)){
				onFinishedAsync.failed("Could not fetch requested subreddit");
			}
	  else{
			var arr= GalleryBuilder.buildGallery(res);
			onFinishedAsync.success(arr);
		}
  }
  
  return{
		fetch:fetch
	}
	
}();