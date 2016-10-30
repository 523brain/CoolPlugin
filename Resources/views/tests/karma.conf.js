/*
 * Copyright (c) niWde
 */
// Karma configuration
module.exports = function (config) {
    var logDir = './logs';

    if(this.process.argv.length > 4) {
        logDir = this.process.argv.slice(-1).pop();
    }

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [ 'jasmine' ], //≈

        // list of files / patterns to load in the browser
        files: [
            'vendors/ExtJs/ext-all-debug.js',
            'appSetupBefore.js',

            'vendors/ExtJs/overrides/Ext.Base.js',
            'vendors/ExtJs/overrides/Ext.ClassManager.js',
            'vendors/ExtJs/overrides/Ext.data.proxy.Server.js',
            'vendors/ExtJs/overrides/Ext.app.Application.js',
            'vendors/ExtJs/overrides/Ext.app.EventBus.js',
            'vendors/ExtJs/overrides/Ext.button.Button.js',
            'vendors/ExtJs/overrides/Ext.LoadMask.js',
            'vendors/ExtJs/overrides/Ext.form.Field.js',
            'vendors/ExtJs/overrides/Ext.toolbar.Paging.js',
            'vendors/ExtJs/overrides/Ext.Template.js',
            'vendors/ExtJs/overrides/Ext.form.Base.js',
            'vendors/ExtJs/overrides/Ext.data.writer.Json.js',
            'vendors/ExtJs/overrides/Ext.grid.column.Action.js',
            'vendors/ExtJs/overrides/Ext.view.BoundList.js',
            'vendors/ExtJs/overrides/Ext.form.field.ComboBox.js',
            'vendors/ExtJs/overrides/Ext.form.field.Time.js',
            'vendors/ExtJs/overrides/Ext.form.field.Number.js',
            'vendors/ExtJs/overrides/Ext.tree.Panel.js',
            'vendors/ExtJs/overrides/Ext.panel.Panel.js',
            'vendors/ExtJs/overrides/Ext.ZIndexManager.js',
            'vendors/ExtJs/overrides/Ext.MessageBox.js',
            'vendors/ExtJs/overrides/Ext.grid.RowEditor.js',
            'vendors/ExtJs/overrides/Ext.picker.Date.js',
            'vendors/ExtJs/overrides/Ext.data.association.HasMany.js',
            'vendors/ExtJs/overrides/Ext.menu.Menu.js',
            'vendors/ExtJs/overrides/Ext.Ajax.js',
            'vendors/Shopware/base/component/Shopware.data.reader.Application.js',

            'vendors/ExtJs/components/Enlight.app.Window.js',
            'vendors/ExtJs/components/Enlight.app.SubWindow.js',
            'vendors/ExtJs/components/Enlight.app.SubApplication.js',
            'vendors/ExtJs/components/Enlight.app.Controller.js',
            'vendors/ExtJs/components/Ext.util.FileUpload.js',
            'vendors/ExtJs/components/Enlight.app.WindowManagement.js',
            'vendors/ExtJs/components/Enlight.app.SubWindow.js',
            'vendors/ExtJs/components/Ext.ux.DataView.DragSelector.js',
            'vendors/ExtJs/components/Ext.ux.DataView.LabelEditor.js',
            'vendors/ExtJs/components/Ext.ux.form.field.BoxSelect.js',
            'vendors/ExtJs/components/Ext.ux.RowExpander.js',
            'vendors/ExtJs/components/Ext.ux.form.MultiSelect.js',
            'vendors/ExtJs/components/Ext.ux.form.ItemSelector.js',

            'vendors/Shopware/base/application/Shopware.model.Helper.js',
            'vendors/Shopware/base/application/Shopware.grid.Controller.js',
            'vendors/Shopware/base/application/Shopware.grid.Panel.js',
            'vendors/Shopware/base/application/Shopware.data.Model.js',
            'vendors/Shopware/base/application/Shopware.store.Listing.js',
            'vendors/Shopware/base/application/Shopware.window.Detail.js',
            'vendors/Shopware/base/application/Shopware.window.Listing.js',
            'vendors/Shopware/base/application/Shopware.window.Progress.js',
            'vendors/Shopware/base/application/Shopware.model.DataOperation.js',
            'vendors/Shopware/base/application/Shopware.grid.Association.js',
            'vendors/Shopware/base/application/Shopware.model.Container.js',
            'vendors/Shopware/base/application/Shopware.form.field.Search.js',
            'vendors/Shopware/base/application/Shopware.detail.Controller.js',
            'vendors/Shopware/base/application/Shopware.listing.InfoPanel.js',
            'vendors/Shopware/base/application/Shopware.listing.FilterPanel.js',
            'vendors/Shopware/base/application/Shopware.filter.Field.js',
            'vendors/Shopware/base/application/Shopware.store.Association.js',
            'vendors/Shopware/base/application/Shopware.form.field.Media.js',
            'vendors/Shopware/base/application/Shopware.store.Search.js',

            '../backend/cool_plugin/app.js',
            '../backend/cool_plugin/**/*.js',

            'javascript/spec/*Spec.js'
        ],

        exclude:[
            // 'vendors/ExtJs/overrides/Ext.Timeout.js'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: [ 'dots', 'junit' ],

        plugins:[
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-junit-reporter'
        ],

        // junit reporter
        junitReporter: {
            outputDir: logDir || '',
            suite: ''
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // browsers: [ 'Chrome' ],
        browsers: [ 'PhantomJS' ],

        captureTimeout : 60000,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
