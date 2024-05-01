
document.addEventListener('DOMContentLoaded', function() {
    const specifications = document.querySelectorAll('.specification');

    specifications.forEach(spec => {
        spec.addEventListener('click', () => {
            const details = spec.querySelector('.details');
            if (details.style.display === 'block') {
                details.style.display = 'none';
            } else {
                details.style.display = 'block';
            }
        });
    });
});


