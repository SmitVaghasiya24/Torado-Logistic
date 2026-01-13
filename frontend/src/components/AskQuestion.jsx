import ContactEnquiryForm from "./ContactEnquiryForm"

function AskQuestion() {
    return (
        <div>
            <section className="py-8 sm:py-10 md:py-12">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    <div className="w-full h-full">
                        <img
                            src="/Blog/inner-blog3.jpg"
                            alt="Contact Enquiry"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    <div className="bg-[#F3F5F6] p-6 sm:p-8 md:p-18 rounded-lg shadow-sm">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            Haven’t Got Your Answer? Ask Here...
                        </h2>

                        <ContactEnquiryForm />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default AskQuestion