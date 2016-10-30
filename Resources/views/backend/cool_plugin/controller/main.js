/*
 * Copyright (c) niWde
 */
//{block name="backend/cool_plugin/controller/main"}
Ext.define( 'Shopware.apps.CoolPlugin.controller.Main', {
    extend: 'Enlight.app.Controller',
    mainWindow: null,
    init: function () {
        var me = this;
        me.coolStore = me.getStore( 'Cool' );
        me.coolStore.load();
        me.mainWindow = me.getView( 'main.Window' ).create({
            coolStore: me.coolStore
        });
        me.control({
            'mainWindow': {
                addBeers: me.onAddBeers
            }
        });
        me.callParent(arguments);
    },
    onAddBeers: function ( beers ) {
        var me = this;
        Shopware.Notification.createGrowlMessage( 'Beer!', 'Beers:', beers + me.coolStore.first().get( 'beersInStore' ));
    }
});
//{/block}


