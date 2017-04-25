var app=angular.module("app");
app.controller("appctrl",main);
function main($scope){
	
    $scope.CurrentSubReddit="";
    $scope.CurrentSubRedditGallery = [];
	$scope.Error="";
	var ShowPagination=false;

	$scope.ShowPagination=function(){
		return ( ShowPagination);
	}
	$scope.Previous=function(){
		
			PaginationMethods.Previous(FinishedAsyncAction);
	}
	
	$scope.Next=function(){
		
			PaginationMethods.Next(FinishedAsyncAction);
	}
	
    $scope.ChangeGallery =function(){
		ShowPagination=false;
		StateHolder.subRedditInUse=$scope.CurrentSubReddit;
		
		$scope.CurrentSubRedditGallery=GalleryBuilder.ChangeGallery(FinishedAsyncAction);
        
    }
	
	var FinishedAsyncActionSuccess=function(arr){
		
			$scope.CurrentSubRedditGallery=arr;
			ShowPagination=PaginationMethods.canEnablePagination(arr);
			$scope.Error="";
			$scope.$apply();
		}
		
	var FinishedAsyncActionFailed=function(errorMessage){
			ShowPagination=false;
			$scope.Error=errorMessage;
			$scope.$apply();
		}
	
	
	var FinishedAsyncAction={
		success:FinishedAsyncActionSuccess,
		failed:FinishedAsyncActionFailed
	}

    $scope.ChangeGalleryBtn=function(){
        $scope.ChangeGallery();
        
    }
}