import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('Rajdeep.bandyopadhaya@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Rajdeep</p>
              <p className="grid-subtext">
                I am a Computer Science and Engineering graduate specializing in IoT, Cybersecurity, and Blockchain, with experience in software engineering, cybersecurity, cloud computing, and AI. I hold certifications including CEH, AWS Solutions Architect, Microsoft Azure Fundamentals (AZ-900), Google Cybersecurity, and Google Cloud certifications. Passionate about technology and innovation, I am seeking opportunities in Software Engineering, Cybersecurity, and Cloud Computing.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Frontend: HTML, CSS, JavaScript, React.js<br />
                Backend: Node.js, Express.js, FastAPI, Python, C++, SQL<br />
                Cloud & DevOps: AWS, Microsoft Azure, Google Cloud Platform (GCP), Docker, Kubernetes, Git, GitHub, Linux<br />
                Cybersecurity Tools: Wireshark, Nmap, Burp Suite, Metasploit, Microsoft Sentinel, tcpdump, Kali Linux, OWASP ZAP<br />
                Blockchain Tools: Solidity, Ethereum, Remix IDE, Ganache, MetaMask, Web3.js<br />
                Machine Learning & AI: Python, TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Jupyter Notebook, AWS SageMaker, Azure AI Services, Google Gemini API<br />
                Programming Languages: Python, C, C++, JavaScript, SQL, HTML, CSS<br />
                Databases: MySQL, PostgreSQL, MongoDB, BigQuery
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Bangalore, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Bangalore, India and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I am passionate about solving problems and building impactful solutions through code. Programming is more than a profession for me—it's something I genuinely enjoy. I love exploring new technologies, improving my skills, and turning ideas into real-world applications. I have actively participated in hackathons and coding competitions, earning multiple achievements, including being ranked among the Top 300 teams globally in the Atlassian Codegeist Hackathon and securing 1st place in the NatWest Hack4aCause hackathon2025. These experiences have strengthened my problem-solving, teamwork, and software
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Rajdeep04@icloud.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
