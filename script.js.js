(function(){var r=document.documentElement,t=document.getElementById('themeBtn'),k='pl-theme2',L=['fresh','cyber','red'],N={fresh:'\ud83c\udf3f Fresh',cyber:'\ud83d\udca0 Cyber',red:'\ud83d\udd25 Red'};
try{var sv=localStorage.getItem(k);if(L.indexOf(sv)>-1)r.setAttribute('data-theme',sv)}catch(e){}
function cur(){return r.getAttribute('data-theme')}
function lbl(){t.textContent='\u25d0 '+N[L[(L.indexOf(cur())+1)%3]]}lbl();
t.onclick=function(){var n=L[(L.indexOf(cur())+1)%3];r.setAttribute('data-theme',n);try{localStorage.setItem(k,n)}catch(e){}lbl()}})();
var b=document.getElementById('menuBtn'),nv=document.getElementById('nav');
b.onclick=function(){var o=nv.classList.toggle('open');b.setAttribute('aria-expanded',o)};
nv.onclick=function(e){if(e.target.tagName==='A'){nv.classList.remove('open');b.setAttribute('aria-expanded','false')}};
document.getElementById('f').onsubmit=function(ev){ev.preventDefault();
 var g=function(i){return document.getElementById(i).value};
 var body=g('m')+'\n\n— '+g('n')+' ('+g('e')+')';
 var out=document.getElementById('out');out.textContent='';
 var t=document.createElement('strong');t.textContent='✅ Thank you, '+g('n')+'! Your message is ready.';
 var pr=document.createElement('p');pr.className='note';pr.textContent='To: labasan323@gmail.com · Subject: '+(g('s')||'Portfolio message');
 var mm=document.createElement('p');mm.textContent=g('m');
 var hn=document.createElement('p');hn.className='note';hn.textContent='Your email app is opening. Press Send there to deliver it.';
 out.appendChild(t);out.appendChild(pr);out.appendChild(mm);out.appendChild(hn);out.hidden=false;
 try{out.scrollIntoView({behavior:'smooth',block:'nearest'})}catch(x){}
 location.href='mailto:labasan323@gmail.com?subject='+encodeURIComponent(g('s')||'Portfolio message')+'&body='+encodeURIComponent(body)};
(function(){var d=document,de=d.documentElement,ok=!matchMedia('(prefers-reduced-motion: reduce)').matches;
de.classList.add('js');
var fx=d.createElement('div');fx.className='fx';fx.setAttribute('aria-hidden','true');
for(var i=0;i<14;i++){var e=d.createElement('i'),s=10+Math.random()*34;if(i%3===0)e.className='r';
e.style.cssText='--x:'+(Math.random()*100)+'%;--s:'+s+'px;--t:'+(14+Math.random()*16)+'s;--dl:-'+(Math.random()*20)+'s;--dx:'+((Math.random()-.5)*160)+'px';fx.appendChild(e)}
d.body.insertBefore(fx,d.body.firstChild);
function count(el){var n=parseInt(el.textContent,10);if(isNaN(n))return;var t0=performance.now();(function f(t){var p=Math.min((t-t0)/900,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)}
var els=d.querySelectorAll('section .kicker,section h2,section .sub,section .card,section .bar,section .nums>div,section .checks,section .photo,section form,section .contact ul,section .chips li,section .time li');
if(ok&&'IntersectionObserver' in window){
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){var el=x.target;el.classList.add('in');
var bs=el.matches('.nums>div')?el.querySelectorAll('b'):el.querySelectorAll('.stat b');bs.forEach(count);io.unobserve(el)}})},{threshold:.15});
els.forEach(function(el,i){el.classList.add('rv');el.style.setProperty('--d',(i%4)*.09+'s');io.observe(el)})}
var pg=d.getElementById('prog');
addEventListener('scroll',function(){var h=de.scrollHeight-innerHeight;pg.style.width=(h>0?scrollY/h*100:0)+'%'},{passive:true});
d.addEventListener('click',function(e){if(!ok||/INPUT|TEXTAREA/.test(e.target.tagName))return;
var ch=['✦','★','♥','✨','●'];
for(var i=0;i<9;i++){var s=d.createElement('span');s.className='spark';s.textContent=ch[i%5];
var a=Math.random()*6.28,r=40+Math.random()*60;
s.style.cssText='left:'+e.clientX+'px;top:'+e.clientY+'px;--dx:'+Math.cos(a)*r+'px;--dy:'+Math.sin(a)*r+'px;--rot:'+(Math.random()*360)+'deg';
d.body.appendChild(s);setTimeout(function(x){x.remove()},950,s)}})})();
(function(){var d=document,ok=!matchMedia('(prefers-reduced-motion: reduce)').matches;if(!ok)return;
var fx=d.querySelector('.fx'),g=['✦','★','♥','✨','◆','+'];
if(fx)for(var i=0;i<12;i++){var b=d.createElement('b');b.textContent=g[i%g.length];
b.style.cssText='--x:'+(Math.random()*100)+'%;--s:'+(14+Math.random()*18)+'px;--t:'+(16+Math.random()*16)+'s;--dl:-'+(Math.random()*24)+'s;--dx:'+((Math.random()-.5)*200)+'px';fx.appendChild(b)}
var role=d.querySelector('.role');
if(role){var w=['Student Web Developer','Curious Learner','Careful Builder','Future Developer'],wi=0,ci=w[0].length,del=true;
function tick(){if(del){ci--;if(ci<=0){del=false;wi=(wi+1)%w.length;ci=0}}else{ci++;if(ci>=w[wi].length){del=true;role.textContent=w[wi];setTimeout(tick,1900);return}}
role.textContent=w[wi].slice(0,ci);setTimeout(tick,del?40:85)}
setTimeout(tick,2400)}
var last=0;addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;var n=Date.now();if(n-last<70)return;last=n;
var s=d.createElement('span');s.className='spark';s.textContent='✦';
s.style.cssText='left:'+e.clientX+'px;top:'+e.clientY+'px;font-size:12px;--dx:'+((Math.random()-.5)*30)+'px;--dy:'+(10+Math.random()*30)+'px;--rot:'+(Math.random()*180)+'deg';
d.body.appendChild(s);setTimeout(function(){s.remove()},900)},{passive:true});
var v=d.createElement('div');v.className='vibe';v.setAttribute('aria-hidden','true');d.body.appendChild(v);
var m=['✨ Keep going!','🌱 Small steps, big growth','💪 You’ve got this','😊 Thanks for visiting!'],mi=0;
function sh(){v.classList.remove('on');setTimeout(function(){v.textContent=m[mi++%m.length];v.classList.add('on')},300)}sh();setInterval(sh,5000)})();
