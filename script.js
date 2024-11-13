// Get the button elements
const dependenciesBtn = document.getElementById('dependencies-btn');
const featuresBtn = document.getElementById('features-btn');
const gettingStartedBtn = document.getElementById('getting-started-btn');

// Get the content container
const contentContainer = document.getElementById('content-container');

// Fetch the content and display it
function fetchContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
}

// Add event listeners to the buttons
dependenciesBtn.addEventListener('click', () => fetchContent('dependencies.html'));
featuresBtn.addEventListener('click', () => fetchContent('features.html'));
gettingStartedBtn.addEventListener('click', () => fetchContent('getting-started.html'));