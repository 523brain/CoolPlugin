<?php

namespace CoolPlugin;

use Shopware\Components\Plugin;
use Shopware\Components\Plugin\Context\InstallContext;
use CoolPlugin\Setup\Installer;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class CoolPlugin extends Plugin
{
    /**
     * Add a new parameter to the container, to retrieve the plugin path at any time.
     *
     * @param ContainerBuilder $container
     */
    public function build(ContainerBuilder $container)
    {
        $container->setParameter('cool_plugin.plugin_dir', $this->getPath());

        parent::build($container);
    }

    /**
     * Overwrites the install method to execute specific installation code.
     *
     * @param InstallContext $context
     */
    public function install(InstallContext $context)
    {
        $this->registerNamespaces();
        $installer = new Installer($this->container);
        $installer->install();
    }

    public static function getSubscribedEvents()
    {
        return [
            'Enlight_Controller_Front_StartDispatch', 'onStartDispatch',
            'Enlight_Controller_Dispatcher_ControllerPath_Backend_CoolPlugin', 'registerController'
        ];
    }

    public function onStartDispatch(\Enlight_Event_EventArgs $args) {
        $this->registerNamespaces();
        $this->container->get('template')->addTemplateDir(
            $this->getPath() . '/Resources/views/'
        );
    }

    public function registerController(\Enlight_Event_EventArgs $args) {
        $this->registerNamespaces();
        $this->container->get('template')->addTemplateDir(
            $this->getPath() . '/Resources/views/'
        );

        return $this->getPath() . "/Controllers/Backend/CoolPlugin.php";
    }

    public function registerNamespaces() {
        $this->container->get('Loader')->registerNamespace('CoolPlugin', $this->getPath());
    }

}