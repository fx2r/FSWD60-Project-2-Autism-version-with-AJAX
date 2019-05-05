<?php
session_start();
include ("header.php");

if (isset($_SESSION['user'])){
	echo 'logged in';
}
?>

<main id="about">
	<div class="row">
		<aside class="col-lg-2">
			<?php require_once 'sidebars/ueberuns.php'; ?>
		</aside>

		<div class="col-lg-10">
			
			
			<div id="content">
				
			</div>


			</div> <!-- closes .aboutText -->
		</div> <!-- closes col.10 -->
	</main>
</div> <!-- closes row -->


<?php include ("footer.php"); ?>