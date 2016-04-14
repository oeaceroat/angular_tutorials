(function () {
    var app = angular.module('store', []);

    var gems =[ 
        {
            name: "Dodecahedron",
            price: 2.95,
            description: "Dodecahedron is bla bla bla ...",
            canPurchase: true,
    //        soldOut: false
        },   
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "Pentagonal is bla bla bla ...",
            canPurchase: true,
    //        soldOut: false
        }   
    ];
    
    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    app.controller("PanelController", function(){
        this.tab = 1;
    
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        
        this.isSelected = function(checktab){
            return this.tab === checktab;
        };
    });
    
    
    
    app.directive('productTitle', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });
    
    app.directive('productPanels', function(){
        return {
            restrict : 'E',
            templateUrl: 'product-panels.html',
            controller: 'PanelController',
            controllerAs: 'panels'
        };
    });
    
        
})();