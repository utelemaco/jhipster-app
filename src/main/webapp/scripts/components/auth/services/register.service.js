'use strict';

angular.module('processhubintegrationsApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


