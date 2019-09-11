function mesi() {
  var months = moment.months();
  console.log(months);
  return months;
}







function init() {
    moment.locale('it');
    getData();
}

$(document).ready(init);

function getData() {

  $.ajax({
    url: 'fulldb.php',
    method: 'GET',
    success: function(data) {
      console.log(data);
      var tempo = mesi();
      createMonthch(data);

    },
    error: function() {
      alert("errore");
    }

  })
}
function createMonthch(dataset) {
  var ctx = document.getElementById('monthly-sales').getContext('2d');

  var chart = new Chart(ctx, {
    type: line,
    data: {
      labels: moment.months(),
      dataset: [{
        label: 'vendite mensili',
        backgroundColor: 'rgb(105, 150, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: dataset.data
      }]
    }
  })
}
