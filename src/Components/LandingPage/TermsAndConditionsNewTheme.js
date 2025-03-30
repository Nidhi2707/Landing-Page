import React from "react";
import NewThemeModal from "../../Components/Modals/NewThemeModal";

export default function TermsAndConditionsNewTheme({ showModal, setShowModal }) {

    const onCloseModal = () => {
        setShowModal(false);
    }
    return (
        <NewThemeModal modal="terms" showModal={showModal} setShowModal={setShowModal} header={`Terms & Conditions`} onClose={onCloseModal}>

            <section className="managepart history-scroll-new scrollable">
                <div className="container">
                    <div className="row" style={{ padding: "10%" }}>
                        <div className="col-12 managebox" >
                            <div className="icon icon1"></div>
                            <div className="" style={{ padding: "1%", marginBottom: "4%" }}>
                                <h4><strong>7 Day Trial Agreement
                                    Please Read This Information Carefully Before You Sign Up For A Free Trial
                                </strong>
                                </h4>
                                <br />
                                <p>BY CLICKING THE “I AGREED TO THE 7-DAY EVALUATION AGREEMENT” BOX, YOU ARE AGREEING ON BEHALF OF THE ENTITY USING THE SERVICES (“COMPANY”) THAT COMPANY WILL BE BOUND BY AND IS BECOMING A PARTY TO THIS HOSTED EVALUATION LICENSE AGREEMENT (“AGREEMENT”) AND THAT YOU HAVE THE AUTHORITY TO BIND COMPANY. IF COMPANY DOES NOT AGREE TO ALL OF THE TERMS OF THIS AGREEMENT, DO NOT SELECT THE ” I AGREED TO THE 7-DAY EVALUATION AGREEMENT ” BOX AND DO NOT USE THE SERVICES. COMPANY HAS NOT BECOME A LICENSEE OF AND IS NOT AUTHORIZED TO USE THE SERVICES UNLESS AND UNTIL IT HAS AGREED TO BE BOUND BY THESE TERMS. THE “EFFECTIVE DATE “FOR THIS AGREEMENT SHALL BE THE DAY YOU CLICK THE ” I AGREED TO THE 7-DAY EVALUATION AGREEMENT ” BOX.</p>
                            </div>
                            <div>
                                <h5 className="pt-2"><b>
                                    1. Definitions
                                </b>
                                </h5><br />
                                <p>
                                    1.1. "Confidential Information"<br />
                                    Shall mean this Agreement, any addendum hereto signed by both parties, all Services, data, drawings, benchmark, tests, specifications, trade secrets, object code and source code of the Software, and any other proprietary information supplied to Licensee by Evolving Systems Ltd incorporated in United Kingdom, including all items deemed as "confidential information" by Evolving Systems Ltd.
                                </p><br />
                                <p>
                                    1.2. "Evaluation Period"<br />
                                    Shall mean the period of time which shall be no longer than fourteen (14) days beginning on the date Evolving Systems Ltd provide access to the Services via the Internet to Licensee, unless extended by Evolving Systems Ltd in its sole discretion.
                                </p><br />
                                <p>
                                    1.3. "Services"<br />
                                    Means the provision of access via the Internet to the Software.

                                </p><br />
                                <p>
                                    1.4 "Software"<br />
                                    Shall mean the Total Number Management software in object code hosted on the Amazon Web Services (AWS) cloud platform by Evolving Systems Ltd.
                                </p>
                            </div>
                            <div>
                                <h5 className="pt-2"><b>
                                    2. Limited License
                                </b>
                                </h5><br />
                                <p>
                                    2.1. License Grant<br />
                                    Subject to the terms and conditions of this Agreement and for the sole purpose of evaluating the Software, Evolving Systems Ltd grants to Licensee a temporary, personal, non-transferable, limited and non-exclusive right to access and use the Services during the Evaluation Period by Licensee; provided that Licensee may not use the output generated by the Software for commercial purposes.
                                </p><br />
                                <p>
                                    2.2. Limitations<br />
                                    The license granted herein is granted solely to Licensee, and not, by implication or otherwise, to any parent subsidiary or an affiliate of Licensee. Evolving Systems Ltd reserves all rights not expressly granted to Licensee. Licensee shall not copy, distribute, reproduce, use or allow access to the Services, except as explicitly permitted under this Agreement. Licensee shall not modify, adapt, translate, or prepare derivative works from the Services and shall not, decompile, reverse engineer, disassemble or otherwise attempt to derive source code from the Services, and any such attempt by Licensee shall be considered as material breach of the Agreement. Licensee shall not remove, obscure, or use other than as permitted Evolving Systems Ltd’s copyright notice, trademarks, or other proprietary rights notices affixed to or contained within the Services.
                                </p>
                                <br />
                            </div>
                            <div>
                                <h5 className="pt-2"><b>
                                    3. Delivery
                                </b>
                                </h5><br />
                                <p>
                                    As soon as practicable following the Effective Date, Evolving Systems Ltd will provide access to the Services to Licensee via the Internet.</p><br />

                            </div>
                            <div>
                                <h5 className="pt-2"><b>
                                    4.   Acknowledgements
                                </b>
                                </h5><br />
                                <span>
                                    Licensee acknowledges that: (a) sole purpose in granting Licensee free use of the Services under the terms and conditions of this Agreement is to allow Licensee to evaluate the Software during the Evaluation Period; (b) the Software is and shall remain the exclusive property of Evolving Systems Ltd and its successors and assigns; (c) Licensee has no right or interest in the Software other than as expressly granted in this Agreement; (d) the Demonstration version supplied by Evolving Systems Ltd contains limitations compared to the full commercial Software; (e) any data, analytics, feedback or suggestions for improvements or enhancements given by Licensee to Evolving Systems Ltd, including by means of automated upload features, regarding the Software (collectively, “Feedback”) does not give Licensee any rights in any release of the Software.  Licensee hereby irrevocably assigns and transfers to Evolving Systems Ltd all of Licensee’s right, title and interest in and to Feedback and all intellectual property associated therewith without any claim for any compensation from Evolving Systems Ltd.</span>
                            </div>
                            <div>
                                <h5 className="pt-2"><b>
                                    5. Access to Services
                                </b>
                                </h5><br />
                                <p>
                                    5.1 Security Measures<br />
                                    Licensee may access the Services as Evolving Systems Ltd instructs through a combination of usernames and passwords.
                                </p><br />
                                <p>
                                    5.2 Password Protection<br />
                                    Licensee shall be entirely responsible for maintaining the confidentiality of the password(s) assigned to Licensee. Licensee shall immediately notify Evolving Systems Ltd if a password is lost, stolen, disclosed to an unauthorised third party, or has otherwise been compromised. Licensee shall be solely responsible for any and all activities made under Licensee’s account. Licensee shall defend, indemnify, and hold Evolving Systems Ltd harmless from and against all damages, penalties, costs and expenses (including reasonable legal fees) incurred by Evolving Systems Ltd in connection with any legal action arising or resulting from Licensee’s failure to comply with the terms of this Section 5.2.
                                </p>
                                <br />
                            </div>
                            <div>
                                <h5 className="pt-2"><b>
                                    6. Licensee Obligations
                                </b>
                                </h5><br />
                                <p>
                                    Licensee represents and warrants that: (i) it shall not use the Services or Evolving Systems Ltd hosting equipment to which it shall have access (pursuant to this Agreement) to gain or attempt to gain unauthorised access to other computer systems accessible via the Internet, any Services for which Licensee has not been expressly authorized to use pursuant to this Agreement, or software or computer systems belonging to others which is also hosted by Evolving Systems Ltd.</p><br />

                            </div>
                            <div>
                                <h5 className="pt-2"><b>
                                    7. Warranty Declaration and Limitation of Liability
                                </b>
                                </h5><br />
                                <p>
                                    7.1. Warranty and Disclaimer<br />
                                    EVOLVING SYSTEMS LTD. LICENSES THE SERVICES, INCLUDING ANY DOCUMENTATION THAT MAY ACCOMPANY THIS SERVICES, TO LICENSEE ON AN "AS IS" BASIS. EVOLVING SYSTEMS LTD MAKES NO WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, TITLE AND NON-INFRINGEMENT. EVOLVING SYSTEMS LTD DOES NOT WARRANT THAT THE SERVICES WILL OPERATE IN COMBINATIONS OTHER THAN AS SPECIFIED IN ANY ACCOMPANYING DOCUMENTATION OR THAT THE OPERATION OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.
                                </p><br />
                                <p>
                                    7.2. Limitation of Liability<br />
                                    IN NO EVENT WILL EVOLVING SYSTEMS LTD’S LIABILITY FOR DIRECT DAMAGES ARISING OUT OF THIS AGREEMENT OR THE USE OR PERFORMANCE OF THE SERVICES WHETHER IN TORT, CONTRACT OR OTHERWISE, TO LICENSEE OR ANY OTHER PERSON OR ENTITY, EXCEED $5000. IN NO EVENT WILL EVOLVING SYSTEMS LTD BE LIABLE TO LICENSEE OR ANY OTHER INDIVIDUAL OR ENTITY CONNECTED WITH LICENSEE FOR ANY LOST PROFITS, BUSINESS, DATA, COSTS OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, MALFUNCTION OR LOSS OF WORK PRODUCT OR ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES RESULTING FROM THE USE OF THE SERVICES AND DOCUMENTATION OR OTHERWISE ARISING FROM THIS AGREEMENT, AND NOT WITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.
                                    <br /><br />THE PARTIES AGREE THAT THIS SECTION 6.2 REPRESENTS A REASONABLE ALLOCATION OF RISK.</p><br />

                            </div>
                            <div>
                                <h5 className="pt-2"><b>
                                    8. Nondisclosure
                                </b>
                                </h5><br />
                                <p>
                                    Licensee shall not disclose or use any Confidential Information except as expressly permitted under this Agreement. Licensee shall hold all Confidential Information in accordance with the term of this Agreement and for a period of three (3) years after the termination of this Agreement. Licensee shall take all reasonable steps to ensure that Confidential Information is not disclosed or distributed by its employees or agents to third parties who are not subject in writing to the confidentiality obligations of this Section 7.

                                </p><br />

                            </div>
                            <div>
                                <h5 className="pt-2"><b>
                                    9. Term and Termination
                                </b>
                                </h5><br />
                                <p>
                                    9.1. Term<br />
                                    This Agreement shall commence on the Effective Date and continue until the end of the Evaluation Period unless terminated earlier by mutual agreement of the parties. Evolving System Ltd reserves the right to immediately terminate the Agreement incase of breach of any obligations by Licensee under the Agreement.
                                </p><br />
                                <br />
                                <p>
                                    9.2. Effect of Termination or Expiration<br />
                                    Upon the expiration or termination of this Agreement for any reason: (1) all licenses granted here under automatically revert to Evolving Systems Ltd. and Licensee will no longer have access to the Services; and (2) Licensee shall (a) return to Evolving Systems Ltd all Confidential Information, and all other material received from Evolving Systems Ltd in Licensee’s prosession or control, or, at Evolving Systems Ltd ‘s sole discretion, Evolving Systems Ltd may request that Licensee destroy all such materials in Licensee’s possession or control, (b) erase any and all of the foregoing from all computer memories and storage devices within Licensee’s possession or control, and (c) provide Evolving Systems Ltd with a written statement by an officer of Licensee certifying that Licensee has complied with the foregoing obligations.
                                </p>

                            </div>
                            <div>
                                <h5 className="pt-2"><b>
                                    10. Miscellaneous
                                </b>
                                </h5><br />
                                <p>
                                    10.1. Assignment<br />
                                    Licensee shall not assign any of its rights or delegate any of its obligations under this Agreement without the prior written consent of Evolving Systems Ltd. Subject to the foregoing, this Agreement will bind and inure to the benefit of the parties, their respective successors and permitted assigns.
                                </p><br />
                                <br />
                                <p>
                                    10.2. Governing Law<br />
                                    This Agreement and any dispute arising from or relating to the performance or breach hereof shall be governed by and construed and enforced in accordance with the laws of England and Wales; and the courts of England will have exclusive jurisdiction to adjudicate any dispute arising under or in connection with the Agreement

                                </p><br />
                                <p>
                                    10.3. Notice<br />
                                    All notices required to be sent hereunder shall be in writing and shall be deemed to have been given when mailed by 1st class mail to the address listed below.
                                    <br /><br /> Evolving Systems Ltd., 2 City Approach, Albert Street, Manchester, UK M30 0BL</p><br />
                                <p>
                                    10.4. Severability <br />
                                    If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions of this Agreement will remain in full force.
                                </p><br />
                                <p>
                                    10.5 Waiver<br />
                                    The waiver by either party of a breach of any provision of this Agreement or the failure by either party to exercise any right hereunder shall not operate or be construed as a waiver of any subsequent breach of that right or as a waiver of any other right.
                                </p><br />
                                <p>
                                    10.6. Data Protection<br />
                                    The Licensee warrants that it has the legal right to disclose all Personal Data to Evolving Systems Ltd under or in connection with the Agreement. Evolving Systems Ltd warrants that it will act only on instructions from the Licensee in relation to the processing of any Personal Data performed by Evolving Systems Ltd on behalf of the Licensee.
                                </p><br />
                                <p>
                                    10.7. Entire Agreement<br />
                                    This Agreement shall constitute the complete agreement between the parties and supersede all prior or contemporaneous agreements or representations, written or oral, concerning the subject matter of this Agreement. This Agreement may not be modified or amended except in writing signed by a duly authorized representative of each party; no other act, document, usage or custom shall be deemed to amend or modify this Agreement.
                                </p><br />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </NewThemeModal>
    );
}
