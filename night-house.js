/* Original digital dry-pastel facade study. Marks follow the drawn forms; no image generation or imported pixels. */
async function mountNightHouse(canvas){
await document.fonts.ready;
if(!canvas.isConnected)return;
canvas.width=1920;canvas.height=2400;const c=canvas.getContext('2d');c.scale(2,2);c.translate(-160,-100);
const windows=[];
let state=981230;const rnd=()=>{state^=state<<13;state^=state>>>17;state^=state<<5;return(state>>>0)/4294967296;};const between=(a,b)=>a+(b-a)*rnd();
const paper='#101d36',chalk='#e0ddc9',ink='#242d38',lapis='#5a6d9c',rust='#b67159';
c.fillStyle=paper;c.fillRect(0,0,1280,1440);
function path(p){c.beginPath();p.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));}
function dust(points,col,width,opacity=.65,density=.55){
 c.save();c.strokeStyle=col;c.lineCap='round';c.lineJoin='round';c.globalAlpha=opacity*(width>20?.8:.12);c.lineWidth=width*.82;path(points);c.stroke();
 c.fillStyle=col;
 for(let seg=0;seg<points.length-1;seg++){const [ax,ay]=points[seg],[bx,by]=points[seg+1],len=Math.hypot(bx-ax,by-ay),nx=-(by-ay)/len,ny=(bx-ax)/len,tx=(bx-ax)/len,ty=(by-ay)/len;
 for(let along=0;along<len;along+=1.8){const t=along/len,pressure=.64+.24*Math.sin(along*.023+seg*2),samples=Math.max(3,width*density);for(let j=0;j<samples;j++){const off=(rnd()-.5)*width;if(rnd()>.78-Math.abs(off)/width*.36)continue;const x=ax+tx*along+nx*off+between(-.6,.6),y=ay+ty*along+ny*off+between(-.6,.6),size=between(.25,1.3);c.globalAlpha=opacity*pressure*between(.17,.66);c.fillRect(x,y,size*between(1.2,3.8),size);}}
 }
 c.restore();
}
function line(p,col=ink,width=2,opacity=.85){dust(p,col,width,opacity,1.8);c.save();c.strokeStyle=col;c.lineWidth=width*.27;c.globalAlpha=opacity*.26;c.lineCap='round';path(p);c.stroke();c.restore();}
function polygon(p,col,light,spacing=23){
 c.save();path(p);c.closePath();c.clip();c.fillStyle=col;c.globalAlpha=.9;c.fillRect(0,0,1280,1440);c.globalAlpha=1;
 const minx=Math.min(...p.map(v=>v[0])),maxx=Math.max(...p.map(v=>v[0])),miny=Math.min(...p.map(v=>v[1])),maxy=Math.max(...p.map(v=>v[1]));
 for(let x=minx-30;x<maxx+30;x+=spacing){let yy=miny+between(-20,20);dust([[x+between(-8,8),yy],[x+between(-8,8),miny+(maxy-miny)*.45],[x+between(-15,15),maxy+20]],rnd()>.28?col:light,between(spacing*.9,spacing*1.7),between(.42,.85),.45);}
 c.restore();
}
function rubbed(p,col,width,opacity=.6){dust(p,col,width,opacity,.82);dust(p.map(([x,y])=>[x+2,y-3]),col,width*.56,opacity*.6,.65);}
// Paper tooth is subdued and does not supply the drawing's form.
c.fillStyle='#d6d6ca';for(let i=0;i<10500;i++){c.globalAlpha=between(.012,.047);c.fillRect(rnd()*1280,rnd()*1440,between(.4,1.4),between(.25,.7));}c.globalAlpha=1;
// A single facade, deliberately out of square.
const face=[[219,294],[1049,307],[1064,1245],[201,1232]],side=[[1020,310],[1063,300],[1091,1226],[1064,1245]];
polygon(side,'#263c59','#3a5272',17);polygon(face,'#4c6b89','#688498',28);
c.save();path(face);c.closePath();c.clip();
rubbed([[281,335],[259,522],[315,713],[274,934],[303,1212]],'#b05f64',119,.92);
rubbed([[702,317],[610,513],[711,710],[624,934],[673,1254]],'#244b9b',154,1);
rubbed([[1044,749],[915,864],[954,1019],[838,1241]],'#604f89',143,.94);
rubbed([[400,364],[422,572],[386,775],[439,1008],[410,1233]],'#8d9a91',51,.5);
// Dry counter-marks and rubbed-out passages follow the broad pigment strokes.
for(let i=0;i<26;i++){let x=between(235,1037),y=between(360,1210);dust([[x,y],[x+between(20,95),y+between(-8,5)]],rnd()>.5?'#8c9d9d':'#4a6787',between(3,12),.25,.5);}
c.restore();
// Stepped roof, oxide pigment and a slanted chimney.
const roof=[[203,299],[246,252],[300,251],[315,201],[404,205],[418,157],[551,154],[587,115],[645,121],[668,163],[814,166],[832,208],[930,206],[978,259],[1031,267],[1064,311]];
polygon(roof,'#503b72','#825174',17);
c.save();path(roof);c.closePath();c.clip();
rubbed([[250,289],[430,245],[610,260],[837,285],[1041,300]],'#a25d60',48,.9);
rubbed([[355,218],[531,198],[714,208],[919,245]],'#3c3d77',54,.94);
for(let i=0;i<18;i++){let x=between(235,1045);dust([[x,140],[x+between(-8,8),307]],i%3?'#675076':'#bb7768',between(8,19),.45,.7);}
c.restore();
polygon([[853,203],[846,125],[879,119],[890,207]],'#696268','#a98577',9);line([[842,127],[885,118]],ink,7);line([[854,127],[861,198]],'#ccc2ad',2,.65);
line(roof,ink,5,.9);line([[207,303],[477,310],[738,314],[1061,316]],chalk,8,.7);line([[217,320],[446,328],[719,325],[1049,332]],ink,2,.58);
line([[433,205],[547,195],[545,270],[431,268]],'#b0a9a6',3,.55);line([[712,208],[817,217],[827,280]],'#474c62',4,.65);
for(let row=0;row<3;row++)line([[320,239+row*17],[489,225+row*19],[746,245+row*16],[915,265+row*14]],'#b0978b',1.2,.32);
// A single light garland is fixed to two hooks below the eaves, clear of every window.
const garland=[];for(let i=0;i<=30;i++){const t=i/30;garland.push([252+t*764,344+34*Math.sin(t*Math.PI)]);}
line([[252,330],[252,344]],'#d9d0b9',2.5,.9);line([[1016,330],[1016,344]],'#d9d0b9',2.5,.9);
line(garland,'#a8b6a6',3,.95);
for(let i=1;i<15;i++){const t=i/15,x=252+t*764,y=344+34*Math.sin(t*Math.PI);line([[x,y],[x+1,y+9]],'#a8b6a6',1.5,.9);c.save();c.fillStyle='#f6dfaa';c.shadowColor='#ffe3aa';c.shadowBlur=10;c.beginPath();c.ellipse(x+1,y+12,2.7,4,0,0,Math.PI*2);c.fill();c.restore();}
// Ground and fine structural lines remain incomplete rather than outlining every patch.
line([[218,323],[211,575],[216,815],[201,1234]],ink,4,.65);line([[1050,338],[1058,791],[1064,1245]],ink,5,.55);
for(let y of [548,762,976])line([[232,y],[420,y+4],[678,y-5],[1035,y+8]],'#4b5260',1.4,.36);
// The title belongs above the house; the plaster stays free of lettering.
const numbers=[[7,1,15,3,21,9],[11,19,4,17,6,23],[20,8,16,10,13,22],[12,5,2,14,18,24]],xs=[290,419,550,687,822,951],ys=[412,612,817,1022];
function window(x,y,w,h,num,index){
 const angle=between(-.035,.035);windows.push({x,y,w,h,num,angle});
 c.save();c.translate(x,y);c.rotate(angle);
 const opening=[[-w*.5,0],[w*.48,between(-3,2)],[w*.52,h],[-w*.49,h+between(-3,3)]];
 const lit=[5,9,17].includes(num);
 if(lit){c.save();const glow=c.createRadialGradient(0,h*.5,8,0,h*.5,110);glow.addColorStop(0,'#f0c88718');glow.addColorStop(1,'#ffce7900');c.fillStyle=glow;c.fillRect(-130,-90,260,h+180);c.restore();}
 polygon(opening,'#14253e','#253652',11);
 // Different shutter positions and pigment histories, without revealing artists.
 let cols=['#34578b','#7f4f59','#4a4c6b','#3d635f','#293e62','#655872'],col=cols[index%cols.length];
 if(lit){
  dust([[-w*.43,-1],[0,-2],[w*.43,0]],'#e5ba7a',3,.65,.8);
  dust([[-w*.44,h-1],[0,h],[w*.42,h-2]],'#e5ba7a',3,.55,.8);
 }
 // Some stone surrounds are interrupted; the charcoal construction is still visible.
 line([[-w*.6,h+3],[-w*.57,-7],[w*.52,-9],[w*.6,h+2]],chalk,6,.7);
 if(index%3===0)line([[-w*.62,-5],[-w*.3,-24],[w*.2,-22],[w*.6,-7]],'#4e5864',3,.7);
 else if(index%3===1)line([[-w*.59,-10],[w*.6,-14]],'#c2bfa9',7,.75);
 else line([[-w*.64,-6],[w*.48,-2]],ink,2,.8);
 line([[-w*.6,h+7],[w*.64,h+5]],ink,4,.82);line([[-w*.7,h+12],[w*.7,h+13]],chalk,4,.63);
 if(index%4===0){for(let q=-2;q<=2;q++)line([[q*w*.21,h-7],[q*w*.21+2,h+15]],ink,1.6,.7);line([[-w*.69,h-5],[w*.7,h-6]],ink,2,.75);}
 for(let q=0;q<3;q++)dust([[-w*.68+q*6,h+8-q],[0,h+6-q],[w*.65-q*8,h+10-q]],'#e1e7df',between(4,8),.9,.8);
 // A rubbed charcoal number remains consistent and readable, without a neat card.
 c.restore();
}
for(let row=0;row<4;row++)for(let col=0;col<6;col++){let index=row*6+col;window(xs[col]+between(-15,15),ys[row]+between(-12,12),between(70,85),between(87,109),numbers[row][col],index);}
// Coral entrance: the single paper star is suspended from a visible wall hook.
c.save();const doorGlow=c.createRadialGradient(635,1195,5,635,1195,115);doorGlow.addColorStop(0,'#ffd18b55');doorGlow.addColorStop(1,'#ffd18b00');c.fillStyle=doorGlow;c.fillRect(510,1080,250,250);c.restore();
polygon([[596,1241],[598,1206],[618,1189],[653,1191],[676,1211],[678,1243]],'#d25c58','#ed8870',10);
line([[635,1198],[636,1243]],'#8a3b47',3,.9);line([[655,1211],[656,1217]],'#ffdf9c',4,1);
line([[631,1131],[635,1134],[635,1147]],'#e2d7b9',2.5,1);
c.save();c.shadowColor='#ffd98f';c.shadowBlur=24;c.fillStyle='#ffe3a0';
const star=[];for(let i=0;i<10;i++){const angle=-Math.PI/2+i*Math.PI/5,r=i%2?7:17;star.push([635+Math.cos(angle)*r,1165+Math.sin(angle)*r]);}path(star);c.closePath();c.fill();c.restore();
for(let i=0;i<5;i++)line([[635,1165],star[i*2]],'#d7a766',1.5,.75);
line([[594,1245],[681,1249]],'#ece8dc',7,1);
// Snow sits on architectural edges, with gaps and clumps rather than uniform icing.
for(const segment of [[[248,251],[297,251]],[[319,201],[400,205]],[[422,156],[548,154]],[[589,116],[643,122]],[[671,164],[812,168]],[[837,209],[927,207]],[[980,260],[1029,268]]]){dust(segment,'#e4e9e4',9,.95,1);}
for(let i=0;i<12;i++){let x=215+i*70;dust([[x,307],[x+between(24,53),309]],'#dce5e3',between(4,9),.8,.8);}
line([[163,1248],[338,1255],[615,1252],[900,1264],[1112,1255]],'#dce5e5',13,.9);
rubbed([[235,1276],[589,1286],[1010,1280]],'#a4bbc6',23,.35);
// Sparse pinpoints stay secondary to the lit rooms.
for(let i=0;i<32;i++){const x=between(70,1200),y=between(20,285);if(x>190&&x<1100&&y>100)continue;c.fillStyle='#e1e4d6';c.globalAlpha=between(.25,.7);c.fillRect(x,y,between(1,2),between(1,2));}c.globalAlpha=1;
const house=canvas.closest('.night-house');
for(const w of windows){const link=house.querySelector(`[data-day="${w.num}"]`);if(!link)continue;link.style.cssText=`left:${(w.x-w.w/2-160)/960*100}%;top:${(w.y-100)/1200*100}%;width:${w.w/960*100}%;height:${(w.h+58)/1200*100}%;--aperture:${w.h/(w.h+58)*100}%;--tilt:${w.angle}rad`;}
house.classList.add('painted');
}
