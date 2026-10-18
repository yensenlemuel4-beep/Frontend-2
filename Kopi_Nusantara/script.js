$(document).ready(function() {

    $('.btn-like').click(function() {
        var like = $(this).find('.like-count');
        var jumlahLike = parseInt(like.text());
        jumlahLike = jumlahLike + 1;
        like.text(jumlahLike);

        $(this).animate({ fontSize: '0.95rem' }, 100).animate({ fontSize: '0.85rem' }, 100);
    });

    function hitungTotal() {
        var harga = parseInt($('#pilihan-menu').val());
        if (isNaN(harga)) { harga = 0; }

        var jumlah = $('#jumlah-pesanan').val();
        jumlah = parseInt(jumlah);
        if (jumlah < 1 || isNaN(jumlah)) { jumlah = 1; }

        var total = harga * jumlah;
        var totalString = total.toString();
        var hasil = '';x
        var hitung = 0;

        for (var i = totalString.length - 1; i >= 0; i--) {
            hasil = totalString[i] + hasil;
            hitung++;
            if (hitung % 3 == 0 && i != 0) {
                hasil = '.' + hasil;
            }
        }

        $('#total-harga').text('Rp ' + hasil);
    }

    $('#pilihan-menu').change(function() {
        hitungTotal();
    });

    $('#jumlah-pesanan').keyup(function() {
        hitungTotal();
    });

});