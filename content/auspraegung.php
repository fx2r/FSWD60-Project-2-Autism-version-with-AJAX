<?php
	require '../actions/db_connect.php';

	$sql = "SELECT * FROM webcontent WHERE id = 2";

	$result = mysqli_query($connect, $sql);
	$row = $result->fetch_assoc();

	echo $row["NavName"];
?>