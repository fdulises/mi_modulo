<?php
/**
 * @file
 * Contains \Drupal\hello\Controller\HelloController.
 */
namespace Drupal\mi_modulo\Controller;

use Drupal\Core\Controller\ControllerBase;

use Symfony\Component\HttpFoundation\Response;

class PMController extends ControllerBase {
	public function content($nombre, $tipo) {
		
		if( $tipo == 'js' ){
			$file = realpath(__DIR__.'/../../pm/mensaje/mensaje.back.js');
			$content = file_get_contents( $file );

			$response = new Response($content);
			$response->headers->set('Content-Type', 'application/javascript');

			return $response;
		}else if( $tipo == 'php' ){
			$file = realpath(__DIR__.'/../../pm/mensaje/mensaje.back.php');
			require $file;

			return new Response(main());

		}
		return new Response(':)');
	}
}