<?php
/**
 * @file
 * Contains \Drupal\mi_modulo\Controller\PMController.
 */
namespace Drupal\mi_modulo\Controller;

use Drupal\Core\Controller\ControllerBase;

use Symfony\Component\HttpFoundation\Response;

class PMController extends ControllerBase {
	/*
	* Controlador para ruta pm/script/nombre
	* Responde con el javascript para backend del plugin solicitado
	*/
	public function script($nombre) {
		
		$file = realpath(__DIR__."/../../pm/{$nombre}/back.js");
		$content = file_get_contents( $file );

		$response = new Response($content);
		$response->headers->set('Content-Type', 'application/javascript');

		return $response;
	}

	/*
	* Controlador para ruta pm/form/nodo
	* Responde con el render del form solicitado
	*/
	public function form($nodo) {
		$form = \Drupal::formBuilder()->getForm(\Drupal\mi_modulo\form\render_form::class);
		return $form;
	}
}