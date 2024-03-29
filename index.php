<?php
// $Id: index.php,v 1.82.4.1 2006/10/18 20:14:08 killes Exp $

/**
 * @file
 * The PHP page that serves all page requests on a Drupal installation.
 *
 * The routines here dispatch control to the appropriate handler, which then
 * prints the appropriate page.
 */

include_once 'includes/bootstrap.inc';
drupal_page_header();
include_once 'includes/common.inc';

fix_gpc_magic();
drupal_check_token();

$status = menu_execute_active_handler();
switch ($status) {
  case MENU_NOT_FOUND:
    drupal_not_found();
    break;
  case MENU_ACCESS_DENIED:
    drupal_access_denied();
    break;
}

drupal_page_footer();

?>
