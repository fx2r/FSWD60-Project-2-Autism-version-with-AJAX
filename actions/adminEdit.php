
<!DOCTYPE html>
<html>
<head>
	<title>Autismus-Welt</title>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
	
  <!--Script used for the TinyMCE CDN -->
  <script src='https://cloud.tinymce.com/5/tinymce.min.js?apiKey=your_API_key'></script>
  
  <!--Script used to apply the TinyMCE into our WYSIWYG Editor with all of our needed plugins-->
  <script>
  tinymce.init({
    selector: '#mytextarea',
    plugins: 'link image table',
    menubar: 'insert table',
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image table tabledelete | tableprops tablerowprops tablecellprops"
  });
  </script>
	
	
</head>
<body>
	<div class="container-fluid">
		
	<div id="header" class="jumbotron text-center">
        <!-- <h1>Autismus-Welt</h1>
        <p class="lead text-info">Here is the Jumbotron</p> -->
    </div>
 
	 <form method="post">
    <textarea id="mytextarea">Hello, World!</textarea>
  </form>
  </div>
</body>
</html>