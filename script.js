
const ApiKey = "123456";
const baseUrl = 'http://localhost/ci-restserver-tokobima/produk?apikey='+ ApiKey;

$.ajax({
  dataType: "json",
  type: "GET",
  url: baseUrl,
  success: function(result){
    const produk = result[0].data; 
    console.log(result[0].data);
    $.each(produk, (i, data)=>{
      // console.log(data['id_produk']);
      $('#content').append(`
        <div class="control-card">
          <div class="card-produk">
            <img src="`+ data['img_produk'] +`">
            <span>Nama Produk : `+ data['nama_produk'] +`</span>
            <span>Harga Produk : `+ data['harga_produk'] +`</span>
            <span>Stok Produk : `+ data['stok_produk'] +`</span>
          </div>
        </div>
      `);
    });
  }
});