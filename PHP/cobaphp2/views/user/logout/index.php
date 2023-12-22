<?php
session_start();
if (isset($_SESSION["login"])) {
    header("Location: http://localhost/cobaphp2/views/user/login/");
    exit;
}

session_destroy();
$_SESSION = [];
session_unset();
header("Location: http://localhost/cobaphp2/");