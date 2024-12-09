import {clientReviews} from "../constants/index.js";

const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">Testimonials</h3>

            <div className="client-container">
                {clientReviews.map(({id, name, review, img, position}) => (
                    <div key={id} className="client-review">
                        <p className="text-white">{review}</p>
                        <div className="client-content">
                            <div className="flex gap-3">
                                {img ? (
                                    <img src={img} alt={name} className="w-12 h-12 rounded-full" />
                                ) : (
                                    <div className="flex w-12 h-12 rounded-full  bg-neutral-100 bg-opacity-10 justify-center items-center">
                                        <p className=" text-3xl font-semibold text-yellow-600">{name[0]}</p>
                                    </div>
                                )
                                }
                                <div className="flex flex-col justify-between">
                                    <p className="font-semibold text-white-800">{name}</p>
                                    <p className="text-white-500 text-sm font-light">{position}</p>
                                </div>
                            </div>

                            {/* <div className="flex self-end gap-2 items-center">
                                {Array.from({length: 5}, (_, index) => (
                                    <img key={index} src="/assets/star.png" alt="star" className="w-4 h-4"/>
                                ))}
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Clients;
