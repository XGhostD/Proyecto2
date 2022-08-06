 
 const titulo_cuento = document.querySelector("div.contenedor h2")
 const desc_cuento = document.querySelector("div.contenedor p")
//presentacion
 let pregunta = prompt ("¿Te gustan las paguinas de terror ?")
 const nombre = "Alison Yamile"   ;
const apellidos = "Cruz Carrión"
const respuesta = nombre + " " + apellidos ;

console.log ("Hola mi nombre es:" + respuesta ) ;
//estructura paraa cambiar de texto y contenido
function leyenda_gemelas  () {
 let imagen_LAS_GEMELAS = document.getElementById("imagen");
imagen_LAS_GEMELAS.src = "imagenes/leyenda-gemelas.jpg";
 titulo_cuento.innerHTML = "LAS GEMELAS";
 desc_cuento.innerHTML = " En una localidad apartada de la ciudad, una familia vivía felizmente. Papá, mamá y dos gemelas integraban el hogar.Su casa se ubicaba cerca de una transitada carretera, la cual debían cruzar todas las mañanas para llegar al colegiode las niñas. Su madre siempre las acompañaba hasta la escuela, aunque luego debía devolverse sola para acudir a sutrabajo. No tenía problema con ello, la seguridad de sus hijas estaba primero. La rutina se repetía una y otra vez, sinningún percance.Hasta que, en una mañana como cualquier otra, las gemelas, tras desayunar y vestirse, emprendieron la caminata hastala institución académica junto a su madre.El clima era fresco. Una niebla arropaba el lugar, acompañada de pequeñas gotas de agua que parecían un suave rocío.Justo a mitad del recorrido, la mujer recibe una llamada desde su trabajo, se trataba de una emergencia. Era requeridainmediatamente en la oficina. Indecisa, opta por dar un voto de confianza a las pequeñasde 12 años, quienes tenían ya memorizado el camino al colegio. La leyenda de las gemelas -Niñas, debo ir a mi trabajo.Hoy irán solas a la escuela, recuerden tener mucho cuidado al cruzar la carretera. Le dijo la madre a sus hijas. A lo queellas respondieron, al unísono: -Sí, mami. Seremos cuidadosas. Las gemelas empezaron su recorrido, esta vez sinsupervisión. Cuando llegaron al peligroso cruce, la neblina dificultaba mucho la visibilidad. En medio del asfalto, laspequeñas no vieron el camión que se acercaba a toda velocidad. Un estrepitoso sonido anunció el descenso de las niñas.Años pasaron después de la fatalidad, y la mujer que alguna vez dejó ir solas a sus hijas al colegio, volvió a salirembarazada.Para su sorpresa, nuevamente se trataba de gemelas. Al nacer, eran protegidas con suma cautela. Crecieron siendovigiladas a todas horas. A su madre le aterraba la idea de revivir el nefasto evento de sus fallecidas hijas.Era el aniversario número doce de las chicas, casualmente, misma fecha en que la tragedia tocó la puerta de la familiahacía ya años. Aprovechando un descuido de su progenitora, se dirigieron a la transitada carretera. Lo tenían prohibido,por obvias razones. En el lugar, no habían pasado ni cinco minutos cuando su madre les localizó.Con lágrimas en los ojos, les suplicó que nunca se acercaran de nuevo a ese cruce.Las pequeñas la vieron con sus grandes ojos verdes, para decirle: -Tranquila, mami. No volveremos a ser atropelladas.";
}
 function leyenda_Charro_Negro () {
    let imagen_charro = document.getElementById("imagen");
   imagen_charro.src = "imagenes/El-Charro-Negro.jpg";
   titulo_cuento.innerHTML = "EL CHARRO NEGRO";
   desc_cuento.innerHTML = "Cuando el sol comienza a esconderse y las gallinas trepan los árboles para dormirse, las madres meten a sushijos, las puertas de las casas son atrancadas y los viajeros apresuran el paso mientras rezan. Nadie quiereencontrarse con el Charro Negro NegroSe trata de un ente que recibe el nombre por su vestimenta. Siempre que se aparece, porta un eleganteajuar de charro color negro con detalles de oro o plata. Se le puede ver montado sobre su caballo: ungran animal cuyos ojos son dos bolas de fuego que parecen hurgar en el alma de la víctima. Adela erauna joven despreocupada para su época, mientras las mujeres permanecían en casa atendiendo a loshombres de su familia, ella prefería la vida sin compromisos, vagaba ya entrada la noche en quien sabedonde, a pesar de la preocupación de sus padres.Una de tantas noches, se encontró en su camino con un hombre alto, de aspecto elegante, de impecabletraje negro compuesto por una chaqueta corta, una camisa, un pantalón ajustado y un sombrero de alaancha. Circulaba un lomo de un caballo enorme y de color azabache. Que impresionó a la joven alinstante por su gran porte, mirada elocuente y palabras cálidas. Tras una amable conversación Adela decidió aligerar el viaje y consintió a montar el caballo.En el justo instante que ella estuvo en el lomo del animal, este creció el doble de su tamaño, ardiendoen llamas, le impidió el escape, al escuchar los gritos de espanto de la joven, algunos salieron en suauxilio, solo para darse cuenta de que ella era ya propiedad del Diablo, que en forma de charro negrocabalgaba todas las noches por los alrededores de la Ciudad de México en busca de un alma incautaque llevara a sus dominios.Por ella no pudo hacerse nada, solo la vio arder en llamas sobre el caballo, ahogándose en sus propios gritos de dolor y desesperación. Nada malo puede decirse del Charro Negro si el viajero se limita apermitir su compañía hacia su lugar de residencia; si se acerca el amanecer, se despedirá cortésmentey se marchará lentamente, al igual que si el sendero que recorre lleva a las cercanías de una iglesia.Y así la leyenda del Charro Negro fue una de las leyendas más temidas en la época de los abuelos.";
} 
  function leyenda_nahuala (){
 let imagen_nahuala = document.getElementById("imagen");
 imagen_nahuala.src = "imagenes/la-leyenda-de-nahuala.jpg";
 titulo_cuento.innerHTML = "LA NAHUALA";
   }
  
function leyenda_loco_bajo_la_cama (){
  let imagen_loco = document.getElementById("imagen");
  imagen_loco.src ="imagenes/descarga.jpg";
  titulo_cuento.innerHTML = "EL LOCO BAJO LA CAMA ";
  desc_cuento.innerHTML = "Esta es la historia de una joven de [....], llamémosla Sara. De pequeña, Sara tenía miedo a la oscuridad, hasta que adoptó a un perro que le hacía compañía. Durante años, Sara dormía tranquila porque sabía que bajo la cama estaba su perro, y si tenía miedo solo tenía que extender la mano: entonces, el perro empezaba a lamerla hasta que se quedaba dormida.  Así pasaron los años y Sara se hizo adulta. Una noche, en la radio, escuchó que cerca de [....] estaba en busca y captura un asesino muy peligroso. Sara, acompañada de su perro, no tenía miedo: se metió en la cama, extendió la mano hacia el borde y el perro, como todas las noches, empezó a lamerla.  Durmió del tirón y, al despertar, le sorprendió que el perro no se hubiera cansado de lamerle la mano en toda la noche. O eso creía: al abrir los ojos, encontró al perro muerto sobre el suelo de la habitación. Bajo la cama, un hombre seguía lamiéndole la mano";
}

function leyenda_bruja (){
    let imagen5 = document.getElementById("imagen");
    imagen5.src = "imagenes/LA BRUJA CHUPA SANGRE.jpg";
    titulo_cuento.innerHTML = "LA BRUJA CHUPA SANGRE"
    desc_cuento.innerHTML = "n las tierras venezolanas existe una leyenda bastante peculiar, sobre seres que atacan en las noches y que aterrorizan a los pobladores de Guiria, Irapa y Soro del estado Sucre. Sobre los techos de zinc de los barrios más humildes en las noches más oscuras puede que oigas el rechinar de unos dientes y las pisadas estremecedoras de las brujas chupa sangre.  Los pobladores relatan que son mujeres hermosas durante el día, pero que de noche se convierten en enormes pájaros negros que sobrevuelan con sus enormes alas en busca de sus víctimas. Producen un encantamiento que duerme a la víctima para así poder extraerles la sangre en casi su totalidad. Si quieres saber cómo identificar estos seres, basta con hacerlas caminar por la arena en la que no dejarán huellas tras su paso, apreciar su brazo derecho ya que no pueden levantarlo durante el día, si quieres liberarla de su maldición debes rosearles agua bendita para poder así culminar con su sufrimiento"
}

 