<?php
/**
 * Copyright (c) niWde
 */

namespace CoolPlugin\Setup;

use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class Installer
 * @package CoolPlugin\Setup
 */
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