<!doctype html>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
<!-- the "no-js" class is for Modernizr. -->
  <head id="www-schooltool-org" data-template-set="html5-reset">
    <meta charset="utf-8" />
    <!--
        Always force latest IE rendering engine (even in intranet) &
        Chrome Frame
    -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>SchoolTool: el Sistema Global de Información Estudiantil</title>
    <meta name="title" content="SchoolTool" />
    <meta name="description" content="SchoolTool es un sistema web de información estudiantil libre y de código abierto diseñado para escuelas alrededor del mundo, con gran soporte de traducción, localización, instalación y actualizació automática mediante el instalador y el sistema de administración de paquetes de de Ubuntu Linux." />
    <!--
        Google will often use this as its description of your
        page/site. Make it good.
    -->
    <meta name="google-site-verification"
          content="dJ_BTaiXUXPT2wtI5p4nYnwmLfDwp4pwMf5jgqxvnW8" />
    <!--
        Speaking of Google, don't forget to set your site up:
        http://google.com/webmasters
    -->
    <meta name="author" content="SchoolTool" />
    <meta name="Copyright"
          content="Copyright (c) La Fundación Shuttleworth 2003 - 2014" />
    <!--
        Dublin Core Metadata : http://dublincore.org/
    -->
    <meta name="DC.title" content="SchoolTool" />
    <meta name="DC.subject" content="SchoolTool" />
    <meta name="DC.creator" content="SchoolTool" />
    <!--
        Mobile Viewport Fix
        j.mp/mobileviewport & davidbcalhoun.com/2010/viewport-metatag
        device-width : Occupy full width of the screen in its current
        orientation
        initial-scale = 1.0 retains dimensions instead of zooming out
        if page height > device height
        maximum-scale = 1.0 retains dimensions instead of zooming in
        if page width < device width
    -->
    <!--
        Uncomment to use; use thoughtfully!
	<meta name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    -->
    <link rel="shortcut icon" href="images/favicon.ico" />
    <!--
        This is the traditional favicon.
        - size: 16x16 or 32x32
        - transparency is OK
        - see wikipedia for info on browser support: http://mky.be/favicon/
    -->
    <!--
        <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
        The is the icon for iOS's Web Clip.
        - size: 57x57 for older iPhones, 72x72 for iPads, 114x114 for
        iPhone4's retina display (IMHO, just go ahead and use the
        biggest one)
        - To prevent iOS from applying its styles to the icon name it
        thusly: apple-touch-icon-precomposed.png
        - Transparency is not recommended (iOS will put a black BG
        behind the icon)
    -->
    <!--
        CSS: screen, mobile & print are all in the same file
    -->
    <link href="http://fonts.googleapis.com/css?family=Ubuntu:400,300,300italic,400italic,500,700,500italic,700italic" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="css/style.css" type="text/css"
          media="screen" />
    <link rel="stylesheet" href="css/style-es.css" type="text/css"
          media="screen" />
    <link rel="stylesheet" href="css/themes/default/default.css"
          type="text/css" media="screen" />
    <link rel="stylesheet" href="css/nivo-slider.css" type="text/css"
          media="screen" />
    <script type="text/javascript" src="js/jquery-1.5.1.min.js"></script>
    <script type="text/javascript" src="js/jquery.nivo.slider.2.6.js"></script>
    <script type="text/javascript">
      $(document).ready(function () {
        $('#slider').nivoSlider({
          effect: 'fade',
          captionOpacity: .9,
          controlNav: false,
          pauseTime: 10000,
          borderRadius: 10,
          directionNavHide: false,
        });
      });
    </script>
  </head>
  <body>
    <header>
      <a href="http://www.schooltool.org">
        <span class="logo">
          <span class="school">school</span><span class="tool">tool</span>
          <img src="images/logo-small.png" alt="Logo" />
        </span>
      </a>
      <nav class="main">
        <ol>
          <li>
            <a href="http://www.schooltool.org/index.html.es">
              Inicio
            </a>
          </li>
          <li>
            <a href="http://book.schooltool.org/es/features.html">
              Características
            </a>
          </li>
          <li>
            <a href="http://launchpad.net/schooltool-project/+announcements">
              Noticias
            </a>
          </li>
          <li>
            <a href="http://book.schooltool.org/es/screenshots.html">
              Pantallazos
            </a>
          </li>
          <li>
            <a href="http://book.schooltool.org/es/system-requirements.html">
              Descargar
            </a>
          </li>
          <li>
            <a href="http://book.schooltool.org/es/">
              Documentación
            </a>
          </li>
          <li class="last">
            <a href="http://book.schooltool.org/es/about.html">
              Contacto
            </a>
          </li>
        </ol>
      </nav>
    </header>
    <div class="wrapper"><!-- Start Content Wrapper -->
      <div id="search-box"><!-- Search Bar -->
        <form class="search-form" id="google-appliance-search-form"
              method="get" accept-charset="UTF-8"
              action="http://book.schooltool.org/es/search.html">
          <div>
            <div id="edit-keys-wrapper" class="form-item">
              <input type="text" class="form-text"
                     onfocus="if(this.value=='Busque aquí'){this.value=''}"
                     onblur="if(this.value==''){this.value='Busque aquí';}"
                     value="Busque aquí" size="20" id="edit-keys" name="q"
                     maxlength="255" />
              <input type="hidden" value="yes" name="check_keywords" />
              <input type="hidden" value="default" name="area" />
            </div>
            <img src="images/arrow.png" class="form-submit"
                 onclick="$(this).closest('form').submit()"
                 style="cursor: pointer" alt="Botón de búsqueda"/>
          </div>
        </form>
      </div><!-- End Search Bar -->
      <section class="clearfix">
        <div class="column">
          <h1>
            SchoolTool: el Sistema Global de Información Estudiantil
          </h1>
  	</div>
      </section>
      <br />	
      <section class="three columns clearfix">
        <div class="column span-2"><!-- Start Slider -->
          <div class="slider-wrapper theme-default">
            <div id="slider" class="nivoSlider">
              <!-- Add new images for the slider here -->
              <img src="images/slide-0.png"
                   alt="Diapositiva de competencias"
                   title="#slide-0-caption" />
              <img src="images/slide-1.png"
                   alt="Diapositiva del cuadro de notas"
                   title="#slide-1-caption" />
              <img src="images/slide-3.png"
                   alt="Diapositiva del calendario"
                   title="#slide-3-caption" />
              <img src="images/slide-5.png"
                   alt="Diapositiva de datos demográficos"
                   title="#slide-5-caption" />
              <img src="images/slide-2.png"
                   alt="Diapositiva del diario"
                   title="#slide-2-caption" />
              <img src="images/slide-4.png"
                   alt="Diapositiva de intervenciones"
                   title="#slide-4-caption" />
            </div>
            <!-- Skills slide image caption. -->
            <div id="slide-0-caption" class="nivo-html-caption">
              <p>
                <strong class="title">Competencias y Resultados</strong>
                <br />
                Organice y registre los logros de los estudiantes en
                conjuntos complejos de competencias, resultados o
                estándares mediante CanDo.
              </p>
            </div>
            <!-- Gradebook slide image caption. -->
            <div id="slide-1-caption" class="nivo-html-caption">
              <p>
                <strong class="title">Cuadro de Notas</strong>
                <br />
                Cree y evalúe actividades y tareas de los estudiantes,
                calcule y reporte notas a través de la fácil interfaz
                web de SchoolTool.
              </p>
            </div>
            <!-- Journal slide image caption. -->
            <div id="slide-2-caption" class="nivo-html-caption">
              <p>
                <strong class="title">Diario de Asistencia</strong>
                <br />
                Mejore la responsabilidad con un registro en línea de
                asistencia y notas de participación diarias.
              </p>
            </div>
            <!-- Calendar slide image caption. -->
            <div id="slide-3-caption" class="nivo-html-caption">
              <p>
                <strong class="title">Calendario</strong>
                <br />
                SchoolTool crea un calendario web para cada persona,
                grupo, clase y recurso. Use el calendario para
                reservar salones y otros recursos compartidos.
              </p>
            </div>
            <!-- Intervention slide image caption. -->
            <div id="slide-4-caption" class="nivo-html-caption">
              <p>
                <strong class="title">Intervenciones</strong>
                <br />
                Cree y registre planes de mejora de los estudiantes en
                forma colaborativa entre el personal de la escuela y
                los padres usando el sistema de Intervenciones de
                SchoolTool.
              </p>
            </div>
            <!-- Demographics slide image caption. -->
            <div id="slide-5-caption" class="nivo-html-caption">
              <p>
                <strong class="title">Datos Demográficos y Contactos</strong>
                <br />
                Almacene datos personales a la medida de los
                estudiantes y maestros. Administre múltiples contactos
                para cada persona.
              </p>
            </div>
          </div>
        </div><!-- End Slider -->  
        <div class="column"><!-- Start Right Box -->
          <div class="rounded clearfix">
            <div class="content"  style="min-height: 235px">
              <h4>
                Software Libre Administrativo para Escuelas alrededor
                del Mundo
              </h4>
              <p>
                SchoolTool es un sistema web de información
                estudiantil libre y de código abierto diseñado para
                escuelas alrededor del mundo, con gran soporte de
                traducción, localización, instalación y actualización
                automática mediante el instalador y el sistema de
                administración de paquetes de de Ubuntu Linux. 
             </p>
            </div>
          </div>
        </div><!-- End Right Box -->
      </section>
      <section class="three columns clearfix" id="main">
        <div class="column">
          <h3>
            ¿Que hay de nuevo?
          </h3>
          <div class="rounded clearfix" id="whats-new">
            <div class="content">
              <h5>
                SchoolTool 2.8.4 Publicado, SchoolTool 3.0 Anunciado
              </h5>
              <p>
                <a href="http://sielibre.com/index.html.es">SIELibre,
                LLC</a> ha publicado SchoolTool 2.8.4, una versión de
                arreglos a fallas de nuestro sistema libre de
                información estudiantil. Esta versión soluciona dos
                problemas:
              </p>
              <ul class="uses">
                <li>
                  <a href="https://bugs.launchpad.net/schooltool.gradebook/+bug/1432672">
                    1432672</a> -- las libretas de notas omiten
                    calificaciones bajo ciertas circunstancias;
                </li>
                <li>
                  <a href="https://bugs.launchpad.net/schooltool/+bug/1436881">
                    1436881</a> -- el diálogo de comentarios no
                    funciona con ciertos navegadores.
                </li>
              </ul>
              <p>
                SIELibre planea publicar una actualización principal,
                SchoolTool 3.0, en el tercer trimestre de 2015,
                incluyendo una página "Escuela" completamente
                rediseñada, que simplifica las tareas administrativas
                comunes, y un sistema de rastreo de cuotas del
                estudiante.
              </p>
            </div>
            <a href="https://docs.google.com/document/u/1/d/1bTpy5elxDty6LgbHu04Zxk0liVetJ7Xu1qQ6WsXCsBA/pub"
               class="learn right">
              lea más...
            </a>
          </div>
        </div>
        <div class="column">
          <h3>
            Cómo empezar
          </h3>
          <div class="rounded clearfix" id="how-to-get-started">
            <div class="content">
              <p>
                Existen instaladores y actualizaciones simples y
                automatizadas de SchoolTool
                en <a href="http://www.ubuntu.com/">Ubuntu Linux</a>.
              </p>
              <p>
                Si aún no usa Ubuntu, puede
                <a href="http://www.ubuntu.com/download/ubuntu/download">descargarlo</a>
                e instalarlo en un disco duro, o simplemente correrlo
                desde un CD o un dispositivo USB, todo libremente.
              </p>
              <p>
                SchoolTool puede ser instalado en una computadora
                personal o un servidor en la escuela, o en un servidor
                remoto en "la nube".
              </p>
              <p>
                SchoolTool y Ubuntu Linux son software libre, de modo
                que Usted puede usarlos sin ningún costo por licencias
                para apoyar a tantas escuelas como
                necesite. SchoolTool es distribuido bajo los términos
                de
                la <a href="http://www.gnu.org/licenses/gpl-2.0.html">Licencia
                Pública General GNU v2.0</a>.
              </p>
              <hr />
              <p>
                Existen servicios comerciales de apoyo, alojamiento y
                desarrollo personalizado para SchoolTool disponibles
                en <a href="http://sielibre.com/index.html.es">SIELibre,
                LLC</a>.
              </p>
            </div>
            <a href="http://book.schooltool.org/es/system-requirements.html"
               class="learn right">
              lea más...
            </a>
          </div>
        </div>
        <div class="column">
          <h3>
            ¿Quiénes usan SchoolTool?
          </h3>
          <div class="rounded clearfix" id="who-uses-schooltool">
            <div class="content">
              <p>
                SchoolTool es parte de implementaciones tecnológicas
                ambiciosas en seis continentes, que incluyen:
              </p>
              <ul class="uses">
                <li>
                  <a href="http://sielibre.com/index.html.es">SIELibre</a> ha
                  trabajado con la organización benéfica del Reino
                  Unido
                  <a href="http://www.arkonline.org/">Absolute Return
                  for Kids (ARK)</a> para crear una versión
                  personalizada de SchoolTool para <a href=
                  "http://www.peas.org.uk/">las escuelas PEA</a> en
                  Uganda y una red de escuelas en India. Lea más sobre
                  este trabajo en el blog
                  de <a href="http://www.bringmoredata.blogspot.co.uk/2014/07/you-want-free-school-information-system.html">Joshua
                  Perry, Director del Programa de Apoyo para ARK
                  Schools</a>.
                </li>
                <li>
                  <a href="http://www.cteresource.org/">El Virginia
                  CTE Resource Center</a> da apoyo a 30 centros que
                  utilizan CanDo para registrar competencias.
                </li>
                <li>
                  La <a href="http://www.baiacademy.org/">Burundi
                  American International Academy</a> en Kinindo,
                  Burundi usa SchoolTool como su sistema de
                  información estudiantil principal y ha contratado a
                  <a href="http://sielibre.com/index.html.es">SIELibre</a>
                  para obtener servicios de alojamiento y soporte.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div><!-- End Content Wrapper -->
    <footer class="clearfix">
      <div class="column">
  	    <p>
          <small>
            &copy; <a href="http://sielibre.com/index.html.es">SIELibre, LLC.</a>
          </small>
        </p>
  	    <p>
          <small>
            SchoolTool&reg; es una marca registrada de la Fundación
            Shuttleworth.
          </small>
        </p>
      </div>
    </footer>
  </body>
</html>
