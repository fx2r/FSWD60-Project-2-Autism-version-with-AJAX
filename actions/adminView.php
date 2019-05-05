<?php
           $sql = "SELECT * FROM webcontent WHERE ID = 2";
           $result = $connect->query($sql);

           if($result->num_rows > 0) {
               while($row = $result->fetch_assoc()) {
                   echo "
                       <h1>".$row['Title']."</td>
                       <img src=".$row['Image']" alt="">
                       <div>".$row['Content']."</div>
                       <td>
                           <a href='editüberuns.php?id=".$row['id']."'><button type='button'>Edit</button></a>
                           
                       </td>
                   </tr>";
               }
           } else {
               echo "<tr><td colspan='5'><center>No Data Avaliable</center></td></tr>";
           }
           ?>