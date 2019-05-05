<nav class="navbar navbar-expand-sm bg-custom sticky-top">
  <!-- Brand -->
 <a href="index.php"><img src="img/logo_landscape.png" width="100px" height="30px" alt="logo"/></a>

  <!-- Links -->
  <ul class="navbar-nav d-flex justify-content-space-around ">
    <li class="nav-item">
      <a class="nav-link" href="page.php"><i id="home" class="fas fa-puzzle-piece"> Home</a></i>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="page.php"><i id="uns" class="fas fa-puzzle-piece">Über Uns</a></i>
    </li>

    <!-- Dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"><i id="aut" class="fas fa-puzzle-piece">
        Autismus
      </a></i>
      <div class="dropdown-menu">
        <a class="dropdown-item" id="ass" href="page.php">WAS IST ASS</a>
        <a class="dropdown-item" id="symptome" href="page.php">SYMPTOME- FRÜHERKENNUNG </a>
        <a class="dropdown-item" id="erfahrungen" href="page.php">ERFAHRUNGSBERICHTE</a>
        <a class="dropdown-item" id="bekannte_autisten" href="page.php">BEKANNTE AUTISTEN </a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"><i id="#" class="fas fa-puzzle-piece">Rechtliches
      </a></i>
      <div class="dropdown-menu">
        <a class="dropdown-item" id="familienbeihilfe" href="page.php">FAMILIENBEIHILFE</a>
        <a class="dropdown-item" id="behindertenausweis" href="page.php">BEHINDERTENAUSWEIS </a>
        <a class="dropdown-item" id="pflegegeld" href="page.php">PFLEGEGELD</a>
        <a class="dropdown-item" id="finanz_mehr" href="page.php">ZUSÄTZLICHE FINANZIELLE UNTERSTÜTZUNGEN  </a>
      </div>
    </li>
    <!-- needs another 'child' -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"><i id="wohin" class="fas fa-puzzle-piece">
        Wohin Wenden
      </a></i>
    <div class="dropdown-menu">
      <a class="dropdown-item" id="aut" href="page.php">A</a>
      <a class="dropdown-item" id="ger" href="page.php">D</a>
      <a class="dropdown-item" id="ita" href="page.php">I</a>
      <a class="dropdown-item" id="che" href="page.php">CH</a>
    </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"><i id="nützliches" class="fas fa-puzzle-piece">
        Nützliches
      </a></i>
      <div class="dropdown-menu">
        <a class="dropdown-item" id="fachliteratur" href="page.php">FACHLITERATUR</a>
        <a class="dropdown-item" id="buecher" href="page.php">BÜCHER</a>
        <a class="dropdown-item" id="filme" href="page.php">FILM/SERIEN </a>
        <a class="dropdown-item" id="therapie" href="page.php">THERAPIEMATERIAL</a>
        <a class="dropdown-item" id="einkaufen" href="page.php">EINKAUFEN</a>
        <a class="dropdown-item" id="restaurants" href="page.php">RESTAURANTS</a>
        <a class="dropdown-item" id="freizeit" href="page.php">HOTELS/ URLAUB/ FREIZEIT VBNJMK,L. </a>
        <a class="dropdown-item" id="nuetzlich" href="page.php">LINKS</a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"><i id="aktuelles" class="fas fa-puzzle-piece">
        Aktuelles
      </a></i>
      <div class="dropdown-menu">
        <a class="dropdown-item" id="veranstaltungen" href="page.php">VERANSTALTUNGEN</a>
        <a class="dropdown-item" id="news" href="page.php">NEWS</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="page.php"><i id="forum" class="fas fa-puzzle-piece">Forum</a></i>
    </li>
    <!-- <form class="form-inline float-xs-left">
            <input class="form-control mr-xs-1" type="text" placeholder="Search" aria-label="suchen">
            <button class="btn btn-outline-secondary my-1 my-xs-0 xs" type="submit"><i class="fas fa-search"><a href="login.php"></button></a></i>
    </form><br> -->
    <!--  admin button -->
    
  </ul>

     
<?php if (isset($_SESSION['user'])){
 ?>

       <a  id="login" class="nav-link btn btn-default" href="logout.php?logout"><i class="fas fa-sign-out-alt"></i></a>
     <?php }else { ?>
    <a  id="login" class="nav-link" href="login.php"><button type="submit" name="btn-login"><i class="fas fa-user-lock"></i></button></a>
  <?php } ?>
</nav>



