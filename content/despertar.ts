import type { Program } from './types'

/*
 * Despertar al Ser: iniciativa de formación y acompañamiento de GNOSIS (página /despertar-al-ser).
 * Fuente: infografía web, propuestas por público y diseño completo de cada programa (14 PDF entregados).
 * El programa completo se comparte a pedido: no se publican los PDF. Sin precios, porcentajes,
 * testimonios, garantías ni resultados históricos; el seguimiento se presenta como previsto.
 */

export const despertar = {
  name: 'Despertar al Ser',
  hero: {
    eyebrow: 'Formación y acompañamiento',
    title: 'Despertar al Ser',
    /** Frase original de la infografía. */
    tagline: 'El ser, tu primera empresa',
    description: 'Programas de acompañamiento para conocerte mejor, actuar a pesar del miedo y decidir con propósito, en tu vida personal y en tu trabajo.',
    cta: { label: 'Encontrar mi programa', href: '#programas' },
    /** Relación con GNOSIS, en una frase. */
    about: 'Es una iniciativa de formación y acompañamiento de GNOSIS, nacida en Ayacucho y facilitada por Manuel, coach ontológico, porque el trabajo personal también influye en cómo decidimos, colaboramos y asumimos responsabilidades con otros.',
  },

  programs: {
    eyebrow: 'Cinco programas',
    title: 'Un camino para cada etapa de la vida',
    description: 'Compara para quién es cada uno, qué se trabaja, cuánto dura y cómo se participa. Abre el que te interese para ver su recorrido.',
    jumpLabel: 'Ir a un programa',
    labels: {
      forWhom: 'Para quién es',
      topics: 'Qué se trabaja',
      duration: 'Duración',
      format: 'Cómo se participa',
      goal: 'Hacia dónde va',
      open: 'Ver el programa',
      close: 'Ocultar el programa',
      rhythm: 'Ritmo de trabajo',
      tracking: 'Seguimiento previsto',
      care: 'Cuidados del proceso',
      email: 'Solicitar por correo',
    },
  },

  method: {
    eyebrow: 'Un solo método',
    title: 'Lo que sostiene los cinco programas',
    description: 'Si no hay gestión dentro, difícilmente hay gestión afuera. Cada programa trabaja estos cinco elementos, adaptados a su público.',
    items: [
      { title: 'Distinguir hechos de interpretaciones', text: 'Separar lo que ocurrió del juicio que le ponemos encima. Ahí empieza la capacidad de actuar.' },
      { title: 'Actuar frente al miedo', text: 'El coraje no es la ausencia de miedo: es la decisión de actuar a pesar de él. El límite se cruza, no se evita.' },
      { title: 'Lenguaje, emoción y cuerpo', text: 'Los tres terrenos donde el cambio ocurre de verdad y se sostiene, no solo se piensa.' },
      { title: 'Elegir desde el propósito', text: 'Vivir desde lo que uno elige y no desde lo heredado, con permiso a un potencial mayor del que suele imaginarse.' },
      { title: 'Aprender a gestionarse', text: 'Gobernarse a uno mismo es la unidad mínima de toda gestión. La primera empresa es uno.' },
    ],
    /** Ejemplo que hace tangible el primer elemento. */
    example: {
      eyebrow: 'Un ejemplo cotidiano',
      fact: { label: 'Hecho', text: '«No recibí respuesta.»', note: 'Describe lo que pasó.' },
      interpretation: { label: 'Interpretación', text: '«Rechazaron mi propuesta.»', note: 'Es una lectura de lo que pasó.' },
      check: { label: 'Antes de actuar', text: 'Puedo comprobarla: preguntar si recibieron el mensaje antes de dar la propuesta por perdida.' },
    },
  },

  progress: {
    eyebrow: 'Seguimiento',
    title: 'Cómo se mide el avance',
    description: 'Cada programa prevé un seguimiento en tres momentos, con instrumentos adecuados a su público. Se compara el punto de partida con el cierre.',
    tag: 'Previsto',
    moments: [
      { name: 'Al inicio', text: 'Una línea de base: escalas adecuadas a la edad o al rol, dos o tres metas de conducta que la propia persona define y, cuando corresponde, la mirada de su entorno.' },
      { name: 'Durante el proceso', text: 'Se registran las prácticas sostenidas, las decisiones antes evitadas que ahora se toman y las conversaciones difíciles que se sostienen.' },
      { name: 'Al cierre', text: 'Se repiten los mismos instrumentos y se comparan con el inicio, junto con lo que observa el entorno cercano.' },
    ],
    examplesTitle: 'Ejemplos según el programa',
    honesty: 'Es el seguimiento que contempla el diseño de cada programa. Se trabaja con rigor razonable: muestra cambios observables, sin prometer resultados.',
    scope: {
      title: 'Desarrollo personal y profesional',
      text: 'El coaching ontológico es una disciplina de desarrollo personal y del liderazgo, no una terapia ni un tratamiento de salud mental. Ante una dificultad clínica corresponde un profesional de la salud, con quien el programa colabora y al que nunca sustituye.',
    },
  },

  contact: {
    eyebrow: 'Solicitar el programa',
    title: '¿Quieres el camino completo?',
    description: 'Te compartimos el programa detallado para tu etapa de vida o para tu organización, con su diseño de sesiones y su seguimiento.',
    legend: '¿Qué programa te interesa?',
    hint: 'Elige un programa y tu mensaje llegará con él.',
    selected: 'Tu mensaje',
    general: {
      label: 'Solicitar el programa completo',
      message: 'Hola, quisiera recibir el programa completo de Despertar al Ser.',
      subject: 'Programa Despertar al Ser',
    },
    emailLabel: 'También por correo',
    credit: 'GNOSIS · Ayacucho · Un programa facilitado por Manuel, coach ontológico',
  },

  /** Presentación breve en el inicio. */
  home: {
    eyebrow: 'Formación y acompañamiento',
    title: 'Despertar al Ser',
    tagline: 'El ser, tu primera empresa',
    description: 'Una iniciativa de GNOSIS nacida en Ayacucho y facilitada por Manuel, coach ontológico. Cinco programas de acompañamiento, porque el trabajo personal también influye en cómo decidimos, colaboramos y asumimos responsabilidades con otros.',
    listLabel: 'Programas',
    link: { label: 'Conocer los programas', href: '/despertar-al-ser' },
  },
}

export const programs: Program[] = [
  {
    slug: 'adolescentes',
    name: 'Adolescentes',
    badge: '13–17 años',
    icon: 'Sprout',
    lead: 'Conocerse, atreverse y crear, en el momento en que todo se define.',
    forWhom: 'Personas de 13 a 17 años en búsqueda de identidad, con timidez, dudas sobre sí mismas o miedo al juicio de los demás.',
    topics: 'Identidad, autoestima y miedo al juicio.',
    duration: '8 meses',
    durationNote: 'La propuesta plantea de 6 a 9 meses; el diseño completo desarrolla un recorrido de 8, en cuatro fases de dos meses.',
    format: 'Acompañamiento individual, con consentimiento y participación de los padres o tutores.',
    goal: 'Conocerse, quitarle peso al «qué dirán» y encontrar una voz propia, con la familia como aliada.',
    journey: {
      title: 'Cuatro fases',
      steps: [
        { name: 'Conocerse', when: 'Meses 1–2', text: 'Valores, fortalezas, historia y máscaras. El hábito de observarse sin juzgarse y el inicio del diario.' },
        { name: 'Atreverse', when: 'Meses 3–4', text: 'El miedo al ridículo y al «qué dirán». Autoestima y permiso a equivocarse, con retos amables y graduales.' },
        { name: 'Crear', when: 'Meses 5–6', text: 'El arte como voz propia —pintura, música o palabra— para dar forma a lo interno.' },
        { name: 'Proyectarse', when: 'Meses 7–8', text: 'Un primer propósito, hábitos sanos y una imagen de sí más amable y más fuerte. Cierre con la familia.' },
      ],
    },
    rhythm: [
      'Sesión individual de acompañamiento cada quince días (50 min).',
      'Diario y respiración breve varias veces por semana.',
      'Movimiento consciente dos veces por semana y una práctica artística semanal.',
      'Un reto o experiencia amable en cada fase.',
    ],
    tracking: [
      'Escalas sencillas de autoestima y autoeficacia en los meses 1, 4 y 8.',
      'Dos o tres metas de conducta que define el propio adolescente.',
      'La mirada de padres y docentes al inicio y al cierre.',
    ],
    progressExample: 'Dos o tres metas de conducta que define el propio adolescente, y la mirada de padres y docentes al inicio y al cierre.',
    care: [
      'Consentimiento y participación de los padres en todo el proceso.',
      'Sin experiencias de alta intensidad: los retos son siempre amables.',
      'Nunca aísla al menor de sus adultos de confianza: los suma.',
      'Derivación a salud mental disponible, con criterios claros para pausar.',
    ],
    inquiry: {
      audience: 'La consulta la hace la familia: madre, padre o tutor.',
      label: 'Solicitar el programa completo',
      message: 'Hola, quisiera recibir el programa Despertar al Ser para Adolescentes para mi hijo o hija.',
      subject: 'Programa Despertar al Ser para Adolescentes',
    },
  },
  {
    slug: 'jovenes',
    name: 'Jóvenes',
    badge: '18–29 años',
    icon: 'Compass',
    lead: 'Decidir qué hacer con tu vida, con permiso a tu propia grandeza.',
    forWhom: 'Personas de 18 a 29 años entre estudios y primer trabajo, que «saben qué hacer pero no lo hacen» o aún no saben qué quieren.',
    topics: 'Propósito, autonomía, primer trabajo y miedo al fracaso.',
    duration: '12 meses',
    durationNote: 'Cuatro estaciones de tres meses.',
    format: 'Acompañamiento individual, con prácticas semanales y experiencias vivenciales.',
    goal: 'Pasar de reconocer lo que uno quiere a tomar una decisión concreta de estudio, trabajo o vida personal.',
    journey: {
      title: 'Cuatro estaciones: de lo que quiero a lo que decido',
      steps: [
        { name: 'Despertar', when: 'Meses 1–3', text: '¿Quién soy? Valores y la historia que me cuento sobre mí. Reconozco lo que quiero.' },
        { name: 'Liberar', when: 'Meses 4–6', text: '¿Qué me detiene? El miedo al fracaso y al «qué dirán». El error se vuelve aprendizaje.' },
        { name: 'Expandir', when: 'Meses 7–9', text: '¿De qué soy capaz? Cuerpo, creatividad y propósito (ikigai): amplío las opciones y descubro talentos.' },
        { name: 'Encarnar', when: 'Meses 10–12', text: '¿Cómo lo vivo? Un plan de vida concreto: la decisión de estudio, trabajo o vida personal, con hábitos que la sostienen.' },
      ],
      note: 'Comparte las cuatro estaciones con el programa para Adultos; aquí todo el recorrido apunta a decidir un rumbo.',
    },
    rhythm: [
      'Mentoría individual cada quince días.',
      'Curso «Conócete a ti mismo», de filosofía práctica, cada quince días.',
      'Taichí o chikung y respiración dos o tres veces por semana, y un diario breve.',
      'Práctica artística semanal y una experiencia vivencial por estación.',
    ],
    tracking: [
      'Dos o tres metas de vida o carrera que elige el propio joven.',
      'Rueda de la vida, inventario de creencias limitantes y escala de autoeficacia en los meses 1, 6 y 12.',
      'Registro de las decisiones antes postergadas que ahora toma.',
    ],
    progressExample: 'Una meta de vida o carrera elegida por el propio joven, y las decisiones antes postergadas que ahora toma.',
    care: [
      'Participación voluntaria, con consentimiento informado.',
      'Facilitación certificada en cualquier experiencia de riesgo.',
      'Derivación a salud mental y criterios claros para pausar.',
      'Sin culpabilizar: el trabajo va siempre acompañado de contención.',
    ],
    inquiry: {
      label: 'Solicitar el programa completo',
      message: 'Hola, quisiera recibir el programa Despertar al Ser para Jóvenes.',
      subject: 'Programa Despertar al Ser para Jóvenes',
    },
  },
  {
    slug: 'adultos',
    name: 'Adultos',
    badge: '30–55 años',
    icon: 'Mountain',
    lead: 'El derecho a la grandeza: de la conciencia a la encarnación.',
    forWhom: 'Personas de 30 a 55 años en búsqueda, transición o insatisfacción con el techo que perciben en su vida.',
    topics: 'Límites aprendidos, creencias, miedo, cuerpo y propósito.',
    duration: '12 meses',
    durationNote: 'Cuatro estaciones de un trimestre, aproximadamente.',
    format: 'Acompañamiento individual, con prácticas semanales e hitos vivenciales.',
    goal: 'Reconocer los límites aprendidos y llevar los cambios a la vida cotidiana, en todos sus ámbitos.',
    journey: {
      title: 'Cuatro estaciones: de lo que me limita a lo que vivo cada día',
      steps: [
        { name: 'Despertar', when: 'Meses 1–3', text: '¿Quién soy realmente? Mapa del ser actual: valores, historia, máscaras y verdadero anhelo.' },
        { name: 'Liberar', when: 'Meses 4–6', text: '¿Qué me detiene? Las creencias y los miedos aprendidos como límites, con experiencias de coraje en un entorno seguro y guiado.' },
        { name: 'Expandir', when: 'Meses 7–9', text: '¿De qué soy capaz? Prácticas corporales, el artista interior y la visión de vida (ikigai).' },
        { name: 'Encarnar', when: 'Meses 10–12', text: '¿Cómo vivo mi grandeza? De la mentalidad a los hábitos: un acto de contribución y un rito de paso.' },
      ],
      note: 'Comparte las cuatro estaciones con el programa para Jóvenes; aquí el foco es revisar lo aprendido y sostener el cambio en la vida diaria.',
    },
    rhythm: [
      'Mentoría individual cada quince días (60 min).',
      'Curso «Conócete a ti mismo» cada quince días (90 min).',
      'Taichí o chikung y respiración dos o tres veces por semana, y un diario de transformación.',
      'Arte y contenidos audiovisuales cada semana, y una experiencia vivencial por estación.',
    ],
    tracking: [
      'Rueda de la vida y mapa de creencias al inicio, con metas que define la propia persona.',
      'Rueda de la vida, inventario de creencias limitantes y escala de autoeficacia en los meses 1, 6 y 12.',
      'Diario y bitácora tras cada experiencia; al cierre, lo que observa el entorno cercano.',
    ],
    progressExample: 'La rueda de la vida y el mapa de creencias, revisados en los meses 1, 6 y 12, con lo que observa su entorno cercano.',
    care: [
      'Facilitación certificada y protocolo de seguridad en toda experiencia de riesgo.',
      'Consentimiento informado por escrito; participación siempre voluntaria.',
      'Derivación a salud mental y criterios claros para pausar.',
      'Sin culpabilizar: el trabajo va siempre acompañado de contención.',
    ],
    inquiry: {
      label: 'Solicitar el programa completo',
      message: 'Hola, quisiera recibir el programa Despertar al Ser para Adultos.',
      subject: 'Programa Despertar al Ser para Adultos',
    },
  },
  {
    slug: 'ejecutivos',
    name: 'Ejecutivos',
    badge: 'Alta dirección',
    icon: 'Briefcase',
    lead: 'La primera empresa que gestionas es tu ser.',
    forWhom: 'Gerentes, directores y alta dirección que se inscriben para trabajar en sí mismos.',
    topics: 'Decisiones difíciles, conversaciones pendientes y presencia.',
    duration: '6 meses',
    durationNote: 'Diseño intensivo, ampliable a 12 meses.',
    format: 'Acompañamiento individual y confidencial, con evaluación 360°.',
    goal: 'Tomar a tiempo las decisiones difíciles, sostener las conversaciones pendientes y liderar con presencia.',
    journey: {
      title: 'Cinco módulos para el liderazgo',
      steps: [
        { name: 'Autoconocimiento y línea de base', when: 'Mes 1', text: 'Mapa del ser actual, escalas validadas y evaluación 360°. Se definen las metas de conducta.' },
        { name: 'Hecho e interpretación', when: 'Mes 2', text: 'La distinción aplicada a decisiones, conflictos y gestión de personas.' },
        { name: 'Miedo, decisión y coraje', when: 'Mes 3', text: 'Decidir con incertidumbre, dar malas noticias a tiempo y tomar la decisión impopular.' },
        { name: 'Propósito y presencia', when: 'Mes 4', text: 'Liderar desde el propósito; presencia, comunicación y una relación sana con el logro y el poder.' },
        { name: 'Integración en el rol', when: 'Meses 5–6', text: 'Hábitos de liderazgo concretos, compromisos verificables y medición de salida.' },
      ],
    },
    rhythm: [
      'Dos sesiones individuales al mes (60–75 min).',
      'Práctica semanal en el trabajo real: una conversación o una decisión concreta.',
      'Un registro diario breve de decisiones.',
      'Revisión de indicadores y metas al cerrar cada módulo.',
    ],
    tracking: [
      'Escalas validadas de autoeficacia, regulación emocional y tolerancia a la incertidumbre.',
      'Evaluación 360° con cuatro a seis personas de su entorno, al inicio y a los 6 meses (y a los 12, si se amplía).',
      'Dos o tres metas de conducta que define el propio directivo.',
    ],
    progressExample: 'Una conversación difícil que el directivo logra sostener, y la evaluación 360° de su entorno al inicio y al cierre.',
    care: [
      'Confidencialidad estricta: nada se comparte sin acuerdo explícito.',
      'Si lo financia la organización, se acuerda por escrito qué se reporta y qué no.',
      'El directivo decide el ritmo y el alcance de su proceso.',
      'Es desarrollo del liderazgo: ante un tema clínico, se deriva.',
    ],
    inquiry: {
      audience: 'La consulta la hace el propio directivo y se trata con reserva.',
      label: 'Solicitar el programa completo',
      message: 'Hola, quisiera recibir el programa Despertar al Ser para Ejecutivos.',
      subject: 'Programa Despertar al Ser para Ejecutivos',
    },
  },
  {
    slug: 'empresas',
    name: 'Empresas',
    badge: 'Mandos y equipos',
    icon: 'Building2',
    lead: 'Líderes que se gestionan a sí mismos gestionan mejor a otros.',
    forWhom: 'Organizaciones que contratan el programa para sus mandos medios, líderes de área y equipos.',
    topics: 'Decisiones, conversaciones difíciles, propósito y presencia, trabajados en grupo.',
    duration: '6 a 12 meses',
    durationNote: 'Por cohorte; la ruta base dura 6 meses.',
    format: 'Cohortes de 8 a 15 personas, con diagnóstico inicial, sesiones grupales y seguimiento.',
    goal: 'Llevar el mismo método al trabajo en equipo: la empresa recibe resultados agregados del grupo y cada persona conserva su confidencialidad.',
    journey: {
      title: 'Ruta de una cohorte',
      steps: [
        { name: 'Diagnóstico', when: 'Mes 1', text: 'Escalas, evaluación 360° y medición de clima inicial. Se acuerdan los indicadores con un responsable interno.' },
        { name: 'Hecho e interpretación', when: 'Mes 2', text: 'Taller y práctica en conversaciones reales del equipo.' },
        { name: 'Miedo y decisión', when: 'Mes 3', text: 'Decisiones destrabadas y «permiso a fallar».' },
        { name: 'Propósito y presencia', when: 'Mes 4', text: 'Liderazgo con propósito y comunicación.' },
        { name: 'Integración', when: 'Mes 5', text: 'Proyectos de mejora aplicados al propio equipo.' },
        { name: 'Medición de salida', when: 'Mes 6', text: 'Se repiten escalas, 360° y clima, y se entrega un informe con resultados agregados.' },
      ],
      note: 'La ruta puede ampliarse hasta 12 meses por cohorte.',
    },
    rhythm: [
      'Sesión grupal del módulo cada quince días (120 min).',
      'Acompañamiento individual mensual a cada líder (45 min).',
      'Práctica semanal en el trabajo real.',
      'Un hito vivencial de equipo por fase (media jornada).',
    ],
    tracking: [
      'Línea de base por cohorte: escalas, evaluación 360° y clima.',
      'Indicadores de clima y desempeño acordados al inicio con la organización.',
      'Informe de cierre con resultados agregados del grupo y un plan de sostenimiento.',
    ],
    progressExample: 'Indicadores de clima y desempeño por cohorte, que la organización recibe de forma agregada.',
    care: [
      'Los resultados personales no se reportan con nombre: la empresa recibe datos agregados.',
      'Participación voluntaria y sin consecuencias laborales por el contenido personal.',
      'Facilitación certificada en toda experiencia vivencial de riesgo.',
      'Es desarrollo del liderazgo y los equipos: ante un tema clínico, se deriva.',
    ],
    inquiry: {
      audience: 'La consulta la hace la organización: dirección o recursos humanos.',
      label: 'Consultar para mi organización',
      message: 'Hola, quisiera información sobre el programa Despertar al Ser para mi organización.',
      subject: 'Programa Despertar al Ser para Empresas',
    },
  },
]

export function getProgram(slug: string | null | undefined) {
  return programs.find(program => program.slug === slug)
}
