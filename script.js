// DATOS DE LOS MESES CON DÍAS CORRECTOS
const mesesInfo = {
    8: { nombre: "Agosto", dias: 31 },
    9: { nombre: "Septiembre", dias: 30 },
    10: { nombre: "Octubre", dias: 31 },
    11: { nombre: "Noviembre", dias: 30 },
    12: { nombre: "Diciembre", dias: 31 }
};

// TUS RECUERDOS (MODIFICA AQUÍ)
const recuerdos = {
    "8-1": {
      titulo: "Fotos",
      texto: "Compartimos las fotos de la actividad de los niños de la escuela de verano fue el dia qje hablé con mari y llevaste la guitarra a tu casa ademas fue el día de el comentario de Segio",
      tipo: "Compartir"
    },
    "8-2": {
      titulo: "Primer clase",
      texto: "Compartimos de música a distancia y nos enviamos dibujos para hacer luego, además fue el día que ensayamso en casa de mari la cancion del coro",
      tipo: ""
    },
    "8-3": {
      titulo: "Bella",
      texto: "Continuamos hablando de guitarra y enseñandole de los diferentes tipos que hay. Nació el apodo robot y hablamos hasta las 2:56. Compartimos de gustos como que te agrada el diseño de interiores , la fotografía, que le temes a las ranas. Nace el apodo bella por que duermes mucho. Comparimos nuestras pelis favoritas nuestros savores",
      tipo: ""
    },
    "8-4": {
      titulo: "Sospecha",
      texto: "Me preguntaste por primera vez algo que me hizo sospechar, que cómo me gusta el pelo. Compartimos canciones favoritas, estabas escuchanodo en ese tiempo ante tu altar. El mejor lugar es con las personas correctas. Compartimos cumpleaños aunque ya sabía el tuyo. En recuerdos de la infancia me contaste de tus travesuras y despedimos por primera vez con robot y bella a las 2:35am",
      tipo: ""
        },
    "8-5": {
        titulo: "Rayo",
        texto: "Me mostraste tus dibujos hablamos de tu experiencia en el culto del parquesito. Compartimos las series que habiemos visto. Nos dió el primer corrientazo un rayo. Aprendi que no te gusta el comino y si el huevo con arroz.",
        tipo: ""
    },
    "8-6": {
        titulo: "Verde",
        texto: "Hablamos de cocina y como a pesar de el rayo del otro dia te gustan y la lluvia también te gustan los girasoles, margaritas y tulipanes ademas de comer mangos verdes. Te gusta lo profundo del oceano pera a la vez te da pavor. Te conte como era el proceso de reproduccion de betas. Me enviaste las fotos que nos tiramos todo el grupo el miercoles",
        tipo: ""
    },
    "8-9": {
      titulo: "Fotos",
      texto: "Me enviaste las fotos de la primera clase de guitarra y hablamos de música, hubo un ensayo ese día y Lili que andaba con tigo me advirtió",
      tipo: ""
        },
    "8-10": {
      titulo: "Gim",
      texto: "Fue el dia que hablamos desde el cel de Lili y yo estaba en la playa me preguntabas por las indirectas de Lix y te extraño que me alegrase que no siguieses visitando el gim",
      tipo: ""
        },
    "8-11": {
      titulo: "Mensaje",
      texto: "Me mandaste el mensaje donde te desahogabas contandome todo y hablamos mucho esa noche de cómo comenzo a ser todo...",
      tipo: ""
        },
    "8-12": {
      titulo: "Lista",
      texto: "Nos cimpartimos la lista de todo los que nos gusta y lo qje no de cada cuál, compartimos lo que sentiamos y pensabamos y que lo mejor es ser transparente .",
      tipo: ""
        },
    "8-13": {
      titulo: "Recarga",
      texto: "Me llamaste la atencion por lo de la guitarra pero todo terminó bien, hablamos de la sutuacion y nos apoyamos. Si me tardo en responder sin palabras...",
      tipo: ""
        },
    "8-14": {
      titulo: "Metas",
      texto: "Llegaron las 12 hablando de la familia despedimos a las 1 13. Me contaste que te gustaría un retiro a las montañas como un campamento visitar un lugar antiguo bucear ademas de aprender a nadar, me conyaste de tus actobacias te gusta el basket hablamos de todas inquierudes y gustos como qje nos gusta el hielo. Compartimos las primeras imagenes de la luna.",
      tipo: ""
        },
    "8-15": {
      titulo: "Patada",
      texto: "Llegó media noche hablando y conociéndonos más hasta la 1 y 53 de Dios ministerio profecías planes y demás de ambos.Te conte sobre la del bigote con Oscar. Con el cabezazo a la pared te dañaste la boca y das patadas durmiendo, recordamos la canción que re conté, seguimos hablando de gustos y aceptar a la gente como es con virtudes y defectos. Nos despedimos alas 11 53",
      tipo: ""
        },
    "8-16": {
      titulo: "Ensayo",
      texto: "Comenzamos hablando de musica fue el dia que desayunamos en la iglesia y te escondias para wue no te vieran. Fue el día del culto que el hrupo se vistió de negro",
      tipo: ""
        },
    "8-17": {
      titulo: "Detalles",
      texto: "Nace Santi hablamos hasta la 1 8, pasamos el día hablando de gustos como atardeceres el cielo de noche luego como preparábamos todo para el culto que era esa noche, me contaste de la peca en tu ojo y lunares, además que no tienes mucha paciencia fuimos a recogerte con Mari,fue un culto especial con todos Se rompió la barrera del metro.",
      tipo: ""
        },
    "8-18": {
      titulo: "Reto",
      texto: "Acordamos el reto de la vista y no borrar mensajes, hablamos por WhatsApp y fue el dia que fui con la guitarra de Oscar",
      tipo: ""
        },
    "8-21": {
      titulo: "Email",
      texto: "Intentamos escribir por email pero no se pudo asi que fue por Instagram",
      tipo: ""
        },
    "8-22": {
      titulo: "Clase",
      texto: "Fue la ultima clase de Guitarra",
      tipo: ""
        },
    "8-23": {
      titulo: "Acuerdo",
      texto: "Pasamos días sin hablar por que se te venció el WhatsApp pero cambiaste la fecha, en ese tiempo hablamos por instagram, te conté como fue todo en la playa, fue cuando acordamos orar, me mostraste tus trucos de gimnasta, escribiendo medio dormida comiendo cerial crudo...Fue el día de la playa",
      tipo: ""
        },
     "8-28": {
      titulo: "Gustos",
      texto: "Aprendí que te gusta el cerial crudo sin leche y  la leche en polvo y el pinol jamonada salchicha croqueta todo crudo , te gusta la noche pero no la obscuridad, te conté como mueren las estrellas, le gusta dormir con música ,eres de pequeños detalles le gustan las flores, te gustan las guallavas",
      tipo: ""
        },       
    "8-29": {
      titulo: "Hablar",
      texto: "Fue el dia que hable con tu mamá no se creia que lo haria y te reias de lo tenso que estaba pero la entendi y todo quedo en esperar...",
      tipo: ""
        }, 
    "8-30": {
      titulo: "Pescar",
      texto: "Aprendí que te gusta pescar, en este tiempo estabas con el libro de apocalipsis",
      tipo: ""
        },  
    "8-31": {
      titulo: "1 58",
      texto: "Hablabamos mientras arreglaba el piano compartimos hasta estatura 1 58 para mi sorpresa me convenciste para lo de la foto de la far y me decias que parecia de 13 sin barba...",
      tipo: ""
        },
        
    "9-1": {
        titulo: "Gustos",
        texto: "Comenzaste las clases Me mostraste como acomodaste el día en notas, hablamos que tí que los olores y sabores recuerdan momentos, peli favorita enrredados de Rapunzel,te gustan los detalles pequeños flores dibujos, le gusta mirar a los ojos. Me contaste del brillo que veías en mis ojos y te dije que solo reflejaban lo que veía ",
        tipo: ""
    },
    "9-2": {
        titulo: "Audio",
        texto: "Fue el día dea actividad de los lideres, hablamos de cuando me llamaste tonto jm, y algunos lugares que nos gustaría visitar, como estaba lloviendo yo estaba escribiendo en un teclado aparte por los truenos, le tienes alergia a todo menos la comida, te gustan los juegos de mesa te gusta el huevo con yema blandita, fue cuando me enviaste aquel audio nerviosa",
        tipo: ""
    },
     "9-3": {
        titulo: "Chillido",
        texto: "Fue el día que coincidimos en la guagua por primera vez, ademas segun recuerdo tambien fue la primera ocacsión que hablaste como niña en el chat, me enviaste el chillido",
        tipo: ""
    },
     "9-4": {
        titulo: "Stich",
        texto: "Me mandaste la primer foto en ti grupo en un tiempo libre y me dijiste que me enseñarias a jugar basket, me compartiste tus retos en el dibujo, compartimos pelis y todo lo qu etuenes de stich como el peluche grande cascos cadena y el muñequito chiquito lo que perdiste y un pullover y un pomo Grace fue cuando compartimos la frace gracias por que sin darme cuenta me acercaste más a Dios. Me contaste como fue tu historia comenzando a dibujar",
        tipo: ""
    },
     "9-5": {
        titulo: "De paso",
        texto: "Pase para el gim y estabas doblando ropa decías que pasaría solo para saludarte",
        tipo: ""
    },
     "9-6": {
        titulo: "Suelto",
        texto: "De madrugada me mandaste enlaces de predicas,a la tarde estabas tocando en la placa, me preguntaste cómo prefiero el pelo si suelto o recogido, te conté de los pelos rojos y dorados y Sergio chivandote con migo",
        tipo: ""
    },
     "9-7": {
        titulo: "Sueño",
        texto: "Soñe Estaba en un lugar público tocando la guit, y había alguien predicando creo que una chica, yo la acompañaba ,al final fuimos a un lugar debajo de un arbol dónde podíamos bautizar y yo les explicaba que significaba ésto.Hablamos de la miel y de las abejas, le gusta el café claro, la leche fría sin azucar, le gustan las alturas aunque antes no. Fue la falsa alarma de la luna roja",
        tipo: ""
    },
     "9-8": {
        titulo: "Horm",
        texto: "Nace el apodo horm, hablamos si fuera profesor y me mostraste los pinitos del ITH",
        tipo: ""
    },
     "9-9": {
        titulo: "Veloz",
        texto: "Te gusta la velocidad , la adrenalina, te gusta el aguacate con azucar, fue el día que Lili vino a mi casa a ensayar una canción y pense que seguiría para la tuya",
        tipo: ""
    },
     "9-10": {
        titulo: "Dibujo",
        texto: "Fue el primer culto que te dejó ir tu papá despues de lo de agosto, me regalaste el primer dibujo, Fue la primera vez que hablamos en tercera persona, te gusta la calabaza frita. ",
        tipo: ""
    },
     "9-11": {
        titulo: "Llamada",
        texto: "Me presentaste a Timotea hicimos una llamada de WhatsApp y la videollamada más larga hasta el momento",
        tipo: ""
    },
     "9-12": {
        titulo: "Historias",
        texto: "Nos despedimos a la 1 30, tu record es de un día y medio sin comer, hablamos de la casa en el árbol y el gusto de los espejos en las salas, no puedes desayunar a penas despiertas por que te cae mal, a veces te quedas dormida habiendo llegado de la escuela y te duermes hasta el otro día te conté que las mujeres biológicamente sienten más frío ya que su cuerpo preoriza el calor en la zona abdiminal, me contaste del melón galia, la isla de la juventud con playas negras y la Habana el capitolo, hablamos luego por llamada ",
        tipo: ""
    },
     "9-13": {
        titulo: "Accidente",
        texto: "Te mostré las referencias biblicas,Me contaste que aprendiendo a montar bici te calló encima",
        tipo: ""
    },
     "9-14": {
        titulo: "Sueño",
        texto: "Te conté el sueño de la playa,te gusta dormir con música puesta y el ruido del ventilador te gusta el agua de coco, hablamos de cómo debía ser una relacion",
        tipo: ""
    },
     "9-15": {
        titulo: "Monarca",
        texto: "Te gustan las mariposas monarcas,te subes a la placa para escribír por conexión ya hablábamos de hacer algo para despedir a Lili seguimos con el tema de relación estábamos al despedir por el chat y despedimos con una llamada 40 min más tarde",
        tipo: ""
    },
     "9-16": {
        titulo: "Mirada",
        texto: "Hablamos de series,que nos es dificil no perdemos en las miradas, fue el día que fuimos a jugar dominó en casa de Mari, estabas acomodando el cuarto de noche mientras yo hacía el trabajo ",
        tipo: ""
    },
     "9-17": {
        titulo: "Panadera",
        texto: "Ese día cocinaste el almuerzo, fue cuando hablamos de las arañas y sus diferentes tipos como la panadera",
        tipo: ""
    },
     "9-18": {
        titulo: "Terrario",
        texto: "Me mostraste tus fotos de pequeña y con tu papá y hermano con 11 meses yo te envié la mía del año, decidiste capturar arañas para la pecera, me mostraste las fotos que te hace tu mamá con IA y la palomita que se encontraron, terminamos mostrándome el terrario",
        tipo: ""
    },
     "9-19": {
        titulo: "Cartón",
        texto: "Fue el día del culto en la casa de Julia que rompí el cartón abanoco ese dia se fueron rápido, te gusta la pizza hawaiana en ese tiempo estabas dibujando cosas para  la escuela y practicaste guitarra ",
        tipo: ""
    },
     "9-20": {
        titulo: "Reunión",
        texto: "Fue el día de la reunión de maestras me dijiste que lo que mas nos conecto fue mi integrudad, luego fue el ensayo que fue tu mamá a buscarte a la iglesia",
        tipo: ""
    },
     "9-21": {
        titulo: "Ruborizada",
        texto: "Me dijiste que te ruborizabas y me mandaste por primera vez a buscar en el diccionario",
        tipo: ""
    },
     "9-22": {
        titulo: "Frace",
        texto: "Me mostraste las ondas que se te calleron,Dijimos que la base de toda relación es la confianza fue el día del primer so pretty, y que me enviaste aquella frace que seguro recordarás, acordamos no esperar a que escriba el otro primero en cambio temer la iniciativa cualquiera de los dos",
        tipo: ""
    },
     "9-23": {
        titulo: "Instantanea",
        texto: "Fue la primera vez que me escribió tu mamá, y el día de la sopa instantanea, te me adelantaste con la buena semilla , mencionamos el domingo que estaba al entrar y regrese para verte, te conté que escuchaba seguido tu audio, te gusta la limonada con sal numca lo entendí pero bueno..., agregamos a la lista enseñarme a cocinar despedimos por audio",
        tipo: ""
    },
     "9-24": {
        titulo: "Chancleta",
        texto: "Atrapaste la araña grandepara tu colección,le tienes muedo a los alacranes, te mostré la chancleta por primera vez, continuabas pintando el mural ",
        tipo: ""
    },
     "9-25": {
        titulo: "Charco",
        texto: " Al salir no podías por la lluvia , fue el segundo encuentro en la guagua, me mostraste dándole mantenimiento a un ventilador algo nuevo para la lista, y tú hermano tubo que cargarte en el charco estabas terminando el mural",
        tipo: ""
    },
     "9-26": {
        titulo: "Mejor en persona",
        texto: "Hablamos de la vez que fuiste con Lili a la iglesia y Dany y yo desarmamos el piano, me mostraste tus fotos de gemini, me mostraste la foto en la que suci se comía tu pelo y desde ese punto te veías más gorda, liberarse a las arañas, me contaste que cada que coges la git te recuerda algo, me contaste de los mejores momentos en el chat, me mostraste las luces en el cuarto de tu mamá hablamos de edades y que aparentas ser más vieja, digo mayor, hablando de inventos como el de la antena, y de de que sería mejor 20 minutos en persona que dos horas por chat, despedimos con mensajes de voz",
        tipo: ""
    },
     "9-27": {
        titulo: "Reto",
        texto: "Me mostraste la foto en el espejo con las gafas y las flores que recolectaste de parques y tú con una de ellas,me contaste de la máquina que simula los dolores de la mujer y que ningún hombre aguanta  hablamos de lo lindo que debe ser la gestación en una mujer, te mostré lo que estaba viendo de el curso, hablando de tu tortuguita que cabía en una caja de fósforo , me enviaste la canción de rapunzel.Te conte que en esos meses me sentí como en una película. Me mandaste el reto de dibujar los rostros. ",
        tipo: ""
    },
     "9-28": {
        titulo: "Fotos",
        texto: "Compartimos las fotos de los dibujos de los rostros, me diste el stich para dibujarlo, me enteré que le llamas peli a todo hasta alas series",
        tipo: ""
    },
     "9-29": {
        titulo: "Retos",
        texto: "En ese tiempo estabas viendo the chosen, me contast que tú familia por parte de padre fundaron el coco, me contaste como te dieron a luz en el cuerpo de guardia por que ya querías nacer apurada, fue cuando me preguntaste de los ejer hablamos que ello y que los retos eran cono si se parase la realidad ",
        tipo: ""
    },
     "9-30": {
        titulo: "Familia",
        texto: "Me contaste que el dia anterior tuviste que llamarme para saludarme, me mostraste la foto del arbol de la coperativa como de revista te conte que me gusta tocar el pop rock de Barak, me enseñaste cono freir estaba desarmando el piano, me ckbtaste que comiste lenyo el dimongo por pena, andabas despeinada yo escuchaba mateo 21 12 y tu la bendición te gustan nos ratonvitos pero te da miedo como corren, havlamos de niestros nuestras familias la tuya tiene mucha historia",
        tipo: ""
    },
    
     "10-1": {
        titulo: "Deleite",
        texto: "Llevaste a Ehymis  a la escuela y estaba Lix que no desaprovechó la oportunidad para chivar, me contaste de el 0 de todo, se te escapo la palabra deleitar por tu expontaniedad ",
        tipo: ""
    },
     "10-2": {
        titulo: "",
        texto: "Al escribirte respondió tu mamá jablamos de lo de la cervical de la casa, me cobtaste de tooodo lo que te tardas oara prepararte desde que te despiertan, me cobyaste lo de la soga, fue cuando Dianelis me contó qie me estabas esperando, cono llovía ese dia completé 8 corrientazos cin la lluvia, los peques en la iglesia te dicen fotógrafa, le hicimos toda una peli de la cabaña, cuando te enfadas ge dicen belkita, me conyaste fe tu yruco para qke no se note el sueño entreserrando los ojos y levantando la vista ",
        tipo: ""
    },
     "10-3": {
        titulo: "Desconectar",
        texto: "Me mandaste las fotos de la vez que fui con la guit de Oscar mostrandome mi gesto de concentración. Dicen que cuando se mira a alguinen puede pasar como si se desconectase el mundo, ne decias que me gusta ban tus caras solo porque  no habia visto la Lía enojada",
        tipo: ""
    },
     "10-4": {
        titulo: "5 metros",
        texto: "Fue cuando me contaste que te callo la rana arriba y no podias dormir, cuando te saludé alnpasar me reconociste por la gorra y el caminado, hablamos de el emsayo pasado en el que conversabamos y julia se disculpó por interrumpir y ni estabamos hablando en ese preciso momento fue cuando me dijiste que te sentaruas a 5 metros",
        tipo: ""
    },
     "10-5": {
        titulo: "",
        texto: "Te sentaste a 5m justo como lo dijiste en el ensayo, ese fia fuimos al cumple de David de Jesús, estabas cocinando y llorabas por la cebolla no encontrabas las especias y estaban en frente tuyo, le echaste mucha agua y decias que era mi culpa, me mostraste la ampliacion que pusieron, hablasye con tu viz de niña, encontré ntraste a tu aula en una fonca ",
        tipo: ""
    },
     "10-6": {
        titulo: "Olvidada",
        texto: "A veces sales del cuarto a buscar algo y cuando llegas no recuerdas que fuiste a buscar, y que a veces a mitad de camino es que te acuerdas de lo  que querías hablar, tecordamos cuando me pusiste robot cuando te llame para lo del la coreografía",
        tipo: ""
    },
     "10-7": {
        titulo: "Despedida",
        texto: "Te conté lo de la carta ese fue el dia que le hicimos la despedida a Lili y te puse el dibujo en el cover fue cuando pensaste que te habia echo una seña pero fue inconcientemente.",
        tipo: ""
    },
     "10-8": {
        titulo: "Recuerdos",
        texto: "Hablamos de la despedida de de Lili y las cartas que le esctibimos, estabas cuidando a tu mama por que estaba enferma, Lili fue a mi casa para despedirse ",
        tipo: ""
    },
     "10-9": {
        titulo: "Lili",
        texto: "Seguimos hablando de lili y recuerdos de ella en eso llegó la madrugada",
        tipo: ""
    },
     "10-10": {
        titulo: "Frace",
        texto: "Me cintaste que una ves escribias mientras te bañabas, te mostré el reel que decía: Quedate con la persona que disfruta la naturaleza que transmite gozo que encuentra paz en los atardeceres. Al amanecer ese dia te conte de lo del video que se me ocurrió hacer para ella y me enviaste las foros de ella que tenías. Fue el dia que ae fue Lili salió a las 3 ,fue cuando estaban comiendo serial y grabaste a Ehymis, intercambiamos pteguntas. Te envié el vídeo, me contaste lo que es cuando nos llamamos pro el nombre.",
        tipo: ""
    },
     "10-11": {
        titulo: "Cumple mes",
        texto: "Por el cumplemes nos mandamos una foto luegk havlamos mas de 2 horas por llamada me mandaste los videos de la primer clase despedikos  a las 2 24. Al amanecer me contaste como hablaste con Lili, me hablaste del queso azul. Ese día hablabamos todo llendo directo al grano sin rodeos, hablamos del ejemplo de Majo y Dan, recordamos la cancion que cantaste con Lili en agosto del 24 la que dice tu cuidas de mí",
        tipo: ""
    },
     "10-12": {
        titulo: "Perfume",
        texto: "Me contaste que te a veces te hacia pensar con lo que te contaba, te gusta el cafe tostado o en grano, el perfume que usas se volvió especial te conte cómo una vez me llegó el olor de éste en la ciudad y me quede mirando al rededor me contaste de la mirada del 1ro de agosto, luego  me escribió tu mamá la reconocí al instante hablamos de lo importante que es descansar entre otras cosas",
        tipo: ""
    },
     "10-13": {
        titulo: "Dirección",
        texto: "Fue el dia qie amanecí enfermo y no pude ir al culto, dirijiste en el culto de la celula por el grupo de alabanza .",
        tipo: ""
    },
     "10-14": {
        titulo: "Kawasaki",
        texto: "Yo continuaba en cama tu jugadte con arena en una guerra estuve un poco distante me cobtaste de el dibijo que harías y de motos, fue la vez que mas temprando desspedimos oor que me dolia la vista",
        tipo: ""
    },
     "10-15": {
        titulo: "Detrás",
        texto: "Me conyaste como Lili te mostró la casa, en estos tiempos recordamos esa frace en la salud y en la enfermedad tenias un liganento rasgado en el dedo del pie,esa noche fue el culto qie me sente detrás, me contaste que sabias cómo alludé a prevenir que te calleses en el culto del parquesito",
        tipo: ""
    },
     "10-16": {
        titulo: "",
        texto: "Me contaste cono veías fotos oa para recordar momentos, me mostraste la orifa qhe encontraste en la escuela, re dije que si mestresaba con el piano pensaría en algo bonito, me cobtestaste que está bien pensar en una persona y decias que te robé las armas cuando y te dije que no afirmaba ni negaba, recordamos las veces que te saludé con  la mano por que estaba enfermo, me hablaste de tus colores, me comentaste del dibujo que estabas haciendo, ordenamis las cosas entra ambos como solo amigos",
        tipo: ""
    },
     "10-17": {
        titulo: "Pelis",
        texto: "Sientes que te ahogas si duermes boca arriba, estabas vieno la peli de la princesa y el sapo y grabaste la bella y la bestia intente convencerte de que me mostraras el dibujo peo nada",
        tipo: ""
    },
     "10-18": {
        titulo: "Luna",
        texto: "Recordamos cono nació horm, el dulce de leche es tu favorito,tambien te gusta el de guallava o ciruela el de ceresa mas menos, el de frutabomba y el de tomate que jamás habia oido antes, fue cuando encuate la foto comiendo frituras. Me mostraste las lunas de nustras fechas y se complementan, te subiste a una mata para tirarke fotos a unos honguitos",
        tipo: ""
    },
     "10-19": {
        titulo: "Momentos",
        texto: "Cuando me escribiste estaba en un ensayo con David, me mostraste una aranita panadera que te encintraste y los hongos, me escribió tu mamá esta vez si no me di cuenta hasta un par de mensajes más, me comentaste del fibujo secreto Dicen que un fotógrafo dijo que la mente captura momentos no hace videos",
        tipo: ""
    },
     "10-20": {
        titulo: "",
        texto: "Me contaste que te pincharon mucho de peque por lo que no le tienes mjedo a las agujas, me cibyaste la cuenta de la ninja dando payadas y mordiendo hasta uqe te sacaron la muela con un muńeco de soborno, se montaron como 11 en un coche para venir al coco y casi lo vuelcan, hablamos de qje será en unos años, recordamos cuando se pesento dannis y carlitos que me pinchaste y hablamos de cosquillas",
        tipo: ""
    },
     "10-21": {
        titulo: "Hi",
        texto: "No pidimos hablar mucho solo saludarnos",
        tipo: ""
    },
     "10-22": {
        titulo: "Sonrisa",
        texto: "Ese dia que llegaba tu tía y planeabanir a recogerla pero no se pudo, fue cuando hablamos de el dia pasado que te montaste en  la guagua pequeña cua do te hice una seña, en la noche fue el culto, y me decua swue si pestaña ba asi siempre fue cuando grabaste, te pregunte por qje sonries moviendo la boca jj",
        tipo: ""
    },
     "10-23": {
        titulo: "Record",
        texto: "Ne escribiste cerca de mi casa, yo reenplazando la puerta, me enseñaste tu record en guitar tuna, hablamos de el ciclon que se acercaba ",
        tipo: ""
    },
     "10-24": {
        titulo: "Fotografa",
        texto: "Primero me escribió tú mama queme compraria plastilina jj luego me contaste que estuvuste de formtografa por  la noche, estaba lloviendo y las montañas se nublaban, ka lluvia te recordaba algo, te mostré la herida de mi mano, hiciste torrehas con tomate, me contaste de ka cancion qu eruja el león",
        tipo: ""
    },
     "10-25": {
        titulo: "Corto",
        texto: "Me preguntaste por la mano y tuviste un dia ajetreado casi no pudimos hablar... ",
        tipo: ""
    },
     "10-26": {
        titulo: "Variado",
        texto: "Te regalé la púa, en la noche estabas de maquillista y fotografa, estaban los preparativos para el ciclón, hablamos de la familia y primos,te conte cómo es el proceso de extraccion de miel y hablamos de los diferentes tipos que hay, hablamos de cerezas y uvas",
        tipo: ""
    },
     "10-27": {
        titulo: "Fotos",
        texto: "Me mostraste kas fotos wu que tiraste en el charco de frente a tu casa que quedaron geniales",
        tipo: ""
    },
     "10-28": {
        titulo: "Ciclón",
        texto: "Fue cuando entró el ciclón y casi no pudimos escribir",
        tipo: ""
    },
     "10-29": {
        titulo: "",
        texto: "Ciclón",
        tipo: ""
    },
     "10-30": {
        titulo: "Conexión",
        texto: "Logramos contactar enviandonos mensajes pero no en el momento, informarnos algo,todo bien...",
        tipo: ""
    },
        
     "11-1": {
        titulo: "",
        texto: "Fue que me lograste responder los mensajes",
        tipo: ""
    },
    "11-2": {
        titulo: "Todoterreno",
        texto: "Hablamos de lo molesto de los duas incomunicados, fue cuando te soltaste a hablar bastante despues del culto me gustó escucharte, te conte todo lo wue desarmé en ese tiempo, tambien te gusta desarmar cosas un poco de todo , como dices y una todo terreno, te conté que pondría la antena, me contaste de tu mapa costumbre de limpiarte eo cachete al salidar, guardas recuerdos como audios fotos",
        tipo: ""
    },
     "11-3": {
        titulo: "",
        texto: "Fue cuando me dijiste para cargar el cel en tu casa estabas en la de tu abuela y escribimos de el cel de mi mamá",
        tipo: ""
    },
     "11-4": {
        titulo: "Helado",
        texto: "Me mostraste como chat mientras te bañabas ya hace tiempo, te haces figuras en el pelo cuando te bañas como una vez que parecia un helado, me contaste como dejaste de usar filtros, cambiamos preguntas como lo más grande aue Dios ha hecho por nosotros, hablamos de lo importante de encontrar soluciones y no centrarse demasiado en el problema, volví a leer la biena semilla gracias a tu ayuda",
        tipo: ""
    },
     "11-5": {
        titulo: "Atardecer",
        texto: "Recordamos que el mosmo año que nos mudamos para el coco fue que naciste, te mandé la foto durmiendo y explotaste, me enviaste fotos de atardeceres, lo que prefiero de tu personalidad es la alegria qje transmites, te gustan las zanahorias cridas cono a mi pero con sal, hasta el momento prefieres cuerdas de nylon para la guitarras, me conyaste que te ríes de mí cuando hablamos por qi elo hago rápido, decias que la forma en la que atendía cuando me hablabas te veía como tu padre cuando te escucha despedimos por llamada",
        tipo: ""
    },
     "11-6": {
        titulo: "Libro",
        texto: "Te mostré la navaja pequeña que hice, me regañaste por todas las descargas que he cogido por la antena, hablamos de los libros de tu abuelo y que prefueres el italiano hablamos de batidos favoritos como mamey y mango te gusta el mango manzana, hablamos lo de un reto de chistes pero no querías en persona por pena, fue cuando nació eo apodo panda rojo, no sabia que significaba tanto para ti el ver a alguien durmiendo. Fue cuando me propusiste leer el libro me alegró un mundo",
        tipo: ""
    },
     "11-7": {
        titulo: "Ocupado",
        texto: "No pudimos hablar mucho creias que estabas incubando un virus un dia ocupado",
        tipo: ""
    },
     "11-8": {
        titulo: "Tunas",
        texto: "Ensamo la cancion que ruja el león y qhedo para luego por cuerto la tenemos pendiente , acordamos como leer el libro, hablamso de  lo mas lejos que habiamos viajado tu más que yo a Colombia Las Tunas y tu sueño tambíen hablamos de guitarra fue cuando me enviate la fender blanca y estabas practicando...",
        tipo: ""
    },
     "11-9": {
        titulo: "Sueño",
        texto: "Ese día por mirar para atras para ver a alguien puse un pié en un charco, hablamos de la predica que los planes de Dios son perfectos , era el cumple de Dany y comenzavas a sentirte un poco mal, soñaste que estabamos en la iglesia en la alabanza y tocabas la guitarra tenias cono 20 en el sueño ",
        tipo: ""
    },
     "11-10": {
        titulo: "Imagen",
        texto: "Aún estabas recuperandote de el virus, me contaste cono es que de todo imaginas una imagen",
        tipo: ""
    },
     "11-11": {
        titulo: "Cumplemes",
        texto: "Te acordaste de el cumplemes, lograste caminar algo, te mostré cómo quedó la escuela luego de el ciclón, inyentaste caminar y te echaron para alante estabas aburrida en el cuarto habías visto las win y tocando algo la guit pero no te dejaban para que descansaras te comenzaba a salir el rach despedimos el cumplemes recordando la espera en Dios...",
        tipo: ""
    },
     "11-12": {
        titulo: "En proceso",
        texto: "Éste dia me tocaba dirigir l, aun te estabas recuperando, te lograste levantar sin marearte, estabas mejor",
        tipo: ""
    },
     "11-13": {
        titulo: "Erizada",
        texto: "Me encontre por casualidad en el camino con tu tía me llamo para preguntarme el nobre y me dijo quién es me sorprendio de momento y fuimos ghablando l, llegue a tu casa  por por ella te lleve la memoria y no creias que estaba fuera estabas erizada y con cara de sueño pero ya mejor hablamos yn momento y me fui con Dany ya de noche me contaste que empezaste a ver el curso de Italiano y demas videos ese dia dormiste hasta las 4 despedimos luego de ka peli ..",
        tipo: ""
    },
     "11-14": {
        titulo: "Imbentos",
        texto: "Estabas viendo las peloa que te grabé y luego cocinando, llena de rach, te conté que marlen estaba embarazada estabas muy emocionada, Suci no te dejaba comer , fuiste a tocar la guit escondida y te descubrieron, andabas abrigada de amarillo. Te conte lo de el carrito que hice de pequeño que daba vuelas en círculo y las espadas de aluminio...",
        tipo: ""
    },
     "11-15": {
        titulo: "Frío",
        texto: "Fue cuando estaba en casa de Mari y los muchachos hablando con gemini, se te congelaban las manos ",
        tipo: ""
    },
     "11-16": {
        titulo: "Inventora",
        texto: "Subiste tus estados con la biblia y el vestido azul, estabas comiendo garbanzo, amanecuste con pies y manos inflamados, eres muy impaciente y te tenian en tu cúpula para que te recuperaras y tú haciendo travesuras, se pasarn la noche anterior en un invento con la tabla cono un tripodo con un aro luz y eso fue hasta las 3, te conté de el accidente con el disco y me contaste cuando rompiste la Playstation ",
        tipo: ""
    },
     "11-17": {
        titulo: "Silencio",
        texto: "No te pudiste conectar",
        tipo: ""
    },
     "11-18": {
        titulo: "Estudio",
        texto: "Me cobtaste como estaba todo ppr alla con la familia enferma y tú y tu mamá cuidandolos, um ave te fue a dar los buenos días, me contaste de donde eredaste lo de todo terreno, me contaste que imaginabas rostros al leer fraces, fue cuando el dilema de si pasaba o no era cono un juego de ajedrez, te gusta leer antes de acostarte, te expliqué  Juan 1, luego hablamos de la base del cristianismo el sacrificio de Cristo y demás terminamos hablando del Edén ",
        tipo: ""
    },
     "11-19": {
        titulo: "",
        texto: "Hablamos poco solo me contaste como estaban por allá ",
        tipo: ""
    },
     "11-20": {
        titulo: "Enfermera",
        texto: "Estabas de enfermera de todos, empezamos a leer el libro, ya amanecí no muy bien de salud me acosté como a las 8 nunca antes visto",
        tipo: ""
    },
     "11-21": {
        titulo: "Harina",
        texto: "Hablamos de como mejoraban todos, estabas alegre abriendo paquetes, yo estaba en mi cúpula y habian mas mosquitps dentro que fuera, cole el piano dentro para tocar algo, te gusta hacer cosas con harina, y me disge la reseta para hacer tacos, quedamos en que intentaria darle la vuelta q la tortilla en el aire pudiendo quedar en el techo, llenaste la cocina de harina y hasta la ropa, coincidimos comiendo leche en polvo",
        tipo: ""
    },
     "11-22": {
        titulo: "Jope",
        texto: "Intentabas desarmar un pobre telegono viejo pero no se pudo y se suspendió la ejecución, retomaste algunos hobbies como hacer pulsas, nacio Jope",
        tipo: ""
    },
     "11-23": {
        titulo: "Chitón",
        texto: "Me enseñaste la foto del chitón que encontraste en la playa, me conyaste que tu papá vendría pronto estabas terminando una pulsera, me quedó la duda si fue la que luego me regalaste",
        tipo: ""
    },
     "11-24": {
        titulo: "Saludo",
        texto: "Solo nos saludamos...",
        tipo: ""
    },
     "11-25": {
        titulo: "Coordinación",
        texto: "La confusión del envío, ya entendiste por que Jope, hasta bolero estabas aprendiendo, se cordinan bien para vestirse segun me cuentas, me cobyaste re harias algo en el pelo.",
        tipo: ""
    },
     "11-26": {
        titulo: "Variados",
        texto: "Me mandaste la foto de Suci que te quedo genial, me contaste que todo diciembre suele ser especial para tí, azaban el corazón del puerco, me contaste lo del cubo de agua que tu papá le tiró a tu tío y demas hustorias de calle cable, recordaste el culto en la dala de la casa de Julia, y me contaste cono tu avieno le enseñó a manejar a tu papá, me contaste que te gustan los teatros, te mostré los documentales que veía y hablamos de las autoras hablamos de algunos animales y de los hamsters que hulleron por du vida de tu casa te mostre titíes pequeños y la historia de la pelicula que recaudo fondos para salvar a los guacamallos azules, me mostraste tus fotos favoritas grupales",
        tipo: ""
    },
     "11-27": {
        titulo: "Pensar",
        texto: "Sieles pensar mucho las cosas tanto que aveces es como si estuvieses en el pensamiento y no en la tierra, recordamos el viaje a la casa de Oscar",
        tipo: ""
    },
     "11-28": {
        titulo: "Proyección",
        texto: "Te mostre lo de la proyección de la ventana con el paisaje para dormir, de los bosques te gustan los hongos y kas fotografiarlos",
        tipo: ""
    },
     "11-29": {
        titulo: "Golpe",
        texto: "Se pasaron la mañana caminando buscando cosas en la ciudad chocaste con el techito subiendo las escaleras por mirar las nubes fue cuando te tiraste aquellas fotos de las que luego hablamos te quedaste dormida al llegar",
        tipo: ""
    },
     "11-30": {
        titulo: "Bluetooth",
        texto: "Te pareces mucho a tu tía por parte de padre, fue el cumpleaños de Claudia y me persiguió la Oca, estabas como a 5 casas a la tarde me preguntabas cómo enviar algo por Bluetooth, tenian en la tele Océanos",
        tipo: ""
    },
    
    
    "12-1": {
        titulo: "Tormenta",
        texto: "Me enviaste la foto de erizo activado por el viento, te pregunté que si pasaba algo ya qu ete note distante y me contaste todo tambien te hable de aquellas fotos dep estado en fin sabes lo dificil que fue psra mi, luego hablamos y lo dejamos ahí ",
        tipo: ""
    },
    "12-2": {
        titulo: "Escombros",
        texto: "Este ha sido uno de los peores días que he tenido me la pase aheno a la realidad solo pensando mas tarde intenté contarte lo mal me sentía y que con mus fuersas no era posible,solo con Dios me hablaste tambien de cómo estba siendo para tí seguimos hablando de el nudo en la mente y asi seguimos intentando sacar todo, hablamos de otras cosas para intentar despehar como tus dibujos y pulsera..",
        tipo: ""
    },
     "12-3": {
        titulo: "Cenizas",
        texto: "En esos dias no dormí mucho seguimos orando por yo todo e intentamos dejar claras como pudimos las cosas, pudiste ver como estaba en el culto y me diste lo ñs dibujos y pulsera",
        tipo: ""
    },
     "12-4": {
        titulo: "Silencio",
        texto: "Te aconseje orar mas por tus sueños devido a tu pesadilla, te mande el mensaje para Lili, te quebrantaste orando en tu casa y yo sentí paz en el culto de casa de Julia",
        tipo: ""
    },
     "12-5": {
        titulo: "Descanso",
        texto: "Recordamos lo importante de buscarle y la frace hacer una cosa sin dejar de hacer la otra, ya no estaba ni emocional ni gisicamente muy bien así que fuí a descansar ",
        tipo: ""
    },
     "12-6": {
        titulo: "Copos",
        texto: "Continúe haciendo tu regalo a pesar de todo y te pregintaba cosas para hacerlo, te mostré los documentales que descargué me mostraste el muro de enrredaderas con flores, comenzamos a compartir reels en tu mente sonaba la cancion de barak todo va a estar bien , hablamos de lo necesario eñde hacer cosas nuevas en cuandto a las canciónes en la iglesia, te conte como se forman los copos de nieve recordandome Romanos 1 20",
        tipo: ""
    },
     "12-7": {
        titulo: "Proceso",
        texto: "Hablamos algo luego del culto, te conte lo de mi estado que no era para tí y como estaba, Te conté por que no mandé el memsaje de despedida sobre todo por que quería hablarlo y no dejar nada dentro, hicimos los dibujos de paisajes y fue cuando Lili me llamó luego a tí y quedamos en informarnos si sabiamos algo de ella",
        tipo: ""
    },
     "12-8": {
        titulo: "Noticia",
        texto: "Seguíamos preocupados por Lili , me escribe tu mamá hablamos de las cosas de la casa me avisaste que ya supieron de Lili y cómo seguía, me contaste el sueño de Ale y quedamos que esto era algo que Dios nos revelaría a ambos y por lo teanto debemos buscar más",
        tipo: ""
    },
     "12-9": {
        titulo: "Abrir",
        texto: "La noche anterior te habías dormido escuchando las predicas que te copié, te conté cono me sentí a lo largo de yodos esos días y me cobtaste como otaste para luego hablar con migo, dejamos claro que siempre hablariamos las cosas cono son para que no se de luhar a dudas...",
        tipo: ""
    },
     "12-10": {
        titulo: "Presencia",
        texto: "Estabamos adelantando el libro y te conté de los videos de Itiel, esa mañana te salió en el cel Proverbios 16 9, te envié los videos y fue la primera vez qje oramos el uno por el otro, se podía sentir ka presencia de Dios y disfruto ver lo sensible que eres a ella ",
        tipo: ""
    },
     "12-11": {
        titulo: "Espíritu Santo",
        texto: "Habias roto ti record preoarandote de 20 Minutos, fuiste al culto de casa de julia cuando Ainhoa mandó los audios amenazando jj y te delató, hablamos un poco de el podcast, acordamos hablar de cada capítulo segun avanxemos en el libro dormir estudiamos un poco por que el Espíritu Santo es una persona ",
        tipo: ""
    },
     "12-12": {
        titulo: "Luz Obscura",
        texto: "El dia de la reunion de maestras, fui a alcanzarlas pero por lo que me decias pense qje ya estaban llegando a la piquera y regresé al final las vi en la avenida, fuimos al ensayo ese dia despejamos ambos ,en la noche con la luz obscura estabas sacando esponas del tobillo de tu mamá jj,parece que te dejé bastante intrigada por la causa de mi cambio...",
        tipo: ""
    },
     "12-13": {
        titulo: "Confirmado",
        texto: "Comenzaron a sospechar del viaje de tu papá, estabas muy inquieta tirando fotos bajando escaleras me mostraste la foro de la estela, se confirmó que vino y estabas muy emocionada ya de noche cuando escribiste estaba en la esquina de las reuniones y te saludó Ainhoa, esa noche no me soltaba te mandé la foto estabas descifrando la lap",
        tipo: ""
    },
     "12-14": {
        titulo: "Ainhoa",
        texto: "Pasamos la mañana cortando leña para la cena y comiendo moras me mostraste lo que agregaste a tu lista de stich cosas tus zapatos, estabas personalizando la lap , me contaste que tu papá sabe que hablamos y te pregunto lo de la foto de Ainhoa, te pintaste el pelo pero temporal, te conye de la predica del Canadiense sobre todo de el lugar lleno de mariposas",
        tipo: ""
    },
     "12-15": {
        titulo: "",
        texto: "Hablamos de Lili andaban por la ciudad creo que pasiando y se te apago el cel, Como viste las luces de mi cuarto envendidas me escribiste eran ya las 12",
        tipo: ""
    },
     "12-16": {
        titulo: "Adornos",
        texto: "Estabas leyendo el libro en la lap, me mostraste lo genial que estaba quedando tu casa con lo adornos y luces y me contaste como lo hicieron como el arbol de arriba de la casa, me mostraste como vas con un juego en el que aconodas una casa",
        tipo: ""
    },
     "12-17": {
        titulo: "Rub",
        texto: "Te pintaste el pelo como de rubio seguí sacandote información de colores, te vengaste por el bigote, na mentira ",
        tipo: ""
    },
     "12-18": {
        titulo: "",
        texto: "En chat no hablamos mucho solo saludarnos pero luego del culto su dejamos muchas cosas claras y tecordamos otras",
        tipo: ""
    },
     "12-19": {
        titulo: "Preparativos",
        texto: "Estabas adolorida por las luchas en la cama llena fueron a lo de el carnet a cueto, te recorde la felpa que traias en la mano derecha todo el culto de el jueves, hablamos de lo qke temias que psase y lo qie pasó un dia un poco ocupado esa madugada me tocaba ir a lo del puerco, me contaste que querias invitarnos a tu cumple estabas leyendo el libro, puse la alarma y despedimos",
        tipo: ""
    },
     "12-20": {
        titulo: "Cena",
        texto: "Fue por la mañana preparativos hablamos un momento y por la tarde al llegar me di cruse con tigo y pues me dejaste en jak no pude hablar,luego te lo dije pero no con palabras, la cena todo se dio bonito cantaron y dieron la palabra en la cena lo pasamos bien caminabamos de cacá para allá tirando fotos vistas y con broche de oro sentados en la mesa y haciendo cuentos, luego en el chat hablamos de lo mas bonito que nos paso ese año, quedamos en escribir una carta para fin de año",
        tipo: ""
    },
     "12-21": {
        titulo: "Manos",
        texto: "Te reenvíe el audio de los bueos dias de Lili y la foto con la boca abierta, tu contandole locuras a lili para hacerla reír, hablamos de lo lindo que sería una pecera en la sala, me mandaste la hiervita de la foto , te confirme lo del hondo de pantalla de mí papá , ne mostraste la cajita que pintaste, te moleste con lo de las manos",
        tipo: ""
    },
     "12-22": {
        titulo: "Preparativos",
        texto: "Te mostre cono desrme la guit para arreglarla y me mostraste la llave que necesitaba, me mostraste cono quedó la sala, me contaste cono desde pequeña era tan dificil esvonderte los regalos, me mostraste el árbol de navidad blanco con nieve y todo, me cobtaste cómo sería el dia de tu cumple",
        tipo: ""
    },
     "12-23": {
        titulo: "Acuerdo",
        texto: "Me contaste como caíste dormida luego de ver los podcast y orar, me hablaste de todo lo que aprendiste de los videos y compartimos lo que epensamos de ello, acordamos como ghariamos las cosas a partir de esto, me mostraste las calcomanías qje le pusiste a la lap y el significado de cada una ",
        tipo: ""
    },
     "12-24": {
        titulo: "",
        texto: "Le quedaba poco a los 15 la noche anterior andabas sonámbula, le dejé a ali la informacion de la invitacion para que la yrasmitiese te conye lo de el pastor y tu a mí los consejos",
        tipo: ""
    },
    "12-25": {
        titulo: "Tu Cumpleaños",
        texto: "Felicidades Hoy celebramos tu vida y el maravilloso regalo que eres. Que Dios te bendiga en este nuevo año de vida.",
        tipo: "Cumpleaños"
    },

};

// VARIABLES GLOBALES
let mesActual = 12; // Agosto
let anioActual = 2025;

// ESPERAR A QUE EL DOM CARGUE
document.addEventListener('DOMContentLoaded', function() {
    inicializarCalendario();
});

// FUNCIÓN PRINCIPAL
function inicializarCalendario() {
    // Configurar botones de mes
    document.querySelectorAll('.btn-mes').forEach(boton => {
        boton.addEventListener('click', function() {
            mesActual = parseInt(this.dataset.mes);
            anioActual = parseInt(this.dataset.anio);
            
            // Actualizar botón activo
            document.querySelectorAll('.btn-mes').forEach(b => b.classList.remove('activo'));
            this.classList.add('activo');
            
            // Generar nuevo calendario
            generarCalendario(mesActual, anioActual);
        });
    });
    
    // Generar calendario inicial
    generarCalendario(mesActual, anioActual);
    
    // Configurar botones del modal
    document.querySelector('.btn-cerrar').addEventListener('click', cerrarModal);
    document.getElementById('btnCerrarModal').addEventListener('click', cerrarModal);
    
    // Cerrar modal al hacer clic fuera
    document.getElementById('modalDetalle').addEventListener('click', function(e) {
        if (e.target === this) {
            cerrarModal();
        }
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModal();
        }
    });
}

// GENERAR CALENDARIO CORRECTAMENTE
function generarCalendario(mes, anio) {
    const grid = document.getElementById('calendarioGrid');
    grid.innerHTML = '';
    
    const infoMes = mesesInfo[mes];
    const totalDias = infoMes.dias;
    
    // Obtener primer día del mes (0=Dom, 1=Lun, ..., 6=Sáb)
    const primerDia = new Date(anio, mes - 1, 1).getDay();
    
    // Convertir a nuestro formato (0=Lun, 1=Mar, ..., 6=Dom)
    let primerDiaAjustado = primerDia - 1;
    if (primerDiaAjustado < 0) primerDiaAjustado = 6; // Domingo
    
    // Agregar días vacíos para alinear
    for (let i = 0; i < primerDiaAjustado; i++) {
        const diaVacio = document.createElement('div');
        diaVacio.className = 'dia-calendario vacio';
        grid.appendChild(diaVacio);
    }
    
    // Agregar días del mes
    for (let dia = 1; dia <= totalDias; dia++) {
        const diaElemento = document.createElement('div');
        diaElemento.className = 'dia-calendario';
        diaElemento.textContent = dia;
        diaElemento.dataset.dia = dia;
        diaElemento.dataset.mes = mes;
        
        // Marcar si tiene recuerdo
        const clave = `${mes}-${dia}`;
        if (recuerdos[clave]) {
            diaElemento.classList.add('con-recuerdo');
        }
        
        // Evento click
        diaElemento.addEventListener('click', function() {
            mostrarDetalleDia(dia, mes, anio);
        });
        
        grid.appendChild(diaElemento);
    }
    
    console.log(`Calendario generado: ${infoMes.nombre} ${anio}`);
}

// MOSTRAR DETALLE DEL DÍA
function mostrarDetalleDia(dia, mes, anio) {
    const modal = document.getElementById('modalDetalle');
    const clave = `${mes}-${dia}`;
    const infoMes = mesesInfo[mes];
    
    // Actualizar fecha
    document.getElementById('modalFecha').textContent = `${dia} de ${infoMes.nombre} ${anio}`;
    
    // Buscar recuerdo
    if (recuerdos[clave]) {
        const recuerdo = recuerdos[clave];
        document.getElementById('modalTitulo').textContent = recuerdo.titulo;
        document.getElementById('modalTexto').textContent = recuerdo.texto;
        document.getElementById('modalTipo').textContent = recuerdo.tipo;
        
        // Cambiar color del badge según tipo
        const badge = document.getElementById('modalTipo');
        badge.style.background = obtenerColorPorTipo(recuerdo.tipo);
    } else {
        // Mensaje por defecto
        document.getElementById('modalTitulo').textContent = `${dia} de ${infoMes.nombre}`;
        document.getElementById('modalTexto').textContent = 
            "Este día aún no tiene un recuerdo registrado. Cada día es una nueva oportunidad para crear memorias especiales.";
        document.getElementById('modalTipo').textContent = "Sin registro";
        document.getElementById('modalTipo').style.background = "#64748b";
    }
    
    // Mostrar modal con animación
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Evitar scroll
}

// CERRAR MODAL
function cerrarModal() {
    const modal = document.getElementById('modalDetalle');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
}

// COLORES POR TIPO DE RECUERDO
function obtenerColorPorTipo(tipo) {
    const colores = {
        'Conversación': '#3b82f6',
        'Espiritual': '#8b5cf6',
        'Celebración': '#10b981',
        'Cumpleaños': '#ec4899',
        'Oración': '#06b6d4',
        'Servicio': '#f59e0b'
    };
    return colores[tipo] || '#64748b';
}