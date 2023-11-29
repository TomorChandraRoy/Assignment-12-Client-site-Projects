import { BsFillChatSquareFill, BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";

const Faq = () => {
    return (
        <div className=" grid  md:grid-cols-2 mt-12 grid-cols-1 ">
            <div className=" ml-16 mb-3 lg:ml-1" >
                <h2 className=" font-bold text-2xl">Ask Our Team</h2>
                <p className=" mt-2 font-semibold"> Want to contact us directly? No problem. <br />
                    We are always here for you.</p>

                <div className="avatar-group mt-6 -space-x-6">
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://i.ibb.co/7YynKnh/istockphoto-1542969945-170667a.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12 bg-red-400">
                            <img src="https://i.ibb.co/bQw7d7w/4886-png-300.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://i.ibb.co/JdKmG3x/istockphoto-1411250048-170667a.jpg" />
                        </div>
                    </div>
                    <div className="avatar placeholder">
                        <div className="w-12 bg-neutral-800 text-neutral-content">
                            <span>+200</span>
                        </div>
                    </div>
                </div>
                <div className="mt-9">
                    <div className="flex items-center gap-2">
                        <BsFillTelephoneFill></BsFillTelephoneFill>
                        <p className="  font-bold">01857573471</p>

                    </div>
                    <div className="flex items-center gap-2">
                        <BsFillEnvelopeFill></BsFillEnvelopeFill>
                        <h2>rpriponroy@gmail.com </h2>
                    </div>


                    <button className="btn mt-6 bg-green-500  border-none btn-secondary"> <span><BsFillChatSquareFill></BsFillChatSquareFill> </span> Start Live chart</button>

                </div>

            </div>

            <div>

                <h2 className=" font-bold text-2xl  mb-3">
                    Frequently Asked Questions
                </h2>

                <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
                        
                        <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                            <div class="py-5">
                                <details class="group">
                                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span> What are Surveys?</span>
                                        <span class="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Surveys are a method of gathering information from a group of individuals by asking them questions. Surveys can be conducted through various mediums such as paper and pencil, online forms, telephone, or face-to-face interviews.
                                    </p>
                                </details>
                            </div>
                            <div class="py-5">
                                <details class="group">
                                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span> What about Online Surveys?</span>
                                        <span class="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    An online survey is a set of Structured Question that the respondent completes over the Internet, generally by filling out a form. It is a more natural way to reach out to the respondents.
                                    </p>
                                </details>
                            </div>
                            <div class="py-5">
                                <details class="group">
                                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span>Advantages of Online Surveys?</span>
                                        <span class="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    The advantages of taking surveys online are endless. This method allows you to collect information from a large number of people in a concise time. Since surveys are currently a commonly used tool, they have managed to delve into different sectors such as government agencies, universities, non-profit organizations, etc.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default Faq;