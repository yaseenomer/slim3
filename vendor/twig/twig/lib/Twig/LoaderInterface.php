<?php

/*
 * This file is part of Twig.
 *
 * (c) Fabien Potencier
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Interface all loaders must implement.
 *
 * @author Fabien Potencier <fabien@symfony.com>
 */
interface Twig_LoaderInterface
{
    /**
     * Returns the source context for a given templates logical name.
     *
     * @param string $name The templates logical name
     *
     * @return Twig_Source
     *
     * @throws Twig_Error_Loader When $name is not found
     */
    public function getSourceContext($name);

    /**
     * Gets the cache key to use for the cache for a given templates name.
     *
     * @param string $name The name of the templates to load
     *
     * @return string The cache key
     *
     * @throws Twig_Error_Loader When $name is not found
     */
    public function getCacheKey($name);

    /**
     * Returns true if the templates is still fresh.
     *
     * @param string $name The templates name
     * @param int    $time Timestamp of the last modification time of the
     *                     cached templates
     *
     * @return bool true if the templates is fresh, false otherwise
     *
     * @throws Twig_Error_Loader When $name is not found
     */
    public function isFresh($name, $time);

    /**
     * Check if we have the source code of a templates, given its name.
     *
     * @param string $name The name of the templates to check if we can load
     *
     * @return bool If the templates source code is handled by this loader or not
     */
    public function exists($name);
}

class_alias('Twig_LoaderInterface', 'Twig\Loader\LoaderInterface', false);
