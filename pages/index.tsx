import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Knowledge from "@/components/Knowledge";
import LeftBar from "@/components/LeftBar";
import Portfolio from "@/components/Portfolio";
import RightBar from "@/components/RightBar";
import SectionInfo from "@/components/SectionInfo";


const Index = () => {
  return (
    <div className="flex flex-row bg-slate-200 w-full gap-4">
      <aside className="debug w-96 h-screen ">
        <LeftBar />
      </aside>
      <main className="debug flex flex-col w-full main-content">
        <div className="debug w-full">
          <Header />
          <SectionInfo
            title="My Knowledge"
            info="I have experience with various tools and languages that encompass both digital and analog development and art."></SectionInfo>

          <Knowledge />
          <SectionInfo
            title="Education"
            info="A significant portion of my education has been acquired during my university studies, as well as through guidance from professionals and self-driven pursuit of knowledge."></SectionInfo>

          <Education />
          <SectionInfo
            title="Portfolio"
            info="This section showcases the most relevant experiences throughout my career as a developer."></SectionInfo>

          <Portfolio />
        </div>
        <Footer />
      </main >
      <aside className="debug w-28">
        <RightBar />
      </aside>
    </div >
  )
}

export default Index;