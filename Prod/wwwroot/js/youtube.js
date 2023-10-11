var player
function onYouTubeIframeAPIReady() {

    //player = new YT.Player('player', {
    //    videoId: 'WUQqSJW_gYQ', // YT video source
    //    playerVars: {
    //        'playsinline': 1
    //    },
    //    events: {
    //        'onReady': onPlayerReady,
    //        'onStateChange': onPlayerStateChange
    //    }
    //})

    const videoModals = document.querySelectorAll('.video-modal');

    if (videoModals) {
        videoModals.forEach((element) => {
            initVideo(element);
        });
    }
}

function initPlayer(element) {
    var playerElement = element.querySelector("#player");

    if (playerElement) {
        var videoId = playerElement.dataset.videoid;

        player = new YT.Player('player', {
            videoId: videoId,
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

function onPlayerReady(event) {
    event.target.playVideo() // autostart
}

function onPlayerStateChange(event) {
    // do other custom stuff here by watching the YT.PlayerState
}

function loadYouTubeVideo() {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

}

var myModalEl = document.getElementById('link-list-popup-1')

if (myModalEl) {
    myModalEl.addEventListener('show.bs.modal', function (event) {
        // dynamically create video when modal is opened
        loadYouTubeVideo()
    })
}


// optional hooks for controls outside YT
var playBtn = document.getElementById('playBtn')
var pauseBtn = document.getElementById('pauseBtn')

if (playBtn) {
    playBtn.addEventListener('click', function (event) {
        console.log('play')
        player.playVideo()
    });
}

if (pauseBtn) {
    pauseBtn.addEventListener('click', function (event) {
        console.log('pause')
        player.pauseVideo()
    })
}

function initVideo(element) {
    if (element) {
        element.addEventListener('shown.bs.modal', function () {
            initPlayer(element);
        });
    }
}