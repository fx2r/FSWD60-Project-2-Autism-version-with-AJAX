


<!DOCTYPE html>
<html>
<head>
	<title>Autismus-Welt</title>
	<meta charset="utf-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
	  <script src="ckeditor/ckeditor.js"></script>
  </script>
	<link rel="stylesheet" type="text/css" href="css/nav.css">
	<link rel="stylesheet" type="text/css" href="css/header.css">
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="stylesheet" type="text/css" href="css/about.css">
	<link rel="stylesheet" type="text/css" href="css/footer.css">

	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
</head>
<body>
	<div class="container-fluid">
		
	<div id="header" class="jumbotron text-center">
        <!-- <h1>Autismus-Welt</h1>
        <p class="lead text-info">Here is the Jumbotron</p> -->
    </div>
    <?php
    include ("nav.php");
    require_once("actions/db_connect.php")

     ?>
	 <h1> Hi Admin</h1>
          <!-- INNER JOIN with the foreign keys-->

          <table class='table table-striped' > 
                   <thead>
                       <tr>
                     <th>NavName</th>
                     <th>Navsubpagename</th>
                     <th>Title</th>
                     <th>Image</th>
                     <th>Content</th>
                     <th>Action</th>
                     
                       </tr>
                 </thead>
                 <tbody>
                 
           <?php
           $sql = "SELECT * FROM webcontent
           ";

           $result = $connect->query($sql);

        
           if($result->num_rows > 0) {
               while($row = $result->fetch_assoc()) {
               		
                
                   echo "<tr>
                        <td>".$row['NavName']."</td>
                        <td>".$row['Navsubpagename']."</td>
                        <td>".$row['Title']."</td>
                        <td><img id='img' class='card-img-top' src = ".$row['Image']." width=100px height=100px alt='Card image cap'></td>
                        <td id='content".$row['ID']."'>".$row['Content']."</td>

                       <td>
                           <a href='adminEdit.php?ID=".$row['ID']."'><button type='button'>Edit</button></a>
                       </td>
                   </tr>"
                   ;
               }
           } else {
               echo "<tr><td colspan='5'><center>No Data Avaliable</center></td></tr>";
           }
           ?>

            </tbody>
            </table>
       
</div>
 </div> 
</div>
	
	<script src="js/admin.js" type="text/javascript"></script>
</body>
</html>
