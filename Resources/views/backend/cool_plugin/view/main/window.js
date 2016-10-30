/*
 * Copyright (c) niWde
 */
Ext.define( 'Shopware.apps.CoolPlugin.view.main.Window', {
    extend: 'Enlight.app.Window',
    alias: 'widget.mainWindow',
    title: 'Cool App Plugin',
    id: 'mainWindow',
    height: 250,
    width: 320,
    border: false,
    autoShow: true,
    layout: 'border',
    initComponent: function () {
        var me = this;
        me.registerEvents();
        me.panel = me.createPanel();
        me.items = [
            {
                xtype: 'container',
                region: 'center',
                layout: 'border',
                items: [ me.panel ]
            }
        ];

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
            items: [
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    name: 'bottles',
                    fieldLabel: 'Bottles of Beer',
                    value: 99,
                    maxValue: 99,
                    minValue: 0
                }
            ],
            buttons: [
                    {
                        text: 'Take one down, pass it around',
                        handler: function () {
                            this.up( 'form' ).down( '[name=bottles]' ).spinDown();
                        }
                    },
                    {
                        text: 'Add stored beers',
                        handler: function () {
                            var value = this.up( 'form' ).down( '[name=bottles]' ).getValue();
                            me.fireEvent( 'addBeers' , value);
                        }
                    }
                ]
        });
    }
});