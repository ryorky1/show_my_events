<?php

/**
 * Enqueue parent styles
 */



function dequeue_unnecessary_stylesheets() {
    wp_dequeue_style('sidr');
    wp_dequeue_script('sidr');
}

add_action('wp_print_scripts', 'dequeue_unnecessary_stylesheets', 100);

// add_action( 'wp_enqueue_scripts', function() {
// 	wp_enqueue_style( 'parent-style', get_template_directory_uri() . "/style.css");
//     wp_dequeue_style('sidr');
//     wp_dequeue_script('sidr');
//     wp_enqueue_script('jquery');
//     wp_enqueue_script( 'child_custom', get_stylesheet_directory_uri() . '/js/child_custom.js');
// 	// 	get_stylesheet_uri(),
// 	// 	array( 'parenthandle' ),
// 	// 	wp_get_theme()->get( 'Version' ) // This only works if you have Version defined in the style header.
// 	// );

// });

// function dequeue_unnecessary_scripts() {
//     // wp_dequeue_style('sidr');
//     wp_dequeue_script('sidr');
// }

// add_action('wp_print_scripts', 'dequeue_unnecessary_scripts', 100);

function enqueue_necessary(){
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . "/style.css");
    wp_enqueue_script('jquery');
    wp_enqueue_script( 'child_custom', get_stylesheet_directory_uri() . '/js/child_custom.js');
}

add_action('wp_print_scripts', 'enqueue_necessary', 100);