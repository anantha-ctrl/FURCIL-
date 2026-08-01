<?php
/**
 * PDO database connection (singleton).
 */
class Database
{
    private static ?PDO $pdo = null;

    public static function conn(): PDO
    {
        if (self::$pdo === null) {
            $host = env('DB_HOST', '127.0.0.1');
            $port = env('DB_PORT', '3306');
            $name = env('DB_NAME', 'cloudfashion');
            $dsn = "mysql:host=$host;port=$port;dbname=$name;charset=utf8mb4";
            try {
                self::$pdo = new PDO($dsn, env('DB_USER', 'root'), env('DB_PASS', 'anantha'), [
                    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES   => false,
                ]);
                self::ensureSchema();
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(['success' => false, 'message' => 'Database connection failed']);
                exit;
            }
        }
        return self::$pdo;
    }

    private static function ensureSchema(): void
    {
        static $checked = false;
        if ($checked) return;
        $checked = true;
        try {
            self::$pdo->exec("ALTER TABLE product_images MODIFY image_url MEDIUMTEXT NOT NULL");
            self::$pdo->exec("ALTER TABLE categories MODIFY image_url MEDIUMTEXT NULL");
            self::$pdo->exec("ALTER TABLE banners MODIFY image_url MEDIUMTEXT NOT NULL");
            self::$pdo->exec("ALTER TABLE settings MODIFY value MEDIUMTEXT NOT NULL");
        } catch (\Throwable $t) {
            // Ignore if tables don't exist yet or column modifications are restricted
        }
    }
}
