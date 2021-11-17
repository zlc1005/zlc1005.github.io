<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>


<?php
echo "<h1> wow</h1>";
$x = 5;
$y = 4;
$age = json_encode(array("aaaaa"=>"1aaa235", "aaaf"=>"4aaaa4", "caaac"=>"aaa6"));
echo $age;
file_put_contents("text.json",$age,FILE_APPEND);
//json_encode(
?>

</body>
</html>
