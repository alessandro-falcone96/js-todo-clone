$(document).ready(function() {

  // Al click del bottone l'utente può inserire articoli nella lista della spesa
  $("button").click(
    function() {

      var listaSpesa = [];
      var num = parseInt(prompt("Quanti articoli vuoi inserire?"));

      for (var i = 1; i <= num; i++) {
        var articolo = prompt("Aggiungi il " + i + "° articolo:");
        listaSpesa.push(articolo);
      }

      for (var j = 0; j < listaSpesa.length; j++) {

        var template = $('.template li').clone();
        template.prepend(listaSpesa[j]);
        $('.tobuy-list').append(template);

      }

    }
  );

  // Al click della X l'utente cancella l'articolo selezionato
  $(document).on('click', 'span', function() {
    $(this).parent().remove();
  });

});
