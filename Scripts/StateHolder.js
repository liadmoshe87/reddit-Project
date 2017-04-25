var StateHolder=function (){
/*Infomation and search settings will be kept here*/
var CurrentSubRedditGallery,subRedditInUse,NameOfFirstImageInPage,NameOfLastImageInPage;


return{
	subRedditInUse:subRedditInUse,
	POSTS_PER_PAGE:9,
	SearchMethod:"new",
	NameOfLastImageInPage:NameOfLastImageInPage,
	NameOfFirstImageInPage:NameOfFirstImageInPage,
	redditURL:"http://www.reddit.com"
}

}();