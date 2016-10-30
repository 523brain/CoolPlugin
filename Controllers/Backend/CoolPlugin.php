<?php
use \Shopware\Components\CSRFWhitelistAware;
/**
 * Copyright (c) niWde
 */

class Shopware_Controllers_Backend_CoolPlugin extends Shopware_Controllers_Backend_Application implements CSRFWhitelistAware
{

    protected $model = 'Shopware\Models\Article\Article';

    public function getBeersAction(){
        $this->View()->assign(['success' => true, 'data' => ['id' => 1, 'beersInStore' => 40 ]]);
    }

    public function getWhitelistedCSRFActions()
    {
        return [];
    }

}
