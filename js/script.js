var bpm = document.getElementById('bpm');
var h1 = document.querySelector('h1');
var play = document.getElementById('play');
var audio = document.querySelector('audio');
var isPlaying = false;
var timer = null;
var currentBpm = 40;

function tick(){
	audio.currentTime = 0;
	audio.play();
}

bpm.addEventListener('change', function(){
	h1.innerHTML = this.value + ' bpm';
	currentBpm = parseInt(this.value);
	if(isPlaying){
		clearInterval(timer);
		timer = setInterval(tick, (60*1000)/currentBpm);
	}
});

play.addEventListener('click' , function(){
	if(isPlaying){
		play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
		clearInterval(timer);
	}else{
		play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
		tick();
		timer = setInterval(tick, (60*1000)/currentBpm);
	}	
	isPlaying = !isPlaying;
});