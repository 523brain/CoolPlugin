<?php

namespace CoolPlugin\Setup;

use RuntimeException;
use Symfony\Component\DependencyInjection\ContainerInterface;

class Installer
{
    /** @var ContainerInterface */
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * @return bool
     */
    public function install()
    {
        return true;
    }
}