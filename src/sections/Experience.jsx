import {workExperiences} from "../constants/index.js";
import { useState} from "react";
import DevScene from "../components/DevScene.jsx";

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3>My Work Experience</h3>

                <div className="work-container">
                    <div className="work-canvas">
                        <DevScene animationName={animationName}/>
                    </div>

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({id, name, pos, duration, title, icon, animation}) => (
                                <div key={id} className="work-content_container group" onClick={() =>
                                    setAnimationName(animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                >
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img src={icon} alt="logo" className="w-full h-full"/>
                                        </div>

                                        <div className="work-content-bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-500">{name}</p>
                                        <p className="text-sm mb-5">{pos} -- {duration}</p>
                                        <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Experience;