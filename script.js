function getMesi() {
  var months = moment.months();
  return months;

}



function getData() {

  $.ajax({
    url: 'api.php',
    method: 'GET',
    success: function(data) {
      console.log(data);
      console.log(typeof(data));

      createChart1(data, 'monthly-sales');

    },
    error: function() {
      alert("errore");
    }

  })
}
function createChart1(data, id) {

  var ctx = document.getElementById('monthly-sales').getContext('2d');

  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: getMesi(),
      dataset: [{
        label: 'vendite',
        backgroundColor: 'rgb(105, 150, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: data,
      }]
    }
  })
}

function init() {
    moment.locale('it');

    getData();
}

$(document).ready(init);
