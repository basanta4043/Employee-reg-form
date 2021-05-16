import '../index.css';
function RegistrationForm(props) {
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center" >
            <div>
                <h3>Please Fill all the required informations:</h3>
            </div>
            <form>
                <div className="form-group text-left">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="First Name"
                        required pattern="[A-Za-z]+"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="firstName">Last Name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Last Name"
                        required pattern="[A-Za-z]+"
                    />
                </div>

                <div className="form-group text-left">
                    <label htmlFor="Gender">Gender</label><br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" value="Male" />
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" value="Female" />
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" value="Other" />
                        <label class="form-check-label" for="inlineRadio3">Other</label>
                    </div>
                </div>

                <div className="form-group text-left">
                    <label htmlFor="email">Email </label>
                    <input type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                    />
                </div>

                <div className="form-group text-left">
                    <label htmlFor="Mobile">Mobile</label>
                    <input type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                        required pattern="98.+"
                    />
                </div>

                <div className="form-group text-left">
                    <label htmlFor="Mobile">Address</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Address"
                        required
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="DOB">Date Of Birth</label>
                    <input type="date"
                        className="form-control"
                        placeholder="mm/dd/yyyy"
                        required
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="Country">Country</label>
                    <select name="Country" class="form-control" required>
                        <option value="Nepal">Nepal</option>
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="Bangladesh">Bangladesh</option>
                    </select>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="Address">Address</label>
                    <textarea class="form-control"
                        required />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="Skill">Skill</label><br />
                    <input type="checkbox" value="" />Skill 1
                    <input type="checkbox" value="" />Skill 2
                    <input type="checkbox" value="" />Skill 3
                </div>
                <div className="form-group text-left">
                    <label htmlFor="upload">Upload Photo</label>
                    <input type="file"
                        className="form-control"
                        accept="image/x-png,image/jpg, image/jpeg"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
        </div>
    )
}
export default RegistrationForm;