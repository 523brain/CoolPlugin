<?php
/**
 * Copyright (c) niWde
 */

use \Shopware\Components\CSRFWhitelistAware;

/**
 * Class Shopware_Controllers_Backend_CoolPlugin
 */
class Shopware_Controllers_Backend_CoolPlugin extends Shopware_Controllers_Backend_Application implements CSRFWhitelistAware
{

    protected $model = 'Shopware\Models\Article\Article';

    public function getBeersAction(){
        $this->View()->assign(['success' => true, 'data' => ['id' => 1, 'beersInStore' => 40 ]]);
    }

    /**
     * @inheritdoc
     */
    public function getWhitelistedCSRFActions()
    {
        return [];
    }

}
