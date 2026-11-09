// Salon Format editorial copy. Museum sources were checked 8–9 November 2026.
const MAK_WOMEN='https://www.mak.at/programm/ausstellungen/die_frauen_der_wiener_werkstaette';
const REPLACEMENTS={
4:['Mathilde Flögl','1893–1958','https://sammlung.mak.at/de/artist/floegl-mathilde_1316','collection'],
7:['Felice Rix-Ueno','1893–1967','https://www.mak.at/felicerixueno','past'],
9:['Vally Wieselthier','1895–1945','https://www.mak.at/programm/ausstellungen/vally_wieselthier','current'],
10:['Mela Koehler','1885–1960','https://sammlung.mak.at/de/artist/koehler-mela_21382','collection'],
15:['Maria Likarz-Strauss','1893–1971',MAK_WOMEN,'past'],
18:['Jutta Sika','1877–1964','https://sammlung.mak.at/en/collect/tasse-mit-untertasse_6318','collection'],
19:['Margarete Schütte-Lihotzky','1897–2000','https://sammlung.mak.at/de/collect/frankfurter-kueche_186280','collection'],
20:['Lotte Calm','1897–1974','https://sammlung.mak.at/de/artist/calm-lotte_1314','collection']};
Object.entries(REPLACEMENTS).forEach(([d,[name,years,source,mak]])=>ARTISTS[d-1]={...ARTISTS[d-1],name,years,source,sourceName:'MAK',mak});


const ARTIST_COPY = {
  "de": [
    "Formen, die zusammenpassen|Sophie Taeuber-Arp arbeitete mit Textilien, Marionetten, Möbeln und Architektur. Ihre geometrischen Formen findet man auf kleinen Gegenständen genauso wie in ganzen Räumen.|Tippe die Formen an und drehe sie. Such einen Rhythmus, der dir gefällt. Lass dann eine Form bewusst aus der Reihe tanzen.|Formen und Rhythmus",
    "Fotografieren ohne Kamera|Anna Atkins verband Botanik und Fotografie. Sie legte Algen direkt auf lichtempfindliches Papier: Nach dem Belichten und Auswaschen blieben ihre hellen Umrisse auf blauem Grund zurück.|Lege drei Blätter auf das Papier. Drücke dann auf „Belichten“. Wo die Blätter lagen, bleibt das Papier hell.|Blätter auf blauem Papier",
    "Dasselbe Rosa, ganz anders|Sonia Delaunay entwarf Bilder, Stoffe, Kleider und Einrichtungsgegenstände. Sie beschäftigte sich damit, wie Farben nebeneinander wirken. Ein Farbton kann je nach Umgebung ganz anders erscheinen.|Wechsle die Farbe um das Rosa herum. Das Rosa selbst bleibt gleich. Auf welchem Hintergrund wirkt es für dich am hellsten?|Farbige Kreise und Stoffstreifen",
    "Ein Muster für die ganze Wand|Mathilde Flögl entwarf für die Wiener Werkstätte unter anderem Tapeten, Textilien und Bücher. Bei einer Tapete zählt nicht nur das einzelne Motiv, sondern auch, wie es sich über die Wand wiederholt.|Verändere den Abstand zwischen den Motiven. Probier dann eine versetzte Anordnung. Welche Tapete würdest du zu Hause haben wollen?|Ein Tapetenentwurf",
    "Platz zwischen den Farben|Alma Thomas malte abstrakte Bilder aus vielen kleinen Farbstrichen. Oft bleibt zwischen ihnen der helle Bildgrund sichtbar. Diese Lücken gehören ebenso zum Bild wie die Farbe.|Verändere die Lücken zwischen den Farbstrichen. Wann wirkt die Fläche ruhig, wann bewegt? Wähle deinen Lieblingsabstand.|Farbstriche mit Zwischenräumen",
    "Wie sieht ein Gefühl aus?|Hilma af Klint entwickelte abstrakte Bilder aus Formen, Farben und Zeichen. Sie wollte damit auch Kräfte und Zusammenhänge darstellen, die man nicht direkt sehen kann. Ihre spirituellen Vorstellungen spielten dabei eine wichtige Rolle.|Wähle eine Farbe und eine Form für deine heutige Stimmung. Gib dem kleinen Bild einen Namen, ohne das Gefühl direkt zu nennen.|Ein Notizbuch mit Zeichen",
    "Ein kleines Motiv geht auf Reisen|Felice Rix-Ueno entwarf für die Wiener Werkstätte Stoffe, Tapeten und Stickereien. Kleine Pflanzenformen und fantasievolle Motive tauchen in ihren Entwürfen immer wieder auf. Später lebte und lehrte sie in Japan.|Wähle Stern, Feder oder Quaste. Setze dein Motiv an drei Stellen auf die Fläche. Du kannst mit Maus, Finger oder Tastatur arbeiten.|Stern, Feder und Quaste",
    "Was ist dir aufgefallen?|Berthe Morisot malte Menschen in Wohnungen, Gärten und Parks. Als Impressionistin interessierte sie sich auch für wechselndes Licht und den flüchtigen Eindruck einer Situation.|Schau dir die gezeichnete Zimmerecke an. Blende sie dann aus und beantworte die Frage aus dem Gedächtnis.|Ein Fenster und das Licht im Zimmer",
    "Eine Vase mit Charakter|Vally Wieselthier arbeitete mit Keramik in Wien und später in den USA. Ihre Gefäße und Figuren verbinden kräftige Formen mit einer freien, bewegten Gestaltung.|Verändere Bauch und Öffnung der Vase. Sie muss nicht symmetrisch sein. Welche Form würdest du gern in die Hand nehmen?|Eine frei gezeichnete Vase",
    "Eine Karte für jemanden|Mela Koehler gestaltete Postkarten und Modebilder. Auf dem kleinen Format brachte sie Figuren, Kleidung und Schrift zusammen. Viele ihrer Entwürfe entstanden für die Wiener Werkstätte.|Schreibe einen kurzen Gruß und wähle einen gezeichneten Rand. Wenn dir deine Karte gefällt, kannst du sie herunterladen oder teilen.|Eine illustrierte Postkarte",
    "Eine Linie im Raum|Ruth Asawas Skulpturen aus Draht sind durchlässig: Man sieht die Form und zugleich durch sie hindurch. Die vielen Schlaufen bilden eine Oberfläche, ohne den Innenraum zu verschließen.|Verändere die Anzahl der Drahtschlaufen. Achte darauf, wie sich die offenen Zwischenräume verändern.|Ein Körper aus Drahtschlaufen",
    "Ein Selbstporträt ohne Spiegel|Paula Modersohn-Becker malte Frauen, Kinder und viele Selbstbildnisse. Dabei stellte sie Menschen ohne die damals üblichen Idealisierungen dar. Ihr eigenes Gesicht und ihr Körper wurden zu wiederkehrenden Motiven.|Ergänze die drei Satzanfänge. Lass Beruf und Aussehen weg. Was erzählt sonst noch etwas über dich?|Ein Spiegel mit einem leeren Blatt",
    "Eine Form zum Aufklappen|Lygia Clark machte das Verändern eines Kunstwerks zum Teil der künstlerischen Erfahrung. Bei ihren beweglichen Metallarbeiten entsteht die Form auch durch die Hände der Person, die sie aufklappt.|Klappe die verbundenen Flächen auf und zu. Schau seitlich und von oben darauf. Welche Stellung überrascht dich?|Miteinander verbundene Flächen",
    "Mit einem Faden verbinden|Pacita Abad verband Malerei mit textilen Techniken. Sie nähte, polsterte und ergänzte ihre bemalten Leinwände mit weiteren Materialien. So bekamen die Bilder eine spürbare Tiefe.|Verbinde die farbigen Stoffstücke mit Stichen. Tippe auf die kleinen Verbindungen. Lass mindestens eine Naht offen.|Ein genähtes Stoffstück",
    "Ein Kostüm, das auffällt|Maria Likarz-Strauss gestaltete Stoffe, Mode und Druckgrafik für die Wiener Werkstätte. Auch Faschingskostüme gehörten zu ihren Entwürfen. Kleidung war für sie damit sowohl Gebrauchsgegenstand als auch Bildmotiv.|Kombiniere eine Kopfform, ein Oberteil und einen Rock zu einem Papierkostüm. Würdest du so auf ein Fest gehen?|Ein Papierkostüm",
    "Ein Raum aus der Erinnerung|Louise Bourgeois beschäftigte sich in Zeichnungen, Skulpturen und Druckgrafiken immer wieder mit Erinnerungen und Beziehungen. Häuser und Räume konnten dabei für persönliche Erfahrungen stehen.|Tippe die Felder an und skizziere den Grundriss eines vertrauten Raums. Welche Bereiche fallen dir zuerst ein?|Ein Haus und ein Faden",
    "Eine ziemlich seltsame Geschichte|Leonora Carrington war Malerin und Schriftstellerin. In ihren Bildern und Geschichten stehen vertraute Dinge neben erfundenen Wesen. Was im Alltag nicht zusammengehört, kann bei ihr ganz selbstverständlich nebeneinander vorkommen.|Wähle drei Teile für den Anfang einer Geschichte. Nimm die ungewöhnlichste Kombination. Du musst sie nicht erklären.|Eine Teekanne auf Reisen",
    "Aus welcher Tasse trinkst du?|Jutta Sika gestaltete Geschirr und grafische Arbeiten. Das MAK bewahrt ein Modell einer Tasse mit Untertasse nach ihrem Entwurf. An so einem Alltagsgegenstand lässt sich gut beobachten, wie Form und Gebrauch zusammenhängen.|Setze den Henkel nach links oder rechts und ändere seine Größe. Denk daran, wie du die Tasse tatsächlich halten würdest.|Tasse und Untertasse",
    "Kurze Wege in der Küche|Margarete Schütte-Lihotzky plante die Frankfurter Küche für kleine Wohnungen. Die Anordnung sollte Arbeitsabläufe vereinfachen und Wege verkürzen. Im MAK steht ein Nachbau, der mit ihrer Beteiligung entstand.|Ordne Vorrat, Spüle, Arbeitsfläche und Herd neu. Vergleiche den Weg für „holen, waschen, schneiden, kochen“.|Eine kleine Küche von oben",
    "Ein Bild zieht in einen Raum|Lotte Calm entwarf Keramik, Stoffmuster, Spielzeug und Wandmalereien für die Wiener Werkstätte. Ein Motiv konnte bei ihr als kleines Objekt auftauchen oder einen ganzen Raum mitgestalten.|Setze den gezeichneten Zweig an die Wand, auf den Boden oder an die Decke. Wo verändert er den Raum am stärksten?|Ein Zweig als Wandgestaltung",
    "Aus Teilen wird etwas Neues|Hannah Höch arbeitete mit Fotomontage und Collage. Sie schnitt Bilder aus ihrem ursprünglichen Zusammenhang heraus und setzte sie neu zusammen. Dadurch konnten sich Gesichter, Körper und ihre Bedeutung verändern.|Verschiebe die drei Bildstreifen gegeneinander. Such eine Kombination, die vorher nicht geplant war.|Papierausschnitte als Collage",
    "Noch ein Stück näher|Georgia O’Keeffe malte Blumen oft stark vergrößert. Ein kleines Blütendetail konnte so fast das ganze Bild ausfüllen. Linien, Rundungen und Farbübergänge bekommen dadurch mehr Aufmerksamkeit.|Zoome in die gezeichnete Blüte hinein. Wann siehst du keine Blume mehr, sondern nur noch Linien und Flächen?|Ein stark vergrößertes Blütendetail",
    "Acht ruhige Linien|Agnes Martin arbeitete mit feinen Linien, Rastern und zurückhaltenden Farben. Ihre Bilder wirken zunächst gleichmäßig. Aus der Nähe zeigen sich kleine Unterschiede in den gezeichneten Linien.|Ziehe acht Linien, langsam und ohne Lineal. Schau danach auf die kleinen Unterschiede. Du kannst auch auf Papier zeichnen.|Linien mit kleinen Unterschieden",
    "Ein Ort für alle|Niki de Saint Phalle schuf farbige Skulpturen und große begehbare Anlagen. Menschen konnten ihre Kunst also auch als Umgebung erleben, statt sie nur von außen anzuschauen.|Gestalte einen kleinen öffentlichen Platz. Füge Sitzplätze, einen stufenlosen Zugang und einen Treffpunkt hinzu. Was ist dir wichtig?|Ein farbiges Tor zu einem Platz"
  ],
  "en": [
    "Finding a rhythm|Sophie Taeuber-Arp worked with textiles, puppets, furniture and architecture. Her geometric forms appear on small objects as well as across entire rooms.|Tap the shapes to turn them. Find a rhythm you like, then let one shape break the pattern.|Shapes and rhythm",
    "A photograph without a camera|Anna Atkins brought botany and photography together. She placed algae directly on light-sensitive paper. After exposure and washing, their pale outlines remained against a blue ground.|Place three leaves on the paper, then press “Expose”. The paper stays pale where the leaves covered it.|Leaves on blue paper",
    "The same pink, a different feeling|Sonia Delaunay made paintings, textiles, clothes and furnishings. She explored how colours affect one another: the same shade can look different in a different setting.|Change the colour around the pink. The pink itself stays the same. Which background makes it look brightest to you?|Coloured circles and fabric strips",
    "A pattern for a whole wall|Mathilde Flögl designed wallpapers, textiles and books for the Wiener Werkstätte. With wallpaper, the individual motif matters, but so does the way it repeats across a wall.|Change the distance between the motifs, then try staggered rows. Which wallpaper would you choose for your own home?|A wallpaper sketch",
    "Space between colours|Alma Thomas built abstract paintings from many small strokes of colour. The pale ground often shows between them. Those gaps are as much a part of the picture as the paint.|Change the gaps between the colour marks. When does the surface feel calm or lively? Choose your favourite spacing.|Colour marks with gaps",
    "What does a feeling look like?|Hilma af Klint developed abstract images from shapes, colours and signs. She wanted to depict forces and connections that cannot be seen directly. Her spiritual beliefs played an important part.|Choose a colour and a shape for your mood today. Name your little picture without naming the feeling itself.|A notebook of signs",
    "A small motif travels|Felice Rix-Ueno designed fabrics, wallpapers and embroidery for the Wiener Werkstätte. Small plant forms and imaginative motifs recur in her designs. She later lived and taught in Japan.|Choose a star, feather or tassel. Place it in three spots. You can use a mouse, your finger or the keyboard.|A star, feather and tassel",
    "What caught your eye?|Berthe Morisot painted people in homes, gardens and parks. As an Impressionist, she was interested in changing light and the fleeting impression of a scene.|Look at the drawn corner of a room. Hide it, then answer the question from memory.|A window and the light in a room",
    "A vase with character|Vally Wieselthier worked in ceramics in Vienna and later in the United States. Her vessels and figures combine strong shapes with a loose, lively approach to form.|Change the body and opening of the vase. It does not have to be symmetrical. Which shape would you like to hold?|A freely drawn vase",
    "A card for someone|Mela Koehler designed postcards and fashion illustrations. She brought figures, clothing and lettering together within a small format. Many of her designs were made for the Wiener Werkstätte.|Write a short message and choose a drawn border. If you like your card, you can download or share it.|An illustrated postcard",
    "A line in space|Ruth Asawa’s wire sculptures are open: you see the form and look through it at the same time. Their many loops create a surface without closing off the space inside.|Change the number of wire loops. Watch how the spaces between them change.|A form made of wire loops",
    "A self-portrait without a mirror|Paula Modersohn-Becker painted women, children and many self-portraits, moving away from the idealised depictions common at the time. Her own face and body became recurring subjects.|Finish the three sentences. Leave out your job and your appearance. What else tells us something about you?|A mirror and a blank page",
    "A form you can unfold|Lygia Clark made changing an artwork part of experiencing it. In her hinged metal works, the person unfolding the object also helps give it its form.|Open and close the connected panels. Look from the side and from above. Which position surprises you?|Connected folding panels",
    "Joining things with thread|Pacita Abad combined painting with textile techniques. She stitched, padded and added materials to her painted canvases, giving their surfaces physical depth.|Join the coloured patches with stitches. Tap the small connections. Leave at least one seam open.|A stitched piece of fabric",
    "A costume that stands out|Maria Likarz-Strauss designed fabrics, fashion and printed graphics for the Wiener Werkstätte, including carnival costumes. Clothing was both something to wear and a subject for images.|Choose a headpiece, top and skirt for a paper costume. Would you wear it to a party?|A paper costume",
    "A room you remember|Louise Bourgeois returned to memories and relationships in her drawings, sculptures and prints. Houses and rooms could take on meanings tied to personal experience.|Select the squares to sketch the floor plan of a familiar room. Which parts come to mind first?|A house and a thread",
    "A rather strange story|Leonora Carrington was a painter and writer. Familiar things share her pictures and stories with invented creatures. Things that do not belong together in everyday life can seem perfectly at home there.|Choose three parts for the start of a story. Pick the strangest combination. You do not have to explain it.|A travelling teapot",
    "Which cup would you use?|Jutta Sika designed tableware and graphic works. The MAK holds a model of a cup and saucer from her design. An everyday object like this makes the relationship between form and use tangible.|Move the handle to the left or right and change its size. Think about how you would actually hold the cup.|A cup and saucer",
    "Shorter journeys in the kitchen|Margarete Schütte-Lihotzky planned the Frankfurt Kitchen for small flats. Its layout was intended to simplify work and shorten distances. The MAK holds a reconstruction made with her involvement.|Rearrange the pantry, sink, worktop and cooker. Compare the route for collecting, washing, chopping and cooking.|A small kitchen seen from above",
    "A picture moves into a room|Lotte Calm designed ceramics, fabric patterns, toys and wall paintings for the Wiener Werkstätte. A motif might appear on a small object or become part of a whole room.|Place the drawn branch on the wall, floor or ceiling. Where does it change the room most?|A branch as a wall decoration",
    "Making something new from pieces|Hannah Höch worked with photomontage and collage. She cut images out of their original setting and put them together again, changing faces, bodies and what they might mean.|Slide the three picture strips past each other. Find a combination you did not plan.|Paper fragments in a collage",
    "A little closer|Georgia O’Keeffe often painted flowers on a greatly enlarged scale. A small detail could fill almost the entire picture, drawing attention to lines, curves and transitions in colour.|Zoom into the drawn flower. When do you stop seeing a flower and start seeing lines and shapes?|An enlarged flower detail",
    "Eight quiet lines|Agnes Martin worked with fine lines, grids and restrained colours. Her paintings may look regular at first. Up close, small variations in the drawn lines become visible.|Draw eight lines slowly, without a ruler. Then look at the small differences. You can also draw on paper.|Lines with small differences",
    "A place for everyone|Niki de Saint Phalle made colourful sculptures and large environments that people could enter. Her work could be experienced as a place, as well as viewed as an object.|Design a small public space. Add seating, step-free access and a meeting point. What matters to you?|A colourful gateway to a square"
  ],
  "fr": [
    "Trouver un rythme|Sophie Taeuber-Arp travaillait le textile, les marionnettes, le mobilier et l’architecture. Ses formes géométriques se retrouvent sur de petits objets comme dans des pièces entières.|Touche les formes pour les tourner. Trouve un rythme qui te plaît, puis laisse une forme sortir du rang.|Des formes et du rythme",
    "Une photo sans appareil|Anna Atkins associait botanique et photographie. Elle posait des algues directement sur du papier photosensible. Après exposition et rinçage, leurs silhouettes claires apparaissaient sur fond bleu.|Pose trois feuilles sur le papier, puis appuie sur « Exposer ». Le papier reste clair sous les feuilles.|Des feuilles sur du papier bleu",
    "Le même rose, une autre impression|Sonia Delaunay créait des peintures, des tissus, des vêtements et des objets pour la maison. Elle explorait les relations entre les couleurs : une même teinte peut sembler différente selon ce qui l’entoure.|Change la couleur autour du rose. Le rose reste identique. Sur quel fond te semble-t-il le plus lumineux ?|Des cercles colorés et des bandes de tissu",
    "Un motif pour tout un mur|Mathilde Flögl dessinait notamment des papiers peints, des textiles et des livres pour la Wiener Werkstätte. Sur un mur, un motif compte autant par sa forme que par sa répétition.|Change l’espace entre les motifs, puis essaie des rangées décalées. Quel papier peint choisirais-tu chez toi ?|Une esquisse de papier peint",
    "De l’espace entre les couleurs|Alma Thomas composait ses peintures abstraites avec de petites touches de couleur. Le fond clair reste souvent visible entre elles. Ces espaces font autant partie du tableau que la peinture.|Change les espaces entre les touches. Quand la surface paraît-elle calme ou animée ? Choisis l’écart qui te plaît.|Des touches de couleur espacées",
    "À quoi ressemble une émotion ?|Hilma af Klint composait des images abstraites avec des formes, des couleurs et des signes. Elle cherchait à représenter des forces et des liens invisibles, en s’appuyant notamment sur ses convictions spirituelles.|Choisis une couleur et une forme pour ton humeur du jour. Donne un titre à l’image sans nommer directement cette émotion.|Un carnet de signes",
    "Un petit motif voyage|Felice Rix-Ueno créait des tissus, des papiers peints et des broderies pour la Wiener Werkstätte. Des formes végétales et des motifs imaginatifs reviennent dans ses dessins. Elle a ensuite vécu et enseigné au Japon.|Choisis une étoile, une plume ou un pompon. Pose ce motif à trois endroits. Souris, doigt ou clavier : tout fonctionne.|Une étoile, une plume et un pompon",
    "Qu’as-tu remarqué ?|Berthe Morisot peignait des personnes chez elles, dans des jardins ou des parcs. Impressionniste, elle s’intéressait aux changements de lumière et à l’impression fugitive d’une scène.|Regarde ce coin de pièce dessiné. Cache-le, puis réponds à la question de mémoire.|Une fenêtre et la lumière dans une pièce",
    "Un vase qui a du caractère|Vally Wieselthier travaillait la céramique à Vienne, puis aux États-Unis. Ses récipients et ses figures associent des formes affirmées à un modelage libre et expressif.|Change le corps et l’ouverture du vase. Il n’a pas besoin d’être symétrique. Quelle forme aimerais-tu prendre en main ?|Un vase dessiné librement",
    "Une carte pour quelqu’un|Mela Koehler dessinait des cartes postales et des images de mode. Sur un petit format, elle réunissait personnages, vêtements et lettres. Elle a réalisé de nombreux dessins pour la Wiener Werkstätte.|Écris un petit mot et choisis une bordure dessinée. Si ta carte te plaît, tu peux la télécharger ou la partager.|Une carte postale illustrée",
    "Une ligne dans l’espace|Les sculptures en fil métallique de Ruth Asawa sont ajourées : on voit la forme tout en regardant à travers elle. Les boucles dessinent une surface sans fermer l’espace intérieur.|Change le nombre de boucles. Observe comment les espaces entre les fils se transforment.|Une forme en boucles de fil",
    "Un autoportrait sans miroir|Paula Modersohn-Becker a peint des femmes, des enfants et de nombreux autoportraits, en s’éloignant des représentations idéalisées de son époque. Son visage et son corps sont des sujets récurrents.|Complète les trois phrases. Ne parle ni de ton métier ni de ton apparence. Qu’est-ce qui raconte autre chose de toi ?|Un miroir et une page blanche",
    "Une forme à déplier|Lygia Clark faisait de la transformation d’une œuvre une part de l’expérience artistique. Dans ses sculptures articulées, la personne qui déplie l’objet participe aussi à sa forme.|Ouvre et ferme les panneaux reliés. Regarde-les de côté et d’en haut. Quelle position te surprend ?|Des panneaux reliés qui se plient",
    "Relier avec un fil|Pacita Abad associait la peinture aux techniques textiles. Elle cousait, rembourrait et ajoutait des matières à ses toiles peintes, donnant du relief à leur surface.|Relie les morceaux de tissu avec des points. Touche les petites jonctions. Laisse au moins une couture ouverte.|Un morceau de tissu cousu",
    "Un costume qui se remarque|Maria Likarz-Strauss créait des tissus, de la mode et des imprimés pour la Wiener Werkstätte, dont des costumes de carnaval. Le vêtement était à la fois un objet à porter et un sujet d’image.|Choisis une coiffe, un haut et une jupe pour un costume de papier. Le porterais-tu pour une fête ?|Un costume de papier",
    "Une pièce dont tu te souviens|Louise Bourgeois revenait aux souvenirs et aux relations dans ses dessins, ses sculptures et ses gravures. Les maisons et les pièces pouvaient évoquer des expériences personnelles.|Choisis les cases pour esquisser le plan d’une pièce familière. Quelles parties te viennent en premier ?|Une maison et un fil",
    "Une histoire plutôt étrange|Leonora Carrington était peintre et écrivaine. Dans ses images et ses récits, des choses familières côtoient des créatures inventées. Ce qui ne va pas ensemble au quotidien peut y cohabiter tout naturellement.|Choisis trois éléments pour commencer une histoire. Prends la combinaison la plus étrange. Tu n’as pas besoin de l’expliquer.|Une théière en voyage",
    "Dans quelle tasse boire ?|Jutta Sika créait de la vaisselle et des œuvres graphiques. Le MAK conserve un modèle de tasse et de soucoupe d’après son dessin. Cet objet quotidien permet d’observer le lien entre forme et usage.|Place l’anse à gauche ou à droite et change sa taille. Pense à la façon dont tu tiendrais vraiment la tasse.|Une tasse et sa soucoupe",
    "Moins de pas dans la cuisine|Margarete Schütte-Lihotzky a conçu la cuisine de Francfort pour de petits logements. Son agencement devait faciliter le travail et raccourcir les déplacements. Le MAK en conserve une reconstitution réalisée avec sa participation.|Réorganise le garde-manger, l’évier, le plan de travail et la cuisinière. Compare le trajet pour prendre, laver, couper et cuire.|Une petite cuisine vue d’en haut",
    "Un dessin entre dans une pièce|Lotte Calm créait des céramiques, des motifs textiles, des jouets et des peintures murales pour la Wiener Werkstätte. Un motif pouvait apparaître sur un petit objet ou participer à l’ensemble d’une pièce.|Place la branche dessinée au mur, au sol ou au plafond. Où change-t-elle le plus la pièce ?|Une branche comme décor mural",
    "Du nouveau avec des morceaux|Hannah Höch pratiquait le photomontage et le collage. Elle découpait des images pour les sortir de leur contexte et les assembler autrement, transformant les visages, les corps et leur sens.|Décale les trois bandes de l’image. Trouve une combinaison que tu n’avais pas prévue.|Des morceaux de papier en collage",
    "Encore un peu plus près|Georgia O’Keeffe peignait souvent des fleurs très agrandies. Un petit détail pouvait occuper presque tout le tableau, attirant l’attention sur les lignes, les courbes et les passages de couleur.|Zoome dans la fleur dessinée. À quel moment ne vois-tu plus une fleur, mais des lignes et des surfaces ?|Un détail de fleur agrandi",
    "Huit lignes tranquilles|Agnes Martin travaillait avec des lignes fines, des grilles et des couleurs discrètes. Ses tableaux semblent réguliers au premier regard. De près, de petites variations apparaissent dans le tracé.|Trace huit lignes lentement, sans règle. Regarde ensuite leurs petites différences. Tu peux aussi dessiner sur papier.|Des lignes légèrement différentes",
    "Un lieu pour tout le monde|Niki de Saint Phalle créait des sculptures colorées et de grands ensembles où l’on pouvait entrer. Son art pouvait ainsi se vivre comme un lieu, autant que se regarder comme un objet.|Imagine une petite place publique. Ajoute des sièges, un accès sans marches et un point de rencontre. Qu’est-ce qui compte pour toi ?|Une porte colorée vers une place"
  ]
};

const UI = {
  "de": {
    "skip": "Zum Inhalt",
    "nav": "Navigation",
    "idea": "So geht’s",
    "post": "Kunstpost",
    "language": "Sprache",
    "subtitle": "24 Künstlerinnen. Ein Kunst-Advent von Salon Format.",
    "intro": "24 Künstlerinnen, kurze Geschichten und kleine Experimente mit Farbe, Form und Raum. Kostenlos und ohne Anmeldung.",
    "open": "Zum Haus",
    "dates": "1.–24. Dezember",
    "preview": "Vorschau: Alle 24 Türen sind offen.",
    "door": "Tür",
    "visited": "entdeckt",
    "houseLabel": "Ein Haus mit 24 Fenstern zum Öffnen",
    "houseNote": "Ein Haus für 24 Künstlerinnen und deine eigenen Ideen.",
    "howTitle": "So funktioniert der Kalender",
    "howText": "Vom 1. bis 24. Dezember wird jeden Tag ein Fenster zugänglich. Die früheren bleiben offen. Hinter jedem Fenster lernst du eine Künstlerin kennen und kannst selbst etwas ausprobieren.",
    "howIdeas": "Dein Ergebnis gefällt dir? Du kannst es herunterladen oder teilen. Es gibt kein Konto und keine Sammlung. Wenn du das Fenster verlässt, wird dein Ergebnis nicht aufbewahrt.",
    "postTitle": "Jeden Morgen ein Fenster per E-Mail.",
    "postText": "Geplant ist eine kurze E-Mail mit einer Künstlerin und dem Link zu ihrem Fenster. Die Anmeldung ist noch nicht freigeschaltet.",
    "mailButton": "Eine Beispiel-Mail ansehen",
    "demo": "E-Mail-Anmeldung und Versand sind in dieser Testversion noch nicht aktiv.",
    "shareTitle": "Wem könnte das auch gefallen?",
    "shareText": "Kennst du jemanden, dem Kunst und Zeichnen Freude machen? Schick den Kalender mit einem persönlichen Gruß weiter.",
    "shareButton": "Den Kalender weitergeben",
    "footer": "Ein Kunst-Advent von",
    "footerNote": "Eigene digitale Zeichnungen · 2026",
    "back": "Zurück zum Haus",
    "source": "Mehr dazu bei",
    "original": "Eigene Zeichnung zum Thema – kein Werk der Künstlerin.",
    "reset": "Noch einmal anfangen",
    "needInput": "Probier zuerst etwas aus oder schreib ein paar Worte.",
    "next": "Nächste Tür",
    "previous": "Vorige Tür",
    "download": "Herunterladen",
    "mailTitle": "So könnte die Kunstpost aussehen.",
    "mailDate": "1. Dezember · Tür 1",
    "mailSubject": "Heute: ein paar Formen und Sophie Taeuber-Arp.",
    "hello": "Guten Morgen,",
    "mailText": "Sophie Taeuber-Arp hat Teppiche, Marionetten und ganze Räume gestaltet. Heute probieren wir aus, wie aus einfachen Formen ein Rhythmus wird. Hast du zwei Minuten?",
    "mailEnd": "Bis morgen,",
    "mailUnsubscribe": "In der echten E-Mail kannst du dich hier jederzeit abmelden.",
    "mailFlow": "Geplant: Adresse eintragen, Anmeldung per Link bestätigen und vom 1. bis 24. Dezember täglich eine neue Tür bekommen. Du kannst den Kalender auch ohne E-Mails nutzen.",
    "shareHeading": "Ein kleiner Gruß und 24 Türen.",
    "greeting": "Deine Nachricht",
    "defaultGreeting": "Ich habe diesen kostenlosen Kunst-Adventskalender entdeckt und musste an dich denken. Jeden Tag eine Künstlerin und ein kleines Experiment. Vielleicht hast du Lust mitzumachen?",
    "copy": "Gruß und Link kopieren",
    "copyNote": "Es wird nichts verschickt. Du fügst den Text selbst in eine Nachricht ein.",
    "copied": "Kopiert. Du kannst den Text jetzt in deine Nachricht einfügen.",
    "copyFallback": "Bitte kopiere den markierten Text mit der Kopierfunktion deines Geräts.",
    "makCollection": "In der MAK-Sammlung. Ob das Objekt gerade zu sehen ist, steht auf der Museumsseite.",
    "makPast": "MAK-Bezug: eine frühere Ausstellung, keine Angabe zur aktuellen Präsentation.",
    "makCurrent": "MAK: „Vally Wieselthier. Bild und Ton“, 29.4.2026–10.1.2027. Besuchsinformationen bitte beim Museum prüfen.",
    "independent": "Unabhängiger Entwurf von Salon Format. Kein Auftrag und keine Kooperation mit dem MAK.",
    "directory": "Die Künstlerinnen – mit Quellen",
    "directoryNote": "Hier kannst du die Namen schon nachlesen. Die Experimente bleiben hinter den Fenstern.",
    "choose": "Auswählen",
    "spacing": "Abstand",
    "offset": "Versetzte Reihen",
    "expose": "Belichten",
    "leaf": "Blatt hinzufügen",
    "reveal": "Bild wieder ansehen",
    "hide": "Bild ausblenden",
    "memoryQuestion": "Was stand auf dem Tisch?",
    "correct": "Genau, eine Zitrone. Schau gern noch einmal hin.",
    "incorrect": "Es war eine Zitrone. Schau noch einmal ins Bild.",
    "belly": "Bauch",
    "opening": "Öffnung",
    "asymmetry": "Asymmetrie",
    "border": "Rand",
    "greetingPlaceholder": "Ein kleiner Gruß …",
    "loops": "Schlaufen",
    "fold": "Aufklappen",
    "view": "Ansicht",
    "side": "Seitlich",
    "above": "Von oben",
    "stitch": "Naht",
    "head": "Kopfform",
    "top": "Oberteil",
    "skirt": "Rock",
    "room": "Raumfeld",
    "handle": "Henkel",
    "left": "Links",
    "right": "Rechts",
    "size": "Größe",
    "route": "Weglänge",
    "steps": "Einheiten",
    "wall": "Wand",
    "floor": "Boden",
    "ceiling": "Decke",
    "strip": "Bildstreifen",
    "zoom": "Vergrößern",
    "lines": "Linien",
    "drawing": "Zeichenfläche: mit Maus oder Finger zeichnen. Papier geht natürlich auch.",
    "seating": "Sitzplätze",
    "access": "Zugang ohne Stufen",
    "meeting": "Treffpunkt",
    "namePicture": "Ein Name für dein Bild",
    "moodShape": "Form",
    "stamp": "Motiv setzen",
    "turn": "Form drehen",
    "moveLeft": "Nach links",
    "moveRight": "Nach rechts",
    "resultShare": "Ergebnis teilen",
    "noStorage": "Wenn du dein Ergebnis behalten möchtest, kannst du es herunterladen oder teilen. Hier wird nichts gespeichert.",
    "shareFallback": "Lade dein Bild herunter und verschicke es mit einer App deiner Wahl. Den Link zu diesem Fenster kannst du hier kopieren.",
    "copyTask": "Link zu diesem Fenster kopieren",
    "shareResultText": "Mein kleines Experiment zu",
    "resetNote": "Wenn du dieses Fenster verlässt, wird dein Ergebnis verworfen.",
    "calendar": "Zum Kalender",
    "before": "Ab 1. Dezember täglich ein neues Atelier.",
    "during": "Die bisherigen Tage bleiben für dich offen.",
    "closed": "Noch geschlossen",
    "available": "Öffnen",
    "previewMode": "Testvorschau",
    "previewLabel": "Tag im Dezember",
    "previewExit": "Vorschau beenden",
    "previewEnter": "Kalender vorab testen",
    "lockedTitle": "Dieses Fenster ist noch zu.",
    "lockedText": "Es öffnet sich am {day}. Dezember. Bis dahin kannst du die bisherigen Tage besuchen.",
    "whyTitle": "Über den Kalender",
    "whyText": "24 Künstlerinnen, die mit Farbe, Formen, Stoff und Raum gearbeitet haben. Jeden Tag lernst du eine von ihnen näher kennen – mit einer kurzen Geschichte, einem kleinen Experiment und Links zu den Museen.",
    "whyBenefit": "Du kannst Farben vergleichen, Formen verändern oder selbst zeichnen. Dabei merkst du direkt, was sich verändert. Du brauchst keine Vorkenntnisse und kannst so lange bleiben, wie du magst.",
    "sources": "Quellen & weiterlesen",
    "rights": "Die Museumslinks führen zu den Quellen unserer Texte. Für Bilder und Texte auf diesen Seiten gelten die jeweiligen Nutzungsbedingungen. Die Zeichnungen und Experimente hier wurden für diesen Kalender erstellt.",
    "openToday": "Das heutige Fenster öffnen",
    "coverNote": "1.–24. Dezember · Kostenlos · Ohne Anmeldung",
    "sceneHint": "Wähle ein Fenster. Die Nummern führen dich durch den Dezember.",
    "pauseMotion": "Bewegung pausieren",
    "resumeMotion": "Bewegung einschalten",
    "soundOn": "Ton einschalten",
    "soundOff": "Ton ausschalten",
    "roomLabel": "Atelier",
    "entering": "Das Atelier öffnet sich …"
  },
  "en": {
    "skip": "Skip to content",
    "nav": "Navigation",
    "idea": "How it works",
    "post": "Art by email",
    "language": "Language",
    "subtitle": "24 women artists. An art Advent calendar by Salon Format.",
    "intro": "24 women artists, short stories and small experiments with colour, shape and space. Free, with no sign-up.",
    "open": "Go to the house",
    "dates": "1–24 December",
    "preview": "Preview: all 24 doors are open.",
    "door": "Door",
    "visited": "discovered",
    "houseLabel": "One house with 24 windows to open",
    "houseNote": "A little Paris, Brussels and Vienna. And room for your ideas.",
    "howTitle": "How the calendar works",
    "howText": "A new window becomes available every day from 1 to 24 December. Earlier windows stay open. Meet an artist behind each one and try something yourself.",
    "howIdeas": "Like what you made? Download or share it. There is no account or collection. Your result is discarded when you leave this window.",
    "postTitle": "A window in your inbox each morning.",
    "postText": "Planned: a short email introducing an artist and linking to her window. Sign-up is not open yet.",
    "mailButton": "See an example email",
    "demo": "Email sign-up and sending are not connected in this test version.",
    "shareTitle": "Who else might enjoy this?",
    "shareText": "Know someone who enjoys art and drawing? Send them the calendar with a personal note.",
    "shareButton": "Share the calendar",
    "footer": "An art Advent calendar by",
    "footerNote": "Original digital drawings · 2026",
    "back": "Back to the house",
    "source": "Find out more at",
    "original": "An original drawing about the subject, not a work by the artist.",
    "reset": "Start again",
    "needInput": "Try something first, or write a few words.",
    "next": "Next door",
    "previous": "Previous door",
    "download": "Download",
    "mailTitle": "Here is an example of the art email.",
    "mailDate": "1 December · Door 1",
    "mailSubject": "Today: a few shapes and Sophie Taeuber-Arp.",
    "hello": "Good morning,",
    "mailText": "Sophie Taeuber-Arp designed rugs, puppets and entire rooms. Today we are trying out how simple shapes can make a rhythm. Got two minutes?",
    "mailEnd": "See you tomorrow,",
    "mailUnsubscribe": "The real email will have a link here to unsubscribe at any time.",
    "mailFlow": "Planned: enter your email, confirm through a link and get a new door each day from 1 to 24 December. You can also use the calendar without emails.",
    "shareHeading": "A little message and 24 doors.",
    "greeting": "Your message",
    "defaultGreeting": "I found this free art Advent calendar and thought of you. A woman artist and a small experiment every day. Fancy joining in?",
    "copy": "Copy message and link",
    "copyNote": "Nothing is sent. Paste the text into a message yourself.",
    "copied": "Copied. You can paste it into your message now.",
    "copyFallback": "Please copy the selected text using your device’s copy command.",
    "makCollection": "In the MAK collection. Check the museum page to see whether the object is currently on display.",
    "makPast": "MAK connection: a past exhibition, not a current display listing.",
    "makCurrent": "MAK: “Vally Wieselthier. Bild und Ton”, 29 April 2026–10 January 2027. Check visiting details with the museum.",
    "independent": "An independent Salon Format concept. Not commissioned by or made in partnership with the MAK.",
    "directory": "The artists — with sources",
    "directoryNote": "You can read the names here in advance. The experiments stay behind the windows.",
    "choose": "Choose",
    "spacing": "Spacing",
    "offset": "Staggered rows",
    "expose": "Expose",
    "leaf": "Add a leaf",
    "reveal": "Show the picture again",
    "hide": "Hide the picture",
    "memoryQuestion": "What was on the table?",
    "correct": "Yes, a lemon. Have another look if you like.",
    "incorrect": "It was a lemon. Take another look at the picture.",
    "belly": "Body",
    "opening": "Opening",
    "asymmetry": "Asymmetry",
    "border": "Border",
    "greetingPlaceholder": "A little message …",
    "loops": "Loops",
    "fold": "Unfold",
    "view": "View",
    "side": "From the side",
    "above": "From above",
    "stitch": "Seam",
    "head": "Headpiece",
    "top": "Top",
    "skirt": "Skirt",
    "room": "Room square",
    "handle": "Handle",
    "left": "Left",
    "right": "Right",
    "size": "Size",
    "route": "Route length",
    "steps": "units",
    "wall": "Wall",
    "floor": "Floor",
    "ceiling": "Ceiling",
    "strip": "Picture strip",
    "zoom": "Zoom",
    "lines": "Lines",
    "drawing": "Drawing area: use your mouse or finger. Paper works too.",
    "seating": "Seating",
    "access": "Step-free access",
    "meeting": "Meeting point",
    "namePicture": "A name for your picture",
    "moodShape": "Shape",
    "stamp": "Place a motif",
    "turn": "Turn shape",
    "moveLeft": "Move left",
    "moveRight": "Move right",
    "resultShare": "Share your result",
    "noStorage": "Keep your result by downloading or sharing it. Nothing is stored here.",
    "shareFallback": "Download your picture and send it through an app of your choice. You can also copy this window’s link here.",
    "copyTask": "Copy this window’s link",
    "shareResultText": "My little experiment about",
    "resetNote": "Your result is discarded when you leave this window.",
    "calendar": "Back to the calendar",
    "before": "A new atelier each day from 1 December.",
    "during": "Earlier days remain open for you.",
    "closed": "Not open yet",
    "available": "Open",
    "previewMode": "Test preview",
    "previewLabel": "Day in December",
    "previewExit": "Leave preview",
    "previewEnter": "Try the calendar early",
    "lockedTitle": "This window is still closed.",
    "lockedText": "It opens on {day} December. You can visit the earlier days while you wait.",
    "whyTitle": "About the calendar",
    "whyText": "24 women artists who worked with colour, shape, textiles and space. Get to know one each day through a short story, a small experiment and links to museums.",
    "whyBenefit": "Compare colours, change shapes or draw for yourself, and see what changes as you go. No background knowledge is needed. Stay as long as you like.",
    "sources": "Sources & further reading",
    "rights": "The museum links lead to the sources for our texts. Images and texts on those pages have their own terms of use. The drawings and experiments here were created for this calendar.",
    "openToday": "Open today’s window",
    "coverNote": "1–24 December · Free · No sign-up",
    "sceneHint": "Choose a window. The numbers take you through December.",
    "pauseMotion": "Pause motion",
    "resumeMotion": "Turn motion on",
    "soundOn": "Turn sound on",
    "soundOff": "Turn sound off",
    "roomLabel": "Atelier",
    "entering": "The atelier is opening …"
  },
  "fr": {
    "skip": "Aller au contenu",
    "nav": "Navigation",
    "idea": "Comment ça marche",
    "post": "La lettre d’art",
    "language": "Langue",
    "subtitle": "24 artistes femmes. Un calendrier de l’Avent par Salon Format.",
    "intro": "24 artistes, des histoires courtes et de petites expériences avec la couleur, les formes et l’espace. Gratuit et sans inscription.",
    "open": "Voir la maison",
    "dates": "Du 1er au 24 décembre",
    "preview": "Aperçu : les 24 portes sont ouvertes.",
    "door": "Porte",
    "visited": "découvertes",
    "houseLabel": "Une maison avec 24 fenêtres à ouvrir",
    "houseNote": "Un peu de Paris, de Bruxelles et de Vienne. Et de la place pour tes idées.",
    "howTitle": "Comment fonctionne le calendrier",
    "howText": "Une nouvelle fenêtre s’ouvre chaque jour du 1er au 24 décembre. Les précédentes restent accessibles. Derrière chacune, découvre une artiste et essaie quelque chose à ton tour.",
    "howIdeas": "Ton résultat te plaît ? Télécharge-le ou partage-le. Il n’y a ni compte ni collection. Ton résultat disparaît quand tu quittes cette fenêtre.",
    "postTitle": "Une fenêtre dans ta boîte mail chaque matin.",
    "postText": "Prévu : un court mail pour découvrir une artiste et accéder à sa fenêtre. L’inscription n’est pas encore ouverte.",
    "mailButton": "Voir un exemple de mail",
    "demo": "L’inscription et l’envoi des mails ne sont pas encore actifs dans cette version test.",
    "shareTitle": "À qui ça pourrait plaire aussi ?",
    "shareText": "Tu connais quelqu’un qui aime l’art et le dessin ? Envoie-lui le calendrier avec un petit mot personnel.",
    "shareButton": "Partager le calendrier",
    "footer": "Un calendrier de l’Avent artistique par",
    "footerNote": "Dessins numériques originaux · 2026",
    "back": "Retour à la maison",
    "source": "En savoir plus auprès de",
    "original": "Un dessin original sur le sujet, pas une œuvre de l’artiste.",
    "reset": "Recommencer",
    "needInput": "Essaie d’abord quelque chose ou écris quelques mots.",
    "next": "Porte suivante",
    "previous": "Porte précédente",
    "download": "Télécharger",
    "mailTitle": "Voici un exemple de la lettre d’art.",
    "mailDate": "1er décembre · Porte 1",
    "mailSubject": "Aujourd’hui : quelques formes et Sophie Taeuber-Arp.",
    "hello": "Bonjour,",
    "mailText": "Sophie Taeuber-Arp a créé des tapis, des marionnettes et des pièces entières. Aujourd’hui, on essaie de trouver un rythme avec des formes simples. Tu as deux minutes ?",
    "mailEnd": "À demain,",
    "mailUnsubscribe": "Le vrai mail proposera ici un lien pour te désinscrire à tout moment.",
    "mailFlow": "Prévu : tu saisis ton adresse, tu confirmes par un lien et tu reçois une porte par jour du 1er au 24 décembre. Tu peux aussi utiliser le calendrier sans les mails.",
    "shareHeading": "Un petit mot et 24 portes.",
    "greeting": "Ton message",
    "defaultGreeting": "J’ai découvert ce calendrier de l’Avent artistique gratuit et j’ai pensé à toi. Chaque jour, une artiste et une petite expérience. Ça te dit de participer ?",
    "copy": "Copier le message et le lien",
    "copyNote": "Rien n’est envoyé. Tu colles toi-même le texte dans un message.",
    "copied": "Copié. Tu peux maintenant le coller dans ton message.",
    "copyFallback": "Copie le texte sélectionné avec la commande de ton appareil.",
    "makCollection": "Dans la collection du MAK. La page du musée indique si l’objet est actuellement exposé.",
    "makPast": "Lien avec le MAK : une exposition passée, pas une présentation actuelle.",
    "makCurrent": "MAK : « Vally Wieselthier. Bild und Ton », du 29 avril 2026 au 10 janvier 2027. Vérifie les informations de visite auprès du musée.",
    "independent": "Un projet indépendant de Salon Format. Ni une commande ni une collaboration avec le MAK.",
    "directory": "Les artistes et les sources",
    "directoryNote": "Tu peux déjà lire les noms ici. Les expériences restent derrière les fenêtres.",
    "choose": "Choisir",
    "spacing": "Espacement",
    "offset": "Rangées décalées",
    "expose": "Exposer",
    "leaf": "Ajouter une feuille",
    "reveal": "Revoir l’image",
    "hide": "Cacher l’image",
    "memoryQuestion": "Qu’y avait-il sur la table ?",
    "correct": "Oui, un citron. Tu peux regarder encore.",
    "incorrect": "C’était un citron. Regarde à nouveau l’image.",
    "belly": "Corps",
    "opening": "Ouverture",
    "asymmetry": "Asymétrie",
    "border": "Bordure",
    "greetingPlaceholder": "Un petit mot…",
    "loops": "Boucles",
    "fold": "Déplier",
    "view": "Vue",
    "side": "De côté",
    "above": "D’en haut",
    "stitch": "Couture",
    "head": "Coiffe",
    "top": "Haut",
    "skirt": "Jupe",
    "room": "Case de la pièce",
    "handle": "Anse",
    "left": "À gauche",
    "right": "À droite",
    "size": "Taille",
    "route": "Longueur du trajet",
    "steps": "unités",
    "wall": "Mur",
    "floor": "Sol",
    "ceiling": "Plafond",
    "strip": "Bande de l’image",
    "zoom": "Agrandir",
    "lines": "Lignes",
    "drawing": "Zone de dessin : souris ou doigt. Tu peux aussi utiliser du papier.",
    "seating": "Des sièges",
    "access": "Accès sans marches",
    "meeting": "Un point de rencontre",
    "namePicture": "Un titre pour ton image",
    "moodShape": "Forme",
    "stamp": "Poser un motif",
    "turn": "Tourner la forme",
    "moveLeft": "Vers la gauche",
    "moveRight": "Vers la droite",
    "resultShare": "Partager ton résultat",
    "noStorage": "Tu peux télécharger ou partager ton résultat pour le garder. Rien n’est enregistré ici.",
    "shareFallback": "Télécharge ton image et envoie-la avec l’application de ton choix. Tu peux aussi copier le lien de cette fenêtre ici.",
    "copyTask": "Copier le lien de cette fenêtre",
    "shareResultText": "Ma petite expérience autour de",
    "resetNote": "Ton résultat disparaît quand tu quittes cette fenêtre.",
    "calendar": "Retour au calendrier",
    "before": "Un nouvel atelier par jour dès le 1er décembre.",
    "during": "Les jours précédents restent ouverts.",
    "closed": "Encore fermée",
    "available": "Ouvrir",
    "previewMode": "Aperçu de test",
    "previewLabel": "Jour de décembre",
    "previewExit": "Quitter l’aperçu",
    "previewEnter": "Tester le calendrier en avance",
    "lockedTitle": "Cette fenêtre est encore fermée.",
    "lockedText": "Elle s’ouvrira le {day} décembre. En attendant, tu peux retrouver les jours précédents.",
    "whyTitle": "À propos du calendrier",
    "whyText": "24 artistes qui ont travaillé la couleur, les formes, le textile et l’espace. Chaque jour, découvre l’une d’elles à travers une histoire courte, une petite expérience et des liens vers les musées.",
    "whyBenefit": "Compare des couleurs, transforme des formes ou dessine, puis observe ce qui change. Tu n’as pas besoin de connaissances particulières et tu peux prendre ton temps.",
    "sources": "Sources et lectures",
    "rights": "Les liens vers les musées renvoient aux sources de nos textes. Les images et les textes de ces pages ont leurs propres conditions d’utilisation. Les dessins et les expériences présentés ici ont été créés pour ce calendrier.",
    "openToday": "Ouvrir la fenêtre du jour",
    "coverNote": "Du 1er au 24 décembre · Gratuit · Sans inscription",
    "sceneHint": "Choisis une fenêtre. Les numéros te guident au fil de décembre.",
    "pauseMotion": "Mettre en pause",
    "resumeMotion": "Activer le mouvement",
    "soundOn": "Activer le son",
    "soundOff": "Couper le son",
    "roomLabel": "Atelier",
    "entering": "L’atelier s’ouvre …"
  }
};

const OPTIONS = {
  "de": {
    "colors": [
      "Blau",
      "Rot",
      "Grün",
      "Rosa",
      "Gold",
      "Tuschschwarz"
    ],
    "shapes": [
      "Kreis",
      "Dreieck",
      "Bogen"
    ],
    "motifs": [
      "Stern",
      "Feder",
      "Quaste"
    ],
    "memory": [
      "Eine Zitrone",
      "Ein Schuh",
      "Ein Buch"
    ],
    "starts": [
      "Ich mag …",
      "Ich denke oft an …",
      "Ich möchte …"
    ],
    "kitchen": [
      "Vorrat",
      "Spüle",
      "Arbeitsfläche",
      "Herd"
    ],
    "story": [
      [
        "Eine Teekanne",
        "Ein Vogel",
        "Ein Handschuh"
      ],
      [
        "träumt von",
        "versteckt",
        "besucht"
      ],
      [
        "einem Wintergarten",
        "dem Mond",
        "einem sprechenden Stuhl"
      ]
    ]
  },
  "en": {
    "colors": [
      "Blue",
      "Red",
      "Green",
      "Pink",
      "Gold",
      "Ink black"
    ],
    "shapes": [
      "Circle",
      "Triangle",
      "Arch"
    ],
    "motifs": [
      "Star",
      "Feather",
      "Tassel"
    ],
    "memory": [
      "A lemon",
      "A shoe",
      "A book"
    ],
    "starts": [
      "I enjoy …",
      "I often think about …",
      "I would like …"
    ],
    "kitchen": [
      "Pantry",
      "Sink",
      "Worktop",
      "Cooker"
    ],
    "story": [
      [
        "A teapot",
        "A bird",
        "A glove"
      ],
      [
        "dreams of",
        "hides",
        "visits"
      ],
      [
        "a winter garden",
        "the moon",
        "a talking chair"
      ]
    ]
  },
  "fr": {
    "colors": [
      "Bleu",
      "Rouge",
      "Vert",
      "Rose",
      "Or",
      "Noir encre"
    ],
    "shapes": [
      "Cercle",
      "Triangle",
      "Arche"
    ],
    "motifs": [
      "Étoile",
      "Plume",
      "Pompon"
    ],
    "memory": [
      "Un citron",
      "Une chaussure",
      "Un livre"
    ],
    "starts": [
      "J’aime…",
      "Je pense souvent à…",
      "J’aimerais…"
    ],
    "kitchen": [
      "Réserve",
      "Évier",
      "Plan de travail",
      "Cuisinière"
    ],
    "story": [
      [
        "Une théière",
        "Un oiseau",
        "Un gant"
      ],
      [
        "rêve de",
        "cache",
        "rend visite à"
      ],
      [
        "un jardin d’hiver",
        "la lune",
        "une chaise qui parle"
      ]
    ]
  }
};

const ARTIST_DETAILS = [
  {
    "de": "1918 entwarf sie Marionetten für das Stück „König Hirsch“. Auch die Figuren setzte sie aus klaren, geometrischen Formen zusammen.",
    "en": "In 1918 she designed marionettes for the play King Stag, building the figures from clear geometric shapes.",
    "fr": "En 1918, elle a conçu les marionnettes de la pièce Le Roi cerf, en assemblant des formes géométriques simples.",
    "url": "https://www.moma.org/artists/5777-sophie-taeuber-arp",
    "museum": "MoMA"
  },
  {
    "de": "Ab 1843 veröffentlichte sie ihr Algenbuch. Jeden einzelnen fotografischen Abdruck stellte sie selbst her.",
    "en": "She began publishing her book of algae in 1843, making every photographic print herself.",
    "fr": "Elle a commencé à publier son livre sur les algues en 1843, réalisant elle-même chaque tirage photographique.",
    "url": "https://www.nhm.ac.uk/discover/anna-atkins-cyanotypes-the-first-book-of-photographs.html",
    "museum": "Natural History Museum"
  },
  {
    "de": "1913 gestaltete sie mit dem Dichter Blaise Cendrars ein Buch zum Auffalten. Gedicht und Farbflächen laufen darin nebeneinander über ein langes Blatt.",
    "en": "In 1913 she made a fold-out book with the poet Blaise Cendrars. The poem and her fields of colour run side by side along one long sheet.",
    "fr": "En 1913, elle a créé un livre en accordéon avec le poète Blaise Cendrars. Le poème et ses couleurs se déploient côte à côte sur une longue feuille.",
    "url": "https://www.metmuseum.org/art/collection/search/823703",
    "museum": "The Met"
  },
  {
    "de": "Für die Firma Salubra entwickelte sie 1929 eine Tapetenkollektion mit 20 Mustern. Ihre Entwürfe waren also auch für Räume außerhalb von Ausstellungen gedacht.",
    "en": "In 1929 she developed a collection of 20 wallpaper patterns for Salubra, bringing her designs into rooms beyond the exhibition space.",
    "fr": "En 1929, elle a conçu une collection de vingt papiers peints pour Salubra. Ses motifs étaient aussi faits pour des pièces où l’on vivait au quotidien.",
    "url": "https://sammlung.mak.at/de/artist/floegl-mathilde_1316",
    "museum": "MAK"
  },
  {
    "de": "38 Jahre lang unterrichtete sie Kunst an öffentlichen Schulen in Washington, D.C. Als sie 1960 in Pension ging, widmete sie sich intensiv ihrer eigenen Malerei.",
    "en": "She taught art in Washington, D.C. public schools for 38 years. After retiring in 1960, she devoted herself to her own painting.",
    "fr": "Elle a enseigné l’art dans les écoles publiques de Washington pendant trente-huit ans. Après sa retraite en 1960, elle s’est consacrée à sa propre peinture.",
    "url": "https://americanart.si.edu/artist/alma-thomas-4778",
    "museum": "Smithsonian American Art Museum"
  },
  {
    "de": "Für ihren großen Zyklus „Die Gemälde zum Tempel“ schuf sie ab 1906 insgesamt 193 Bilder und Zeichnungen. Einzelne Formen gehören bei ihr oft zu einer viel größeren Reihe.",
    "en": "Beginning in 1906, she made 193 paintings and drawings for The Paintings for the Temple. An individual shape often belongs to a much larger series.",
    "fr": "À partir de 1906, elle a réalisé 193 peintures et dessins pour Les Peintures pour le Temple. Une forme s’inscrit souvent chez elle dans une série bien plus vaste.",
    "url": "https://www.guggenheim-bilbao.eus/en/exhibitions/hilma-af-klint",
    "museum": "Guggenheim Bilbao"
  },
  {
    "de": "In Kyoto unterrichtete sie später „Farbe und Komposition“. 1963 gründete sie mit Isaburo Ueno ein eigenes Designinstitut und lehrte dort weiter.",
    "en": "In Kyoto she later taught Colour and Composition. In 1963 she founded a design institute with Isaburo Ueno and continued teaching there.",
    "fr": "À Kyoto, elle a ensuite enseigné la couleur et la composition. En 1963, elle a fondé un institut de design avec Isaburo Ueno et y a poursuivi son enseignement.",
    "url": "https://www.mak.at/jart/prj3/mak-resp/data/uploads/MAKPressReleaseFeliceRix-Ueno_2023-11-21_1211923.pdf",
    "museum": "MAK"
  },
  {
    "de": "Sie war bei sieben der acht Ausstellungen der impressionistischen Gruppe dabei. Auch an der letzten Ausstellung 1886 war sie maßgeblich beteiligt.",
    "en": "She took part in seven of the Impressionist group’s eight exhibitions and was a driving force behind the last one in 1886.",
    "fr": "Elle a participé à sept des huit expositions du groupe impressionniste et a joué un rôle important dans l’organisation de la dernière, en 1886.",
    "url": "https://www.nationalgallery.org.uk/artists/berthe-morisot",
    "museum": "National Gallery London"
  },
  {
    "de": "Ab 1927 leitete sie die Keramikproduktion der Wiener Werkstätte. Ihre Arbeit bestand also auch darin, die Herstellung und die Entwicklung neuer Formen mitzugestalten.",
    "en": "From 1927 she led ceramic production at the Wiener Werkstätte, helping shape both the making process and the development of new forms.",
    "fr": "À partir de 1927, elle a dirigé la production de céramique de la Wiener Werkstätte, participant aussi aux procédés de fabrication et au développement de nouvelles formes.",
    "url": "https://www.mak.at/programm/ausstellungen/vally_wieselthier",
    "museum": "MAK"
  },
  {
    "de": "Im MAK liegt noch die Entwurfszeichnung zu ihrer Postkarte Nr. 641 von 1912: ein Mädchen mit einem Ball, gezeichnet mit Bleistift und Gouache.",
    "en": "The MAK holds her original design for postcard no. 641 from 1912: a girl with a ball, drawn in pencil and gouache.",
    "fr": "Le MAK conserve le dessin préparatoire de sa carte postale no 641, datée de 1912 : une fille avec un ballon, au crayon et à la gouache.",
    "url": "https://sammlung.mak.at/de/collect/postkarte-nr-641_262696",
    "museum": "MAK"
  },
  {
    "de": "Die Technik, Draht zu Schlaufen zu legen, lernte sie 1947 von einem Kunsthandwerker in Toluca in Mexiko. Dort wurden daraus Körbe gemacht. Sie entwickelte die Technik für ihre Skulpturen weiter.",
    "en": "In 1947 she learned to loop wire from a craftsperson in Toluca, Mexico, where the technique was used to make baskets. She developed it further for her sculptures.",
    "fr": "En 1947, un artisan de Toluca, au Mexique, lui a appris à former des boucles de fil métallique pour fabriquer des paniers. Elle a ensuite développé cette technique pour ses sculptures.",
    "url": "https://www.moma.org/collection/works/216304",
    "museum": "MoMA"
  },
  {
    "de": "In einem Selbstbildnis von 1907 hält sie zwei Blumen in der linken Hand. Sie schaut die Betrachtenden direkt an, statt sich als unnahbare Idealfigur darzustellen.",
    "en": "In a 1907 self-portrait she holds two flowers in her left hand and meets the viewer’s gaze directly, rather than presenting herself as an idealised figure.",
    "fr": "Dans un autoportrait de 1907, elle tient deux fleurs dans la main gauche et regarde directement le public, loin d’une représentation idéalisée.",
    "url": "https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/paula-modersohn-becker-self-portrait-with-two-flowers-in-her-raised-left-hand-1907-2/",
    "museum": "MoMA"
  },
  {
    "de": "Ihre ab 1960 entstandenen „Bichos“ bestehen aus beweglichen Metallflächen. Scharniere ermöglichen immer neue Stellungen; eine einzige richtige Ansicht gibt es nicht.",
    "en": "Her Bichos, begun in 1960, are made from movable metal planes. Hinges allow new configurations, with no single correct view.",
    "fr": "Ses Bichos, commencés en 1960, sont composés de plaques de métal mobiles. Les charnières permettent de multiples positions, sans point de vue unique.",
    "url": "https://www.moma.org/collection/works/91764",
    "museum": "MoMA"
  },
  {
    "de": "2004 bemalte sie die Alkaff-Brücke in Singapur mit mehr als 2.000 Kreisen in 55 Farben. Ihre Kunst war damit auch draußen im Alltag zu erleben.",
    "en": "In 2004 she painted Singapore’s Alkaff Bridge with more than 2,000 circles in 55 colours, bringing her art into everyday public life.",
    "fr": "En 2004, elle a peint le pont Alkaff à Singapour avec plus de 2 000 cercles en 55 couleurs, faisant entrer son art dans la vie quotidienne.",
    "url": "https://americanart.si.edu/artist/pacita-abad-7121",
    "museum": "Smithsonian American Art Museum"
  },
  {
    "de": "Für die Mappe „Mode Wien 1914/5“ entwarf und druckte sie Modebilder als Linolschnitte. Kleidung wurde bei ihr also auch zum grafischen Motiv auf Papier.",
    "en": "For the portfolio Mode Wien 1914/5 she designed and printed fashion images as linocuts, turning clothing into graphic compositions on paper.",
    "fr": "Pour le portfolio Mode Wien 1914/5, elle a dessiné et imprimé des images de mode en linogravure. Le vêtement devenait ainsi un motif graphique sur papier.",
    "url": "https://sammlung.mak.at/de/collect/modebild-einer-dame-in-langem-winterkostuem-von-maria-likarz-strauss-aus-dem-mappenwerk-mode-wien-1914-5_181954",
    "museum": "MAK"
  },
  {
    "de": "Schon als Jugendliche half sie in der Teppichrestaurierung ihrer Familie. Sie zeichnete die fehlenden Teile der Motive nach, damit beschädigte Stellen ergänzt werden konnten.",
    "en": "As a teenager she helped in her family’s tapestry restoration workshop, drawing missing parts of the images so damaged sections could be repaired.",
    "fr": "Adolescente, elle aidait dans l’atelier familial de restauration de tapisseries. Elle dessinait les parties manquantes des motifs pour permettre leur réparation.",
    "url": "https://lb.moma.org/about/chronology",
    "museum": "MoMA"
  },
  {
    "de": "In ihrem Selbstporträt von etwa 1937/38 tauchen eine Hyäne und ein schwebendes Schaukelpferd auf. Solche unerwarteten Nachbarn geben ihren Bildern ihre eigene Logik.",
    "en": "Her self-portrait of around 1937–38 includes a hyena and a floating rocking horse. Unexpected companions like these give her pictures a logic of their own.",
    "fr": "Dans son autoportrait de 1937–1938 environ, on trouve une hyène et un cheval à bascule flottant dans les airs. Ces voisinages inattendus donnent à ses images leur propre logique.",
    "url": "https://www.metmuseum.org/art/collection/search/492697",
    "museum": "The Met"
  },
  {
    "de": "Das Tassenmodell im MAK stammt aus den Jahren 1901/02 und ist bemalt. Es macht sichtbar, dass auch einem Alltagsgegenstand ein sorgfältig ausgearbeiteter Entwurf vorausgeht.",
    "en": "The painted cup model in the MAK dates from 1901–02. It shows how carefully even an everyday object could be developed before production.",
    "fr": "Le modèle de tasse peint conservé au MAK date de 1901–1902. Il rappelle qu’un objet du quotidien peut lui aussi être précédé d’un dessin et d’une mise au point soignés.",
    "url": "https://sammlung.mak.at/en/collect/tasse-mit-untertasse_6318",
    "museum": "MAK"
  },
  {
    "de": "Sie entwickelte die Küche 1926 für den Wohnbau des „Neuen Frankfurt“. Dabei ging es auch darum, Wohnraum praktisch und zu leistbaren Kosten einzurichten.",
    "en": "She developed the kitchen in 1926 for the New Frankfurt housing programme, aiming to make practical, well-planned interiors affordable.",
    "fr": "Elle a conçu cette cuisine en 1926 pour le programme de logements du Nouveau Francfort, avec l’idée d’aménager des intérieurs pratiques à un coût abordable.",
    "url": "https://blog.mak.at/zum-100-geburtstag-der-frankfurter-kueche/",
    "museum": "MAK"
  },
  {
    "de": "Sie gestaltete auch Wandmalereien für die Textilabteilung der Wiener Werkstätte in der Kärntner Straße 32. Ihre Arbeit war dort Teil des Raums, in dem Stoffe gezeigt wurden.",
    "en": "She also made wall paintings for the Wiener Werkstätte’s textile department at Kärntner Straße 32, bringing her work into the room where fabrics were displayed.",
    "fr": "Elle a aussi réalisé des peintures murales pour le département textile de la Wiener Werkstätte, au 32 Kärntner Straße. Son travail faisait ainsi partie du lieu où les tissus étaient présentés.",
    "url": "https://sammlung.mak.at/de/artist/calm-lotte_1314",
    "museum": "MAK"
  },
  {
    "de": "Von 1916 bis 1926 entwarf sie beim Ullstein Verlag auch Stickerei- und Spitzenmuster. Manche dieser gedruckten Handarbeitsvorlagen fanden später ihren Weg in ihre Collagen.",
    "en": "From 1916 to 1926 she also designed embroidery and lace patterns for Ullstein Verlag. Some printed needlework patterns later found their way into her collages.",
    "fr": "De 1916 à 1926, elle a aussi dessiné des modèles de broderie et de dentelle pour les éditions Ullstein. Certaines de ces pages imprimées se sont ensuite retrouvées dans ses collages.",
    "url": "https://www.moma.org/magazine/articles/1430",
    "museum": "MoMA"
  },
  {
    "de": "Neben Blumen malte sie auch New Yorker Hochhäuser. „Ritz Tower“ von 1928 zeigt die leuchtende Stadt bei Nacht.",
    "en": "Alongside flowers she also painted New York skyscrapers. Ritz Tower, from 1928, shows the illuminated city at night.",
    "fr": "Elle peignait aussi les gratte-ciel de New York. Ritz Tower, daté de 1928, montre la ville illuminée la nuit.",
    "url": "https://www.okeeffemuseum.org/news/georgia-okeeffes-dazzling-ritz-tower-joins-museums-collection/",
    "museum": "Georgia O’Keeffe Museum"
  },
  {
    "de": "Für „The Tree“ von 1964 zog sie mit Bleistift ein feines Raster auf eine fast zwei Meter breite Leinwand. Sie benutzte ein Metalllineal; trotzdem bleiben Spuren der zeichnenden Hand sichtbar.",
    "en": "For The Tree, from 1964, she drew a fine pencil grid on a canvas almost two metres wide. She used a metal ruler, yet traces of the drawing hand remain visible.",
    "fr": "Pour The Tree, en 1964, elle a tracé au crayon une grille fine sur une toile de presque deux mètres de large. Malgré l’usage d’une règle métallique, la main reste perceptible.",
    "url": "https://www.moma.org/collection/works/78361",
    "museum": "MoMA"
  },
  {
    "de": "An ihrem Tarotgarten in der Toskana arbeitete sie über 20 Jahre. 1998 wurde der Garten mit seinen 22 großen Skulpturen für das Publikum geöffnet.",
    "en": "She worked on her Tarot Garden in Tuscany for over 20 years. Its 22 monumental sculptures opened to the public in 1998.",
    "fr": "Elle a travaillé plus de vingt ans à son Jardin des Tarots en Toscane. Le jardin et ses vingt-deux sculptures monumentales ont ouvert au public en 1998.",
    "url": "https://www.moma.org/artists/1444-niki-de-saint-phalle",
    "museum": "MoMA"
  }
];

const ARTIST_OBSERVATIONS = [
  [
    "Schon eine gedrehte Form unterbricht die Wiederholung. Die übrigen Formen machen diesen Unterschied erst sichtbar.",
    "One rotated shape can interrupt the repetition. The surrounding shapes make that difference stand out.",
    "Une seule forme tournée peut interrompre la répétition. Les formes autour d’elle rendent cette différence visible."
  ],
  [
    "Beim Belichten werden die abgedeckten Stellen nicht blau. Die Pflanzen hinterlassen ihren Abdruck, ohne dass eine Kamera nötig ist.",
    "Covered areas stay pale during exposure. The plants leave an impression without a camera.",
    "À l’exposition, les zones couvertes restent claires. Les plantes laissent une empreinte sans appareil photo."
  ],
  [
    "Das Rosa bleibt gleich. Was sich ändert, ist die Farbe daneben und damit dein Eindruck vom Rosa.",
    "The pink itself stays the same. Its neighbouring colour changes, and with it your impression of the pink.",
    "Le rose reste le même. La couleur voisine change, et avec elle ta perception du rose."
  ],
  [
    "Der Abstand und die versetzten Reihen ändern den Rhythmus des Musters, obwohl das einzelne Motiv gleich bleibt.",
    "Spacing and staggered rows change the pattern’s rhythm, even though the motif itself stays the same.",
    "L’espacement et le décalage des rangées changent le rythme du motif, même si sa forme reste identique."
  ],
  [
    "Mit größeren Lücken wird mehr vom hellen Grund sichtbar. Bei kleinen Lücken verbinden sich die Farbstriche stärker zu einer Fläche.",
    "Larger gaps reveal more of the pale ground. Smaller gaps make the strokes read more as one surface.",
    "De grands espaces laissent voir davantage le fond clair. Des espaces plus petits réunissent les touches en une surface."
  ],
  [
    "Farbe, Form und Titel können zusammenpassen oder Verschiedenes ausdrücken. Hier bestimmst du selbst, wofür deine Zeichen stehen.",
    "Colour, shape and title can agree or suggest different things. Here you decide what your signs stand for.",
    "Couleur, forme et titre peuvent s’accorder ou suggérer des choses différentes. Ici, c’est toi qui choisis le sens de tes signes."
  ],
  [
    "Dasselbe Motiv wirkt anders, wenn du es bündelst oder über die Fläche verteilst. So wird aus einem kleinen Zeichen eine Komposition.",
    "The same motif looks different when clustered or spread out. Placement turns a small sign into a composition.",
    "Le même motif change selon qu’on le regroupe ou qu’on le disperse. Sa disposition en fait une composition."
  ],
  [
    "Beim Erinnern bleiben oft einzelne Dinge deutlicher als ihre Umgebung. Ein zweiter Blick zeigt, was du übersehen hast.",
    "We often remember some things more clearly than their surroundings. A second look reveals what we missed.",
    "On retient souvent certains détails mieux que leur environnement. Un deuxième regard montre ce qui nous avait échappé."
  ],
  [
    "Eine breitere Öffnung verändert den Eindruck der ganzen Vase. Bauch, Rand und leichte Asymmetrie wirken zusammen.",
    "A wider opening changes the impression of the whole vase. Body, rim and a little asymmetry work together.",
    "Une ouverture plus large change l’allure du vase entier. Le corps, le bord et une légère asymétrie agissent ensemble."
  ],
  [
    "Auf einer kleinen Karte teilen sich Schrift und Bild wenig Platz. Ein kurzer Gruß lässt der Zeichnung mehr Raum.",
    "On a small card, words and images share limited space. A short message leaves more room for the drawing.",
    "Sur une petite carte, texte et image se partagent peu de place. Un message court laisse respirer le dessin."
  ],
  [
    "Mehr Schlaufen verdichten die Oberfläche. Der Raum innerhalb der Form bleibt derselbe, aber du siehst weniger hindurch.",
    "More loops make the surface denser. The space inside stays the same, but you see less through it.",
    "Davantage de boucles rendent la surface plus dense. L’espace intérieur reste le même, mais on voit moins à travers."
  ],
  [
    "Auch Gewohnheiten, Erinnerungen und Wünsche können ein Porträt ergeben. Ein Selbstbild muss nicht nur beschreiben, wie jemand aussieht.",
    "Habits, memories and wishes can form a portrait too. A self-portrait can describe more than appearance.",
    "Habitudes, souvenirs et envies peuvent aussi former un portrait. Un autoportrait peut raconter autre chose que l’apparence."
  ],
  [
    "Beim Falten verändert sich nicht nur der Umriss. Manche Flächen verdecken andere, und auch der Raum dazwischen wird anders.",
    "Folding changes more than the outline. Some planes hide others, and the spaces between them change too.",
    "Le pliage ne change pas seulement le contour. Certaines faces en cachent d’autres, et les espaces entre elles se transforment aussi."
  ],
  [
    "Die Stiche machen die Verbindungen sichtbar. Eine offene Naht lässt zwei Farbflächen stärker als einzelne Teile erscheinen.",
    "The stitches make the joins visible. An open seam makes two colour fields read more as separate pieces.",
    "Les points rendent les jonctions visibles. Une couture ouverte fait davantage apparaître deux surfaces comme des morceaux distincts."
  ],
  [
    "Eine andere Kopfform oder ein anderer Rock verändern die Silhouette. Schon wenige Teile reichen für sehr unterschiedliche Kostüme.",
    "Changing the headpiece or skirt changes the silhouette. Just a few pieces can make very different costumes.",
    "Une autre coiffe ou une autre jupe change la silhouette. Quelques éléments suffisent à créer des costumes très différents."
  ],
  [
    "Ein Grundriss kann auch aus Erinnerung entstehen. Welche Stellen du auswählst, zeigt, was dir an einem Raum wichtig ist.",
    "A floor plan can begin with memory. The spaces you choose show what matters to you about a room.",
    "Un plan peut aussi naître d’un souvenir. Les cases choisies montrent ce qui compte pour toi dans une pièce."
  ],
  [
    "Die einzelnen Dinge bleiben vertraut. Erst ihre ungewöhnliche Kombination macht die Szene seltsam.",
    "Each thing remains familiar. Their unusual combination makes the scene strange.",
    "Chaque élément reste familier. C’est leur association inhabituelle qui rend la scène étrange."
  ],
  [
    "Der Henkel verändert nicht nur die Silhouette. Größe und Seite entscheiden auch darüber, wie du dir das Halten der Tasse vorstellst.",
    "The handle changes more than the silhouette. Its size and position affect how you imagine holding the cup.",
    "L’anse ne change pas seulement la silhouette. Sa taille et sa position modifient aussi la façon dont on imagine tenir la tasse."
  ],
  [
    "Hier vergleichen wir die Wege zwischen vier Stationen. Eine andere Reihenfolge kann den Ablauf verkürzen, ohne dass der Raum größer wird.",
    "Here we compare routes between four stations. A different order can shorten the route without making the room bigger.",
    "On compare ici le trajet entre quatre postes. Un autre ordre peut raccourcir le parcours sans agrandir la pièce."
  ],
  [
    "An Wand, Boden und Decke liest du denselben Zweig anders. Sein Platz entscheidet mit darüber, wie du den Raum wahrnimmst.",
    "The same branch reads differently on a wall, floor or ceiling. Its position helps shape how you perceive the room.",
    "La même branche se lit différemment sur le mur, le sol ou le plafond. Son emplacement participe à la perception de la pièce."
  ],
  [
    "Die Ausschnitte bleiben gleich, ihre Nachbarschaften ändern sich. Dadurch entstehen andere Figuren und neue Zusammenhänge.",
    "The fragments stay the same; their neighbours change. That creates different figures and new connections.",
    "Les fragments restent identiques, mais leurs voisins changent. D’autres figures et de nouveaux liens apparaissent."
  ],
  [
    "Beim Vergrößern verlierst du den Überblick über die ganze Blüte. Dafür werden einzelne Linien und Farbübergänge deutlicher.",
    "Enlarging the flower hides the overall shape but brings individual lines and colour transitions into focus.",
    "En agrandissant la fleur, on perd sa forme d’ensemble, mais les lignes et les passages de couleur deviennent plus visibles."
  ],
  [
    "Die Linien müssen nicht gleich sein, damit eine Ordnung entsteht. Kleine Abweichungen zeigen, dass eine Hand sie gezogen hat.",
    "Lines do not need to be identical to create an order. Small variations show the hand that drew them.",
    "Les lignes n’ont pas besoin d’être identiques pour former un ensemble ordonné. Leurs variations gardent la trace de la main."
  ],
  [
    "Sitzplätze, Zugang und Treffpunkt verändern, wer einen Ort wie nutzen kann. Gestaltung betrifft also auch das Zusammenleben.",
    "Seating, access and meeting points affect who can use a place and how. Design shapes shared life too.",
    "Les sièges, l’accès et le point de rencontre influencent l’usage d’un lieu. Le design concerne aussi la vie en commun."
  ]
];

function artistCopy(day,language){const [title,text,task,motif]=ARTIST_COPY[language][day-1].split('|');return{title,text,task,motif};}
