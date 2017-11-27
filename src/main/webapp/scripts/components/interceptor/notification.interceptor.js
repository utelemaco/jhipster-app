 'use strict';

angular.module('processhubintegrationsApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-processhubintegrationsApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-processhubintegrationsApp-params')});
                }
                return response;
            }
        };
    });
