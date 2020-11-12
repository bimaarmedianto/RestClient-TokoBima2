
$("#detail").fadeOut();

$.ajax({
  dataType: "json",
  type: "GET",
  url: "http://batikita.herokuapp.com/index.php/batik/all",
  success: function(result){
    const batik = result.hasil;
    $.each(batik, (i, data)=>{
      // console.log(data);
      $('#content').append(`
        <div class="control-card">
          <div class="card-movie">
            <img src="`+ data.link_batik +`">
            <span>Nama Batik : `+ data.nama_batik +`</span>
            <span>Daerah Batik : `+ data.daerah_batik +`</span>
            <a href="#" id="btnDetail" data-nama="`+ data.nama_batik +`" data-min="`+ data.harga_rendah +`" data-max="`+ data.harga_tinggi +`">See Detail</a>
          </div>
        </div>
      `);
    });
  }
});

$(document).keyup(function(e) {
  if (e.key === "Escape") {
    $("#detail").fadeOut();
 }
});

$('#content').on('click', '#btnDetail', function(){
  $("#detail").empty();
  $("#detail").fadeIn();
  let nama = $(this).data('nama');
  let min = $(this).data('min');
  let max = $(this).data('max');
  let urlBatik = 'http://batikita.herokuapp.com/index.php/batik/harga/'+ nama +'/'+ min +'/'+ max;
  $.ajax({
    dataType: "json",
    type: "GET",
    url: urlBatik,
    success: function(result){
      const batik = result.hasil;
      $.each(batik, (i, data)=>{
        // console.log();
        $('#detail').append(`
          <div class="detail-card">
            <div class="detail-left">
              <img src="`+ data.link_batik +`">
              <span>Nama Batik : `+ data.nama_batik +`</span>
              <span>Daerah Batik : `+ data.daerah_batik +`</span>
              <div style="display: flex; text-align: justify;">
                <span style="width: 110px;">Makna Batik :</span>
                <span style="display: flex; flex: 1;">`+ data.makna_batik +`</span>
              </div>
              <span>Harga : `+ data.harga_rendah +` - `+ data.harga_tinggi +`</span>
            </div>
            <button id="btnCloseDetail">X</button>
          </div>
        `);
      });
    }
  });
});
$('#detail').on('click', '#btnCloseDetail', ()=>{
  $("#detail").fadeOut();
});
$.ajax({
  dataType: "json",
  type: "GET",
  url: "http://batikita.herokuapp.com/index.php/batik/popular",
  success: function(result){
    const batik = result.hasil;
    $.each(batik, (i, data)=>{
      // console.log(data);
      $('#populer').append(`
        <div class="control-card">
          <div class="card-movie">
            <img src="`+ data.link_batik +`">
            <span>Nama Batik : `+ data.nama_batik +`</span>
            <span>Daerah Batik : `+ data.daerah_batik +`</span>
            <span>Harga Rendah : `+ data.harga_rendah +`</span>
            <span>Harga Tinggi : `+ data.harga_tinggi +`</span>
          </div>
        </div>
      `);
    });
  }
});