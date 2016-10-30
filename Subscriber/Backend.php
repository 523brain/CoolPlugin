<?php
/**
 * Copyright (c) niWde
 */

namespace CoolPlugin\Subscriber;

use Enlight\Event\SubscriberInterface;
use Enlight_Event_EventArgs;
use Enlight_View_Default;
use Symfony\Component\DependencyInjection\ContainerInterface;

class Backend implements SubscriberInterface
{
    /** @var ContainerInterface */
    private $container;

    /** @var string */
    private $path;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->path = $this->container->getParameter('cool_plugin.plugin_dir');
    }

    public static function getSubscribedEvents()
    {
        return [
            'Enlight_Controller_Action_PostDispatch_Backend_CoolPluginSub' => 'extendBackendModule'
        ];
    }

    public function extendBackendModule(Enlight_Event_EventArgs $arguments)
    {
        /** @var Subject $subject */
        $subject = $arguments->get('subject');

        /** @var Enlight_View_Default $view */
        $view = $subject->View();

        // add the template dir to the view.
        $view->addTemplateDir(
            $this->path . '/Resources/views/'
        );

        if ($arguments->get('request')->getActionName() === 'getBeers') {
//            $view->assign(['success' => true, 'data' => ['id' => 1, 'beersInStore' => 40 ]]);
        }
    }
}