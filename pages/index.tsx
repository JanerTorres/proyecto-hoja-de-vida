import BasicInfo from "@/components/BasicInfo";
import Button from "@/components/Button";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import LeftBar from "@/components/LeftBar";
import PortfolioItem from "@/components/PortfolioItem";
import SectionInfo from "@/components/SectionInfo";
import Skill from "@/components/Skill";
import SlideBar from "@/components/SlideBar";

const Index = () => {
  return (
    <div className="flex flex-row bg-slate-200 w-full gap-4">
      <aside className="debug w-96 h-screen ">
        <div className="side-bar bloque flex-col items-center gap-7 pb-6">
          <div className="flex flex-col items-center w-48 mt-12 gap-6">
            <img className="" src="/images/foto_perfil_circular.png" alt="Foto de  perfil" />
            <div className="flex flex-col items-center gap-1">
              <span className="font-semibold text-xl letra-oscura">Jhon Janer Torres</span>
              <span className="text-lg letra-clara">Back-End Developer</span>
            </div>
          </div>

          <div className="flex flex-col w-56 gap-2">
            <BasicInfo item="Age" detail="23" color="letra-oscura" />
            <BasicInfo item="Residence" detail="Colombia" color="letra-oscura" />
            <BasicInfo item="Freelance" detail="Available" color="text-green-500" />
            <BasicInfo item="Address" detail="Medellin, Ant" color="letra-oscura" />
          </div>

          <div className="flex flex-col w-56 gap-2">
            <span className="medium-title">Languages</span>
            <div className="flex flex-col gap-2">
              <SlideBar item="English" nivel={70}></SlideBar>
              <SlideBar item="French" nivel={30}></SlideBar>
              <SlideBar item="Spanish" nivel={100}></SlideBar>
            </div>
          </div>
          <div className="flex flex-col w-56 gap-2">
            <span className="medium-title">Programming Languages</span>
            <div className="flex flex-col gap-2">
              <SlideBar item="Java" nivel={70}></SlideBar>
              <SlideBar item="C#" nivel={30}></SlideBar>
              <SlideBar item="Python" nivel={100}></SlideBar>
              <SlideBar item="Typescript" nivel={100}></SlideBar>
              <SlideBar item="MySQL" nivel={100}></SlideBar>
            </div>
          </div>
        </div>
      </aside>

      <main className="debug flex flex-col w-full main-content">
        <div className="debug w-full">
          <div className="bloque h-[500px] flex items-center justify-between pr-16 pl-16">
            <div className="flex flex-col gap-5 w-[650px]">

              <div className="flex flex-col gap-1">
                <h1 className="text-5xl font-bold letra-oscura">I'm Jhon Torres</h1>
                <div>
                  <span className="text-5xl font-bold sec-color">Back-end </span>
                  <span className="text-5xl font-bold letra-oscura">Developer</span>
                </div>
              </div>

              <p className="mb-6 text-lg letra-clara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>

              <div className="w-40 h-14">
                <Button text="HIRE ME  ->"></Button>
              </div>

            </div>

            <div className="h-full w-[500px] flex items-end">
              <img className="" src="/images/foto_portada.png" alt="Foto de portada" />
            </div>

          </div>


          <SectionInfo
            title="My Knowledge"
            info="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"></SectionInfo>

          <div className="grid grid-cols-3 grid-rows-2 gap-4 pl-24 pr-24">
            <Skill icon="code" title="Web Development" info="Blog, E-Commerce" />
            <Skill icon="design" title="UX/UI Design" info="Graphic and interface design" />
            <Skill icon="paint" title="Cuarelista" info="Dibujitos lindis" />
            <Skill icon="bd" title="UX/UI Design" info="Graphic and interface design" />
            <Skill icon="game" title="UX/UI Design" info="Graphic and interface design" />
            <Skill icon="design" title="UX/UI Design" info="Graphic and interface design" />
          </div>

          <SectionInfo
            title="Education"
            info="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"></SectionInfo>

          <div className="pl-24 pr-24">
            <Education></Education>
          </div>

          <SectionInfo
            title="Portfolio"
            info="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"></SectionInfo>

          <div className="flex gap-14 p-14 pt-0 justify-center">
            <PortfolioItem/>
            <PortfolioItem/>
            <PortfolioItem/>
          </div>
        </div>

        <Footer />
      </main >

      <aside className="debug w-28">
        <div className="flex h-full bloque flex-col items-center gap-5 pt-16">
          <span className="font-bold text-lg letra-oscura">Links</span>
          <Icon icon="facebook"></Icon>
          <Icon icon="instagram"></Icon>
          <Icon icon="twitter"></Icon>
          <Icon icon="linkedin"></Icon>
          <Icon icon="youtube"></Icon>
          <Icon icon="dribbble"></Icon>

        </div>
      </aside>


    </div >

  )
}

export default Index;