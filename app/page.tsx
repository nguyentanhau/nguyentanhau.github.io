// pages/index.tsx
import Navbar from "@/app/components/Navbar"
import FaceIcon from '@mui/icons-material/Face'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <section id="home" className="py-5 text-center">
                    <h3>Nguyễn Tấn Hậu</h3>
                    <div className="row">
                        <div className="col text-center">
                            <FaceIcon/> Fullstack Software Engineer
                        </div>
                        <div className="col text-center">
                            <a className="text-black" href="mailto:nguyentanhau165997@gmail.com"><EmailIcon/> nguyentanhau165997@gmail.com</a>
                        </div>
                        <div className="col text-center">
                            <a className="text-black" href="tel:+94966490297"><LocalPhoneIcon/> 0966490297</a>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <h3 className="text-center">Summary</h3>
                    <p className="lead">With seven years of experience in the IT industry, I have honed my skills across a variety of programming languages, including Java, Node.js, JavaScript, and PHP as my primary working languages. In addition to software development, I bring substantial expertise in DevOps and infrastructure, enabling me to support and optimize system architectures effectively.</p>
                    <p className="lead">Throughout my career, I’ve contributed to numerous large-scale projects, tackling complex challenges in big data and providing solutions for clients across diverse geographies, including Japan, the United States, the Bahamas, and Colombia. My experience has equipped me with a deep understanding of both backend development and system scalability, making me adept at creating robust, high-performing solutions tailored to client needs.</p>
                </section>

                <section id="services" className="py-5 text-center">
                    <h2>Our Services</h2>
                    <p className="lead">Provide a list of the services you offer.</p>
                </section>
            </div>
        </>
    );
}
