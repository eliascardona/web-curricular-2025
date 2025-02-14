var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerInfoList = 
[
	{id:'player',height:'390',width:'640',videoId:'QkWOaqGn9Vg'},
	{id:'player1',height:'390',width:'640',videoId:'oP5472drWiI'}
];

function onYouTubeIframeAPIReady() {
	if(typeof playerInfoList === 'undefined') {
	return;
	}

	for(var i = 0; i < playerInfoList.length;i++) {
		var curplayer = createPlayer(playerInfoList[i]);
	}   
}


function createPlayer(playerInfo) {
	return new YT.Player(playerInfo.id, {
		height: playerInfo.height,
		width: playerInfo.width,
		videoId: playerInfo.videoId
	});
}
