var Tatcha = angular.module('Tatcha', []);


Tatcha.controller('productListCtrl', function ($scope, $http, $window) {
	//get the list of products
	$http.get("http://api.tatcha.com/shop/api/rest/products")
    .success(function (response) {
    	$scope.products = response;    	
    })
    .error(function(data, status, headers, config) {
		//error
		console.log(data);
    });



    //redirect to product page when user click on that product ID
	$scope.getProductURL = function(productID, event){
		
		$http.get("http://api.tatcha.com/shop/api/rest/products/"+productID)
	    .success(function (response) {
	    	//redirect to prodcut page
	    	$window.location.href = response.url;

	    })
	    .error(function(data, status, headers, config) {
			//error
			console.log(data);
	    });

	    //disable a href click
		event.preventDefault(); 

     };//end of getProductURL()

  


    
});//end of Tatcha controller