import GlitchButton from "./GlitchButton";
import { Link } from "react-router-dom";

function LetUsKnow() {
    return (
        <div>
            <div className="relative overflow-hidden rounded-xl bg-[#FB695E] p-8 text-white">

                <img
                    src="/Shapes/hero-shape6.png"
                    alt=""
                    className="hidden lg:block absolute top-24 z-50 right-[20%] w-6 pointer-events-none"
                />

                <img
                    src="/Shapes/hero-shape5.png"
                    alt=""
                    className="hidden lg:block absolute bottom-10 z-50 right-[30%] w-8 pointer-events-none"
                />

                <h3 className="text-3xl font-bold leading-snug mb-4">
                    How Can We Help You Let Us Know?
                </h3>

                <p className="text-white/90 text-base leading-relaxed mb-8">
                    We understand the importance of approaching each work integrally
                    and believe in the power of simple and easy communication.
                </p>

                <Link to="/contact">
                    <GlitchButton
                        className="px-6 py-3 bg-black text-white hover:bg-green-700 transition"
                    >
                        Contact Us
                    </GlitchButton>
                </Link>

            </div>
        </div>
    )
}

export default LetUsKnow