$('.shopping-item-controls').on('click', '.shopping-item-delete', function(e) {
    $(this).closest('li').remove();
});

$('button[class="shopping-item-toggle"]').on('click', function(e) {
    $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked')
})


$('button[type="submit"]').on('click', function(e) {
    e.preventDefault();
    const item = $('#shopping-list-entry').val();
    $('ul').append('<li><span class="shopping-item">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button>  <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    $('#shopping-list-entry').val('');
});

// $('.shopping-item-controls').on('click', '.shopping-item-delete', function(e) {
//     $(this).closest('li').remove();
// });

// $('button[class="shopping-item-toggle"]').on('click', function(e) {
//     $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked')
// })

