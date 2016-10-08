/**
 * Created by lenin on 9/29/2016.
 */

angular.module('travelling', ['ui.router', 'ui.bootstrap'])
    .config(function($stateProvider){
        console.log('$stateProvider', $stateProvider);
    })
    .controller('CarouselDemoCtrl', function ($scope) {
     $scope.myInterval = 5000;
     $scope.noWrapSlides = false;
     $scope.active = 0;
     var slides = $scope.slides = [];
     var currIndex = 0;

     $scope.addSlide = function(i) {
       var newWidth = 1300 + slides.length + 1;
       i+=1;
       slides.push({
         image: 'images/image' + i + '.jpg',
         id: currIndex++
       });
     };

   $scope.randomize = function() {
     var indexes = generateIndexesArray();
     assignNewIndexesToSlides(indexes);
   };

   /*for (var i = 0; i < 4; i++) {
     $scope.addSlide(i);
   }*/

   // Randomize logic below

   function assignNewIndexesToSlides(indexes) {
     for (var i = 0, l = slides.length; i < l; i++) {
       slides[i].id = indexes.pop();
     }
   }

   function generateIndexesArray() {
     var indexes = [];
     for (var i = 0; i < currIndex; ++i) {
       indexes[i] = i;
     }
     return shuffle(indexes);
   }

  });;


