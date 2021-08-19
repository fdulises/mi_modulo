<?php
/**
 * @file
 * Contains \Drupal\article\Plugin\Block\ArticleBlock.
 */

namespace Drupal\mi_modulo\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormInterface;

/**
 * Provides a 'form' block.
 *
 * @Block(
 *   id = "formBlock",
 *   admin_label = @Translation("Form block"),
 *   category = @Translation("Custom form block example")
 * )
 */
class formBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

    $form = \Drupal::formBuilder()->getForm(\Drupal\mi_modulo\form\render_form::class);

    return $form;
   }
}