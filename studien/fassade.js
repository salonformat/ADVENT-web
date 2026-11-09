/* Original digital dry-pastel facade study. Marks follow the drawn forms; no image generation or imported pixels. */
(async()=>{
await Promise.all([document.fonts.load('32px Della'),document.fonts.load('42px Josefin')]);
const canvas=document.getElementById('drawing'),c=canvas.getContext('2d');c.scale(2,2);
let state=981230;const rnd=()=>{state^=state<<13;state^=state>>>17;state^=state<<5;return(state>>>0)/4294967296;};const between=(a,b)=>a+(b-a)*rnd();
const paper='#253449',chalk='#e0ddc9',ink='#242d38',lapis='#5a6d9c',rust='#b67159';
c.fillStyle=paper;c.fillRect(0,0,1280,1440);
function path(p){c.beginPath();p.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));}
function dust(points,col,width,opacity=.65,density=.55){
 c.save();c.strokeStyle=col;c.lineCap='round';c.lineJoin='round';c.globalAlpha=opacity*(width>20?.48:.12);c.lineWidth=width*.82;path(points);c.stroke();
 c.fillStyle=col;
 for(let seg=0;seg<points.length-1;seg++){const [ax,ay]=points[seg],[bx,by]=points[seg+1],len=Math.hypot(bx-ax,by-ay),nx=-(by-ay)/len,ny=(bx-ax)/len,tx=(bx-ax)/len,ty=(by-ay)/len;
 for(let along=0;along<len;along+=1.8){const t=along/len,pressure=.64+.24*Math.sin(along*.023+seg*2),samples=Math.max(3,width*density);for(let j=0;j<samples;j++){const off=(rnd()-.5)*width;if(rnd()>.78-Math.abs(off)/width*.36)continue;const x=ax+tx*along+nx*off+between(-.6,.6),y=ay+ty*along+ny*off+between(-.6,.6),size=between(.25,1.3);c.globalAlpha=opacity*pressure*between(.17,.66);c.fillRect(x,y,size*between(1.2,3.8),size);}}
 }
 c.restore();
}
function line(p,col=ink,width=2,opacity=.85){dust(p,col,width,opacity,1.8);c.save();c.strokeStyle=col;c.lineWidth=width*.27;c.globalAlpha=opacity*.26;c.lineCap='round';path(p);c.stroke();c.restore();}
function polygon(p,col,light,spacing=23){
 c.save();path(p);c.closePath();c.clip();c.fillStyle=col;c.globalAlpha=.65;c.fillRect(0,0,1280,1440);c.globalAlpha=1;
 const minx=Math.min(...p.map(v=>v[0])),maxx=Math.max(...p.map(v=>v[0])),miny=Math.min(...p.map(v=>v[1])),maxy=Math.max(...p.map(v=>v[1]));
 for(let x=minx-30;x<maxx+30;x+=spacing){let yy=miny+between(-20,20);dust([[x+between(-8,8),yy],[x+between(-8,8),miny+(maxy-miny)*.45],[x+between(-15,15),maxy+20]],rnd()>.28?col:light,between(spacing*.9,spacing*1.7),between(.42,.85),.45);}
 c.restore();
}
function rubbed(p,col,width,opacity=.6){dust(p,col,width,opacity,.82);dust(p.map(([x,y])=>[x+2,y-3]),col,width*.56,opacity*.6,.65);}
// Paper tooth is subdued and does not supply the drawing's form.
c.fillStyle='#d6d6ca';for(let i=0;i<10500;i++){c.globalAlpha=between(.012,.047);c.fillRect(rnd()*1280,rnd()*1440,between(.4,1.4),between(.25,.7));}c.globalAlpha=1;
// A single facade, deliberately out of square.
const face=[[219,294],[1049,307],[1064,1245],[201,1232]],side=[[1020,310],[1063,300],[1091,1226],[1064,1245]];
polygon(side,'#617381','#a5aaa3',17);polygon(face,'#a3aa9b','#c3c1a9',28);
c.save();path(face);c.closePath();c.clip();
rubbed([[281,335],[259,522],[315,713],[274,934],[303,1212]],'#b46d58',119,.88);
rubbed([[702,317],[610,513],[711,710],[624,934],[673,1254]],'#435f9c',154,.98);
rubbed([[1044,749],[915,864],[954,1019],[838,1241]],'#706184',143,.87);
rubbed([[400,364],[422,572],[386,775],[439,1008],[410,1233]],'#cec0a0',51,.53);
// Dry counter-marks and rubbed-out passages follow the broad pigment strokes.
for(let i=0;i<26;i++){let x=between(235,1037),y=between(360,1210);dust([[x,y],[x+between(20,95),y+between(-8,5)]],rnd()>.5?'#c0c3b0':'#83939a',between(3,12),.25,.5);}
c.restore();
// Stepped roof, oxide pigment and a slanted chimney.
const roof=[[203,299],[246,252],[300,251],[315,201],[404,205],[418,157],[551,154],[587,115],[645,121],[668,163],[814,166],[832,208],[930,206],[978,259],[1031,267],[1064,311]];
polygon(roof,'#796b76','#a87c72',17);rubbed([[255,276],[432,242],[614,250],[859,275],[1025,293]],rust,31,.61);
polygon([[853,203],[846,125],[879,119],[890,207]],'#696268','#a98577',9);line([[842,127],[885,118]],ink,7);line([[854,127],[861,198]],'#ccc2ad',2,.65);
line(roof,ink,5,.9);line([[207,303],[477,310],[738,314],[1061,316]],chalk,8,.7);line([[217,320],[446,328],[719,325],[1049,332]],ink,2,.58);
line([[433,205],[547,195],[545,270],[431,268]],'#b0a9a6',3,.55);line([[712,208],[817,217],[827,280]],'#474c62',4,.65);
for(let row=0;row<3;row++)line([[320,239+row*17],[489,225+row*19],[746,245+row*16],[915,265+row*14]],'#b0978b',1.2,.32);
// Ground and fine structural lines remain incomplete rather than outlining every patch.
line([[218,323],[211,575],[216,815],[201,1234]],ink,4,.65);line([[1050,338],[1058,791],[1064,1245]],ink,5,.55);
for(let y of [548,762,976])line([[232,y],[420,y+4],[678,y-5],[1035,y+8]],'#4b5260',1.4,.36);
// House lettering, drawn into the plaster rather than held in a label box.
c.save();c.translate(634,365);c.rotate(.008);c.fillStyle='#364552';c.font='31px Della';c.textAlign='center';c.fillText('Atelier des possibles',0,0);c.restore();
const numbers=[[7,1,15,3,21,9],[11,19,4,17,6,23],[20,8,16,10,13,22],[12,5,2,14,18,24]],xs=[290,419,550,687,822,951],ys=[412,612,817,1022];
function window(x,y,w,h,num,index){
 c.save();c.translate(x,y);c.rotate(between(-.035,.035));
 const opening=[[-w*.5,0],[w*.48,between(-3,2)],[w*.52,h],[-w*.49,h+between(-3,3)]];
 polygon(opening,'#394452','#68788b',11);
 // Different shutter positions and pigment histories, without revealing artists.
 let cols=['#526b90','#945f58','#8a838c','#6c8074','#53627a','#b19c75'],col=cols[index%cols.length];
 if([5,9,24].includes(num))rubbed([[-w*.27,8],[-w*.25,h-8]],'#d6b475',w*.42,.88);
 const leftW=index%4===0?w*.21:w*.47,rightW=index%5===0?w*.22:w*.44;
 polygon([[-w*.5,2],[-w*.5+leftW,-1],[-w*.5+leftW,h-4],[-w*.52,h+1]],col,'#a0a08d',8);
 polygon([[w*.5-rightW,2],[w*.5,0],[w*.49,h],[w*.5-rightW,h-3]],cols[(index+2)%6],'#92969b',8);
 for(let sy=13;sy<h-5;sy+=between(12,18)){line([[-w*.47,sy],[-w*.5+leftW-3,sy-1]],ink,1.5,.55);line([[w*.5-rightW+3,sy],[w*.46,sy+1]],ink,1.5,.52);}
 // Some stone surrounds are interrupted; the charcoal construction is still visible.
 line([[-w*.6,h+3],[-w*.57,-7],[w*.52,-9],[w*.6,h+2]],chalk,6,.7);
 if(index%3===0)line([[-w*.62,-5],[-w*.3,-24],[w*.2,-22],[w*.6,-7]],'#4e5864',3,.7);
 else if(index%3===1)line([[-w*.59,-10],[w*.6,-14]],'#c2bfa9',7,.75);
 else line([[-w*.64,-6],[w*.48,-2]],ink,2,.8);
 line([[-w*.6,h+7],[w*.64,h+5]],ink,4,.82);line([[-w*.7,h+12],[w*.7,h+13]],chalk,4,.63);
 if(index%4===0){for(let q=-2;q<=2;q++)line([[q*w*.21,h-7],[q*w*.21+2,h+15]],ink,1.6,.7);line([[-w*.69,h-5],[w*.7,h-6]],ink,2,.75);}
 // A rubbed charcoal number remains consistent and readable, without a neat card.
 const ny=h+45,nw=num>9?56:41;rubbed([[-nw*.44,ny-10],[nw*.44,ny-11]],'#3b434d',37,.92);
 c.font='42px Josefin';c.textAlign='center';c.textBaseline='middle';c.fillStyle='#f0e8d3';c.fillText(String(num),0,ny-5);
 c.restore();
}
for(let row=0;row<4;row++)for(let col=0;col<6;col++){let index=row*6+col;window(xs[col]+between(-15,15),ys[row]+between(-12,12),between(70,85),between(87,109),numbers[row][col],index);}
// A low entrance and scuffed stone step. No extra numbered window.
polygon([[596,1241],[598,1178],[618,1159],[653,1162],[676,1183],[678,1243]],'#384b50','#81908b',10);line([[635,1171],[636,1243]],chalk,2,.6);line([[594,1245],[681,1249]],'#d0c2a6',5,.8);
line([[163,1248],[338,1255],[615,1252],[900,1264],[1112,1255]],'#d4d1bb',8,.68);rubbed([[235,1276],[589,1286],[1010,1280]],'#909b9e',17,.23);
// A few exposed chalk tests outside the facade make the material explicit.
rubbed([[176,1325],[249,1318]],'#5d759b',14,.8);rubbed([[272,1321],[328,1326]],rust,13,.8);rubbed([[350,1326],[395,1320]],chalk,9,.75);
document.getElementById('zoom').onclick=e=>{const zoomed=document.body.classList.toggle('zoomed');e.currentTarget.setAttribute('aria-pressed',String(zoomed));e.currentTarget.textContent=zoomed?'Gesamtansicht':'Größer ansehen';};
canvas.toBlob(blob=>{if(!blob)return;const a=document.getElementById('download');a.href=URL.createObjectURL(blob);a.hidden=false;},'image/png');
})();
