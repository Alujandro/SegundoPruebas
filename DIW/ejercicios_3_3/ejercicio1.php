<!DOCTYPE html>
<html>
  <head>
  <title>Aplicaci�n de estilos CSS</title>
  <style>
	* { font-family: Verdana, Arial, sans-serif; }
    table, td, th { border: solid 1px black; }
  th {
    color: white;
    background-color: #663333;
  }
  table tr td:nth-child(2) {
    color: red;
}
  tr:nth-child(6n+2) {
    background-color: #FFCCCC;
  }
  tr:nth-child(6n+3) {
    background-color: #FFCCCC;
  }
  tr:nth-child(6n+4) {
    background-color: #FFCCCC;
  }
  tr:nth-child(6n+5) {
    background-color: #FFFFCC;
  }
  tr:nth-child(6n+6) {
    background-color: #CCFFCC;
  }
  tr:nth-child(6n+7) {
    background-color: #CCFFFF;
  }
 
  </style>
</head>
<body>
   <table>
    <?php
  $ncols   = 5;
  $nrows   = 23;
  $comment = 'Celda = ';
  $nr = 0;
 
  for ($r=0; $r < $nrows; $r++) {
    $nr++;
    print("<tr>\n");
    for ($c=0; $c < $ncols; $c++) {
      if ($r == 0) {
         $cell = 'th';
         $text = sprintf("Columna %d", $c);
      } else {
         $cell = 'td';
         $text = sprintf("%s [%d, %d]", $comment, $r, $c);
     }
      printf("<%s>%s</%s>\n", $cell, $text, $cell);
    }
    print("</tr>\n");
  }
?>
</table>
</body>
</html>
