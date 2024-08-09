import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import { Divider } from "@mui/material";
import { dividerStyle } from "@/style-components";
import MySkills from "@/components/MySkills";
import MyExperience from "@/components/MyExperience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.homeStyle}>
      <Navbar />
      <div className={styles.content}>
        <HeroSection />
        <Divider style={dividerStyle} />
        <MySkills />
        <Divider style={dividerStyle} />
        <MyExperience />
        <Divider style={dividerStyle} />
        <Projects />
        <Divider style={dividerStyle} />
        <ContactMe />
        <Divider style={dividerStyle} />
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}
