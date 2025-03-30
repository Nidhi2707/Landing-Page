import React, { useState, useRef, useEffect } from 'react';
import { InputField } from '../../Components/Modals/ModalInputs';
import { useHistory } from "react-router-dom";
import TermsAndConditions from './TermsAndConditionsNewTheme';
import { CSVLink } from 'react-csv';
import moment from 'moment';
import NewThemeModal from '../Modals/NewThemeModal';
// import Modaal from '../../Components/';
// import WatchDemoNewTheme from './WatchDemoNewTheme';

export default function WatchDemoNewTheme({ setShowModal, showModal }) {

	const myRef = useRef(null);
	const videoRef = useRef(null);
	const initialValues = {
		fullName: "",
		email: "",
		jobTitle: "",
		company: "",
		country: ""
	};
	const [agreement, setAgreement] = useState(true);
	const [showTC, setShowTC] = useState(false);
	const [inputValues, setInputValues] = useState(initialValues);
	const [showDemo, setShowDemo] = useState(false);
	const [errors, setErrors] = useState({
		fullName: "",
		email: "",
		jobTitle: "",
		company: "",
		country: ""
	})
	const [playVideo, setPlayVideo] = useState(true);
	const [downloadCSVData, setDownloadCSVData] = useState([]);
	const csvLink = useRef();
	const [loading, setLoading] = useState(false);
	let history = useHistory();

	const onBackButtonEvent = (e) => {
		e.preventDefault();
		history.push(`/`);
		// window.location.reload();
	}

	useEffect(() => {
		// window.history.pushState(null, null, window.location.pathname);
		// window.addEventListener('popstate', onBackButtonEvent);
		// return () => {
		// 	window.removeEventListener('popstate', onBackButtonEvent);
		// };
	}, []);

	const executeScroll = () => {
		if (myRef && myRef.current) {
			window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
		}
	}

	const handleChange = (e, val) => {
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
		var mail_subject = "New User Registered - Watched Demo";
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
		}).then(response => {
			setLoading(false);
			setShowDemo(true);
			executeScroll();

		}).catch(error => {
			setLoading(false);
			alert('Error in registering your details! Please try later');
		});


	}

	const handleSubmit = (e) => {
		e.preventDefault();
		
	}

	const videoControl = (e, button) => {
		setPlayVideo(!playVideo)
		if (button === 'play') { videoRef.current.play(); }
		if (button === 'pause') { videoRef.current.pause(); }
	}
	const handleHeader = (headerData) => {
		let headerArr = headerData.length > 0 ? headerData.flatMap(Object.keys) : []
		return headerArr.length > 0 && headerArr.map((key) => {
			var result = key.replace(/([A-Z])/g, " $1");
			var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
			return { label: finalResult, key: key }
		})
	}

	let fileName = `${inputValues.fullName}_${moment().format('YYYYMMDDhhmmss')}`;
	const onCloseModal = (e) => {
		setShowModal(false);
	}
	return (
		<NewThemeModal showModal={showModal} setShowModal={setShowModal} header="" onClose={(e) => onCloseModal(e)}>
			<div
				className="userviewinfo scrollable border-0 newModalHeader"
				style={{
					maxHeight: "100vh",
					overflowY: "auto"
				}}
			>
				<div className="toplogo text-center">
					<img src={`${process.env.PUBLIC_URL}` + "/images/evol_white_logo.jpg"} alt="" width={"30%"} />
				</div>
				<div className='h-100'>
					<section className="tnmsignincont" >
						<div className="mid1366">
							{/* <CSVLink
								data={downloadCSVData}
								headers={
									downloadCSVData.length > 0
										? handleHeader(downloadCSVData)
										: []
								}
								filename={fileName}
								ref={csvLink}
							/> */}
							<div className="row">
								<div className="col-12 sformright">
									<div className="newForm innerform border-0 pt-0 ">
										<h4 className='text-white text-center'>Curabitur ligula sapien tincidunt non:</h4>
										{/* <p className="ssubtext">Please complete all fields in the form below.</p> */}
										<form onSubmit={handleSubmit}>
											<div className="csfieldcol" style={{ marginTop: "25px" }}>
												<div className="csfieldinner1 ">

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
											<div className="csfieldcol" style={{ marginTop: "25px" }}>
												<div className="csfieldinner1">
													{/* <label>Email</label> */}
													<InputField
														value={inputValues.email}
														name="email"
														handleChange={handleChange}
														handleBlur={(e) => onBlurEmail(inputValues.email)}
														id="pemail"
														ClassName="form-control csfield spl hideResize"
														placeHolder="Email Address"
													/>
												</div>
												<span className="pl-3 fieldError">{errors.email}</span>
											</div>
											<div className="csfieldcol" style={{ marginTop: "25px" }}>
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
											<div className="csfieldcol" style={{ marginTop: "25px" }}>
												<div className="csfieldinner1">
													{/* <label>Company Name</label> */}
													<InputField
														value={inputValues.company}
														name="company"
														handleChange={handleChange}
														id="pcompanyName"
														ClassName="form-control csfield spl hideResize"
														placeHolder="Company Name"
													/>
												</div>
												<span className="pl-3 fieldError">{errors.company}</span>
											</div>
											<div className="csfieldcol" style={{ marginTop: "25px" }}>
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
											{/* <div className="inftext">
												<label className='d-flex'>
													<div style={{ padding: '0.5% 1%' }}>
														<input type="checkbox" name="agreement" checked={agreement} value={agreement} onChange={e => handleChange(e)} />
													</div>
													By selecting this, you confirm that you agree to the processing of your personal data by Evolving systems.
												</label>
											</div> */}
											<button type="submit" className={`snbtn newButton w-50`}>Curabitur ligula sapien</button>
										</form>
									</div>
								</div>
							</div>
						</div>
						{
							showTC && <TermsAndConditions
								showModal={showTC}
								setShowModal={setShowTC}
							/>
						}
					</section>
					{showDemo && <section className="managepart " ref={myRef} style={{ height: "100vh", display: "flex", marginTop: "2%" }}>
						<div className="container ">
							<div className="row justify-content-center">
								<div className="col-12 text-center mb-xl-2 ctitle">
									<h2 style={{ color: "#fff" }}>
										Welcome to Total Number Management (TNM) Product Demo Video!
									</h2>
								</div>
								<button type="button" className="cbtn cbtn2 mb-3" onClick={() => { history.push(`/`); window.location.reload(); }}>
									Back to Homepage
								</button>
								<div className='w-100 d-flex h-100'>
									<iframe ref={videoRef} width={"100%"} style={{ display: "flex", justifyContent: "center" }} height="515"
										src="https://www.youtube.com/embed/kmykvi5JcGs?rel=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
								</div>
							</div>
						</div>
					</section>}
				</div>
			</div>
		</NewThemeModal>
	)
}
