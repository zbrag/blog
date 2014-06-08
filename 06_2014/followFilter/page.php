<?php
$page = filter_var($_GET['pageId'],FILTER_VALIDATE_INT);
if(is_numeric($page)) // just a little saveguard
{
    $message = "Welcome, you are on page number $page";
}
?>
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>Test page for filterpage.js</title>
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script src="js/resultPage.js"></script>
    </head>
    <body>
        <div data-pageid="page.php?pageId=<?=$page?>">
            <?= $message ?>
        </div>
        <div id="searchPath" style="display: none">
            <a href="#" class="next">Next result</a>
            <a href="#" class="prev">Previous result</a>
        </div>
    </body>
</html>