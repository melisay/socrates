<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'socratesWP');

/** MySQL database username */
define('DB_USER', 'socratesWP');

/** MySQL database password */
define('DB_PASSWORD', 'test');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'l/L2+^E&Z#)9pKhy~+(6Rj/s|>^&k5UvHjwHDCw[Pl9Tf{>;hc!=Vp5nT|=%&r+8');
define('SECURE_AUTH_KEY',  'CCvRT. lw9^x!9c35^-oeZbrJSJ3fa;wfF,QV6Z7RMo6T_{-oBlZ70hCOO&K3Rrp');
define('LOGGED_IN_KEY',    '}@|wA3w|x FjKJ<uGo(#*k,3o/U_Uu{oMw@.9po5+n&E,s#^( &IP]>G-,&vf+w&');
define('NONCE_KEY',        'G]CgHi!gc;:9PG#+1kx!oxN0X&[91>H_|XR.Ci|O!-8DPIoQoo,:2E%.?WOXq}t(');
define('AUTH_SALT',        'E#+pm5C) ^n+iM=f[*;8uO!)8ZwHr-/Y&+lSGKB!`kiRC&p*vCwnQVUHG}Kw#|6m');
define('SECURE_AUTH_SALT', 'D!r+alZOrZ*Yeb|X#pkcI#U-~/nAb1Dr/ |YpYy] q!YHwk|i#w5aOb*0[DwPAPw');
define('LOGGED_IN_SALT',   'VpImlwi$?`{$.aBq%@ClpI5ngLBR+,3t]bk,D5%|=zvbvbv7-7kSaxN?[VI!_B--');
define('NONCE_SALT',       't&_x+svX[q/n0g{*RVRdx%&w8[u>cN u|3D$X?;kZ%J}nyH&aSS<z|s*y9DI%*6y');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
