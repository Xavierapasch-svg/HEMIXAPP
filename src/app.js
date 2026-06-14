import { useState, useEffect } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const PROCEDURES = {
  cardiologia: {
    label: "Cardiología Intervencional",
    icon: "♥",
    color: "#e63946",
    procedures: [
      {
        id: "coronariografia",
        name: "Coronariografía",
        short: "Visualización de arterias coronarias mediante fluoroscopia e inyección selectiva de contraste yodado.",
        description:
          "La inyección selectiva de contraste en cada arteria coronaria permite determinar la anatomía coronaria, la trayectoria, la disposición de las ramas, la existencia de fístulas, vasos colaterales y el grado de estenosis. El acceso vascular puede ser por arteria radial, radial distal o arteria femoral. Se utilizan catéteres preformados para canular los ostium coronarios, con distintos diámetros French según la anatomía del paciente.",
        indications: [
          "Síndrome coronario agudo con o sin SDST y angina inestable",
          "Angina estable con exámenes complementarios sugerentes de isquemia (test de esfuerzo, AngioTC, ecocardiograma de estrés, cintigrama, Holter de ritmo)",
          "Patologías valvulares con indicación de resolución quirúrgica, como examen preoperatorio",
          "Examen preoperatorio con sospecha de cardiopatía coronaria o alto riesgo cardiovascular",
          "Paro cardiorrespiratorio con ECG o historia sugerente de SCA",
          "Estudio complementario de insuficiencia cardiaca o disfunción ventricular para descartar origen isquémico",
        ],
        supplies: [
          "Equipo de ropa estéril o kit prediseñado para coronariografía",
          "Gasas y compresas",
          "Agujas para anestesia intradérmica y subcutánea",
          "Jeringas estándar 5, 10 y 20 ml",
          "Verapamilo 1 ampolla de 5 mg",
          "Nitroglicerina 1 frasco ampolla de 50 mg",
          "Lidocaína al 2%",
          "Heparina no fraccionada 100 UI/kg",
          "Suero glucosado al 5%, 250 cc",
          "Suero fisiológico al 0.9%, 500 cc",
          "Kit de introductor radial o femoral según Fr necesario",
          "AngioTouch o sistema de inyección manual con Manifold, bajada de suero, jeringa 10 cc y transductor de presión",
          "Guía 0.035 en J teflonada de 260 cm",
          "Catéteres diagnósticos JL y JR de 5 o 6 Fr, curvas 3.5 y 4",
        ],
      },
      {
        id: "angioplastia",
        name: "Angioplastia Coronaria PTCA",
        short: "Intervencionismo Coronario Percutáneo para dilatar arterias con estenosis significativa y mejorar el flujo sanguíneo.",
        description:
          "Se realiza en la misma sala de hemodinamia tras el cateterismo diagnóstico, bajo anestesia local, usando el mismo introductor y arteria ya canalizada. El paciente permanece despierto. Se administra una segunda dosis de heparina sódica para completar 100 UI/kg. El éxito angiográfico con balón solo requiere estenosis residual menor a 50% con flujo TIMI III y ganancia luminal de al menos 20%. Con implante de stent, el éxito anatómico exige estenosis residual menor a 20%. El éxito clínico se define como ausencia de nueva PTCA o cirugía en los próximos 30 días.",
        indications: [
          "Lesión coronaria significativa evidenciada en coronariografía diagnóstica",
          "Angioplastia primaria durante infarto agudo de miocardio en las primeras horas de evolución",
          "Prevención de oclusión del vaso con riesgo inminente de infarto",
        ],
        supplies: [
          "Todos los insumos descritos para coronariografía diagnóstica",
          "Heparina sódica para completar dosis terapéutica de 100 UI/kg",
          "Guía Runthrough como primera elección u otra guía Floppy para angioplastias tradicionales",
          "Catéter terapéutico o catéter guía según anatomía del paciente y soporte requerido",
          "Set de angioplastia: jeringa insufladora más pasador de guía más válvula homeostática o llave en Y",
          "Medio de contraste diluido en copela para insuflar balones y stents",
          "Balones de predilatación o semi-complacientes según tipo de lesión",
          "Stents medicados DES según elección médica",
          "Balones medicados según elección médica",
          "Balones de post dilatación no complacientes NC",
        ],
      },
      {
        id: "complejas",
        name: "Angioplastias Complejas",
        short: "Procedimientos de alta complejidad: bifurcaciones, tronco coronario izquierdo, oclusión crónica total, aterectomía y litotripsia.",
        description:
          "Representan un desafío para todo el equipo de hemodinamia, no solo por la técnica sino por la gestión de insumos, hospitalización, adquisición de imágenes y coordinación multidisciplinaria. La complejidad muchas veces depende de factores del paciente como disfunción ventricular y condición clínica de base. Incluyen: lesiones en bifurcación (hasta 20% de las lesiones tratadas, con mayor tasa histórica de reestenosis), lesión de tronco coronario izquierdo (peor pronóstico coronario, mortalidad sin revascularización de hasta 37% a 3 años, criterios de severidad por IVUS con DLM menor a 3 mm y ALM menor o igual a 6 mm2, y FFR menor a 0.75), oclusión crónica total o CTO (flujo TIMI 0 con duración mayor a 3 meses, procedimientos largos con mayor exposición a radiación), aterectomía rotacional RotaPro (fresa de diamante a 140.000-180.000 rpm para placas calcificadas), litotripsia intravascular ShockWave (ondas de choque pulsátil para fracturar calcio en íntima y media) y aterectomía orbital Diamondback 360 (corona de diamante excéntrica con guía ViperWire y lubricante ViperSlide).",
        indications: [
          "Lesiones de bifurcación que requieren mantener abierta una rama secundaria relevante",
          "Lesión de tronco coronario izquierdo no protegido en pacientes rechazados para cirugía o que la rechazan",
          "Rescate durante angioplastia tradicional complicada o durante IAM con compromiso de TCI",
          "Oclusión crónica total con indicación de revascularización percutánea",
          "Lesiones calcificadas que requieren modificación de placa antes del implante de stent",
        ],
        supplies: [
          "Todos los insumos de PTCA estándar",
          "Guías de soporte específico según anatomía y técnica",
          "Sistema RotaPro con fresas de diferentes diámetros para aterectomía rotacional",
          "Balón ShockWave para litotripsia intravascular coronaria",
          "Sistema Diamondback 360 con guía ViperWire Advance y lubricante ViperSlide",
          "Insumos de empresa según técnica específica solicitada",
        ],
      },
      {
        id: "ifr-ffr",
        name: "Evaluación Funcional IFR / FFR / DPR",
        short: "Estudio hemodinámico de lesiones intermedias que no pueden clasificarse solo con la imagen angiográfica.",
        description:
          "El IFR (Instantaneous Flow Reserve) e índices derivados como DPR evalúan la severidad funcional de una estenosis mediante el gradiente de presión entre la zona distal y proximal de la lesión, sin necesidad de hiperemia. Valores funcionalmente no significativos van de 0.9 a 1, y significativos por debajo de 0.9. La FFR (Fractional Flow Reserve) requiere inducir hiperemia máxima con vasodilatadores como adenosina, nitroglicerina o dipiridamol, y evalúa el flujo coronario epicárdico mediante el cociente entre presión media distal y presión media aórtica. Valores hemodinámicamente no significativos van de 0.8 a 1, y significativos por debajo de 0.8. Si el resultado es significativo, el procedimiento continúa directamente a PTCA.",
        indications: [
          "Lesiones angiográficamente intermedias que no permiten decidir conducta solo con la imagen",
          "Evaluación de severidad funcional previa a decidir revascularización",
          "Estudio de enfermedad de tronco coronario izquierdo no protegido",
        ],
        supplies: [
          "Todos los insumos de coronariografía diagnóstica",
          "Set de llave en Y",
          "Sonda Verrata u OmniWire para IFR",
          "Catéter Navvus para DPR",
          "Nitroglicerina preparada en mesa",
          "Adenosina 6 mg para FFR: ampolla de 6000 ug diluida en jeringa madre de 10 ml, de la cual se prepara una jeringa hija con 600 ug en 10 ml",
          "Insumos de PTCA disponibles en caso de resultado funcionalmente significativo",
        ],
      },
      {
        id: "sondeo-izquierdo",
        name: "Sondeo Izquierdo y Ventriculografía",
        short: "Cateterismo izquierdo para estudio de enfermedad coronaria, aórtica, valvulopatías y función ventricular.",
        description:
          "Requiere abordaje arterial desde arteria femoral, radial, braquial o cubital. Habitualmente incluye coronariografía y ventriculografía izquierda mediante un catéter Pig-Tail posicionado en el ventrículo izquierdo, lo que permite analizar contractilidad segmentaria, cuantificar volúmenes, fracción de eyección y valorar severidad de insuficiencia mitral. También se registran presiones de ventrículo y aorta para determinar gradiente transaórtico. Se debe informar al paciente sobre posibles extrasístoles por irritación ventricular y la sensación de calor intenso producida por el contraste.",
        indications: [
          "Estudio de enfermedad coronaria, valvulopatías y miocardiopatías",
          "Evaluación de la función ventricular izquierda y fracción de eyección",
          "Valoración de severidad de insuficiencia mitral",
          "Determinación de gradiente transaórtico en sospecha de estenosis aórtica",
        ],
        supplies: [
          "Catéter Pig-Tail",
          "Medio de contraste ajustado según creatinina del paciente",
          "Inyectora automática de medio de contraste AngioTouch o inyectora externa",
        ],
      },
      {
        id: "sondeo-derecho",
        name: "Sondeo Derecho con Swan-Ganz",
        short: "Cateterismo derecho para medir presiones del corazón derecho, arteria y capilar pulmonar, y calcular gasto cardiaco.",
        description:
          "Se realiza mediante acceso percutáneo de la vena femoral, subclavia, yugular o antecubital. El catéter Swan-Ganz estándar de 7 Fr y 110 cm posee cuatro luces: distal en color amarillo para presión de arteria pulmonar y gases venosos mixtos, proximal en color azul a 30 cm de la punta para presión venosa central y administración de fármacos, luz de inflado del balón para enclavamiento y medición de presión capilar pulmonar, y cable del termistor para determinación del gasto cardiaco por termodilución. El gasto cardiaco normal en ausencia de cortocircuitos es de 4 a 8 litros por minuto.",
        indications: [
          "Estudio diferencial de la disnea de origen incierto",
          "Valoración de valvulopatías y shunts intracardiacos",
          "Estudio de hipertensión pulmonar",
          "Estudio preoperatorio para trasplante cardiaco",
        ],
        supplies: [
          "Equipo de ropa estéril o kit prediseñado para coronariografía",
          "Gasas y compresas",
          "Agujas para anestesia intradérmica y subcutánea",
          "Jeringas estándar 5, 10 y 20 ml",
          "Catéter Swan-Ganz",
          "Lidocaína al 2%",
          "Suero fisiológico al 0.9%, 500 cc",
          "Introductor femoral 7 Fr",
          "Trocar de punción femoral",
          "Jeringas de gases y cooler con unidad refrigerante para transporte",
          "Orden de exámenes, tubo lila rotulado y etiquetas para datos del paciente",
          "Hoja de registro de presiones de cavidades",
          "Apósito compresivo femoral",
          "En caso de HTP severa: Iloprost, mascarilla de recirculación, mascarilla de nebulización y ampolla de SF 0.9% para test de reversibilidad",
        ],
      },
      {
        id: "test-iloprost",
        name: "Test de Vasoreactividad con Iloprost",
        short: "Evaluación de reversibilidad de la hipertensión pulmonar mediante nebulización con vasodilatador.",
        description:
          "Se realiza en pacientes con presión arterial pulmonar media mayor o igual a 40 mmHg detectada en sondeo derecho. Protocolo: medición basal de gasto cardiaco y PAP media, oxigenación al 100% con mascarilla de alto flujo por 10 minutos, nebulización con Iloprost 10 ug diluido en 1 ml más 3 cc de suero fisiológico durante 10 minutos, y segunda medición de gasto cardiaco y PAP media 10 minutos después de la nebulización. El test se considera positivo si la PAP media cae más de 10 mmHg, alcanza un valor absoluto menor a 40 mmHg, y se asocia a aumento o mantención del gasto cardiaco.",
        indications: [
          "Pacientes con PAP media mayor o igual a 40 mmHg en sondeo derecho",
          "Evaluación de candidatos a tratamiento vasodilatador específico para hipertensión pulmonar",
        ],
        supplies: [
          "Mascarilla de alto flujo para oxigenación previa",
          "Iloprost 10 ug",
          "Ampolla de suero fisiológico 0.9% para dilución",
          "Mascarilla de nebulización",
          "Equipo de medición de gasto cardiaco ya instalado mediante Swan-Ganz",
        ],
      },
      {
        id: "aortografia",
        name: "Aortografía",
        short: "Inyección de contraste en la aorta para valorar insuficiencia o estenosis valvular, tortuosidad o disección aórtica.",
        description:
          "Se realiza con catéter Pig-Tail e inyector automático, habitualmente en aorta ascendente. También puede realizarse en aorta abdominal para diagnóstico de aneurismas o disecciones, o a nivel de la bifurcación ilíaca para valorar tortuosidad y enfermedad arterial de miembros inferiores, ajustando volúmenes de inyección y proyección fluoroscópica según el segmento estudiado. Se debe informar al paciente sobre la sensación de calor intenso del contraste, que en ocasiones se percibe como necesidad de orinar.",
        indications: [
          "Sospecha de insuficiencia o estenosis de la válvula aórtica",
          "Evaluación de tortuosidad, aneurisma o disección de la aorta torácica o abdominal",
          "Estudio de enfermedad arterial de miembros inferiores a nivel de bifurcación ilíaca",
        ],
        supplies: [
          "Equipo de ropa estéril o kit prediseñado para coronariografía",
          "Gasas y compresas",
          "Agujas para anestesia intradérmica y subcutánea",
          "Jeringas estándar 5, 10 y 20 ml",
          "Verapamilo 1 ampolla de 5 mg",
          "Lidocaína al 2%",
          "Heparina no fraccionada 100 UI/kg",
          "Suero fisiológico al 0.9%, 500 cc",
          "Kit de introductor radial o femoral según Fr necesario",
          "Medio de contraste ajustado según creatinina del paciente",
          "AngioTouch o inyectora automática externa",
          "Guía 0.035 en J teflonada de 260 cm",
          "Catéter Pig-Tail",
        ],
      },
      {
        id: "bcia",
        name: "Balón de Contrapulsación Intraaórtico BCIA",
        short: "Dispositivo de asistencia circulatoria que mejora perfusión coronaria y reduce la postcarga ventricular izquierda.",
        description:
          "Es un catéter coaxial con un globo alargado que se aloja en la aorta torácica descendente, distal a la arteria subclavia izquierda y por encima de las renales. La consola infla el balón durante la diástole ventricular en sincronía con el ECG, mejorando la perfusión coronaria y carotídea, aumentando la presión diastólica y disminuyendo la precarga del ventrículo izquierdo. El resultado neto es menor consumo de oxígeno miocárdico y aumento del gasto cardiaco. Es el dispositivo de soporte mecánico más utilizado en hemodinamia, presente hasta en un 30% de las angioplastias complejas.",
        indications: [
          "Shock cardiogénico en contexto de IAM o insuficiencia cardiaca aguda refractaria a inotrópicos",
          "Complicaciones mecánicas del IAM como comunicación interventricular, insuficiencia mitral aguda o rotura de músculo papilar",
          "Angina inestable resistente al tratamiento médico óptimo",
          "Taquicardia ventricular refractaria al tratamiento médico",
          "Soporte en angioplastia de alto riesgo, como lesión severa de TCI o FEVI menor a 30%",
          "Soporte en pacientes quirúrgicos de alto riesgo con circulación extracorpórea",
        ],
        supplies: [
          "Equipo de ropa estéril o kit prediseñado para coronariografía",
          "Gasas y compresas",
          "Agujas para anestesia intradérmica y subcutánea",
          "Jeringas estándar 5, 10 y 20 ml",
          "Lidocaína al 2%",
          "Heparina no fraccionada 100 UI/kg",
          "Suero fisiológico al 0.9%, 500 cc",
          "Porta aguja y seda 2/0 para fijar el sistema",
          "Medio de contraste ajustado según creatinina del paciente",
          "Consola BCIA con cilindro de helio",
          "Kit de catéter y balón BCIA, habitualmente 40 cc para la estatura promedio de la población chilena",
          "Sistema de presión invasiva: presurizador 500 o 1000 cc, suero fisiológico y transductor de presión",
        ],
      },
      {
        id: "alcoholizacion-septal",
        name: "Alcoholización Septal",
        short: "Terapia endovascular para la miocardiopatía hipertrófica obstructiva mediante infarto controlado del septo.",
        description:
          "La miocardiopatía hipertrófica obstructiva produce un engrosamiento anormal del septo ventricular que obstruye el tracto de salida del ventrículo izquierdo, generando disnea, fatiga, mareos, síncope y angina de esfuerzo. El diagnóstico combina ecocardiografía, resonancia magnética cardiaca, ECG y pruebas de esfuerzo. Como alternativa a la miomectomía quirúrgica, la alcoholización septal consiste en inyectar alcohol absoluto a través de un balón Over the Wire posicionado en la rama septal responsable, generando un infarto controlado que reduce el grosor septal. Requiere monitorización con ecocardiografía transesofágica y soporte de marcapaso transitorio por riesgo de bloqueo AV.",
        indications: [
          "Miocardiopatía hipertrófica obstructiva sintomática refractaria a tratamiento médico con betabloqueantes o bloqueadores de calcio",
          "Pacientes con gradiente significativo en el tracto de salida del ventrículo izquierdo no candidatos o que rechazan miomectomía quirúrgica",
        ],
        supplies: [
          "Todos los insumos descritos para coronariografía diagnóstica",
          "Heparina sódica para completar dosis terapéutica de 100 UI/kg",
          "Guía Runthrough u otra guía Floppy",
          "Catéter terapéutico según anatomía",
          "Set de angioplastia: jeringa insufladora más pasador de guía más válvula homeostática en Y",
          "Medio de contraste diluido en copela",
          "Balones Over the Wire OTW",
          "Alcohol absoluto aportado por el paciente mediante receta magistral",
          "Check de marcapaso, sonda de marcapaso transitoria y fuente de poder de marcapaso",
          "Ecógrafo con sonda transesofágica",
          "Catéter Pig-Tail",
        ],
      },
    ],
  },
  electrofisiologia: {
    label: "Electrofisiología",
    icon: "⚡",
    color: "#4361ee",
    procedures: [
      {
        id: "marcapasos",
        name: "Marcapasos",
        short: "Dispositivo implantable que genera impulsos eléctricos para tratar bradicardias sintomáticas.",
        description:
          "Los marcapasos modernos monitorean el ritmo cardiaco y estimulan solo cuando es necesario. Unicamerales con 1 electrodo o bicamerales con 2 electrodos. Incluye variantes como Micra intracardíaco sin electrodo y estimulación de rama izquierda LBP.",
        indications: [
          "Bloqueo AV completo o de alto grado",
          "Enfermedad del nodo sinusal sintomática",
          "Bradicardia sinusal sintomática",
          "Síncope vasovagal refractario",
        ],
        supplies: [
          "Kit de ropa estéril de hemodinamia",
          "Gasas y compresas estériles",
          "Caja de instrumental",
          "Cono estéril para lámpara",
          "Suturas seda y Vicryl para subcutáneo y piel",
          "Jeringas 5 y 20 cc",
          "Aguja para anestesia local",
          "Lidocaína al 2%",
          "Gentamicina en ampolla para solución salina",
          "Suero fisiológico 0.9%, 500 ml",
          "Dispositivo marcapaso según indicación",
          "Tegaderm",
          "Programador",
          "Electrobisturí con lápiz y placa de retorno",
          "Desfibrilador con parches de MCP funcionales",
        ],
      },
      {
        id: "ablacion",
        name: "Ablación Cardiaca",
        short: "Destrucción selectiva de tejido arritmogénico. Trata FA, flutter, TSV, WPW y taquicardias ventriculares.",
        description:
          "Se utiliza energía eléctrica, calor o campo pulsado para ablacionar focos. Técnicas: Radiofrecuencia RF, Cartografía electroanatómica CARTO y Campo Pulsado FARAPULSE. La sedación consciente es fundamental para FARAPULSE.",
        indications: [
          "Fibrilación auricular FA",
          "Flutter auricular",
          "Síndrome de Wolff-Parkinson-White",
          "Taquicardia supraventricular por reentrada",
          "Taquicardia ventricular",
        ],
        supplies: [
          "Kit de ropa estéril de hemodinamia",
          "Gasas y compresas estériles",
          "Jeringas 10 y 20 cc",
          "Lidocaína al 2%",
          "Suero fisiológico 0.9%, 500 ml",
          "Introductores femorales 6-8 Fr",
          "Trocar de punción femoral",
          "Tegaderm",
          "Cable y placa de retorno",
          "Desfibrilador con parches de MCP funcionales",
          "Catéteres EF diagnósticos Cuadripolar y Decapolar",
          "Catéter de ablación solicitado",
          "Polígrafo",
          "Kit punción transeptal para FA",
          "Manga de Eco y Ecógrafo para FARAPULSE",
          "2 sueros fisiológicos 500 ml heparinizados para FARAPULSE",
          "Propofol 1% más Fentanilo más Midazolam para sedación consciente",
        ],
      },
      {
        id: "dai",
        name: "DAI y TRC-D",
        short: "Desfibrilador automático implantable para prevención de muerte súbita cardiaca.",
        description:
          "Monitorea el ritmo continuamente. Administra ATP o choque eléctrico ante taquiarritmias ventriculares malignas. El TRC-D incorpora resincronización para IC con FEVI reducida y bloqueo de rama.",
        indications: [
          "Prevención secundaria de muerte súbita",
          "Prevención primaria en FEVI menor o igual a 35% con tratamiento médico óptimo",
          "IC con bloqueo de rama izquierda indicación de TRC-D",
          "Miocardiopatías con riesgo arrítmico elevado",
        ],
        supplies: [
          "Kit de ropa estéril de hemodinamia",
          "Gasas y compresas estériles",
          "Caja de instrumental",
          "Cono estéril para lámpara",
          "Suturas seda y Vicryl",
          "Jeringas 5 y 20 cc",
          "Lidocaína al 2%",
          "Gentamicina en ampolla",
          "Suero fisiológico 0.9%, 500 ml",
          "Dispositivo DAI o TRC-D según indicación",
          "Tegaderm",
          "Programador",
          "Electrobisturí con placa de retorno",
          "Desfibrilador con parches de MCP funcionales",
        ],
      },
    ],
  },
  vascular: {
    label: "Vascular Periférico",
    icon: "🩸",
    color: "#06d6a0",
    procedures: [
      {
        id: "pta",
        name: "Arteriografía y PTA",
        short: "Diagnóstico y tratamiento de enfermedad arterial periférica mediante cateterismo e implante de stent.",
        description:
          "Arteriografía diagnóstica seguida de angioplastia transluminal percutánea. Indicada en estenosis cortas ilíacas y femorales. Oclusiones femorales y poplíteas hasta 10 cm pueden ser recanalizadas.",
        indications: [
          "Enfermedad arterial periférica con claudicación intermitente",
          "Isquemia crítica de extremidades",
          "Oclusión arterial aguda",
          "Planificación previa a cirugía vascular",
        ],
        supplies: [
          "Equipo de ropa estéril de hemodinamia",
          "Gasas y compresas",
          "Agujas anestesia intradérmica y subcutánea",
          "Jeringas 10 y 20 ml",
          "Lidocaína al 2%",
          "Heparina no fraccionada 100 UI/kg",
          "Suero fisiológico 0.9%, 500 cc",
          "Introductor femoral 5 o 6 Fr",
          "Trocar de punción femoral",
          "Frascos con medio de contraste",
          "Guía 0.035 hidrofílica angulada",
          "Catéteres diagnósticos Multipropósito y Pig-Tail",
          "Apósito compresivo femoral",
          "Manga de Eco y Ecógrafo",
          "Jeringa insufladora más balones periféricos más stents periféricos",
          "Guía 0.014 o 0.018 para PTA",
        ],
      },
      {
        id: "tevar_evar",
        name: "TEVAR y EVAR",
        short: "Reparación endovascular de aneurismas aórticos torácicos TEVAR o abdominales EVAR.",
        description:
          "Implante de endoprótesis stent-graft en aorta mediante cateterismo mínimamente invasivo. EVAR indicado en AAA mayor o igual a 5.5 cm con anatomía favorable. Ambos procedimientos requieren anestesia general.",
        indications: [
          "Aneurisma aórtico abdominal mayor o igual a 5.5 cm para EVAR",
          "Aneurisma aórtico torácico sintomático o mayor a 6 cm para TEVAR",
          "Disección aórtica tipo B complicada",
          "Pseudoaneurisma aórtico",
        ],
        supplies: [
          "Equipo de ropa estéril de hemodinamia",
          "Gasas y compresas",
          "Heparina no fraccionada 100 UI/kg",
          "Suero fisiológico 0.9%, 500 cc",
          "Introductor femoral 8 Fr",
          "Cierre percutáneo Perclose y Angio-Seal",
          "Trocar de punción femoral",
          "AngioTouch",
          "Guía 0.035 hidrofílica angulada",
          "Guía de alto soporte",
          "Kit Endoprótesis con Pig-tail centimetrado, introductor y balón CODA",
        ],
      },
    ],
  },
  radiologia: {
    label: "Radiología Intervencional",
    icon: "📡",
    color: "#f4a261",
    procedures: [
      {
        id: "arteriografia-selectiva",
        name: "Arteriografía Selectiva",
        short: "Visualización arterial selectiva guiada por fluoroscopia para diagnóstico y planificación.",
        description:
          "Catéter guiado a la arteria de interés con inyección de contraste. Identifica obstrucciones, estenosis, aneurismas o anomalías. Puede seguirse directamente de angioplastia, embolización o colocación de stent.",
        indications: [
          "Evaluación pre-quirúrgica de tumores vasculares",
          "Estudio de hemorragias viscerales",
          "Malformaciones arteriovenosas",
          "Planificación de embolización",
        ],
        supplies: [
          "Equipo de ropa estéril de hemodinamia",
          "Gasas y compresas",
          "Jeringas 5, 10 y 20 ml",
          "Lidocaína al 2%",
          "Heparina no fraccionada 100 UI/kg",
          "Suero fisiológico 0.9%, 500 cc",
          "Introductor femoral 5 o 6 Fr o kit radial",
          "Trocar de punción femoral",
          "Medio de contraste o inyectora automática ACIST",
          "AngioTouch",
          "Guía 0.035 hidrofílica angulada",
          "Catéteres diagnósticos hidrofílicos Terumo",
          "Dispositivo de cierre Angio-Seal 6F",
        ],
      },
      {
        id: "embolizacion",
        name: "Embolizaciones",
        short: "Bloqueo selectivo del flujo sanguíneo para tratar hemorragias, tumores o malformaciones.",
        description:
          "Catéter hasta sitio de interés. Se inyectan microesferas, coils metálicos o gel para obstruir el vaso. Menos invasivo que cirugía con recuperación más rápida.",
        indications: [
          "Hemorragia digestiva o retroperitoneal activa",
          "Tumores hipervascularizados pre-quirúrgicos",
          "Malformaciones arteriovenosas",
          "Varicocele y miomas uterinos",
        ],
        supplies: [
          "Equipo de ropa estéril de hemodinamia",
          "Gasas y compresas",
          "Jeringas 5, 10 y 20 ml",
          "Lidocaína al 2%",
          "Heparina no fraccionada 100 UI/kg",
          "Suero fisiológico 0.9%, 500 cc",
          "Introductor femoral 5 o 6 Fr",
          "Trocar de punción femoral",
          "Medio de contraste o inyectora ACIST",
          "Guía 0.035 hidrofílica angulada",
          "Catéteres hidrofílicos Terumo",
          "Dispositivo de cierre Angio-Seal 6F",
          "Microcatéter de la empresa",
          "Insumos de embolización específicos microesferas coils gel",
        ],
      },
    ],
  },
  neurologia: {
    label: "Neurología Intervencional",
    icon: "🧠",
    color: "#7b2d8b",
    procedures: [
      {
        id: "angiografia-cerebral",
        name: "Angiografía Cerebral",
        short: "Visualización de vasos cerebrales para detectar aneurismas, MAV, estenosis o stroke isquémico agudo.",
        description:
          "Inyección de contraste en arterias que irrigan el cerebro mediante catéter por arteria femoral o radial. Imágenes en cineangiografía. Herramienta diagnóstica y de planificación para patología cerebrovascular.",
        indications: [
          "Aneurismas cerebrales",
          "Malformaciones arteriovenosas MAV",
          "Estenosis de arterias cerebrales",
          "Stroke isquémico agudo para trombectomía mecánica",
          "Vasoespasmo post-hemorragia subaracnoidea",
        ],
        supplies: [
          "Kit de ropa estéril",
          "Gasas y compresas",
          "Jeringas 5, 10 y 20 ml más jeringa acrílico 1 ml",
          "Medio de contraste",
          "Lidocaína al 2%",
          "Heparina no fraccionada 100 UI/kg",
          "Suero fisiológico 0.9%, 500 cc",
          "Kit de introductor radial o femoral",
          "Trocar de punción",
          "AngioTouch",
          "Guía 0.035 hidrofílica angulada",
          "Catéteres diagnósticos hidrofílicos curvas según arteria",
          "Manga de Eco estéril y Ecógrafo",
          "Suero fisiológico 0.9% 1000 ml más 1000 UI heparina presurizado",
          "Apósito compresivo femoral",
          "Angio-Seal 6F",
        ],
      },
    ],
  },
};

const DICTIONARY = [
  { term: "Angioplastia", def: "Procedimiento para dilatar un vaso sanguíneo obstruido o estrechado." },
  { term: "Estenosis", def: "Estrechamiento anormal de un vaso sanguíneo o válvula." },
  { term: "Stent", def: "Dispositivo metálico en malla implantado en un vaso para mantenerlo abierto." },
  { term: "DES", def: "Stent farmacoactivo. Libera fármaco antiproliferativo para reducir reestenosis." },
  { term: "TIMI", def: "Escala de flujo coronario del 0 al III. TIMI III es flujo normal. Criterio de éxito en PTCA." },
  { term: "FFR", def: "Reserva fraccional de flujo. Cociente entre presión distal y aórtica bajo hiperemia máxima. Menor a 0.8 es significativo." },
  { term: "IFR", def: "Índice de reserva instantánea de flujo. Evalúa severidad de una estenosis sin necesidad de hiperemia. Menor a 0.9 es significativo." },
  { term: "IVUS", def: "Ultrasonido intravascular. Imagen intracoronaria para evaluar placa y resultado de stent." },
  { term: "Fluoroscopia", def: "Radioscopia en tiempo real que guía los procedimientos de hemodinamia." },
  { term: "French Fr", def: "Unidad del diámetro exterior de catéteres e introductores. 1 Fr equivale a 0.33 mm." },
  { term: "Heparina no fraccionada", def: "Anticoagulante de acción rápida. Dosis habitual en hemodinamia: 100 UI/kg." },
  { term: "CTO", def: "Oclusión crónica total. Flujo TIMI 0 por más de 3 meses." },
  { term: "TCI", def: "Tronco coronario izquierdo. Su enfermedad tiene el peor pronóstico coronario." },
  { term: "DAI", def: "Desfibrilador automático implantable. Trata arritmias ventriculares malignas." },
  { term: "TRC", def: "Terapia de resincronización cardiaca. Para IC con bloqueo de rama." },
  { term: "FA", def: "Fibrilación auricular. Arritmia más frecuente en práctica clínica." },
  { term: "BCIA", def: "Balón de contrapulsación intraaórtico. Soporte hemodinámico mecánico sincronizado con el ECG." },
  { term: "EVAR", def: "Reparación endovascular de aneurisma aórtico abdominal." },
  { term: "TEVAR", def: "Reparación endovascular de aneurisma aórtico torácico." },
  { term: "ACT", def: "Tiempo de coagulación activado. Monitorea anticoagulación en pabellón." },
  { term: "AngioTouch", def: "Tubo de alta presión para inyección automática de contraste o solución salina." },
  { term: "Angio-Seal", def: "Dispositivo de cierre percutáneo arterial mediante tapón de colágeno." },
  { term: "Swan-Ganz", def: "Catéter de 7 Fr y 110 cm para medir presiones del corazón derecho y calcular gasto cardiaco." },
  { term: "Gasto cardiaco", def: "Volumen de sangre bombeado por el corazón en un minuto. Valor normal entre 4 y 8 L/min." },
  { term: "MCHO", def: "Miocardiopatía hipertrófica obstructiva. Engrosamiento septal que obstruye el tracto de salida del VI." },
  { term: "PAP", def: "Presión arterial pulmonar. Su medición media permite evaluar hipertensión pulmonar." },
];

const FAQS = [
  { q: "Cuándo se prefiere acceso radial versus femoral en coronariografía", a: "El acceso radial es primera elección por menor sangrado y deambulación precoz. El femoral se reserva cuando el radial no es factible, en procedimientos complejos que requieren mayor soporte, o en anatomía radial adversa." },
  { q: "Cuál es la diferencia entre IFR y FFR", a: "El IFR evalúa la severidad de una estenosis mediante el gradiente de presión sin necesidad de hiperemia. La FFR requiere inducir hiperemia máxima con un vasodilatador como adenosina y evalúa el flujo coronario epicárdico bajo esa condición." },
  { q: "Cómo se calcula la dosis de heparina en hemodinamia", a: "Dosis estándar: 100 UI/kg. En procedimientos con heparina continua como FARAPULSE se monitorea con ACT cada 20 minutos para mantener niveles terapéuticos." },
  { q: "Cuál es la diferencia entre marcapaso y DAI", a: "El marcapaso trata bradicardias estimulando el corazón. El DAI detecta taquiarritmias ventriculares malignas y actúa mediante ATP, estimulación antitaquicardia, o choque eléctrico." },
  { q: "Qué es el flujo TIMI", a: "Escala 0 a III del flujo coronario angiográfico. TIMI 0 sin flujo. TIMI I penetración sin perfusión. TIMI II lento pero completo. TIMI III flujo normal. El éxito de PTCA requiere TIMI III." },
  { q: "Cuándo se indica BCIA durante una angioplastia", a: "Se utiliza como soporte en angioplastias de alto riesgo, como lesiones severas de tronco coronario izquierdo o FEVI menor a 30%, y en shock cardiogénico o complicaciones mecánicas del IAM." },
  { q: "Qué insumos se agregan para una alcoholización septal", a: "Además de los insumos de coronariografía, se requiere balón Over the Wire, alcohol absoluto aportado por el paciente, sonda y fuente de marcapaso transitorio, y ecógrafo con sonda transesofágica para monitorización." },
  { q: "Cuándo se considera positivo el test de vasoreactividad con Iloprost", a: "Es positivo si la PAP media cae más de 10 mmHg, alcanza un valor absoluto menor a 40 mmHg, y se asocia a aumento o mantención del gasto cardiaco." },
];

const CALCULATORS = [
  {
    id: "heparina",
    name: "Heparina",
    fields: [{ label: "Peso", key: "peso", unit: "kg" }],
    formula: (v) => ({ resultado: v.peso * 100 + " UI", detalle: v.peso + " kg x 100 UI/kg = " + v.peso * 100 + " UI HNF" }),
  },
  {
    id: "contraste",
    name: "Límite Contraste",
    fields: [{ label: "Peso", key: "peso", unit: "kg" }, { label: "Creatinina", key: "creat", unit: "mg/dL" }],
    formula: (v) => { var r = Math.round((5 * v.peso) / v.creat); return { resultado: r + " ml", detalle: "(5 x " + v.peso + ") / " + v.creat + " = " + r + " ml máximo" }; },
  },
  {
    id: "adenosina",
    name: "Adenosina FFR",
    fields: [],
    formula: () => ({ resultado: "600 µg", detalle: "1 ampolla de 6000 µg en jeringa madre de 10 ml. Se extrae 1 ml y se diluye en 10 ml para obtener jeringa hija con 600 µg totales" }),
  },
  {
    id: "propofol",
    name: "Propofol BIC",
    fields: [{ label: "Peso", key: "peso", unit: "kg" }, { label: "Dosis", key: "dosis", unit: "mg/kg/hr" }],
    formula: (v) => { var r = (v.peso * v.dosis).toFixed(1); return { resultado: r + " ml/hr", detalle: v.peso + " x " + v.dosis + " = " + r + " mg/hr equivale a " + r + " ml/hr con Propofol 1%" }; },
  },
];

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function HemoVida() {
  var [screen, setScreen] = useState("home");
  var [activeSpec, setActiveSpec] = useState(null);
  var [activeProc, setActiveProc] = useState(null);
  var [sideTab, setSideTab] = useState(null);
  var [procTab, setProcTab] = useState("desc");
  var [dictSearch, setDictSearch] = useState("");
  var [calcIdx, setCalcIdx] = useState(0);
  var [calcVals, setCalcVals] = useState({});
  var [calcResult, setCalcResult] = useState(null);
  var [pulse, setPulse] = useState(false);
  var [scanLine, setScanLine] = useState(0);
  var [settingsMsg, setSettingsMsg] = useState("");

  useEffect(function() {
    var iv = setInterval(function() { setScanLine(function(p) { return (p + 1) % 100; }); }, 40);
    return function() { clearInterval(iv); };
  }, []);

  useEffect(function() {
    var iv = setInterval(function() { setPulse(function(p) { return !p; }); }, 1200);
    return function() { clearInterval(iv); };
  }, []);

  var specKeys = Object.keys(PROCEDURES);
  var currentSpec = activeSpec ? PROCEDURES[activeSpec] : null;

  function openProc(specKey, proc) {
    setActiveSpec(specKey);
    setActiveProc(proc);
    setScreen("proc");
    setProcTab("desc");
  }

  function goHome() {
    setScreen("home");
    setActiveSpec(null);
    setActiveProc(null);
  }

  function openSide(tab) {
    setSideTab(tab);
    setScreen("side");
    setCalcResult(null);
    setCalcVals({});
  }

  function runCalc() {
    var calc = CALCULATORS[calcIdx];
    var vals = {};
    var ok = true;
    if (calc.fields.length === 0) {
      setCalcResult(calc.formula());
      return;
    }
    calc.fields.forEach(function(f) {
      var n = parseFloat(calcVals[f.key]);
      if (!n || n <= 0) ok = false;
      vals[f.key] = n;
    });
    if (!ok) { setCalcResult({ error: true, resultado: "Ingresa valores válidos", detalle: "" }); return; }
    setCalcResult(calc.formula(vals));
  }

  var filteredDict = DICTIONARY.filter(function(d) {
    return (
      d.term.toLowerCase().indexOf(dictSearch.toLowerCase()) >= 0 ||
      d.def.toLowerCase().indexOf(dictSearch.toLowerCase()) >= 0
    );
  });

  // ── COLORS ──
  var C = {
    bg: "#010810",
    panel: "#030e1c",
    border: "#0e2a3c",
    accent: "#1a6fb5",
    red: "#e63946",
    teal: "#00d4ff",
    text: "#c8dce8",
    muted: "#4a7090",
    dim: "#1a3a50",
  };

  var S = {
    app: { fontFamily: "'Chakra Petch', monospace", background: C.bg, color: C.text, minHeight: "100vh", display: "flex", flexDirection: "column", fontSize: 14, position: "relative" },
    scanline: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 0, background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.012) 2px, rgba(0,212,255,0.012) 4px)" },
    glow: { position: "fixed", top: scanLine + "%", left: 0, right: 0, height: 1, background: "rgba(0,212,255,0.07)", pointerEvents: "none", zIndex: 1 },
    header: { background: "linear-gradient(90deg, #010d1f 0%, #021630 40%, #010d1f 100%)", borderBottom: "1px solid " + C.border, padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60, position: "sticky", top: 0, zIndex: 50, flexShrink: 0 },
    logo: { display: "flex", alignItems: "center", gap: 14 },
    logoMark: { width: 46, height: 46, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
    logoTitle: {
      fontFamily: "'Orbitron', sans-serif", fontSize: 21, fontWeight: 900, letterSpacing: 6, lineHeight: 1,
      background: "linear-gradient(90deg, #4a8fff 0%, #8a5cf6 50%, #e63969 100%)",
      WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
      filter: "drop-shadow(0 0 10px rgba(138,92,246,0.35))",
    },
    logoSub: { fontFamily: "'Chakra Petch', monospace", fontSize: 9, color: C.muted, letterSpacing: 3, marginTop: 3 },
    headerRight: { display: "flex", gap: 10, alignItems: "center" },
    badge: { background: "#010d1f", border: "1px solid " + C.dim, borderRadius: 3, padding: "3px 10px", fontSize: 10, color: C.accent, letterSpacing: 2 },
    layout: { display: "flex", flex: 1, minHeight: 0, position: "relative", zIndex: 2 },
    nav: { width: 56, background: "#010c1a", borderRight: "1px solid " + C.border, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 12, gap: 4, flexShrink: 0 },
    navBtn: function(active) { return { width: 40, height: 40, borderRadius: 8, border: active ? "1px solid " + C.accent : "1px solid transparent", background: active ? "#0d2a45" : "transparent", color: active ? C.teal : C.dim, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }; },
    navDivider: { width: 28, height: 1, background: C.border, margin: "4px 0" },
    main: { flex: 1, overflow: "auto", padding: 24 },
    heroTitle: { fontSize: 11, color: C.muted, letterSpacing: 4, marginBottom: 4 },
    heroSub: { fontFamily: "'Orbitron', sans-serif", fontSize: 24, color: "#deeeff", fontWeight: 700, letterSpacing: 3 },
    heroDesc: { fontSize: 12, color: C.muted, marginTop: 4 },
    heroPulse: { display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: pulse ? C.red : "#8a2a30" },
    heroBar: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 },
    specGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, marginBottom: 20 },
    specCard: function(color) { return { background: "linear-gradient(160deg, #020e1c, #030f1e)", border: "1px solid " + color + "28", borderRadius: 12, padding: 18, cursor: "pointer", position: "relative", overflow: "hidden" }; },
    specTop: function(color) { return { position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, " + color + ", transparent)" }; },
    specIcon: { fontSize: 28, marginBottom: 10, display: "block" },
    specLabel: { fontFamily: "'Orbitron', sans-serif", fontSize: 12, fontWeight: 700, color: "#deeeff", letterSpacing: 1.5, marginBottom: 6 },
    specCount: { fontSize: 10, color: C.muted, marginBottom: 12 },
    specProcItem: function(color) { return { fontSize: 11, color: C.muted, padding: "5px 8px", borderRadius: 4, border: "1px solid " + color + "18", cursor: "pointer", marginBottom: 4 }; },
    procBread: { fontSize: 10, color: C.muted, letterSpacing: 2, marginBottom: 10, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" },
    procHero: { background: "linear-gradient(160deg, #020e1c, #03111f)", border: "1px solid " + C.border, borderRadius: 12, padding: 22, marginBottom: 18, position: "relative", overflow: "hidden" },
    procHeroAccent: function(color) { return { position: "absolute", top: 0, left: 0, bottom: 0, width: 3, background: "linear-gradient(180deg, " + color + ", transparent)" }; },
    procSpecLabel: function(color) { return { fontSize: 10, color: color, letterSpacing: 3, marginBottom: 6 }; },
    procName: { fontFamily: "'Orbitron', sans-serif", fontSize: 20, fontWeight: 700, color: "#e8f4ff", marginBottom: 8, letterSpacing: 1.5 },
    procShort: { fontSize: 13, color: "#7aa8c4", lineHeight: 1.7 },
    tabs: { display: "flex", gap: 4, marginBottom: 16, flexWrap: "wrap" },
    tab: function(active) { return { padding: "6px 18px", borderRadius: 5, border: active ? "1px solid " + C.accent : "1px solid " + C.dim, background: active ? "#0d2545" : "transparent", color: active ? C.teal : C.muted, cursor: "pointer", fontSize: 11, fontFamily: "inherit", letterSpacing: 1 }; },
    card: { background: "#020e1c", border: "1px solid " + C.border, borderRadius: 10, padding: 16, marginBottom: 12 },
    cardTitle: { fontSize: 10, color: C.accent, marginBottom: 12, letterSpacing: 2, textTransform: "uppercase" },
    descText: { fontSize: 13, color: "#8ab8d0", lineHeight: 1.8 },
    listRow: { display: "flex", alignItems: "flex-start", gap: 8, padding: "6px 0", borderBottom: "1px solid " + C.border, fontSize: 13, color: "#8ab8d0" },
    listDot: { color: C.red, flexShrink: 0, marginTop: 2, fontSize: 10 },
    supplyNum: { color: C.dim, fontSize: 10, flexShrink: 0, marginTop: 3, minWidth: 22 },
    panelTitle: { fontFamily: "'Orbitron', sans-serif", fontSize: 13, fontWeight: 700, color: "#deeeff", marginBottom: 18, letterSpacing: 3, borderBottom: "1px solid " + C.border, paddingBottom: 10 },
    input: { background: "#020e1c", border: "1px solid " + C.border, borderRadius: 5, color: C.text, padding: "7px 12px", fontSize: 13, outline: "none", width: "100%", boxSizing: "border-box", fontFamily: "inherit" },
    btn: function(col) { col = col || C.accent; return { background: col + "22", border: "1px solid " + col, borderRadius: 5, color: col, padding: "6px 16px", cursor: "pointer", fontSize: 11, fontFamily: "inherit", letterSpacing: 1 }; },
    resultBox: function(err) { return { background: err ? "#1a030a" : "#021526", border: "1px solid " + (err ? C.red : C.accent), borderRadius: 8, padding: 14, marginTop: 12 }; },
    resultVal: function(err) { return { fontSize: 24, color: err ? C.red : C.teal, fontWeight: 700, letterSpacing: 2 }; },
    resultDetail: { fontSize: 11, color: C.muted, marginTop: 4, lineHeight: 1.6 },
    dictItem: { padding: "10px 0", borderBottom: "1px solid " + C.border },
    dictTerm: { color: C.teal, fontSize: 13, fontWeight: 700, marginBottom: 3 },
    dictDef: { color: "#7aa8c4", fontSize: 12, lineHeight: 1.6 },
    faqQ: { color: "#deeeff", fontSize: 13, fontWeight: 700, marginBottom: 5 },
    faqA: { color: "#7aa8c4", fontSize: 12, lineHeight: 1.6 },
  };

  var navItems = [
    { id: "dict", icon: "📖" },
    { id: "calc", icon: "🧮" },
    { id: "faq", icon: "❓" },
    { id: "sim", icon: "⚕" },
    { id: "settings", icon: "⚙️" },
  ];

  return (
    <div style={S.app}>
      <style>{"\n@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Chakra+Petch:wght@400;500;600;700&display=swap');\n* { box-sizing: border-box; }\n::-webkit-scrollbar { width: 4px; }\n::-webkit-scrollbar-track { background: #010810; }\n::-webkit-scrollbar-thumb { background: #0e2a3c; border-radius: 2px; }\n"}</style>
      <div style={S.scanline} />
      <div style={S.glow} />

      <header style={S.header}>
        <div style={S.logo}>
          <div style={S.logoMark}>
            <img src="/logo-icon.png" alt="HEMIX" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div>
            <div style={S.logoTitle}>HEMIX</div>
            <div style={S.logoSub}>INTELIGENCIA EN HEMODINAMIA · HDN 2024</div>
          </div>
        </div>
        <div style={S.headerRight}>
          {screen !== "home" && (
            <button style={S.btn(C.muted)} onClick={goHome}>← INICIO</button>
          )}
          <div style={S.badge}>HDN 2024</div>
        </div>
      </header>

      <div style={S.layout}>
        <nav style={S.nav}>
          {navItems.map(function(n) {
            return (
              <button key={n.id} style={S.navBtn(screen === "side" && sideTab === n.id)} onClick={function() { openSide(n.id); }} title={n.id}>
                {n.icon}
              </button>
            );
          })}
          <div style={S.navDivider} />
          <button style={S.navBtn(false)} onClick={goHome} title="Inicio">🏠</button>
        </nav>

        <main style={S.main}>

          {screen === "home" && (
            <div>
              <div style={S.heroBar}>
                <div>
                  <div style={S.heroTitle}>UNIDAD DE HEMODINAMIA · H.S.J.D.</div>
                  <div style={S.heroSub}>Manual de Procedimientos</div>
                  <div style={S.heroDesc}>Referencia técnica para enfermería, TENS y profesionales de pabellón.</div>
                </div>
                <div style={S.heroPulse}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: pulse ? C.red : "#4a1a20", boxShadow: pulse ? "0 0 8px " + C.red : "none" }} />
                  SISTEMA ACTIVO
                </div>
              </div>

              <div style={S.specGrid}>
                {specKeys.map(function(key) {
                  var sp = PROCEDURES[key];
                  return (
                    <div key={key} style={S.specCard(sp.color)}>
                      <div style={S.specTop(sp.color)} />
                      <span style={S.specIcon}>{sp.icon}</span>
                      <div style={S.specLabel}>{sp.label}</div>
                      <div style={S.specCount}>{sp.procedures.length} PROCEDIMIENTOS</div>
                      <div>
                        {sp.procedures.map(function(p) {
                          return (
                            <div key={p.id} style={S.specProcItem(sp.color)} onClick={function() { openProc(key, p); }}>
                              ▸ {p.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={S.card}>
                <div style={S.cardTitle}>MISIÓN DE LA UNIDAD</div>
                <div style={S.descText}>
                  Otorgar atención clínica de alta calidad en el diagnóstico y tratamiento de pacientes con patologías cardiocerebrovasculares de alta complejidad. Equipo multidisciplinario comprometido con atención oportuna, eficiente y con tecnología endovascular de vanguardia.
                </div>
              </div>
            </div>
          )}

          {screen === "proc" && activeProc && currentSpec && (
            <div>
              <div style={S.procBread}>
                <span style={{ cursor: "pointer", color: C.accent }} onClick={goHome}>INICIO</span>
                <span style={{ color: C.dim }}>›</span>
                <span>{currentSpec.label.toUpperCase()}</span>
                <span style={{ color: C.dim }}>›</span>
                <span style={{ color: "#c8dce8" }}>{activeProc.name.toUpperCase()}</span>
              </div>

              <div style={S.procHero}>
                <div style={S.procHeroAccent(currentSpec.color)} />
                <div style={S.procSpecLabel(currentSpec.color)}>{currentSpec.icon} {currentSpec.label.toUpperCase()}</div>
                <div style={S.procName}>{activeProc.name}</div>
                <div style={S.procShort}>{activeProc.short}</div>
              </div>

              <div style={S.tabs}>
                {["desc", "insumos", "indicaciones"].map(function(t) {
                  return (
                    <button key={t} style={S.tab(procTab === t)} onClick={function() { setProcTab(t); }}>
                      {t === "desc" ? "DESCRIPCIÓN" : t === "insumos" ? "INSUMOS" : "INDICACIONES"}
                    </button>
                  );
                })}
              </div>

              {procTab === "desc" && (
                <div style={S.card}>
                  <div style={S.cardTitle}>DESCRIPCIÓN DEL PROCEDIMIENTO</div>
                  <div style={S.descText}>{activeProc.description}</div>
                </div>
              )}

              {procTab === "insumos" && (
                <div style={S.card}>
                  <div style={S.cardTitle}>MESA DE INSUMOS — {(activeProc.supplies || []).length} ÍTEMS</div>
                  {(activeProc.supplies || []).map(function(s, i) {
                    return (
                      <div key={i} style={S.listRow}>
                        <span style={S.supplyNum}>{i < 9 ? "0" + (i + 1) : i + 1}</span>
                        <span style={S.listDot}>◆</span>
                        <span style={{ flex: 1 }}>{s}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {procTab === "indicaciones" && (
                <div style={S.card}>
                  <div style={S.cardTitle}>INDICACIONES CLÍNICAS</div>
                  {(activeProc.indications || []).map(function(ind, i) {
                    return (
                      <div key={i} style={S.listRow}>
                        <span style={S.listDot}>▸</span>
                        <span>{ind}</span>
                      </div>
                    );
                  })}
                  {(!activeProc.indications || activeProc.indications.length === 0) && (
                    <div style={{ color: C.muted, fontSize: 12 }}>Sin indicaciones registradas.</div>
                  )}
                </div>
              )}
            </div>
          )}

          {screen === "side" && (
            <div>
              {sideTab === "dict" && (
                <div>
                  <div style={S.panelTitle}>📖 DICCIONARIO MÉDICO</div>
                  <input style={{ ...S.input, marginBottom: 16 }} placeholder="Buscar término..." value={dictSearch} onChange={function(e) { setDictSearch(e.target.value); }} />
                  <div style={{ fontSize: 10, color: C.muted, marginBottom: 10, letterSpacing: 1 }}>{filteredDict.length} RESULTADOS</div>
                  {filteredDict.map(function(d, i) {
                    return (
                      <div key={i} style={S.dictItem}>
                        <div style={S.dictTerm}>{d.term}</div>
                        <div style={S.dictDef}>{d.def}</div>
                      </div>
                    );
                  })}
                </div>
              )}

              {sideTab === "calc" && (
                <div>
                  <div style={S.panelTitle}>🧮 CALCULADORA DE DOSIS</div>
                  <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
                    {CALCULATORS.map(function(c, i) {
                      return (
                        <button key={c.id} style={S.tab(calcIdx === i)} onClick={function() { setCalcIdx(i); setCalcVals({}); setCalcResult(null); }}>
                          {c.name.toUpperCase()}
                        </button>
                      );
                    })}
                  </div>
                  <div style={S.card}>
                    <div style={S.cardTitle}>{CALCULATORS[calcIdx].name.toUpperCase()}</div>
                    {CALCULATORS[calcIdx].fields.map(function(f) {
                      return (
                        <div key={f.key} style={{ marginBottom: 12 }}>
                          <div style={{ fontSize: 11, color: C.muted, marginBottom: 5, letterSpacing: 1 }}>{f.label.toUpperCase()} ({f.unit})</div>
                          <input type="number" style={S.input} placeholder={"Ingresa " + f.label.toLowerCase()} value={calcVals[f.key] || ""} onChange={function(e) { var next = Object.assign({}, calcVals); next[f.key] = e.target.value; setCalcVals(next); }} />
                        </div>
                      );
                    })}
                    {CALCULATORS[calcIdx].fields.length === 0 && (
                      <div style={{ fontSize: 12, color: C.muted, marginBottom: 12 }}>
                        Esta calculadora muestra una referencia fija de preparación.
                      </div>
                    )}
                    <button style={S.btn("#00d4ff")} onClick={runCalc}>CALCULAR</button>
                    {calcResult && (
                      <div style={S.resultBox(calcResult.error)}>
                        <div style={S.resultVal(calcResult.error)}>{calcResult.resultado}</div>
                        {calcResult.detalle && <div style={S.resultDetail}>{calcResult.detalle}</div>}
                      </div>
                    )}
                  </div>
                  <div style={{ ...S.card, fontSize: 11, color: C.muted, lineHeight: 1.7 }}>
                    Herramienta orientativa. La indicación y verificación de dosis es responsabilidad del médico tratante.
                  </div>
                </div>
              )}

              {sideTab === "faq" && (
                <div>
                  <div style={S.panelTitle}>❓ PREGUNTAS FRECUENTES</div>
                  {FAQS.map(function(f, i) {
                    return (
                      <div key={i} style={S.card}>
                        <div style={S.faqQ}>{f.q}</div>
                        <div style={S.faqA}>{f.a}</div>
                      </div>
                    );
                  })}
                </div>
              )}

              {sideTab === "sim" && (
                <div>
                  <div style={S.panelTitle}>⚕ SIMULADOR DE MESA</div>
                  <div style={{ fontSize: 12, color: C.muted, marginBottom: 18, lineHeight: 1.7 }}>
                    Selecciona un procedimiento para ver la lista de insumos y practicar la preparación de pabellón.
                  </div>
                  {specKeys.map(function(key) {
                    var sp = PROCEDURES[key];
                    return (
                      <div key={key} style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 10, color: sp.color, letterSpacing: 3, marginBottom: 8 }}>{sp.icon} {sp.label.toUpperCase()}</div>
                        {sp.procedures.map(function(p) {
                          return (
                            <div key={p.id} style={{ ...S.card, cursor: "pointer", padding: "12px 16px", marginBottom: 6 }} onClick={function() { openProc(key, p); }}>
                              <div style={{ fontSize: 13, color: "#c8dce8", fontWeight: 700 }}>{p.name}</div>
                              <div style={{ fontSize: 11, color: C.muted, marginTop: 3 }}>{(p.supplies || []).length} insumos registrados</div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              )}

              {sideTab === "settings" && (
                <div>
                  <div style={S.panelTitle}>⚙️ CONFIGURACIÓN</div>
                  {[
                    { label: "Cambiar Contraseña", fields: ["Contraseña actual", "Nueva contraseña", "Confirmar nueva contraseña"], type: "password" },
                    { label: "Cambiar Teléfono", fields: ["+56 9 XXXX XXXX"], type: "tel" },
                    { label: "Cambiar Correo", fields: ["nuevo@correo.cl", "Confirmar correo"], type: "email" },
                  ].map(function(section, i) {
                    return (
                      <div key={i} style={{ ...S.card, marginBottom: 12 }}>
                        <div style={S.cardTitle}>{section.label.toUpperCase()}</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          {section.fields.map(function(f, j) {
                            return <input key={j} type={section.type} style={S.input} placeholder={f} />;
                          })}
                          <button style={S.btn(C.accent)} onClick={function() { setSettingsMsg("Actualizado correctamente"); setTimeout(function() { setSettingsMsg(""); }, 2500); }}>ACTUALIZAR</button>
                          {settingsMsg !== "" && (
                            <div style={{ fontSize: 11, color: "#3edd8a", letterSpacing: 1 }}>✓ {settingsMsg}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
