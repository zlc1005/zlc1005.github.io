<!DOCTYPE html>
<html>
<body>
<?php
$json_strings=json_encode(array("a"=>'aa','b'=>'aaa'))
file_put_contents("text.json",$json_strings);
echo 'Success'
?>
</body>
</html>  
