const shoppingContainer = '<li>' +
                            '<span class="shopping-item"></span>' +
                            '<div class="shopping-item-controls">' +
                                '<button class="shopping-item-toggle">' +
                                    '<span class="button-label">check</span>' +
                                '</button>' +
                                '<button class="shopping-item-delete">' +
                                    '<span class="button-label">delete</span>' +
                                '</button>' +
                            '</div>' +
                          '</li>'

$('button[type="submit"]').on('click', function(e) {
    e.preventDefault();
    const item = $('#shopping-list-entry').val();
    $('.shopping-list').append(shoppingContainer);
})