// Original authored vector studies. No copied works, portraits or raster generation.
const PALETTE=['#3731d4','#a73a49','#356b5d','#efb8bf','#dfb856','#242827'];
function ink(points,seed=1){let out=[];for(let i=0;i<points.length-1;i++){const a=points[i],b=points[i+1],length=Math.hypot(b[0]-a[0],b[1]-a[1]),n=Math.max(2,Math.ceil(length/18));for(let j=0;j<n;j++){let t=j/n,wiggle=Math.sin((i*11+j*3+seed)*1.7)*.8;out.push([a[0]+(b[0]-a[0])*t+wiggle,a[1]+(b[1]-a[1])*t+wiggle*.7]);}}out.push(points.at(-1));return'M'+out.map(p=>p.map(v=>v.toFixed(1)).join(' ')).join('L');}
function ip(points,seed=1,width=2.1){return`<path d="${ink(points,seed)}" fill="none" stroke="#242827" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;}
function svgPlate(body,bg='#edf2ef'){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300"><path fill="${bg}" d="M0 0h400v300H0z"/>${body}</svg>`;}
function leafDrawing(x=0,y=0,scale=1,color='#356b5d'){return`<g transform="translate(${x} ${y}) scale(${scale})"><path fill="${color}" d="M0 94Q-45 49-2 0Q49 44 0 94Z"/>${ip([[0,98],[-2,62],[1,25],[-2,0]],2,1.5)}${ip([[-1,69],[-22,44]],4,1)}${ip([[0,52],[21,28]],3,1)}</g>`;}
function tokenShape(i,rotation=0,color=PALETTE[i%6]){const bodies=['<path d="M-27-28L28-26 26 29-29 26Z"/>','<path d="M-30 26L-2-31 30 27Z"/>','<path d="M-29 1C-29-41 39-35 30 4S-31 42-29 1Z"/>','<path d="M-27-29L27-27 28-7-4-8-3 29-29 26Z"/>'];return`<g transform="rotate(${rotation})" fill="${color}">${bodies[i%4]}</g>`;}
function flower(){return'<g fill="#efb8bf" stroke="#a73a49" stroke-width="2"><path d="M200 155C61 170 12 15 107 26S226 106 200 155Z"/><path d="M200 155C171 28 281-49 304 43S242 150 200 155Z"/><path d="M200 155C313 55 427 131 351 197S225 202 200 155Z"/><path d="M200 155C302 244 212 348 164 269S176 183 200 155Z"/><path d="M200 155C112 275-19 203 58 141S161 127 200 155Z"/></g><path fill="#dfb856" d="M174 144Q201 114 223 145T204 180 174 144Z"/>';}
function motif(day,s={}){let b='',bg='#edf2ef';
switch(day){
case 1:for(let i=0;i<9;i++)b+=`<g transform="translate(${90+(i%3)*110} ${60+Math.floor(i/3)*90})">${tokenShape(i,s.angles?.[i]??(i%4)*90)}</g>`;break;
case 2:bg=s.exposed?'#292eb4':'#d5e4df';(s.leaves||[[100,90],[220,70],[285,150]]).forEach(([x,y],i)=>{b+=`<g transform="rotate(${i*32-30} ${x} ${y})">${leafDrawing(x,y,.9,s.exposed?'#f4f7f2':'#356b5d')}</g>`;});break;
case 3:bg=PALETTE[s.color??0];b='<path fill="#efb8bf" d="M143 93Q208 72 264 105L262 209 139 206Z"/>';break;
case 4:{let step=55+Number(s.spacing??25);for(let y=30,r=0;y<310;y+=step,r++)for(let x=20+(s.offset&&r%2?step/2:0);x<420;x+=step)b+=leafDrawing(x,y,.44,'#356b5d');break;}
case 5:{let gap=Number(s.spacing??10);for(let r=0;r<7;r++)for(let c=0;c<11;c++){let x=25+c*33,y=19+r*39,w=32-gap*.6;b+=`<path fill="${PALETTE[(r+c*2)%5]}" d="M${x} ${y}l${w} 1-2 25-${w-3} 2Z"/>`;}break;}
case 6:b=`${ip([[65,29],[337,32],[333,271],[67,267],[65,29]],3)}<g transform="translate(200 130) scale(1.65)">${tokenShape([2,1,3][s.shape??0],0,PALETTE[s.color??0])}</g>`;if(s.title)b+=svgText(s.title,200,230,26,'middle');else b+='<g fill="none" stroke="#356b5d" stroke-width="2"><path d="M130 228q38-18 66 0t73-1 M145 245l105 1"/></g>';break;
case 7:{const stamps=s.stamps||[[100,70,0],[240,65,1],[170,190,2]];for(const [x,y,t]of stamps){if(t===0)b+=`<g transform="translate(${x} ${y})"><path fill="#dfb856" d="M0-26L9-8 30-4 12 8 15 30-3 16-23 27-17 5-33-9-10-10Z"/>${ip([[0,-26],[-3,16],[15,30]],4,1)}</g>`;if(t===1)b+=`<g transform="translate(${x} ${y}) rotate(25)"><path fill="#a73a49" d="M0 50Q-39 1 5-45 42-6 0 50Z"/>${ip([[0,60],[4,5],[5,-45]],8,1.6)}${ip([[-18,9],[3,27],[21,-2]],5,1)}</g>`;if(t===2)b+=`<g transform="translate(${x} ${y})"><path fill="#3731d4" d="M-20-7L18-10 32 46-34 44Z"/>${ip([[0,-45],[1,-11],[-22,-7],[20,-10]],5)}${ip([[-11,-1],[-19,43]],1,1)}${ip([[1,-2],[3,43]],3,1)}${ip([[10,-2],[20,43]],7,1)}</g>`;}break;}
case 8:b=`<path fill="#d6e4dd" d="M24 21L225 23 224 234 23 236Z"/><path fill="#fff" d="M42 38L207 39 208 215 42 216Z"/><path fill="#dfb856" opacity=".65" d="M208 45L354 277 86 277 44 213Z"/>${ip([[24,22],[225,23],[224,234],[23,236],[24,22]])}${ip([[121,38],[122,216]],4)}${ip([[44,117],[207,116]],2)}<path fill="#a73a49" d="M187 207L361 205 347 224 196 226Z"/>${ip([[201,225],[198,287]],4)}${ip([[344,225],[347,287]],5)}<path fill="#dfb856" d="M252 193Q265 170 284 190T260 207Z"/>${ip([[292,79],[328,81],[344,121],[275,122],[292,79]],3)}${ip([[311,122],[311,205]],8)}`;break;
case 9:{let w=Number(s.belly??80),neck=Number(s.opening??35),a=Number(s.asymmetry??0);let d=`M${200-neck} 51Q155 81 ${200-w} 156Q${145-a} 271 200 268Q${270+a} 271 ${200+w} 156Q240 86 ${200+neck} 51Z`;b=`<path d="${d}" fill="#efb8bf" stroke="#242827" stroke-width="2.3"/><path d="M${200-neck} 51Q200 68 ${200+neck} 51Q200 37 ${200-neck} 51" fill="#a73a49" stroke="#242827" stroke-width="2"/>${ip([[146,172],[176,163],[195,181],[217,160],[255,176]],5)}${ip([[148,194],[179,186],[201,203],[225,185],[256,199]],4,1)}`;break;}
case 10:b=`<path fill="#fff" d="M36 25L367 29 361 275 32 269Z"/>${ip([[36,25],[367,29],[361,275],[32,269],[36,25]],8)}`;for(let i=0;i<8;i++)b+=s.border%2?leafDrawing(50+i*43,45,.24,'#356b5d'):`<path fill="#a73a49" d="M${50+i*43} 46l12-7 4 20-16 1Z"/>`;b+=svgText(s.message||'…',200,135,23,'middle',24);break;
case 11:{let n=Number(s.loops??12);for(let i=0;i<n;i++){let x=125+i*150/(n-1);b+=`<path d="M200 28C${x-90} 59 ${x-70} 247 200 278C${x+90} 249 ${x+80} 66 200 28Z" fill="none" stroke="${i%2?'#356b5d':'#242827'}" stroke-width="1.5"/>`;}break;}
case 12:b=`<path fill="#efb8bf" d="M92 26Q194-16 302 28L301 263 93 266Z"/>${ip([[93,27],[96,266],[302,264],[300,28]],6)}<path fill="#fff" d="M119 48L279 47 276 239 119 241Z"/>${ip([[127,88],[259,91]],3,1)}${ip([[127,130],[259,129]],4,1)}${ip([[127,174],[259,174]],5,1)}<path fill="#dfb856" d="M310 224l19-138 10 1-17 139-9 19Z"/>`;break;
case 13:{let f=Number(s.fold??55),above=s.view===1,x=70+f*1.7,y=above?45+f*.7:80+f*.25;b=`<path fill="#efb8bf" stroke="#242827" stroke-width="2.3" d="M75 205L200 160 200 56 75 99Z"/><path fill="#dfb856" stroke="#242827" stroke-width="2.3" d="M200 160L${200+x*.6} ${y+106} ${200+x*.6} ${y} 200 56Z"/>${ip([[200,57],[200,160]],5,4)}<path d="M92 246Q200 284 326 231" fill="none" stroke="#a73a49" stroke-width="1.5"/>`;break;}
case 14:{for(let r=0;r<3;r++)for(let c=0;c<4;c++)b+=`<path fill="${PALETTE[(r*4+c)%5]}" d="M${30+c*85} ${25+r*85}l77 2-2 76-76-1Z"/>`;for(let i=0;i<9;i++)if(s.seams?.[i]??true){let x=111+(i%3)*85,y=45+Math.floor(i/3)*85;for(let n=0;n<4;n++)b+=ip([[x-7,y+n*14],[x+7,y+n*14+7]],n+2,1.7);}break;}
case 15:{let h=s.head??0,t=s.top??0,k=s.skirt??0;b=`<path fill="#dfb856" d="${['M157 65L180 22 202 57 230 19 247 67Z','M160 65Q192-19 241 64Z','M160 66l21-48 19 49 22-47 22 46Z'][h]}"/><path fill="${PALETTE[t]}" d="M174 94l-49 34 26 37 25-18-6 54 68-2-7-53 24 16 21-39-46-30Z"/><path fill="${PALETTE[k+2]}" d="${['M170 190L111 267 283 268 239 190Z','M170 190L147 272 259 271 239 190Z','M170 190L104 247 137 271 260 270 298 242 239 190Z'][k]}"/>${ip([[180,77],[191,69],[207,73],[221,68]],4,1.6)}${ip([[174,275],[171,291]],3,3)}${ip([[240,275],[245,291]],6,3)}`;break;}
case 16:b=`<path fill="#efb8bf" d="M66 120L201 22 336 120Z"/>${ip([[66,120],[201,22],[336,120]],7)}`;for(let i=0;i<12;i++){let x=77+(i%4)*61,y=130+Math.floor(i/4)*48;b+=`<path fill="${s.rooms?.[i]?'#dfb856':'#fff'}" stroke="#242827" stroke-width="1.5" d="M${x} ${y}l55 1-1 41-54-1Z"/>`;}break;
case 17:b=`<path fill="#efb8bf" d="M125 147Q197 122 257 147L243 231Q186 250 138 228Z"/>${ip([[141,145],[153,128],[237,130],[249,145]],5)}${ip([[250,161],[288,146],[303,168],[289,197],[248,208]],4,3)}${ip([[128,165],[90,126],[70,137],[104,203],[138,211]],2,3)}<path fill="#dfb856" d="M179 113Q203 87 222 113Z"/>${ip([[168,236],[163,261],[145,273]],4)}${ip([[220,239],[237,266],[258,267]],9)}<path fill="#3731d4" d="M280 50Q320 10 351 47Q320 77 280 50Z"/>`;break;
case 18:{let left=s.handle===0,hs=Number(s.size??35);b=`<path fill="#dfb856" d="M91 235Q206 271 310 231L311 246Q200 282 91 248Z"/><path d="M${left?144:260} 116C${left?144-hs*2:260+hs*2} 74 ${left?143-hs*2:260+hs*2} 222 ${left?151:253} 196" fill="none" stroke="#a73a49" stroke-width="14"/><path fill="#fff" stroke="#242827" stroke-width="2" d="M137 86L265 87 252 220Q204 246 150 219Z"/><path fill="#a73a49" d="M136 85Q204 62 266 86Q202 105 136 85Z"/>${ip([[150,174],[251,171]],5,2)}`;break;}
case 19:{let order=s.order||[0,1,2,3];order.forEach((item,i)=>{let x=35+i*86;b+=`<path fill="${PALETTE[item+1]}" d="M${x} 67l77 1-1 149-75-2Z"/>${ip([[x,68],[x+77,69],[x+76,217],[x,215],[x,68]],i)}${item===1?'<g fill="none" stroke="#fff" stroke-width="3"><path d="M'+(x+13)+' 97h50v65h-50Z"/></g>':item===3?`<g fill="none" stroke="#fff" stroke-width="2"><circle cx="${x+26}" cy="110" r="14"/><circle cx="${x+52}" cy="151" r="14"/></g>`:ip([[x+12,186],[x+61,187]],2,2)}`;});let route=[0,1,2,3].map(item=>[73+order.indexOf(item)*86,254]);b+=`<path d="${route.map(([x,y],i)=>(i?'L':'M')+x+' '+(y+(i%2)*14)).join('')}" fill="none" stroke="#a73a49" stroke-width="3" stroke-dasharray="5 5"/>`;break;}
case 20:{b=`<path fill="#fff" d="M46 55L276 41 277 220 46 239Z"/><path fill="#d8e4de" d="M277 41L358 84 356 261 277 220Z"/><path fill="#efb8bf" d="M46 239L277 220 356 261 129 281Z"/>${ip([[46,55],[276,41],[358,84],[356,261],[129,281],[46,239],[46,55]],6)}${ip([[277,42],[277,220],[46,239]],3)}`;let transform=['translate(148 88)','translate(200 235) rotate(-70) scale(.65)','translate(204 45) rotate(70) scale(.65)'][s.position??0];b+=`<g transform="${transform}">${leafDrawing(0,0,.9)}${leafDrawing(30,25,.65)}</g>`;break;}
case 21:{for(let i=0;i<3;i++){let shift=(s.shifts?.[i]??0);b+=`<svg x="${35+i*110}" y="35" width="105" height="230" viewBox="0 0 105 230"><g transform="translate(0 ${shift})"><path fill="${PALETTE[i+1]}" d="M0-60h105v360H0z"/><path fill="#fff" d="M-40 90Q53 2 146 89Q53 165-40 90Z"/><circle cx="53" cy="86" r="23" fill="#242827"/>${leafDrawing(52,165,.8,'#dfb856')}</g></svg>`;}break;}
case 22:{let z=Number(s.zoom??1);b=`<g transform="translate(${200-200*z} ${150-150*z}) scale(${z})">${flower()}</g>`;break;}
case 23:for(let i=0;i<8;i++)b+=ip([[55,40+i*30],[131,41+i*30],[226,39+i*30],[347,42+i*30]],i,1.5);break;
case 24:b=`<path fill="#d6e4dd" d="M35 190L205 127 364 197 194 280Z"/><path fill="#a73a49" d="M98 210L97 84Q203-13 306 85L306 210 264 225 265 104Q204 41 139 105L140 227Z"/>${ip([[98,210],[97,84],[203,15],[306,85],[306,210]],5)}<path fill="#dfb856" d="M156 73Q202 38 248 71L248 87Q200 60 156 91Z"/>`;if(s.seating)b+=`<path fill="#3731d4" d="M48 217l87 23-8 13-88-22Z"/>${ip([[49,232],[47,256]],1,3)}${ip([[120,251],[122,274]],2,3)}`;if(s.access)b+='<path fill="#efb8bf" stroke="#242827" stroke-width="1.5" d="M171 220L216 207 276 258 229 277Z"/>';if(s.meeting)b+='<circle cx="308" cy="218" r="17" fill="#dfb856"/><path d="M307 236v39" stroke="#242827" stroke-width="3"/>';break;
}
return svgPlate(b,bg);}
function svgText(value,x,y,size=22,anchor='start',wrap=28){let lines=String(value).match(new RegExp('.{1,'+wrap+'}(?:\\s|$)|.{1,'+wrap+'}','g'))||[''];const safe=line=>line.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));return`<text x="${x}" y="${y}" fill="#242827" font-size="${size}" font-family="Georgia,serif" text-anchor="${anchor}">${lines.slice(0,5).map((line,i)=>`<tspan x="${x}" dy="${i?size*1.35:0}">${safe(line)}</tspan>`).join('')}</text>`;}
function houseRoof(){const outer=[[17,223],[58,171],[105,169],[141,108],[201,107],[203,82],[270,85],[290,57],[408,62],[429,45],[494,47],[510,27],[550,18],[591,27],[607,49],[673,48],[693,65],[811,61],[831,89],[897,87],[900,110],[958,113],[994,174],[1044,173],[1083,225]];
let outline=ip(outer,7,2.5)+ip(outer.map(([x,y],i)=>[x+(i%3-1)*2,y+(i%4-2)]),12,.85);
let roofline=ip([[21,229],[247,231],[489,229],[739,232],[1080,229]],2,2.5)+ip([[32,238],[278,237],[519,240],[805,237],[1070,240]],4,1);
let details=ip([[203,102],[310,101],[391,105]],3)+ip([[710,105],[816,104],[898,106]],6)+ip([[440,94],[441,175],[658,177],[660,94]],8)+ip([[453,93],[487,62],[616,64],[646,94]],6)+ip([[489,64],[490,174]],4)+ip([[613,65],[615,175]],4);
let lights='';for(let i=0;i<11;i++){let x=66+i*96,y=201+Math.sin(i/10*Math.PI)*10;lights+=`<circle cx="${x}" cy="${y}" r="3.3" fill="#dfb856"/>`;}
return`<svg class="roof" viewBox="0 0 1100 255" aria-hidden="true"><path fill="#b68c9d" d="${ink(outer,2)}L1081 247 17 246Z"/><path fill="#725b78" d="M203 111L430 62 489 65 441 177 203 177Z M614 65L692 67 898 113 896 177 658 178Z"/>${outline}${details}${ip([[58,170],[103,168],[141,108],[200,106]],44,5).replace('stroke="#242827"','stroke="#f4f7f3"')}${ip([[899,108],[957,112],[994,172],[1044,172]],45,4).replace('stroke="#242827"','stroke="#f4f7f3"')}${roofline}${ip([[58,194],[253,205],[452,212],[650,213],[852,205],[1040,195]],4,1.3)}${lights}</svg>`;}
function windowInk(seed){const kind=seed%6;let crown=[[[17,29],[28,14],[81,2],[135,18],[145,31]],[[17,28],[42,12],[118,13],[145,29]],[[17,31],[18,14],[141,12],[145,31]],[[17,30],[40,6],[120,8],[145,30]],[[17,30],[48,19],[78,4],[110,18],[145,30]],[[17,31],[27,9],[134,7],[145,31]]][kind];let ornament='';
if(kind===0)ornament='<path d="M53 17q27-14 54 0M74 11l6 9 7-10" fill="none" stroke="#32483d" stroke-width="1"/>';
if(kind===1)ornament=ip([[33,18],[36,23],[124,23],[129,18]],seed,.9);
if(kind===2)ornament='<path d="M60 18h40m-33 5h26" fill="none" stroke="#32483d" stroke-width="1"/>';
if(kind===3)ornament='<path d="M71 15q9-13 18 0q-9 12-18 0" fill="none" stroke="#32483d" stroke-width="1"/>';
if(kind===4)ornament=ip([[68,19],[79,9],[92,19],[79,24],[68,19]],seed,.9);
if(kind===5)ornament='<path d="M31 18h12m74-1h14M46 14l4 7m61-8l-4 8" stroke="#32483d" stroke-width="1"/>';
let rails='';for(let i=0;i<5;i++){let x=32+i*24;rails+=kind%2?`<path d="M${x} 145v18m-7-9q7-13 14 0q-7 12-14 0" fill="none" stroke="#263e36" stroke-width=".85"/>`:`<path d="M${x} 145v18m-6-4l6-12 6 12" fill="none" stroke="#263e36" stroke-width=".85"/>`;}
const details=seed%4===0?'<path d="M25 143l4-12 17 1 3 11Z" fill="#a16665"/><path d="M34 132q-12-17-8-18q12 1 10 16q3-18 10-17q3 9-10 18" fill="#465e48"/>':seed%4===1?'<path d="M108 144l2-14h14l2 14Z" fill="#d1ae71"/><path d="M113 130l1-11h7l1 11" fill="none" stroke="#46544a" stroke-width="1"/>':seed%4===2?ip([[30,139],[53,139],[56,135]],seed,.9):'<path d="M97 143l4-6 18 2 1 5Z" fill="#b3919f"/>';
return `<svg class="window-frame" viewBox="0 0 160 180" preserveAspectRatio="none" aria-hidden="true">${ip(crown,seed,1.7)}${ornament}${ip([[20,30],[21,147],[141,146],[140,30]],seed+1,1.7)}${ip([[25,32],[26,140],[135,140],[134,32]],seed+2,.75)}${ip([[15,37],[15,141]],seed+11,.65)}${ip([[12,149],[82,146],[150,149],[149,164],[13,166],[12,149]],seed+1,1.4)}${rails}${details}${ip([[15,144],[80,142],[145,144]],seed+5,1.5)}${ip([[10,169],[78,166],[151,168]],seed+1,.8)}${seed%3===0?ip([[146,66],[152,70],[149,84]],seed,.6):''}</svg>`;}

function houseEntrance(){return `<svg class="house-entrance" viewBox="0 0 600 70" aria-hidden="true"><path d="M251 69V24Q300-11 349 24V69" fill="#294c47"/>${ip([[251,69],[251,24],[277,7],[321,7],[349,24],[349,69]],51,1.5)}${ip([[300,13],[299,67]],55,1)}<path d="M267 26h21v22h-21Z M312 26h21v22h-21Z" fill="#e8be78"/>${ip([[12,62],[203,62],[207,53],[391,53],[395,62],[588,62]],54,1.4)}<path d="M25 61L25 34M19 34h12l-2-19h-8Z M575 61V34M569 34h12l-2-19h-8Z" fill="#e8be78" stroke="#242827" stroke-width="1.2"/></svg>`;}

function facadeStars(){return [false,true].map((right,i)=>`<svg class="facade-star ${right?'star-right':'star-left'}" viewBox="0 0 30 58" aria-hidden="true">${ip([[15,0],[15,30]],80+i,.65)}<path d="M15 30l3 9 10 1-8 6 3 10-8-6-8 6 3-10-8-6 10-1Z" fill="#e2bf76" stroke="#314b40" stroke-width=".8"/></svg>`).join('');}

function facadeWash(panel){const strokes=[[[8,-5],[57,0],[70,41],[66,119],[110,121],[109,244],[89,246],[84,354],[16,359],[13,230],[0,221]],[[27,-5],[146,0],[140,78],[152,81],[150,193],[111,192],[115,257],[34,252],[31,144],[20,141]],[[50,169],[155,163],[160,360],[10,361],[11,282],[47,284]]];const col=['#dfadb9','#343fb4','#964454'][panel];return `<svg class="facade-wash" viewBox="0 0 160 360" preserveAspectRatio="none" aria-hidden="true"><path d="${ink(strokes[panel],panel+71)}Z" fill="${col}"/>${ip(strokes[panel],panel+19,2).replace('stroke="#242827"',`stroke="${col}"`)}${[0,1,2,3].map((n)=>ip([[1,80+n*87],[52,81+n*87],[115,79+n*87],[159,80+n*87]],n+panel+70,.65)).join('')}</svg>`;}

function mobileFacadeWash(){const fields=[['#dfadb9',[[0,0],[89,0],[93,102],[130,105],[125,282],[85,287],[86,397],[5,390]]],['#343fb4',[[204,0],[303,0],[305,121],[287,126],[296,234],[246,239],[248,324],[187,318],[194,146],[206,142]]],['#964454',[[102,373],[172,370],[177,306],[263,302],[262,396],[398,388],[400,600],[94,600],[98,479],[113,475]]]];return `<svg class="mobile-facade-wash" viewBox="0 0 400 600" preserveAspectRatio="none" aria-hidden="true">${fields.map(([col,points],i)=>`<path d="${ink(points,91+i)}Z" fill="${col}"/>`).join('')}</svg>`;}

// Room palettes and marginal material studies are original set design, not reconstructions.
const ROOM_THEMES=[
['#e6e5d7','#9d9c8e','#cfb6a6','#9b3e48','geometry'],
['#dce5e7','#334e69','#a5b5bb','#294b81','botanical'],
['#eee0d5','#b26e7f','#d1b5aa','#7541a2','colour'],
['#e2e6d9','#8caa94','#c0baa1','#3b6356','print'],
['#eee5d3','#b0a074','#caaf91','#a0413f','mosaic'],
['#e4deeb','#9183a5','#b9adb8','#6d4c86','orbit'],
['#eee2d8','#b39b9d','#c9b29d','#9c4546','garden'],
['#e8e9db','#a5b7ab','#c4b9a5','#47675e','light'],
['#eeded6','#b68780','#c8a098','#974b56','clay'],
['#eee6d4','#b4aa89','#d0bca1','#716040','paper'],
['#e3e4db','#939b8e','#bdb5a5','#4d6757','wire'],
['#e9e0cf','#afa088','#c8b097','#775748','charcoal'],
['#dce3df','#7f9b92','#b4b4a6','#3d665d','fold'],
['#ecdeda','#aa8094','#c9a6a0','#923c59','stitch'],
['#e6e3d2','#a49d7a','#c3b293','#526949','costume'],
['#e6d9dd','#9b7983','#bca0a6','#88445b','house'],
['#e5dfcf','#9ba48b','#b8aa8e','#596444','alchemy'],
['#e8e9de','#9fa79b','#bfbbab','#536c62','porcelain'],
['#dee6e3','#82a49a','#b3b7a6','#3b6c60','plan'],
['#e6e1d8','#aba095','#b7a792','#5f6555','interior'],
['#e4dfe4','#978998','#baaaae','#80536d','collage'],
['#e8dfd9','#b59b9d','#c2a597','#824656','petal'],
['#e9e7dd','#b1b4a7','#c8c3b3','#596153','line'],
['#e4e3d7','#8eaaa0','#bea794','#824465','sculpture']
];
function roomTheme(day){const [wall,side,floor,accent,material]=ROOM_THEMES[day-1];return{wall,side,floor,accent,material};}
function roomMaterial(day){let b='';const a=roomTheme(day).accent;switch(day){
case 1:for(let i=0;i<7;i++)b+=`<path d="M7 ${10+i*31}h22v20H7Z" fill="${i%2?a:'none'}" stroke="${a}" stroke-width=".8"/>`;break;
case 2:case 7:for(let i=0;i<5;i++)b+=`<path d="M18 ${35+i*43}q-20-17-11-24q14 2 11 24q19-21 19-11q-1 10-19 11m0-3v13" fill="none" stroke="${a}" stroke-width="1.2"/>`;break;
case 3:for(let i=0;i<5;i++)b+=`<circle cx="20" cy="${28+i*45}" r="${12+i%2*4}" fill="none" stroke="${a}" stroke-width="3"/>`;break;
case 4:for(let i=0;i<8;i++)b+=ip([[4,15+i*29],[19,6+i*29],[34,16+i*29],[20,25+i*29],[4,15+i*29]],i,.7);break;
case 5:for(let i=0;i<12;i++)b+=`<path d="M${i%2*18+3} ${10+i*19}l13 2-1 12-13-1Z" fill="${i%3?a:'#be9966'}"/>`;break;
case 6:for(let i=0;i<4;i++)b+=`<ellipse cx="20" cy="${35+i*57}" rx="15" ry="24" fill="none" stroke="${a}" stroke-width=".8"/><path d="M4 ${35+i*57}h32" stroke="${a}" stroke-width=".5"/>`;break;
case 8:b=`<path d="M7 10L30 80 11 245 34 200" fill="#e8cd92" opacity=".6"/>`;break;
case 9:for(let i=0;i<3;i++)b+=`<path d="M11 ${15+i*80}q12-8 18 0l-3 17q18 34-7 38q-21-3-11-25l6-13Z" fill="none" stroke="${a}" stroke-width="1.1"/>`;break;
case 10:for(let i=0;i<5;i++)b+=ip([[5,12+i*47],[34,12+i*47],[34,45+i*47],[5,45+i*47],[5,12+i*47]],i,.8);break;
case 11:for(let i=0;i<5;i++)b+=`<path d="M20 5C${-30+i*8} 70 ${-30+i*8} 180 20 250C${70-i*8} 170 ${70-i*8} 80 20 5Z" fill="none" stroke="${a}" stroke-width=".7"/>`;break;
case 12:for(let i=0;i<11;i++)b+=ip([[8,10+i*22],[29,14+i*22]],i,1.2);break;
case 13:for(let i=0;i<5;i++)b+=`<path d="M5 ${15+i*47}l15-9 15 12-15 20Z" fill="${i%2?a:'none'}" stroke="${a}" stroke-width=".7"/>`;break;
case 14:for(let i=0;i<13;i++)b+=`<path d="M7 ${10+i*18}l24 9m-24 0 24-9" stroke="${a}" stroke-width=".8"/>`;break;
case 15:for(let i=0;i<4;i++)b+=`<path d="M18 ${8+i*60}l-12 14 8 7-10 22h31l-10-22 8-7Z" fill="none" stroke="${a}" stroke-width="1"/>`;break;
case 16:for(let i=0;i<4;i++)b+=`<path d="M4 ${35+i*60}l16-22 16 22v24H4Z M17 ${59+i*60}v-18h8v18" fill="none" stroke="${a}" stroke-width=".8"/>`;break;
case 17:b=`<path d="M20 8v230m-12-15 24-11M6 34q14-33 28 0L27 55H12Z M5 141q15-27 30 0l-8 18H13Z" fill="none" stroke="${a}" stroke-width="1"/>`;break;
case 18:for(let i=0;i<4;i++)b+=`<path d="M6 ${14+i*58}h23l-3 25H10Z M29 ${17+i*58}q15-2 6 15h-7M3 ${44+i*58}h32" fill="none" stroke="${a}" stroke-width="1"/>`;break;
case 19:for(let i=0;i<5;i++)b+=`<path d="M5 ${10+i*46}h29v34H5Z m10 0v-22h19m-29-4h12" fill="none" stroke="${a}" stroke-width=".8"/>`;break;
case 20:b=`<path d="M5 10h30v230H5Z M5 70h30M5 130h30M5 190h30M20 10v230" fill="none" stroke="${a}" stroke-width=".8"/>`;break;
case 21:for(let i=0;i<6;i++)b+=`<path d="M${i%2?7:3} ${10+i*39}l28-5-3 28-26 4Z" fill="${i%2?a:'#c5b295'}" opacity=".7"/>`;break;
case 22:for(let i=0;i<4;i++)b+=`<path d="M20 ${15+i*60}q-30 8 0 39q31-29 0-39Z M20 ${15+i*60}v39" fill="none" stroke="${a}" stroke-width="1"/>`;break;
case 23:for(let i=0;i<22;i++)b+=ip([[4,10+i*11],[34,11+i*11]],i,.5);break;
case 24:for(let i=0;i<3;i++)b+=`<path d="M4 ${72+i*80}v-42q15-32 32 0v42h-9V33q-7-14-14 0v39Z" fill="${a}" opacity=".7"/>`;break;
}return `<svg class="room-material material-${roomTheme(day).material}" viewBox="0 0 40 260" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${b}</svg>`;}
function atelierInterior(day){const {wall,side,floor}=roomTheme(day);return `<svg class="atelier-ceiling" viewBox="0 0 1200 65" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0L55 65 1145 65 1200 0Z" fill="${side}"/>${ip([[0,0],[55,64],[1145,64],[1200,0]],144,1)}</svg><svg class="atelier-interior" viewBox="0 0 1200 720" preserveAspectRatio="none" aria-hidden="true"><path d="M55 0L1145 0 1145 720 55 720Z" fill="${wall}"/><path d="M0 0L55 0 55 720 0 720Z M1145 0L1200 0 1200 720 1145 720Z" fill="${side}"/>${ip([[55,0],[55,720]],145,1.1)}${ip([[1145,0],[1145,720]],146,1.1)}</svg>${roomMaterial(day)}<svg class="atelier-floor" viewBox="0 0 1200 130" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0H1200V130H0Z" fill="${side}"/><path d="M55 0L1145 0 1200 130 0 130Z" fill="${floor}"/>${ip([[55,0],[700,2],[1145,0]],147,1.2)}${ip([[55,0],[0,130]],148,1)}${ip([[1145,0],[1200,130]],149,1)}${roomFloorLines(day)}</svg>`;}

function roomFloorLines(day){let b='';const kind=day%4;for(let i=0;i<7;i++)b+=ip([[85+i*171,0],[i*200-10,130]],i+day,.55);if(kind===0||kind===1)for(let i=1;i<4;i++)b+=ip([[45-i*13,i*i*8],[1155+i*13,i*i*8]],day+i,.5);if(kind===2)for(let i=0;i<8;i++)b+=ip([[90+i*140,30+i%3*22],[104+i*140,35+i%3*22]],i+day,.65);if(kind===3)b+=ip([[6,108],[300,105],[600,109],[900,106],[1194,109]],day,.6);return b;}
