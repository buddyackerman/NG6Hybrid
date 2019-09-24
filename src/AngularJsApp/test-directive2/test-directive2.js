angular.module('testApp')
    .directive('testDirective2', function(){
        return {
            restrict: 'E',
            scope: {},
            template: '<div style="color: red;">' +
                        '<b>{{vm.myProperty}}</b>'  +
                    '</div>',
            controller: function(){
                var vm = this;
                vm.myProperty = 'Test Directive 2 is in the house!';
            },
            controllerAs: 'vm'
        };
    });
