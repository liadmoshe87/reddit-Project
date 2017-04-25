(function (window) {
  "use strict";
  var myFetch = window.myFetch = {};
 /*
	Perform calls to the API methods.
	Was built in a way that filters and different search methods can be added easily
 */
  
  var fetchFunctions={
	  // Search methods to present reddits posts 
	  new:reddit.new,
	  hot:reddit.hot,
	  top:reddit.top,
	  
  };
  
  //Functions that add filtering to the basic search
  var addLimitFilter=function(baseFetchFunction,filterValue){
	  return baseFetchFunction.limit(filterValue);
  }  
  
  var addBeforeFilter=function(baseFetchFunction,filterValue){
	  return baseFetchFunction.before(filterValue);
  }
  
  var addAfterFilter=function(baseFetchFunction,filterValue){
	  return baseFetchFunction.after(filterValue);
  }
   var filterFunctionsDictionary={
	  limit:addLimitFilter,
	  before:addBeforeFilter,
	  after:addAfterFilter
  }
  
  
  myFetch.getFetchFunction=function(subRedditName,fetchName,filtersObj){
	  /*
		Main search function.
		Parameter: Subreddit name
		Parameter: Fetch function name example: new\top
		Parameter: Filter function name
		Return: Fetch object from the API
	  */
	  var baseFetchFunction=fetchFunctions[fetchName](subRedditName);
	  for (var prop in filtersObj) {
		  baseFetchFunction=filterFunctionsDictionary[prop](baseFetchFunction,filtersObj[prop]);
        
	  }
	  
	  return baseFetchFunction;
  }
  
  
  
  
  
})(window);