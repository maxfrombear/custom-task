<?php
/*
Plugin Name: Harrison ACF Blocks
Description: Custom ACF blocks for Harrison.
Version: 1.0
Author: Your Name
License: GPL2
*/

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

function harrison_acf_blocks_enqueue_scripts() {
    wp_register_script(
        'harrison-acf-blocks-team-member-position',
        plugin_dir_url(__FILE__) . 'blocks/team-member-position/index.js',
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data', 'wp-i18n'),
        filemtime(plugin_dir_path(__FILE__) . 'blocks/team-member-position/index.js')
    );

    wp_register_style(
        'harrison-acf-blocks-team-member-position-style',
        plugin_dir_url(__FILE__) . 'blocks/team-member-position/style.css',
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'blocks/team-member-position/style.css')
    );

    // Enqueue the scripts and styles for the block
    if (function_exists('register_block_type')) {
        register_block_type('harrison-acf-blocks/team-member-position', array(
            'editor_script' => 'harrison-acf-blocks-team-member-position',
            'editor_style' => 'harrison-acf-blocks-team-member-position-style',
            'style' => 'harrison-acf-blocks-team-member-position-style',
        ));
    }
}
add_action('enqueue_block_editor_assets', 'harrison_acf_blocks_enqueue_scripts');
