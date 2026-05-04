<?php
// Заметка для моих братишек из INSART
// Этот файл нужно добавить в Cursor чтобы он статично лежал в корне каждого лендинга
// Нужно учитывать в дизайне лендингов, что у хедера и футера есть свои стили (их можно переписать при необходимости)
// Статичный файл лендинга должен называться index.html

$dir = __DIR__;
$wp_load = null;

for ($i = 0; $i < 10; $i++) {
  if (file_exists($dir . '/wp-load.php')) {
    $wp_load = $dir . '/wp-load.php';
    break;
  }
  $parent = dirname($dir);
  if ($parent === $dir) break; // дошли до корня
  $dir = $parent;
}

if (!$wp_load) {
  header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error');
  echo 'wp-load.php not found';
  exit;
}

require_once $wp_load;

$header_id = 276;
$footer_id = 281;
$kit_id    = 286;

global $wp_query, $post;

$wp_query = $wp_query ?? new WP_Query();
$wp_query->is_page     = true;
$wp_query->is_singular = true;

$post = get_post(get_option('page_on_front')) ?: (object) ['ID' => 0];
setup_postdata($post);

add_filter('body_class', function($classes) use ($kit_id) {
  $classes[] = 'elementor-kit-' . intval($kit_id);
  $classes[] = 'elementor-default';
  return $classes;
}, 20);

if (class_exists('\Elementor\Plugin')) {
  $frontend = \Elementor\Plugin::$instance->frontend;

  $frontend->get_builder_content_for_display($header_id);
  $frontend->get_builder_content_for_display($footer_id);

  do_action('wp_enqueue_scripts');
  do_action('elementor/frontend/before_enqueue_scripts');
  $frontend->enqueue_styles();
  $frontend->enqueue_scripts();
  do_action('elementor/frontend/after_enqueue_scripts');

  if (class_exists('\Elementor\Core\Files\CSS\Post')) {
    (new \Elementor\Core\Files\CSS\Post($kit_id))->enqueue();
    (new \Elementor\Core\Files\CSS\Post($header_id))->enqueue();
    (new \Elementor\Core\Files\CSS\Post($footer_id))->enqueue();
  }
}

?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
  <?php
  $og_title       = 'Venture Partners | INSART';
  $og_description = 'INSART works with a select circle of deeply aligned fintech operators, advisors, and connectors. Our venture partners share our values, extend our reach, and invest in long-term outcomes alongside us.';
  $og_url         = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  $og_image       = home_url('/venture-partners/preview.jpg');
  ?>
  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type"         content="website" />
  <meta property="og:site_name"    content="INSART" />
  <meta property="og:url"          content="<?php echo esc_url($og_url); ?>" />
  <meta property="og:title"        content="<?php echo esc_attr($og_title); ?>" />
  <meta property="og:description"  content="<?php echo esc_attr($og_description); ?>" />
  <meta property="og:image"        content="<?php echo esc_url($og_image); ?>" />
  <meta property="og:image:width"  content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt"    content="INSART Venture Partners — Fintech Ecosystem Builders" />
  <!-- Twitter / X Card -->
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:site"        content="@insart_io" />
  <meta name="twitter:title"       content="<?php echo esc_attr($og_title); ?>" />
  <meta name="twitter:description" content="<?php echo esc_attr($og_description); ?>" />
  <meta name="twitter:image"       content="<?php echo esc_url($og_image); ?>" />
  <meta name="twitter:image:alt"   content="INSART Venture Partners — Fintech Ecosystem Builders" />
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php
if (class_exists('\Elementor\Plugin')) {
  echo \Elementor\Plugin::$instance->frontend->get_builder_content_for_display($header_id);
}
?>

<main>
  <?php
  $static = __DIR__ . '/index.html';
  if (file_exists($static)) {
    include $static;
  } else {
    echo '<!-- index.html not found -->';
  }
  ?>
</main>

<?php
if (class_exists('\Elementor\Plugin')) {
  echo \Elementor\Plugin::$instance->frontend->get_builder_content_for_display($footer_id);
}
?>

<?php wp_footer(); ?>
</body>
</html>