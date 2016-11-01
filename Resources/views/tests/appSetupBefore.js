/*
 * Copyright (c) niWde
 */

//@var required in one of the imports
var maxParameterLength = 999999999;

Ext.Loader.setConfig({
    enabled: true,                  // Turn on Ext.Loader
    paths: {
        'Shopware' : 'http://' + window.location.host + 'base/tests/vendors/Shopware/base/application',
        'Enlight': 'http://' + window.location.host + 'base/tests/vendors/ExtJs/components',
        'Shopware.apps.CoolPlugin.model': 'http://' + window.location.host + 'base/Views/backend/cool_plugin/model',
        'Shopware.apps.CoolPlugin.controller': 'http://' + window.location.host + 'base/Views/backend/cool_plugin/controller',
        'Shopware.apps.CoolPlugin.store': 'http://' + window.location.host + 'base/Views/backend/cool_plugin/store',
        'Shopware.apps.CoolPlugin.view': 'http://' + window.location.host + 'base/Views/backend/cool_plugin/view',
        'Shopware.apps.CoolPlugin': 'http://' + window.location.host + 'base/Views/backend/cool_plugin'
    },
    suffixes: {
        'Shopware': '',
        'Shopware.apps.CoolPlugin': '.js'
    },
    disableCaching: true           // Turn OFF cache BUSTING
});

Ext.Loader.getPath = function(className) {
    var tempClass = className;
    var path = '',
        paths = this.config.paths,
        prefix = this.getPrefix(className);
    suffix = this.config.suffixes[prefix] !== undefined ? this.config.suffixes[prefix] : '';

    if (prefix.length > 0) {
        if (prefix === className) {
            return paths[prefix];
        }
        path = paths[prefix];
        className = className.substring(prefix.length + 1);
    }

    if (path.length > 0) {
        path += '?file=';
    }

    var classExtension = className.replace(/\./g, "/");

    return path.replace(/\/\.\//g, '/') + classExtension + suffix;
};