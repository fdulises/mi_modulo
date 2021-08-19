<?php
/**
 * @file
 * Contains \Drupal\hello\Controller\HelloController.
 */
namespace Drupal\mi_modulo\Controller;

use Drupal\Core\Controller\ControllerBase;

use Symfony\Component\HttpFoundation\Response;

class render_paso extends ControllerBase {
	public function content() {

		// $form = \Drupal::formBuilder()->getForm(\Drupal\mi_modulo\form\render_form::class);

		// ksm($form);
		
		// return $form;

		$block_manager = \Drupal::service('plugin.manager.block');
		// You can hard code configuration or you load from settings.
		$config = [];
		$plugin_block = $block_manager->createInstance('formBlock', $config);
		
		$render = $plugin_block->build();
		return $render;
	}
}