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
            info="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"></SectionInfo>

          <Knowledge />
          <SectionInfo
            title="Education"
            info="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"></SectionInfo>

          <Education />
          <SectionInfo
            title="Portfolio"
            info="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"></SectionInfo>

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