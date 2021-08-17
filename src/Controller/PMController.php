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
    var_dump($nombre);
    return new Response('<html><div>custom cont</div></html>');
  }
}