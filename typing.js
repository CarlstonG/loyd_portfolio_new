document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text');
    const textToType = "Graphics Artist";

    function typeText() {
        for (let i = 0; i < textToType.length; i++) {
            setTimeout(() => {
                textElement.textContent += textToType[i];
                if (i === textToType.length - 1) {
                    textElement.classList.remove('typing-animation');
                    setTimeout(() => {
                        textElement.textContent = '';
                        textElement.classList.add('typing-animation');
                        
                        // After resetting, start typing the next set of text
                        typeText();
                    }, 1000);
                }
            }, i * 100); // adjust the typing speed
        }
    }

    typeText();
});