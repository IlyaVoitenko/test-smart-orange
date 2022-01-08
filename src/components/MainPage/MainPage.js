import ContainerOfSliders from "./ContainerOfSliders";
import Header from "./Header";
import AboutCompany from "./AboutCompany";
import MainTasks from "./MainTasts";
import OurProjects from "./OurProjects";
import ContactUs from "./ContactUs";

const MainPage = () => {
  return (
    <div>
      <Header />
      <ContainerOfSliders />
      <AboutCompany />
      <MainTasks />
      <OurProjects />
      <ContactUs />
    </div>
  );
};
export default MainPage;
