
$('button[type="submit"]').on('click', function(e) {
    e.preventDefault();
    const item = $('#shopping-list-entry').val();
    const container = $('.shopping-list > li:first').clone(true);
    $('.shopping-list').append(container);
});

$('button[class="shopping-item-delete"]').on('click', function(e) {
    $(this).closest('li').remove();
});

$('button[class="shopping-item-toggle"]').on('click', function(e) {
    $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked')
})
