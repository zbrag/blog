<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>Test page for filterpage.js</title>
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script src="/May%202014/followFilter/js/resultPage.js"></script>
    </head>
    <body>
        <div>
        <?php
        $page = $_GET['pageId'];
        if(is_numeric($page)) // just a little saveguard
        {
            echo "Welcome, you are on page number $page";
        }
        ?>
        </div>
        <div id="searchPath" style="display: none">
            <a href="#" class="next">Next result</a>
            <a href="#" class="prev">Previous result</a>
        </div>
    </body>
</html>