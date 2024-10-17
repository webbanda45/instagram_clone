// Story system
const stories = document.querySelectorAll('.story');
const storyViewer = document.getElementById('storyViewer');
const fullscreenImage = document.getElementById('fullscreenImage');
const progressBar = document.getElementById('progress');
const closeButton = document.getElementById('closeButton');
const uploadStory = document.getElementById('uploadStory');
const userStoryImg = document.getElementById('userStoryImg');

// Check localStorage for user's story and display it
const savedUserStory = localStorage.getItem('userStory');
if (savedUserStory) {
    userStoryImg.src = savedUserStory; // Load the user's story from localStorage
    uploadStory.disabled = true; // Disable the upload if a story is already saved
    document.querySelector('.upload-label').style.display = 'none'; // Hide the upload label
}

function showStory(index) {
    const storyImage = stories[index].querySelector('img').src;
    fullscreenImage.src = storyImage;
    storyViewer.classList.remove('hidden');
    startStoryTimer();
    startProgressBar();
}

function startStoryTimer() {
    clearTimeout(storyTimeout);
    storyTimeout = setTimeout(() => {
        closeStoryViewer();
    }, 5000); // Close story after 10 seconds
}

function closeStoryViewer() {
    storyViewer.classList.add('hidden');
    clearTimeout(storyTimeout);
    resetProgressBar();
}

function startProgressBar() {
    progressBar.style.width = '0%';
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 5000);
}

function resetProgressBar() {
    progressBar.style.width = '0%';
}

stories.forEach((story, index) => {
    story.addEventListener('click', () => showStory(index));
});

closeButton.addEventListener('click', closeStoryViewer);

// Handle Story Upload
uploadStory.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const storyUrl = e.target.result;
            userStoryImg.src = storyUrl; // Set uploaded image to user's story
            localStorage.setItem('userStory', storyUrl); // Save the story in localStorage

            // Disable further uploads
            uploadStory.disabled = true;
            document.querySelector('.upload-label').style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

// Tab Switching System

// icons 
const homeIcon = document.getElementById('homeIcon');
const searchIcon = document.getElementById('searchIcon');
const reelIcon = document.getElementById('reelIcon');
const profileIcon = document.getElementById('profileIcon');

// tabsicons
const homeTab = document.getElementById('homeTab');
const searchTab = document.getElementById('searchTab');
const reelTab = document.getElementById('reelTab');
const profiletab = document.getElementById('profileTab');


const iconContainer = document.querySelector('footer');

// tabs
homeTab.style.display = 'block';
searchTab.style.display = 'none';
reelTab.style.display = 'none';
profiletab.style.display = 'none';
homeIcon.style.transform = 'scale(1.3)';
homeIcon.style.color = 'rgb(252, 90, 90)';

// after select 
// rgb(252, 90, 90)
// transform: scale(1.2);

homeIcon.addEventListener('click', () => {
    // switching tabs
    homeTab.style.display = 'block';
    searchTab.style.display = 'none';
    reelTab.style.display = 'none';
    profiletab.style.display = 'none';

    // effect 
    homeIcon.style.transform = 'scale(1.3)';
    homeIcon.style.color = 'rgb(252, 90, 90)';
    searchIcon.style.transform = 'none';
    searchIcon.style.color = 'white';
    reelIcon.style.transform = 'none';
    reelIcon.style.color = 'white';
    profileIcon.style.transform = 'none';
    profileIcon.style.color = 'white';
});

searchIcon.addEventListener('click', () => {
    // switching tabs
    searchTab.style.display = 'block';
    homeTab.style.display = 'none';
    reelTab.style.display = 'none';
    profiletab.style.display = 'none';

    // effect 
    homeIcon.style.transform = 'none';
    homeIcon.style.color = 'white';
    searchIcon.style.transform = 'scale(1.3)';
    searchIcon.style.color = 'rgb(252, 90, 90)';
    reelIcon.style.transform = 'none';
    reelIcon.style.color = 'white';
    profileIcon.style.transform = 'none';
    profileIcon.style.color = 'white';
});

reelIcon.addEventListener('click', () => {
    // switching tabs
    reelTab.style.display = 'block';
    homeTab.style.display = 'none';
    searchTab.style.display = 'none';
    profiletab.style.display = 'none';

    // effect 
    homeIcon.style.transform = 'none';
    homeIcon.style.color = 'white';
    searchIcon.style.transform = 'none';
    searchIcon.style.color = 'white';
    reelIcon.style.transform = 'scale(1.3)';
    reelIcon.style.color = 'rgb(252, 90, 90)';
    profileIcon.style.transform = 'none';
    profileIcon.style.color = 'white';
});

profileIcon.addEventListener('click', () => {
    // switching tabs
    homeTab.style.display = 'none';
    searchTab.style.display = 'none';
    reelTab.style.display = 'none';
    profiletab.style.display = 'block';

    // effect     
    homeIcon.style.transform = 'none';
    homeIcon.style.color = 'white';
    searchIcon.style.transform = 'none';
    searchIcon.style.color = 'white';
    reelIcon.style.transform = 'none';
    reelIcon.style.color = 'white';
    profileIcon.style.transform = 'scale(1.3)';
    profileIcon.style.color = 'rgb(252, 90, 90)';
});

