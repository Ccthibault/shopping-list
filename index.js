const container = '<li>' +
                    '<span class="shopping-item">oranges</span>' +
                    '<div class="shopping-item-controls">' +
                        '<button class="shopping-item-toggle">' +
                            '<span class="button-label">check</span>' +
                        '</button> ' +
                        ' <button class="shopping-item-delete">' +
                            '<span class="button-label">delete</span>' +
                        '</button>' +
                    '</div>' +
                  '</li>';


$('button[type="submit"]').on('click', function(e) {
    e.preventDefault();
    const item = $('#shopping-list-entry').val();
    $('ul').append(container);
});

$('button[class="shopping-item-delete"]').on('click', function(e) {
    $(this).closest('li').remove();
});

$('button[class="shopping-item-toggle"]').on('click', function(e) {
    $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked')
})

