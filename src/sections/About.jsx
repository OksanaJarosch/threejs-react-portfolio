import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";


const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('oksanajarosch@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                         <img src="/assets/grid1.png" alt="default photo" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">
                                Hi, I'm Oksana
                            </p>
                            <p className="grid-subtext">
                                I have been coding for one year, during which I have honed my frontend skills, with a focus on animated 3D websites.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="logos" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">
                                Tech Stack
                            </p>
                            <p className="grid-subtext">
                                I specialize in JavaScript/TypeScript with a focus on React ecosystem.
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
                                backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>

                        <div>
                            <p className="grid-headtext">I work remotely</p>
                            <p className="grid-subtext">I'm based in Germany, with remote work available.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"></Button>
                        </div>
                    </ div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid" className="w-full sm:h-[266px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Problem solving</p>
                            <p className="grid-subtext">I love solving problems through code.</p>
                        </div>
                    </div>
                </div>


                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="numbers" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>

                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient">oksanajarosch@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default About;