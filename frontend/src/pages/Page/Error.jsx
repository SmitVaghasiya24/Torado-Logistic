import { Link } from "react-router-dom";
import GlitchButton from "../../components/GlitchButton";

function Error() {
    return (
        <section className="flex items-center justify-center">
            <div className="wrapper">
                <div className="text-center">

                    <div className="flex justify-center mb-10">
                        <img
                            src="/error.png"
                            alt="404 Error"
                            className="max-w-xl w-full"
                        />
                    </div>

                    <p className="text-gray-600 max-w-xl mx-auto mb-8">
                        The page you were looking for could not be found.
                    </p>

                    <Link to="/">
                        <GlitchButton
                            type="button"
                            className="px-8 py-4 text-base bg-[#FB695E] text-white rounded-md shadow-[0_10px_30px_rgba(251,105,94,0.35)] transition-colors duration-300 hover:bg-[#3CB879]"
                        >
                            Return To Home Page
                        </GlitchButton>
                    </Link>


                </div>
            </div>
        </section>
    );
}

export default Error;
