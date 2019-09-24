angular.module('testApp')
    .directive('testDirective', function(){
        return {
            restrict: 'E',
            scope: {},
            template: '<div>' +
                        '<b>{{vm.testProp}}</b>'  +
                    '</div>',
            controller: function(){
                var vm = this;
                vm.testProp = 'How you like me now?';
            },
            controllerAs: 'vm'
        };
    });
