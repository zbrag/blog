<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>Test page for filterpage.js</title>
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script src="js/filterpage.js"></script>
    </head>
    <body>
    <div>
        <a href="index.php?ordering=desc">Descending</a>
        <a href="index.php?ordering=asc">Ascending</a>
        <ul>
            <?php
            $ordering = ($_GET['ordering'] == 'desc'?'desc':'asc');
            if($ordering == 'desc') {
                for ($i = 1; $i <= 25; $i++) {
                    echo '<li data-url="page.php?pageId=' . $i . '"><a class="pageLink" href="page.php?pageId=' . $i . '">Item ' . $i . '</a></li>';
                }

            }
            else{
                for ($i = 25; $i >0 ; $i--) {
                    echo '<li data-url="page.php?pageId=' . $i . '"><a class="pageLink"  href="page.php?pageId=' . $i . '">Item ' . $i . '</a></li>';
                }
            }

            ?>

        </ul>
        <?= '<input type="hidden" id="ordering" value="' . $ordering . '">'; ?>
    </div>
    </body>
</html>