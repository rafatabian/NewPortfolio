import "./Projects.css";
import Folder from "../../Components/Folder/Folder";
import { useContext, useEffect } from "react";
import { generalContext } from "../../Contexts/GeneralC";
import React from "react";  
import ProjectsR from "../../Containers/ProjectsR/ProjectsR";
import { MdKeyboardArrowDown } from "react-icons/md";
//images
import music_app from "../../assets/music_app.png";
import music_app_tiny from "../../assets/music_app_tiny.png";
import ai_app from "../../assets/ai_app.png";
import ai_app_tiny from "../../assets/ai_app_tiny.png";
import cars_app from "../../assets/cars_app.png";
import cars_app_tiny from "../../assets/cars_app_tiny.png";


const Projects = () => {
  const { projRotation, allowScroll, setAllowScroll, buttons } =
    useContext(generalContext);

  //logic for scrolling down and activate transitions
  if (allowScroll) {
    const navbar = document.querySelector(".navbar_container");
    const containerProj = document.querySelector(".projects_container");
    const slideContainer = document.querySelector(".projects_slide_in");

    if (navbar) {
      navbar.style.animation = "navbarRotation 2s ease forwards";
    }
    if (containerProj) {
      containerProj.style.animation = "identifier 2s ease forwards";
    }
    if (slideContainer) {
      setTimeout(() => {
        slideContainer.style.animation = "projSlideIn 2s ease forwards";
        slideContainer.scrollIntoView({ behavior: "auto", block: "start" });
      }, 2000);
    }
  }

  // allow the transitions when scrolling down
  const brainScroll = () => {
    if (buttons === "projects" || buttons === "externalClicked") {
      setAllowScroll(true);
    }
  };

  // handle scrolling down in PROJECTS root
  useEffect(() => {
    window.addEventListener("scroll", brainScroll);

    return () => {
      window.removeEventListener("scroll", brainScroll);
      setAllowScroll(false);
    };
  }, []);

  
  return (
    <div className="projects_main_container">
      <div className="projects_stars_background"></div>
      <div className="projects_container">
        <div className="title_container">
          <p className="projects_first_word moving_words">
            <span>P</span>ROJECTS
          </p>
          <p className="projects_second_word moving_words">
            P<span>R</span>OJECTS
          </p>
        </div>

        <div
          className={`projects_projects_and_titles ${
            projRotation ? "projects_rotated_content" : ""
          }`}
        >
          <div className="lorem_ipsum_text">
            Mauris ac sollicitudin metus, non scelerisque mauris. Quisque
            ultrices eros sit amet luctus sodales. Integer pulvinar ullamcorper
            ipsum eget ullamcorper. Curabitur gravida urna turpis, et commodo
            ante maximus in. Cras laoreet ante erat, nec porta turpis rhoncus
            at. Vivamus pellentesque, neque vel auctor tempor, eros elit
            condimentum dolor, at lobortis nisl augue quis ipsum. Nunc a sem a
            magna interdum varius id sed leo. Aenean ultrices porttitor neque
            quis venenatis. Phasellus ut enim semper velit molestie iaculis non
            a nisi. Sed justo tortor, ultricies quis molestie a, faucibus et
            est. Suspendisse vel molestie lorem, a tincidunt turpis. Sed
            sollicitudin pulvinar ante, ut viverra diam sodales ac. Integer
            fringilla feugiat elementum. Duis ac dui dolor. Nunc tristique,
            ipsum nec maximus mollis, quam neque consequat lacus, in varius quam
            libero sit amet ante. Nullam sodales diam sit amet ullamcorper
            pretium. Praesent finibus cursus eleifend. Sed sagittis ultrices
            nisi in consequat. Fusce vel dignissim eros. Ut pellentesque, nibh
            at rutrum luctus, justo lacus volutpat augue, vitae tincidunt urna
            dolor at sem. Morbi quis tempor dui, et vestibulum nisl. Duis
            volutpat velit in nisl vestibulum tincidunt. Fusce laoreet ultrices
            laoreet. Aliquam a nulla et ipsum auctor tristique ornare eu urna.
            Morbi sodales ultricies nunc, eu porttitor lectus imperdiet eu. Nam
            lobortis odio id interdum placerat. Donec vestibulum turpis eu
            laoreet tincidunt. Nulla pretium metus ac hendrerit molestie.
            Phasellus convallis mauris nec lacinia porta. Ut vestibulum
            pellentesque velit imperdiet porttitor. Duis blandit pellentesque
            finibus. Etiam hendrerit nec ipsum in viverra. Mauris sit amet sem a
            sem blandit porttitor quis sed erat. Nullam et metus mattis,
            sollicitudin lacus ut, sagittis nibh. Nam quis eros lacus. Curabitur
            at neque in est ullamcorper blandit vitae efficitur risus. Nulla
            vitae quam sit amet nisi mattis ultricies nec non mi. Curabitur
            ornare vehicula volutpat. Donec congue orci vitae urna laoreet, sed
            commodo tellus efficitur. Quisque tincidunt odio vel dui laoreet
            luctus. Aliquam erat volutpat. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Morbi faucibus
            pellentesque risus ac imperdiet. Nam vehicula a ex non maximus.
            Integer eleifend metus nisi, euismod malesuada velit imperdiet
            lobortis. Etiam vitae pretium ex. Duis non blandit arcu. Aliquam sed
            lacus tempor, dictum eros sit amet, ornare lectus. Curabitur eu est
            sed magna semper tincidunt ut quis est. Vestibulum urna turpis,
            euismod sed mollis non, gravida a sapien. Quisque lorem turpis,
            lacinia vitae consequat ut, volutpat quis nisi. Proin eget nisl sit
            amet metus sollicitudin accumsan. Aliquam et sagittis orci, in
            volutpat lorem. Cras interdum faucibus lacus, a dapibus velit
            aliquam in. Aliquam a lacus laoreet, varius quam a, fringilla eros.
            Vestibulum eros tortor, vestibulum ut lectus id, fringilla euismod
            massa. Donec at ex neque. Integer ornare diam arcu, sit amet luctus
            dui tempor sed. Cras gravida pellentesque malesuada. Quisque rutrum
            vitae dui at dapibus. Sed in fringilla eros. Aliquam erat volutpat.
            Donec dapibus, tellus eu placerat sagittis, orci ipsum posuere
            risus, non fermentum ex sapien a nibh. Nulla non facilisis erat.
            Pellentesque eget leo at diam vehicula auctor. Sed placerat
            porttitor nulla, vel tempus urna. Pellentesque feugiat elementum
            tincidunt. Sed fringilla, quam vitae pellentesque pulvinar, lorem
            tellus blandit turpis, eget sodales nisl massa at risus. Curabitur
            nisi lectus, gravida eget urna convallis, elementum viverra nisl.
            Quisque commodo finibus augue, sed tincidunt lorem ultrices nec.
            Fusce tempor, urna eu placerat scelerisque, purus nulla dignissim
            tortor, eu sagittis metus dui id felis. Fusce eget commodo augue, id
            elementum neque. Ut vehicula neque ut metus euismod, nec congue ex
            ornare. Nullam pellentesque metus id augue euismod tristique.
            Integer ligula lorem, ultricies in est id, commodo ultrices nisi. In
            vulputate, ante in dictum pretium, lacus massa vehicula dolor,
            scelerisque interdum ligula enim vel eros. Ut quis lorem at ante
            aliquet aliquet placerat sed mauris. Ut rhoncus eu leo eu congue.
            Sed sollicitudin id lectus sit amet tincidunt. Cras sagittis luctus
            placerat. Nullam quis elit sed dui bibendum eleifend. Duis et dolor
            sed nibh pellentesque sollicitudin mollis sit amet arcu. Aenean
            viverra justo id eros viverra, nec sollicitudin felis finibus.
            Phasellus eu odio sem. Nullam fringilla, erat nec dictum sagittis,
            orci tortor auctor nisl, eu ornare dolor massa sed mauris. Duis
            ullamcorper bibendum venenatis. Ut vel consequat nisl. Pellentesque
            viverra vehicula sagittis. Phasellus nec diam convallis mi consequat
            vulputate. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nulla aliquet tellus ligula. Mauris
            consectetur auctor dapibus. Donec sed augue diam. Praesent vel
            tristique ligula. Nam quis ex nunc. Donec ante tellus, posuere quis
            massa a, sagittis commodo elit. Fusce convallis lacinia hendrerit.
            Pellentesque tortor mauris, vehicula ac nisi eget, efficitur rhoncus
            ipsum. Morbi id tempor risus, sed malesuada nulla. Donec porttitor
            quam vel odio accumsan, ac cursus orci iaculis. Donec euismod, augue
            in tincidunt fringilla, leo erat elementum urna, in malesuada tortor
            orci sit amet mauris. Vestibulum lacinia ornare eros, a sagittis
            mauris pretium vel. Pellentesque vitae ligula est. Cras non lacinia
            elit. Cras gravida nunc in lorem molestie, vitae condimentum nisi
            semper. Nunc non est in metus ultrices posuere. Mauris congue
            blandit eleifend. Nulla finibus pulvinar purus eu condimentum.
            Praesent pulvinar ultrices nulla, sed feugiat justo pulvinar a.
            Nulla nunc felis, interdum sit amet nulla id, porta tempor arcu.
            Suspendisse sagittis risus nec urna consequat vulputate. Vestibulum
            sagittis nibh nibh, ac ultrices massa aliquet at. Cras nec commodo
            dui. In tempor fringilla ultricies. Mauris eleifend sed leo vitae
            tincidunt. Aliquam erat volutpat. Mauris tempus, risus eget bibendum
            pulvinar, libero enim dignissim magna, congue posuere orci risus vel
            augue. Vivamus mattis sapien tempus neque gravida, vitae sodales dui
            ornare. Suspendisse potenti. Praesent eget nisl justo. Curabitur nec
            mattis erat. Cras nec est mauris. In luctus vel felis id viverra. In
            sed mauris vestibulum, ultricies eros et, facilisis metus.
            Pellentesque vel ornare purus. Suspendisse enim augue, vestibulum
            quis iaculis volutpat, accumsan eu felis. Nunc purus felis, blandit
            sit amet dapibus non, luctus at nulla. Phasellus volutpat eleifend
            mollis. Cras ut mi sed dui accumsan facilisis. Quisque erat felis,
            tempus vel diam vitae, commodo ultrices lectus. Duis eleifend neque
            metus, quis tincidunt nibh faucibus rhoncus. Curabitur ut dui eu
            nulla tempus porttitor. Nullam volutpat justo et nisi facilisis, nec
            rhoncus risus tincidunt. Sed mattis eget mi id rutrum. Nulla
            facilisi. Praesent lacinia massa sit amet sem dictum, sit amet
            sollicitudin ex egestas. Sed non dictum dolor, sed bibendum mauris.
            Integer eget interdum nisi. Nulla ullamcorper mattis accumsan.
            Integer accumsan nisi in commodo suscipit. Sed sagittis in urna ac
            iaculis. Duis pulvinar malesuada mi, ac mollis lectus gravida ac.
            Morbi mi tellus, dignissim sit amet dapibus at, malesuada at erat.
            Cras pharetra aliquam est vel congue. Donec hendrerit sed quam quis
            egestas. Donec hendrerit libero eget arcu sollicitudin, sed posuere
            urna viverra. Aliquam erat volutpat. Sed ut molestie massa. Donec
            non mollis urna. Pellentesque dictum nulla at libero malesuada, vel
            iaculis leo dignissim. Phasellus quis iaculis ex. Fusce rhoncus
            blandit bibendum. Nulla suscipit tristique nibh, quis posuere mi
            pretium a. Proin ut ante at ligula pharetra dapibus. Morbi eget
            aliquet lacus. Aenean quis facilisis orci, vitae tincidunt tortor.
            Integer at enim at neque egestas blandit eget faucibus mauris. Donec
            pellentesque sapien non pretium porta. Fusce mattis porta egestas.
            In egestas urna eu elementum volutpat. Maecenas in tincidunt diam.
            Praesent at felis dictum, posuere arcu eget, dictum turpis. Nulla
            sodales sed ante eget suscipit. Suspendisse blandit vestibulum ante,
            sit amet vestibulum ex tempus dignissim. In vulputate lacus eu
            venenatis malesuada. Nulla convallis lacus nec velit semper, nec
            fringilla ipsum blandit. Vivamus ut ornare elit. In ut ante ac erat
            viverra laoreet. Ut a euismod ante. Morbi fringilla, erat quis
            tempus efficitur, sapien urna convallis mauris, a viverra justo
            mauris ac libero. Mauris velit mauris, suscipit sed interdum a,
            condimentum vitae ligula. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Mauris eu felis ut velit dictum auctor. Duis sit
            amet mauris ut odio porttitor viverra. Nulla facilisi. Vestibulum
            iaculis tortor in ante viverra, ac iaculis felis bibendum. Aliquam a
            pulvinar tortor. Phasellus egestas commodo felis nec porta. Sed
            viverra semper nunc, id accumsan elit interdum ac. Etiam sit amet
            felis aliquet, interdum nulla quis, tincidunt justo. Nunc accumsan
            euismod tincidunt. Sed volutpat eget magna sit amet rutrum. Aliquam
            et volutpat est. Vivamus cursus dui sit amet lectus efficitur
            condimentum. Sed ornare nunc id augue tempus, et scelerisque velit
            vulputate. Pellentesque non mauris ipsum. Ut at erat nec ex viverra
            blandit sit amet at arcu. Integer id ornare orci. Suspendisse ut
            congue metus. Morbi gravida turpis felis, vel blandit leo laoreet
            non. Maecenas eleifend magna urna, non aliquam enim mollis a. Sed in
            massa elit. Aliquam sed efficitur nibh, et vulputate elit.
            Vestibulum iaculis tincidunt scelerisque. Donec in erat gravida nisi
            sollicitudin pellentesque sed vitae risus. Phasellus tristique nec
            lorem vitae vulputate. Duis mattis tincidunt eros quis feugiat.
            Integer dignissim euismod consequat.
          </div>
          <Folder img={music_app} tiny={music_app_tiny} title="Music App" />
          <Folder img={cars_app} tiny={cars_app_tiny} title="Selling Platform"/>
          <Folder img={ai_app} tiny={ai_app_tiny} title="AI Asistant" />
        </div>

        <div className="proj_arrow_down">
          <MdKeyboardArrowDown />
        </div>
      </div>

       <ProjectsR />
     
    </div>
  );
};

export default Projects;
