/*
 * Copyright (c) niWde
 */
Ext.define( 'Shopware.apps.CoolPlugin.model.Cool', {
    extend: 'Shopware.data.Model',
    alias: 'model.cool',
    fields: [
        { name: 'id', type: 'int', useNull: true },
        { name: 'beersInStore', type: 'int', useNull: true }
    ],
    proxy: {
        type: 'ajax',
        api: {
            read: '{url controller=CoolPlugin action=getBeers}'
        },
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});