import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from "react-router-dom";
import { InputField } from '../../Components/Modals/ModalInputs';
import { CSVLink } from 'react-csv';
import moment from 'moment';
import SuccessTrialModal from './SuccessTrialModal';
import NewThemeModal from '../../Components/Modals/NewThemeModal';
import TermsAndConditionsNewTheme from './TermsAndConditionsNewTheme';

export default function FreeTrialNewTheme({ showModal, setShowModal }) {

	const [downloadCSVData, setDownloadCSVData] = useState([]);
	const csvLink = useRef();
	const initialValues = {
		fullName: "",
		email: "",
		jobTitle: "",
		company: "",
		country: ""
	};

	const [inputValues, setInputValues] = useState(initialValues);
	const [showTC, setShowTC] = useState(false);
	const [errors, setErrors] = useState({
		fullName: "",
		email: "",
		jobTitle: "",
		company: "",
		country: ""
	})
	const [loading, setLoading] = useState(false);
	const [agreement, setAgreement] = useState(false);
	let history = useHistory();
	const [openSuccessTrialModal, setOpenSuccessTrialModal] = useState(false);

	const onBackButtonEvent = (e) => {
		e.preventDefault();
		history.push(``);
		// window.location.reload();
	}
	useEffect(() => {
		window.history.pushState(null, null, window.location.pathname);
		window.addEventListener('popstate', onBackButtonEvent);
		return () => {
			window.removeEventListener('popstate', onBackButtonEvent);
		};
	}, []);

	const handleChange = (e, val) => {
		// setErrors((prevState)=> {return { ...prevState, email: "" }});
		setErrors((prevState) => { return { ...prevState, [e.target.name]: "" } })
		if (e.target.name === "agreement") {
			setAgreement(e.target.checked);
		} else {
			setInputValues({ ...inputValues, [e.target.name]: e.target.value });
		}
		setDownloadCSVData([inputValues]);
	};

	const onBlurEmail = (name) => {
		var regex = /^(?!.+@(gmail|google|yahoo|outlook|hotmail|msn)\..+)(.+@.+\..+)$/;
		if (!regex.test(name)) {
			setErrors((prevState) => { return { ...prevState, email: "Please Enter Valid Email" } })
		} else {
			setErrors((prevState) => { return { ...prevState, email: "" } })
		}
	}


	const validateRegistration = (data) => {
		
	}

	function sendEmail() {

		var mail_ID = "alt.z2-1zftev7@yopmail.com";
		var mail_subject = "New User Registered - Free Trail";
		var mail_message = "New User Signed up from web UI. \n" + "Details as below \n User Name :" + inputValues.fullName + "\n Email : " + inputValues.email + "\n Designation : " + inputValues.jobTitle + "\n company : " + inputValues.company
		setLoading(true);

		fetch('https://movers-san-francisco.com/email_sender.php', {
			method: 'POST',
			'Accept': 'application/json',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'email_message=' + JSON.stringify({
				'mail_to': mail_ID,
				'mail_subject': mail_subject,
				'mail_message': mail_message
			})
			// }).then(response => response.json()).then(data => {
		}).then(response => {
			setLoading(false);

			setOpenSuccessTrialModal(true);
		}).catch(error => {
			setLoading(false);
		});


	}


	const hubSportCall = async () => {
	
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValues.fullName === "" || inputValues.email === "" || inputValues.company === "" || inputValues.jobTitle === "" || errors.email != "") {
			validateRegistration(inputValues);
		} else {
			hubSportCall();
		}
	}
	const handleHeader = (headerData) => {
		let headerArr = headerData.length > 0 ? headerData.flatMap(Object.keys) : []
		return headerArr.length > 0 && headerArr.map((key) => {
			var result = key.replace(/([A-Z])/g, " $1");
			var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
			return { label: finalResult, key: key }
		})
	}
	const onCloseModal = (e) => {
		setShowModal(false);
	}
	let fileName = `${inputValues.fullName}_${moment().format('YYYYMMDDhhmmss')}`;
	return (
		<NewThemeModal showModal={showModal} setShowModal={setShowModal} header="" onClose={(e) => onCloseModal(e)}>
			<div
				className="userviewinfo scrollable border-0 newModalHeader"
				style={{
					maxHeight: "100vh",
					overflowY: "auto"
				}}
			>
				<div className='h-100'>
					<section className="tnmsignincont tnmtrialconts">
						<div className="mid1366">
							<CSVLink
								data={downloadCSVData}
								headers={
									downloadCSVData.length > 0
										? handleHeader(downloadCSVData)
										: []
								}
								filename={fileName}
								ref={csvLink}
							/>
							<div className="row">
								<div className="topheadrow pl-5">
									<Link to={`/`}>
										<img src={`${process.env.PUBLIC_URL}` + "/images/logoHover.png"} alt="" width={"20%"} /></Link>
								</div>
								<div className="col-lg-6 leftNewTheme pl-5 ">
									<h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</h4>

									<ul className='landingBullets'>
										<li>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</li>
										<li>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus</li>
										<li>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus</li>
										<li>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</li>
									</ul>
									<div className="tnmstartexts">
										{/* <div className="screenimg"><img src={`${process.env.PUBLIC_URL}` + `/images/dashbaord12.png`} alt="" /></div> */}
										<h5 className='pr-3'>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum Aenean imperdiet. Etiam ultricies nisi vel augue.<br /><br /></h5>
									</div>
								</div>
								<div className="col-lg-6 rightNewTheme pr-5">
									<div className="innerform">
										<h4>Curabitur ullamcorper ultricies nisi.</h4>
										<p className="ssubtext">Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. </p>
										<form onSubmit={handleSubmit}>
											<div className="csfieldcol mt-3">
												<div className="csfieldinner1">

													{/* <label>Full Name</label> */}
													<InputField
														value={inputValues.fullName}
														name="fullName"
														handleChange={handleChange}
														id="pfullname"
														ClassName="form-control csfield spl hideResize"
														placeHolder="Full Name"
													/>
												</div>
												<span className="pl-3 fieldError">{errors.fullName}</span>
											</div>
											<div className="csfieldcol mt-3">
												<div className="csfieldinner1">
													{/* <label>Email</label> */}
													<InputField
														value={inputValues.email}
														name="email"
														handleChange={handleChange}
														handleBlur={(e) => onBlurEmail(inputValues.email)}
														id="pemail"
														ClassName="form-control csfield spl hideResize"
														placeHolder="Email"
													// requiredPattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
													/>
												</div>
												<span className="pl-3 fieldError">{errors.email}</span>
											</div>
											<div className="csfieldcol mt-3">
												<div className="csfieldinner1">
													{/* <label>Job Title</label> */}
													<InputField
														value={inputValues.jobTitle}
														name="jobTitle"
														handleChange={handleChange}
														id="pJobTitle"
														ClassName="form-control csfield spl hideResize"
														placeHolder="Job Title"
													/>
												</div>
												<span className="pl-3 fieldError">{errors.jobTitle}</span>
											</div>
											<div className="csfieldcol mt-3">
												<div className="csfieldinner1">
													{/* <label>Company Name</label> */}
													<InputField
														value={inputValues.company}
														name="company"
														handleChange={handleChange}
														id="pcompany"
														ClassName="form-control csfield spl hideResize"
														placeHolder="Company Name"
													/>
												</div>
												<span className="pl-3 fieldError">{errors.company}</span>
											</div>
											<div className="csfieldcol mt-3">
												<div className="csfieldinner1">
													{/* <label>Country</label> */}
													<InputField
														value={inputValues.country}
														name="country"
														handleChange={handleChange}
														id="pcountry"
														ClassName="form-control csfield spl hideResize"
														placeHolder="Country"
													/>
												</div>
											</div>
											<div className="inftext">
												<label className='text-white display-5 pt-4'><input type="checkbox" className='mr-2' name="agreement" checked={agreement} value={agreement} onChange={e => handleChange(e)} />Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. <span className='urlLink text-white underline font-weight-bold' onClick={() => setShowTC(true)}>Terms & Conditions</span></label>
												{/* <p>By selecting this, you confirm that you agree to the processing of your personal data by Evolving systems. <span className='urlLink underline' onClick={() => setShowTC(true)}>Terms & Conditions</span></p> */}
											</div>
											<button type="submit" className={`snbtn mt-0 w-100 newButton ${agreement === false ? "disabledbtn" : ""}`}>Nam quam nunc</button>
										</form>
									</div>
								</div>
							</div>
						</div>
						{
							showTC && <TermsAndConditionsNewTheme
								showModal={showTC}
								setShowModal={setShowTC}
							/>
						}
						{openSuccessTrialModal && <SuccessTrialModal
							showModal={openSuccessTrialModal}
							setShowModal={setOpenSuccessTrialModal}
							inputValues={inputValues}
							setInputValues={setInputValues}
							setAgreement={setAgreement}
						/>}
					</section>
				</div>
			</div>
		</NewThemeModal>
	)
}
