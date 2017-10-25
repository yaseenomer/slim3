<?php
/**
 * Created by PhpStorm.
 * User: yaseen
 * Date: 10/24/2017
 * Time: 10:33 AM
 */

namespace App\Middleware;



class OldInputMiddleware extends Middleware
{

    public function __invoke($request,  $response, $next)
    {

        $this->container->view->getEnvironment()->addGlobal('old',$_SESSION['old']);

         $_SESSION['old']=$request->getParams();

        $response = $next($request, $response);
        return $response;

    }
}