import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";


const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('ok.jarosch@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container relative">
                        <img src="/assets/first_grid.png" alt="default photo" className="absolute left-0 w-full sm:h-[276px] h-fit object-contain" />
                        <img src="/assets/my_photo.png" alt="developer photo" className="  relative z-10 w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">
                                Hi, I&apos;m Oksana
                            </p>
                            <p className="grid-subtext">
                                I have been coding for one year, during which I have honed my frontend skills, with a focus on single-page applications.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/second_grid.png" alt="logos" className="w-full sm:h-[276px] h-fit object-contain"/>

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
                    <div className="grid-container xl:justify-around">
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
                            <p className="grid-subtext">I am based in Germany, with remote work available.</p>
                            <a href="#contact">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10"></Button>
                            </a>
                        </div>
                    </ div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid" className="w-full md:h-[328px] sm:h-[266px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Problem solving</p>
                            <p className="grid-subtext">Solving problems through code is not just a task for me but an opportunity to combine creativity and logic to create real value.</p>
                        </div>
                    </div>
                </div>


                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="numbers" className="w-full md:h-[196px] sm:h-[276px] h-fit object-cover sm:object-top"/>

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>

                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="text-xl font-medium text-gray_gradient">ok.jarosch@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default About;