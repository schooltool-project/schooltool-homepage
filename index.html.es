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
          content="Copyright (c) La Fundación Shuttleworth 2003 - 2011" />
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
            <a href="http://book.schooltool.org/features.html">
              Características
            </a>
          </li>
          <li>
            <a href="http://launchpad.net/schooltool-project/+announcements">
              Noticias
            </a>
          </li>
          <li>
            <a href="http://book.schooltool.org/screenshots.html">
              Pantallazos
            </a>
          </li>
          <li>
            <a href="http://book.schooltool.org/system-requirements.html">
              Descargar
            </a>
          </li>
          <li class="last">
            <a href="http://book.schooltool.org/">
              Documentación
            </a>
          </li>
        </ol>
      </nav>
    </header>
    <div class="wrapper"><!-- Start Content Wrapper -->
      <div id="search-box"><!-- Search Bar -->
        <form class="search-form" id="google-appliance-search-form"
              method="get" accept-charset="UTF-8"
              action="http://book.schooltool.org/search.html">
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
                ¡SchoolTool 2.0 Listo!
              </h5>
              <p>
                SchoolTool 2.0 representa una restructuración completa
                de la interfaz web del usuario desde la organización
                de la aplicación como un todo hasta el diseño de cada
                formulario y botón.
              </p>
              <p>
                El punto de partida para el rediseño fueron las
                Directrices de Diseño Web de Ubuntu y la fuente libre
                Ubuntu, ambas creadas por
                <a href="http://design.canonical.com/">Canonical
                Design</a>. Desarrollamos un nuevo esquema de color y logo con
                <a href="http://www.schwadesign.com/">Schwadesign</a>.
                Esto nos dio una base clara, atractiva y consistente
                para todos nuestros recursos web en nuestro sitio web,
                documentación, y la aplicación misma...
                </p>
            </div>
            <a href="http://book.schooltool.org/2.0-release-notes.html"
               class="learn right">
              lea más
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
                El equipo base de desarrollo brinda una instalación de
                SchoolTool con un sólo clic en
                <a href="http://www.ubuntu.com/">Ubuntu Linux</a> mediante el
                <a href="http://www.ubuntu.com/ubuntu/features/ubuntu-software-centre">Centro de Software de Ubuntu</a>.
              </p>
              <p>
                Si aún no usa Ubuntu, puede
                <a href="http://www.ubuntu.com/download/ubuntu/download">descargarlo</a>
                e instalarlo, correrlo desde un CD o un dispositivo
                USB, e incluso
                <a href="http://www.ubuntu.com/download/ubuntu/windows-installer">correrlo junto con Windows</a>, todo libremente.
              </p>
              <p>
                <a href="http://www.olenepal.org/">OLE Nepal</a>
                brinda a la comunidad paquetes para
                <a href="http://fedoraproject.org/">Fedora Linux</a>.
              </p>
              <p>
                También existen compañías comerciales que brindan
                soporte con SchoolTool, tales como
                <a href="http://education.critical-links.com/">Critical
                Links</a>.
              </p>
              <p>
                SchoolTool puede ser instalado en una computadora
                personal o un servidor en la escuela, o en un servidor
                remoto en "la nube".
              </p>
            </div>
            <a href="http://book.schooltool.org/system-requirements.html"
               class="learn right">
              lea más
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
                ambiciosas en seis continentes, tales como:
              </p>
              <ul class="uses">
                <li>
                  Como componente del 
                  <a href="http://education.critical-links.com/">Education
                  Appliance de Critical Links</a>, SchoolTool
                  es usado por millones de computadoras Intel
                  Classmate en iniciativas de laptops 1-a-1.
                </li>
                <li>
                  <a href="http://www.olenepal.org/">OLE Nepal</a>
                  está evaluando SchoolTool como parte de sus
                  implementaciones del proyecto Una Laptop por Niño
                  (OLPC) (como se muestra arriba).
                </li>
                <li>
                  <a href="http://www.open.org.kh/">El Open
                  Institute</a> y SchoolTool han desarrollado una versión
                  personalizada como parte del Plan Maestro de
                  Eduación en TIC de Camboya.
                </li>
                <li>
                  <a href="http://www.cteresource.org/">El Virginia
                  CTE Resource Center</a> da apoyo a 50 centros que utilizan
                  CanDo, un componente de SchoolTool desarrollado
                  localmente para rastreo de competencias.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div><!-- End Content Wrapper -->
    <footer>
      <div class="column">
  	<img src="images/logo_on_white.jpg" alt="Logo" class="right" />
  	<p>
          <small>
            &copy; La Fundación Shuttleworth 2003 - 2011: Apoyando a
            gente excepcional para cambiar el mundo.
          </small>
        </p>
  	<p>
          <small>
            SchoolTool&reg; es una marca registrada de la Fundación
            Shuttleworth.
          </small>
        </p>
  	<p>
          <small>
            Intel&reg; es una marca regisrada de Intel
            Corporation. Education Appliance&trade; es una marca
            registrada de Critical Links.
          </small>
        </p>
      </div>
    </footer>
  </body>
</html>
