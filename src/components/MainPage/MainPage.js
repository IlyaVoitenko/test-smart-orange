import ContainerOfSliders from "./ContainerOfSliders";
import Header from "./Header";
import AboutCompany from "./AboutCompany";
import MainTasks from "./MainTasts";
import OurProjects from "./OurProjects";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <ContainerOfSliders />
      <AboutCompany />
      <MainTasks />
      <OurProjects />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default MainPage;
