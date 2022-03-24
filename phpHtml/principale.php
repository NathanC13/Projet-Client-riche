<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <!-- importer le fichier de style -->
        <link rel="stylesheet" href="../CSS/styleprincipale.css" media="screen" type="text/css" />
    </head>
    <body>
        <div id="content">
            
            <a href='principale.php?deconnexion=true'><input type="submit" id="1" value="Déconnexion"></a>
            
            <!-- tester si l'utilisateur est connecté -->
            <?php
                session_start();

                if($_SESSION['username'] == ""){
                    header("location:login.php");
                }

                if(isset($_GET['deconnexion']))
                { 
                   if($_GET['deconnexion']==true)
                   {  
                    $_SESSION = array();
                    if (ini_get("session.use_cookies")) {
                        $params = session_get_cookie_params();
                        setcookie(session_name(), '', time() - 42000,
                            $params["path"], $params["domain"],
                            $params["secure"], $params["httponly"]
                        );
                    }
                      session_destroy();
                      header("location:login.php");
                   }
                }
                else if($_SESSION['username'] !== ""){
                    $user = $_SESSION['username'];
                    // afficher un message
                    echo "<br>Bonjour $user, vous êtes connectés";
                }
            ?>
            
        </div>
    </body>
</html>