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


// Register ACF block
function harrison_acf_blocks_register_blocks() {
    if (function_exists('acf_register_block')) {
        acf_register_block(array(
            'name' => 'team-member-position',
            'title' => __('Team Member Position', 'harrison-acf-blocks'),
            'description' => __('A custom block to display the "team_member_position" field.', 'harrison-acf-blocks'),
            'render_callback' => 'harrison_acf_blocks_render_team_member_position_block',
            'category' => 'common',
            'icon' => 'admin-users',
            'keywords' => array('team', 'position', 'acf'),
            'supports' => array(
                'align' => true,
                'color' => array('background', 'text', 'gradients', 'link'),
                'typography' => array('fontSize', 'lineHeight'),
                'anchor' => true,
                'spacing' => array('margin', 'padding', 'blockGap'),
            ),
            'enqueue_style' => plugin_dir_url(__FILE__) . 'blocks/team-member-position/style.css', // Optional: Add CSS file for block styles
            'enqueue_script' => plugin_dir_url(__FILE__) . 'blocks/team-member-position/index.js', // Enqueue the block script
            'post_types' => array('team-member'), // Specify the custom post type to which the ACF field group is assigned
        ));
    }
}
add_action('acf/init', 'harrison_acf_blocks_register_blocks');

function harrison_acf_blocks_render_team_member_position_block($block, $content = '', $is_preview = false, $post_id = 0) {
    if (is_admin() && $is_preview) {
        // Display a preview of the block in the Gutenberg editor
        return '<p>' . __('Team Member Position Preview', 'harrison-acf-blocks') . '</p>';
    } else {
        // Check if the current post has the "team_member_position" field
        $position = get_field('team_member_position', $post_id);

        // Output the block content with formatting controls
        if ($position) {
            return '<div class="wp-block-team-member-position">' .
                '<p>' . wp_kses_post($position) . '</p>' .
                '</div>';
        }

        // If the "team_member_position" field is empty, return an empty string
        return '';
    }
}

