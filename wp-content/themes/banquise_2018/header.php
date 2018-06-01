<?php
/**
 * The Header template for Bleu Banquise Theme
 *
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?><!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="keywords" content="">

<title>Bleu Banquise, Thème Wordpress 2018</title>
    
    
    <?php 
    function bb_enqueue_scripts() {
        $js_directory = get_template_directory_uri() . '/js/';
        wp_register_script( 'comportement', $js_directory . 'comportement.js', 'jquery', '1.0' );
        wp_register_script( 'team', $js_directory . 'team.js', 'jquery', '1.0' );
        wp_register_script( 'obj', $js_directory . 'obj.js', 'jquery', '1.0' );
        wp_register_script( 'menu', $js_directory . 'menu.js', 'jquery', '1.0' );
        wp_enqueue_script( 'jquery' );
        wp_enqueue_script( 'comportement' );
        wp_enqueue_script( 'team' );
        wp_enqueue_script( 'obj' );
        wp_enqueue_script( 'menu' );
    }
    add_action( 'wp_enqueue_scripts', 'bb_enqueue_scripts' );
    ?>
    
    <?php
    function theme_scripts()
    {
    wp_enqueue_style("theme-style", get_stylesheet_uri());
    }
    add_action("wp_enqueue_scripts", "theme_scripts");  
    ?>
    
    <?php wp_head(); ?>   
</head>
<body>

<!--Mise en place d'un Logo central--> 
<section id="out" class="logocentral">
</section>
    
<!--Mise ne place du MENU-->
<section class="menu">    
    <nav>
        <ul>
            <li id="one"><a href="#accueil">Accueil</a></li>
            <li id="two"><a href="#usine">Atelier</a></li>
            <li id="three"><a href="#equipe">Equipe</a></li>
            <li id="four"><a href="#realisation">Réalisation</a></li>
            <li id="five"><a href="#contact">Contact</a></li>
            <li style="width: 30px; height: 30px; padding: 0px; padding-top: 10px;"><a target="_blank" href="https://www.facebook.com/bleubanquise/?ref=br_rs"><img src="img/facebook-with-circle.svg"></a></li>
        </ul>
    </nav>
    <hr id="hr" />
</section>
    
<!-- ***Ensemble des pages*** -->
<section class="skw-pages">