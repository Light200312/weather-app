var arr=[{dp:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",story:"https://i.pinimg.com/474x/bd/8f/7c/bd8f7c3f236fb88b715bf4b93df31677.jpg"},      {dp:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',story:"https://i.pinimg.com/736x/ee/98/00/ee980070051b723bf4e4467af76f4deb.jpg"},      {dp:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',story:"https://i.pinimg.com/736x/b0/49/e8/b049e8fe7c346bc8090515a8f9132397.jpg"},{dp:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',story:"https://i.pinimg.com/474x/1d/b0/88/1db08828ae357a7a04ec2de25ed237bf.jpg"},     {dp:'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',story:"https://i.pinimg.com/474x/a9/45/42/a94542cbc72601f11c5d1be32279cdbf.jpg"},       {dp:'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',story:"https://i.pinimg.com/474x/76/79/90/767990ee8ad929a84eae2b2c9799f4de.jpg"},          {dp:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',story:"https://i.pinimg.com/474x/3f/65/b5/3f65b587fd116b022a281a52bcb7a2b7.jpg"},
{dp:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',story:"https://i.pinimg.com/474x/e8/1b/8b/e81b8b0f6402b5d3457d012297daeaf5.jpg"},
{dp:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',story:"https://i.pinimg.com/474x/18/6f/26/186f263011c7a2b9f8f9db70f1a92e81.jpg"},
{dp:'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',story:"https://i.pinimg.com/474x/20/57/2b/20572baabbf418db9cfb52c5026fdce1.jpg"}] ;

var clutter=''
arr.forEach((Element,idx)=>{
    clutter+=` <div  class="story"> <img id='${idx}' src="${Element.dp}" alt="">  </div>`
})
document.querySelector('#stories').innerHTML=clutter;

let story=document.querySelector('#stories')
story.addEventListener("click",function(dets){
   
 
    document.querySelector('#full-screen').style.display='block' ;
    // console.log(arr[dets.target.id].story);
    


    document.querySelector('#full-screen').style.backgroundImage=`url(${arr[dets.target.id].story})`;
     document.getElementById(`${dets.target.id}`).parentElement.style.border='3px solid #4f4f4f';

    setTimeout(function(){
        document.querySelector('#full-screen').style.display='none' 
         ;
         
    

    },2000)


})

// document.querySelector('#full-screen').style.display='block'

let video = document.getElementById("myVideo");

function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function stopVideo() {
    video.pause();
    video.currentTime = 0; // Reset to start
}

function muteUnmute() {
    video.muted = !video.muted;
}

document.getElementById("btn").addEventListener("click", function() {
    let img = document.getElementById("btn");
    img.src = img.src.includes("https://img.icons8.com/?size=48&id=87092&format=png") ? `https://img.icons8.com/?size=48&id=102036&format=png` :"https://img.icons8.com/?size=48&id=87092&format=png";
});





