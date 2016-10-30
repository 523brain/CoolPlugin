//{block name="backend/cool_plugin/app"}
Ext.define( 'Shopware.apps.CoolPlugin', {
    extend: 'Enlight.app.SubApplication',
    name: 'Shopware.apps.CoolPlugin',
    loadPath: '{url action=load}',
    bulkLoad: true,
    controllers: [ 'Main' ],
    views: [
        'main.Window'
    ],
    models: [ 'Cool' ],
    stores: [ 'Cool' ],
    defaultController: 'Main',
    launch: function () {
        var me = this,
            controller = me.getController( me.defaultController );
        return controller.mainWindow;
    }
});
//{/block}
