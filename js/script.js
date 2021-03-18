$(document).ready(function() {

  // var listaSpesa = [
  //   "Latte",
  //   "Cereali",
  //   "Birra",
  //   "Pane",
  // ];


  var listaSpesa = [];

  // Al click del bottone l'utente può inserire articoli nella lista della spesa
  $("button").click(
    function() {

      var num = parseInt(prompt("Quanti articoli vuoi inserire?"));

      for (var i = 1; i <= num; i++) {
        var articolo = prompt("Aggiungi il " + i + "° articolo:");
        listaSpesa.push(articolo);
      }

      for (var i = 0; i < listaSpesa.length; i++) {

        var template = $('.template li').clone();
        template.prepend(listaSpesa[i]);
        $('.tobuy-list').append(template);

      }

      // Svuoto la lista
      listaSpesa = [];

      // Al click della X l'utente cancella l'articolo selezionato
      $("span").click(
        function() {
          $(this).parent().remove();
        }
      );

    }
  );



  // Al click della X l'utente cancella l'articolo selezionato
  // $("span").click(
  //   function() {
  //     $(this).parent().remove();
  //   }
  // );

});
