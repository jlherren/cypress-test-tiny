<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        header('Location: /cypress/');
} else {
        header('Content-Type: text/html');
        echo "<form action='' method=post><input type=submit value=Save></form>";
}
