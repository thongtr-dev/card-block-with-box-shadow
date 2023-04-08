<?php

/**
 * Plugin Name:       Card Block with Box Shadow
 * Description:       Add a custom card block to WordPress block editor. It can be used as a content container with custom controls for padding, margin, background color/gradient and, hence the name of the block - box shadow.
 * Requires at least: 5.9
 * Requires PHP:      7.4
 * Version:           2.0.0
 * Author:            thongtruong
 * Author URI:        https://thongtruong.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       card-block-with-box-shadow
 *
 * @package           card-block-with-box-shadow
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function thongtruong_card_block_with_box_shadow_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'thongtruong_card_block_with_box_shadow_block_init');
