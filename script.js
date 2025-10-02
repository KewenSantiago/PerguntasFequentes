document.addEventListener('DOMContentLoaded', () => {

    const questionContainers = document.querySelectorAll('.question-container');
    questionContainers.forEach(container => {
        container.addEventListener('click', () => {
            const answer = container.nextElementSibling;
            const toggleIcon = container.querySelector('.toggle-button img');
            questionContainers.forEach(otherContainer => {
                if (otherContainer !== container) {
                    const otherAnswer = otherContainer.nextElementSibling;
                    const otherIcon = otherContainer.querySelector('.toggle-button img');

                    otherAnswer.classList.remove('active');
                    otherIcon.src = '../assets/icon-plus.svg';
                    otherIcon.alt = 'Show answer';
                }
            });

            answer.classList.toggle('active');

            
            if (answer.classList.contains('active')) {
                toggleIcon.src = './assets/icon-minus.svg';
                toggleIcon.alt = 'Hide answer';
            } else {
                toggleIcon.src = './assets/icon-plus.svg';
                toggleIcon.alt = 'Show answer';
            }
        });
    });
});