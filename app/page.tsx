// pages/index.tsx
import Navbar from "@/app/components/Navbar"
import FaceIcon from '@mui/icons-material/Face'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import AddTaskIcon from '@mui/icons-material/AddTask';

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
                            <a className="text-white"
                               href="mailto:nguyentanhau165997@gmail.com"><EmailIcon/> nguyentanhau165997@gmail.com</a>
                        </div>
                        <div className="col text-center">
                            <a className="text-white" href="tel:+94966490297"><LocalPhoneIcon/> 0966490297</a>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <h3 className="text-center">Summary</h3>
                    <p className="lead">With seven years of experience in the IT industry,
                        I have honed my skills across a variety of programming languages, including Java, Node.js,
                        JavaScript, and PHP as my primary working languages. In addition to software development, I
                        bring substantial expertise in DevOps and infrastructure, enabling me to support and optimize
                        system architectures effectively.</p>
                    <p className="lead">Throughout my career, I’ve contributed to numerous large-scale projects,
                        tackling complex challenges in big data and providing solutions for clients across diverse
                        geographies, including Japan, the United States, the Bahamas, and Colombia. My experience has
                        equipped me with a deep understanding of both backend development and system scalability, making
                        me adept at creating robust, high-performing solutions tailored to client needs.</p>
                </section>

                <section id="services" className="pt-5">
                    <h3 className="text-center">Work Experiences</h3>
                    <h4>1. TPS Software Corporation (2019 - Present)</h4>
                    <p className="lead" style={{marginLeft: '16px'}}> TPS is a leading, highly diversified and pioneering software development provider in Viet Nam. TPS provides Software Development, Software Testing, Automation Test Development, and Software Maintenance.
                        Together with its experts and business partners, along with a revolutionized business model, TPS functions as a global investment and technology provider, creating and delivering end-to-end services and projects, offering and establishing development centers, consulting a tailored fit for your unique business circumstances. </p>
                </section>

                <section id="services" className="pt-5">
                    <h3 className="text-center">Projects</h3>
                    <h4>1. AWM </h4>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <i>Key techs: Java, SVN, Spring Boot, Git, JSP, JSF, AWS (EC2, PVC, K8s)</i>
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> This is a project from the Japanese. It uses Java Spring Boot and Git to build a
                        source code management platform similar to GitLab. It provides the ability to create dynamic
                        websites as fast as static ones. The predecessor of this project was written in SVN and JSF
                        JAVA.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> I have worked with AWS and used Kubernetes (K8s) for deploying products. During
                        development, I can set up a Kubernetes cluster in a local environment.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> I am familiar with most of the commands and the functionality of both basic and
                        advanced features in Git and SVN. Through this, I have gained an understanding of the
                        differences between them.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> In this project, I was deeply involved in rendering HTML with Spring Boot using
                        the Java template engine, Thymeleaf. This intervention allows for generating static HTML files
                        based on the database, and the content is pre-rendered and saved before the user accesses it. As
                        a result, it performs as fast as a static website since the data has already been rendered in
                        advance.
                    </p>
                    <h4>2. Visikard </h4>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <i>Key techs: Java, Spring Boot, NodeJs, NestJS, NextJS, VueJS, ReactNative, ReactJS,
                            Angular, Kafka streaming, Websocket</i>
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> The Visikard project is a financial project. It provides sales services for
                        merchants, similar to Shopee, Lazada, etc. It includes an integrated wallet for online payments,
                        which is custom-built and also offers its own branded card.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> In this project, I gained experience working with large datasets, managing cash
                        flow, and handling distributed transactions. I addressed issues related to rolling back funds in
                        case of errors.
                    </p>

                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> I utilized a wide range of technologies in the project, including Kubernetes
                        (K8s), distributed transactions, and various programming languages and frameworks such as React
                        Native, ReactJS, Angular, VueJS, Java Spring Boot, NestJS, NextJS, and NodeJS.
                    </p>

                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> I also addressed issues related to big data, handling a massive volume of
                        requests during processing, and managing cash flow within the application.
                    </p>

                    <h4>3. GFit </h4>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <i>Key techs: Java, Spring Boot, Vue 3, Websocket</i>
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> Gfit is a project focused on currency trading. It monitors the price fluctuations
                        of the U.S. dollar, Japanese yen, and several other global currencies. Similar to XTrade and
                        MT5, this project provides future forecasts to help traders make optimal trading decisions.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> It utilizes various technologies such as Java Spring Boot, Vue 3, PHP wordpress,
                        and databases
                        like MySQL, PostgreSQL, and MongoDB. AI is also employed to provide predictions.
                    </p>
                    <h4>4. ECO2 </h4>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> This project involves managing data from devices that monitor temperature and
                        humidity in controlled environments to ensure agricultural product standards are met.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> It involves extensive use of Kafka streaming and real-time big data processing.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> It uses technologies such as NestJS, VueJS, and MongoDB.
                    </p>
                    <h4>5. PlanIT - Revalize </h4>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> This is a project focused on medical devices. The project handles a large amount
                        of data that needs to be processed as quickly as possible.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> It uses the Python programming language for better performance, along with
                        databases like MySQL and PostgreSQL. For the frontend, Vue2 is used.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> The main challenge is handling large amounts of data and continuous operations.
                        Elasticsearch is used to improve search speed.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> For log management, Kibana and Graylog are used.
                    </p>
                    <h4>6. Social - Interior </h4>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> This is a project focused on providing a platform for selling products, similar
                        to Shopee. The project handles a large volume of data, with several million records. I have
                        extensive experience in addressing issues related to big data.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> Elasticsearch is used to improve search speed. ReactJS is used for the frontend.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> It involves multiple tasks related to image processing, using AWS Lambda for
                        handling these tasks.
                    </p>
                    <p className="lead" style={{marginLeft: '16px'}}>
                        <AddTaskIcon/> For log management, CloudWatch are used.
                    </p>
                </section>
            </div>
        </>
    );
}
