document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function(item) {
        const content = item.querySelector('.item-content');
        const details = item.querySelector('.details');
        
        content.addEventListener('click', function() {
            details.classList.toggle('active');
        });
    });
});

