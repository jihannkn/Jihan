<?php
$connect = mysqli_connect("localhost", "root", "", "crot");

if (!$connect) {
    die("Koneksi error" . mysqli_connect_error());
}

function generateId($length = 9)
{
    $chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    $lengChars = strlen($chars);
    $output = "";
    for ($i = 0; $i < $length; $i++) {
        $output .= $chars[rand(0, $lengChars - 1)];
    }
    return $output;
}

function getData($sql)
{
    global $connect;
    $data = [];
    $result = mysqli_query($connect, $sql);
    while ($row = mysqli_fetch_array($result)) {
        $data[] = $row;
    }
    return $data;
}

function register()
{
    global $connect;
    $id = generateId(9);
    $username = stripslashes($_POST["name"]);
    $email = stripslashes($_POST["email"]);
    $address = stripslashes($_POST["address"]);
    $phone = $_POST["phone"];
    $password = mysqli_real_escape_string($connect, $_POST["password"]);
    $confirmPassword = mysqli_real_escape_string($connect, $_POST["confirm-password"]);

    $emailDuplicated = getData("SELECT * FROM users WHERE email = '$email'")[0]["email"];
    $phoneDuplicated = getData("SELECT * FROM users WHERE phone = '$phone'")[0]["phone"];

    if ($password !== $confirmPassword) {
        echo "
        <script>
            alert('Password tidak sesuai');
            document.location.href = 'http://localhost/cobaphp2/views/user/register/';
        </script>
        ";
        return false;
    }

    if (strtolower($email) === strtolower($emailDuplicated)) {
        echo "
        <script>
            alert('Email sudah terdaftar.');
            document.location.href = 'http://localhost/cobaphp2/views/user/register/';
        </script>
        ";
        return false;
    }
    if ($phone === $phoneDuplicated) {
        echo "
        <script>
            alert('Nomor HP sudah terdaftar.');
            document.location.href = 'http://localhost/cobaphp2/views/user/register/';
        </script>
        ";
        return false;
    }

    $passwordHashed = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (id,name,email,phone,address,password) VALUES ('$id','$username','$email','$phone','$address','$passwordHashed')";

    mysqli_query($connect, $sql);
    return mysqli_affected_rows($connect);
}



// todo - table article
// id
// title
// slug
// body
// users_id
// category_id

// todo - table category
// id
// slug
// category