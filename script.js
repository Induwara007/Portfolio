/* LOADER */
window.onload=()=>document.getElementById("loader").style.display="none";

/* CURSOR */
const cur=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
cur.style.left=e.clientX+"px";
cur.style.top=e.clientY+"px";
});

/* THEME */
function toggleTheme(){
document.body.classList.toggle("light");
localStorage.theme=document.body.className;
}
if(localStorage.theme)document.body.className=localStorage.theme;

/* TYPING */
const words=["Induwara Bodhigamage","Photographer","Gamer"," Content Creator","Frontend Developer"];
let i=0,j=0,del=false;
setInterval(()=>{
const w=words[i];
document.querySelector(".typing").textContent=w.slice(0,del?--j:++j);
if(j===w.length+5)del=true;
if(j===0){del=false;i=(i+1)%words.length}
},120);

/* REVEAL + SKILLS */
const io=new IntersectionObserver(e=>{
e.forEach(x=>{
if(x.isIntersecting){
x.target.classList.add("show");
x.target.querySelectorAll(".fill").forEach(f=>f.style.width=f.dataset+"%");
}
});
});
document.querySelectorAll(".reveal").forEach(r=>io.observe(r));

/* PARTICLES */
const c=document.getElementById("bg"),ctx=c.getContext("2d");
let w=innerWidth,h=innerHeight;c.width=w;c.height=h;
let p=Array.from({length:80},()=>({x:Math.random()*w,y:Math.random()*h,vx:Math.random()-.5,vy:Math.random()-.5}));
(function anim(){
ctx.clearRect(0,0,w,h);
p.forEach(a=>{
a.x+=a.vx;a.y+=a.vy;
if(a.x<0||a.x>w)a.vx*=-1;
if(a.y<0||a.y>h)a.vy*=-1;
ctx.fillStyle="#38bdf8";ctx.fillRect(a.x,a.y,2,2);
});
requestAnimationFrame(anim);
})();

/* SCROLL TOP */
window.onscroll=()=>topBtn.style.display=scrollY>500?"block":"none";
function scrollToTop(){scrollTo({top:0,behavior:"smooth"})}
</script>
<script>
/* Chatbot toggle */
function toggleChat(){
 const c=document.getElementById('chatbot')
 c.style.display=c.style.display==='flex'?'none':'flex'
}
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
