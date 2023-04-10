$(function () {
    // ---------------------------------------------------
    // 1.	 do something good
    // ---------------------------------------------------
    $('#clickMe').click(function () {
        $(document).bind("contextmenu", function (e) {
            return false;
        });
        alert('Jquery is loaded');
    });
    // ---------------------------------------------------
    // 2.	 do a very good thing
    // ---------------------------------------------------
    $('#dblclickMe').dblclick(function () {
        $(document).keydown(function (event) {
            if (event.keyCode == 123) {
                return false;
            } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
                return false;
            }
        });
        alert('Security is enforced');
    });
    // ---------------------------------------------------
    // 3.	 event delegation
    // ---------------------------------------------------
    var total;
    var price;
    $('#products').on('click', '.product', function () {
        var productName = $(this).find('.productName').text();
        price = $(this).find('.price').text();
        var productUnits = $(this).find('.productUnits').text();
        var productImage = $(this).find('img').attr('src');
        total = price;
        $('#nameOfProduct').text(productName);
        $('#auctionPrice').text(price);
        $('#unitsOfMeasurement').text(productUnits);
        $('#prodImg').text(productImage);
        $('#totalPrice').text(total);
        $('#prodImg').attr('src', productImage);
        $('#selectedProduct').dialog("open");
	    
});

    // ---------------------------------------------------
    // Calculate quantity
    // --------------------------------------------------- 
$('#quantity').on('input', (function () {
        var quantity = $('#quantity').val();
        if (quantity >= 1) {
            total = quantity * price;
            $('#totalPrice').text(total);
        } else if (quantity <= 0) {
            $('#totalPrice').text('');
        }
    }));

    // ---------------------------------------------------
    // 4.	 dialogue box
    // ---------------------------------------------------
    $('#selectedProduct').dialog({
        autoOpen: false,
        Modal: true,
        title: "Buy Products",
    });

    $('#cancel').click(function () {
        $('#selectedProduct').dialog("close");
    });
    $('#buy').click(function () {
        $('#selectedProduct').dialog("close");


    });
});
