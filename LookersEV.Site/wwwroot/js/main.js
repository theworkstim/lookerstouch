const buttonContainer = document.getElementById('link-list-items');
const nextButton = document.getElementById('next-list');
const prevButton = document.getElementById('prev-list');

if (buttonContainer) {
    const buttonsPerPage = 5;
    let currentSetStartIndex = 0;

    function showButtons(startIndex) {
        for (let i = 0; i < buttonContainer.children.length; i++) {
            const button = buttonContainer.children[i];
            if (i >= startIndex && i < startIndex + buttonsPerPage) {
                button.style.display = 'inline-block';
            } else {
                button.style.display = 'none';
            }
        }
    }

    function updateNavigationButtons() {
        const totalButtons = buttonContainer.children.length;

        if (totalButtons <= buttonsPerPage) {
            nextButton.style.display = 'none';
            prevButton.style.display = 'none';
            return;
        }

        if (currentSetStartIndex === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'inline-block';
        }

        if (currentSetStartIndex + buttonsPerPage >= totalButtons) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'inline-block';
        }
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentSetStartIndex += buttonsPerPage;
            showButtons(currentSetStartIndex);
            updateNavigationButtons();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentSetStartIndex -= buttonsPerPage;
            showButtons(currentSetStartIndex);
            updateNavigationButtons();
        });
    }

    // Initially show the first set of buttons
    showButtons(currentSetStartIndex);
    updateNavigationButtons();
}

const mainImage = document.querySelector('#main-image');
const mainButton = document.querySelector('#main-btn');

if (mainImage) {
    gsap.fromTo(
        mainImage,
        { opacity: 0, y: -48 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    );
}

if (mainButton) {
    gsap.fromTo(
        mainButton,
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    );
}