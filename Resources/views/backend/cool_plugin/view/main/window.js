/*
 * Copyright (c) niWde
 */
Ext.define( 'Shopware.apps.CoolPlugin.view.main.Window', {
    extend: 'Enlight.app.Window',
    alias: 'widget.cool-main-window',
    title: 'Cool App Plugin',
    id: 'mainWindow',
    height: "90%",
    width: "50%",
    border: false,
    autoShow: true,
    layout: 'border',
    initComponent: function () {
        var me = this;
        me.registerEvents();
        me.panel = me.createPanel();
        me.items = [{
            xtype: 'container',
            region: 'center',
            layout: 'border',
            items: [ me.panel ]
        }];
        me.dockedItems = [ me.getToolbar(), me.getPagingbar() ];

        me.callParent( arguments );
    },
    registerEvents: function () {
        this.addEvents(
            'addBeers'
        );
    },
    createPanel: function () {
        var me = this;

        return Ext.create('Ext.form.Panel', {
            title: 'On The Wall',
            width: 300,
            bodyPadding: 10,
            renderTo: Ext.getBody(),
            items: [{
                xtype: 'numberfield',
                anchor: '100%',
                name: 'bottles',
                fieldLabel: 'Bottles of Beer',
                value: 99,
                maxValue: 99,
                minValue: 0
            }],
            buttons: [{
                text: 'Take one down, pass it around',
                handler: function () {
                    this.up( 'form' ).down( '[name=bottles]' ).spinDown();
                }
            },
                {
                    text: 'Add the beers from the store',
                    handler: function () {
                        this.fire( 'addBeers' , this.up( 'form' ).down( '[name=bottles]' ).getValue());
                    }
                }]
        });
    },
    getToolbar: function () {
        var me = this;

        var toolbar = Ext.create( 'Ext.toolbar.Toolbar', {
            dock: 'top',
            ui: 'shopware-ui',
            cls: 'shopware-toolbar',
            items: [
                {
                    iconCls: 'sprite-plus-circle-frame',
                    text: 'Add Beer',
                    action: 'addBeers'
                },
                {
                    xtype: 'tbfill'
                }, {
                    xtype: 'container',
                    html: '<p style="padding: 5px">DragAndDrop</p>'
                }
            ]
        });

        return toolbar;
    },
    getPagingbar: function () {
        var pagingbar = Ext.create( 'Ext.toolbar.Paging', {
            store: this.store,
            dock: 'bottom',
            displayInfo: true
        });

        return pagingbar;
    }
});