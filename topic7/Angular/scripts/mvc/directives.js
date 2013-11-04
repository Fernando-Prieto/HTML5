movieApp.directive('ngEnter', function () {

  return function (scope, element, attrs) {

    element.bind("keydown", function (event) {
      if(event.which === 13) 
      {
        scope.$apply(attrs.ngEnter);
      }
    });
  };
});