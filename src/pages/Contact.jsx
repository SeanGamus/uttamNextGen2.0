export const Contact = () => {

    const handleFormSubmit = (formData) => {
        console.log(formData.entries())
    }

    return <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

        <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
                <input
                    type="text"
                    classname="form-control"
                    placeholder="Enter Your Name"
                    name="username"
                    required
                    autocomplete="off"
                    />
                
                <input
                    type="email"
                    classname="form-control"
                    placeholder="Enter Your Email"
                    name="email"
                    required
                    autocomplete="off"
                    />

                <textarea
                    type="text"
                    classname="form-control"
                    rows="10"
                    placeholder="Enter Your Message"
                    name="message"
                    required
                    autocomplete="off"
                    ></textarea>
                
                <button type="Submit" value= "send">
                    Send 
                    </button>
            </form>
        </div>
    </section>;
};