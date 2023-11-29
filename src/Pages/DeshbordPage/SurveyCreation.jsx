
import { Helmet } from "react-helmet-async";
import swal from "sweetalert";

const SurveyCreation = () => {
    const handleAddUpdate = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email?.value || "not-email"
        const title = form.title?.value || "not-title"
        const Deadtime = form.time?.value || "not-Deadtime"
        const description = form.description?.value || "not-description"
        const category = form.categorye?.value || "not-category"
        const option = form.option?.value || "not-option"
        const DisLike = parseInt(form.DisLike?.value) || 0
        const like = parseInt(form.like?.value) || 0
        const image = form.url.value;

        const addSurvey = { email, title, Deadtime, description, category, option, DisLike, like,image  }
        console.log(addSurvey);
        //{??--DataBase Data Load--??}
        fetch("http://localhost:5000/surveyData", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addSurvey)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal("Thank You!", "You SurveyData Added!", "success");
                }
            })
    }
    return (
        <div>
              <Helmet>
                <title>Survey Creation</title>
            </Helmet>
            <div className="space-x-3">
                <h2 className="text-3xl font-extrabold text-center mb-5">Survey Creation</h2>

                <form onSubmit={handleAddUpdate} className="rounded-lg bg-gradient-to-r from-blue-500 to-red-500 ...  shadow-cyan-500/50 shadow-2xl border-2 p-7">
                    {/* form name and quantity row  */}
                    <div className="md:flex gap-5 mb-5 ">
                        <div className="form-control md:w-1/2">
                            <label className="label ">
                                <span className="label-text"> Email</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="email"
                                    name="email"
                                    // defaultValue={user?.email}

                                    placeholder="Enter Your email"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="survey title"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form supplier and Taste row  */}
                    <div className="md:flex gap-5 mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="datetime-local"
                                    name="time"
                                    placeholder="time "
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <textarea
                                    type="text"
                                    name="description"
                                    placeholder="Short description"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form catogray  and details row  */}
                    <div className="md:flex gap-5 mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <select className="input input-bordered w-full" name="categorye" id="category">
                                    <option value="Education">Education</option>
                                    <option value="Social Issues">Social Issues</option>
                                    <option value="Technology Usage">Technology Usage</option>
                                    <option value="Health and Wellness">Health and Wellness</option>
                                    <option value="Demographics">Demographics</option>
                                    <option value="Work and Employment">Work and Employment</option>
                                </select>
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Option</span>
                            </label>
                            <label className="input-group">

                                <select defaultValue={"Social Issues"} className="input input-bordered w-full" name="option" id="category">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-5 mb-5">
                        <div className="form-control  md:w-1/2 mb-5 ">
                            <label className="label">
                                <span className="label-text">DisLike</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="number"
                                    name="DisLike"
                                    defaultValue={0}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control  md:w-1/2 mb-5 ">
                            <label className="label">
                                <span className="label-text">Like</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="number"
                                    name="like"
                                    defaultValue={0}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>

                    <div className="mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> Photo url</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="url"
                                name="url"
                                placeholder="Enter photo url"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
               
                    <input type="submit" value="Survey Submit" className="btn btn-block" />
                </form>
            </div>

        </div>

    );
};

export default SurveyCreation;

