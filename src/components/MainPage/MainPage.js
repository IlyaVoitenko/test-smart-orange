import ContainerOfSliders from "./ContainerOfSliders";
import Header from "./Header";
import AboutCompany from "./AboutCompany";
import MainTasks from "./MainTasts";
import OurProjects from "./OurProjects";
const MainPage = () => {
  return (
    <div>
      <Header />
      <ContainerOfSliders />
      <AboutCompany />
      <MainTasks />
      <OurProjects />
    </div>
  );
};
export default MainPage;
