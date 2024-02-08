import React from "react";
import { Navbar } from "./Navbar";
import { useState, useEffect } from "react";
import "./registration.css";

const Register = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [number, setNumber] = useState(null);
  const [showHiddenDiv, setShowHiddenDiv] = useState(false);
  const [showHiddenDiv2, setShowHiddenDiv2] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(
    "Sona College Of Technology"
  );
  const [selectedEvents, setSelectedEvents] = useState(false);
  const [selectedWorkshops, setSelectedWorkshops] = useState("");
  const [selectedYear, setSelectedYear] = useState("1");
  const [event, setEvent] = useState("no");

  function revert(e) {
    setChecked(!checked);
    setSelectedEvents(!selectedEvents);
  }

  function revert2(e) {
    setChecked2(!checked2);
    // console.log(checked2);
    setShowHiddenDiv2(checked2);
  }

  useEffect(() => {
    console.log(selectedCollege);

    console.log(selectedWorkshops);

    if (selectedCollege === "Sona College Of Technology") {
      setShowHiddenDiv(false);
    } else {
      setShowHiddenDiv(true);
      setSelectedCollege(college);

    }
    setShowHiddenDiv2(checked2);
  }, [selectedCollege, checked2, selectedWorkshops]);

  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
  };

  const handleWorkshopChange = (event) => {
    setSelectedWorkshops(event.target.value);
  };

  const handleOptionChange4 = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedCollege == "Others") {
      setSelectedCollege(college);
    }

    const details = {
      name,
      selectedCollege,
      department,
      email,
      number,
      selectedEvents,
      selectedWorkshops,
      selectedYear,
    };

    const response = await fetch("threads/sendotp", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      let enteredotp = prompt("Please enter the otp:");
      let Enteredotp = Number(enteredotp);

      const otpVerificationResponse = await fetch("/threads/verifyotp", {
        method: "POST",
        body: JSON.stringify({ email: email, otp: Enteredotp }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (otpVerificationResponse.ok) {
        const registrationResponse = await fetch("/threads/register", {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (registrationResponse.ok) {
          alert("Registration successful!");
        } else {
          alert("Registration failed.");
        }
      } else {
        alert("Wrong otp entered");
      }
    } else {
      alert("email already exists");
    }
  };

  return (
    // <div>
    //   this is Register page
    //   <form className="create" onSubmit={handleSubmit}>
    //     <h3>Add a new form</h3>

    //     <label>Name:</label>
    //     <input
    //       type="text"
    //       onChange={(e) => setName(e.target.value)}
    //       value={name}
    //     />

    //     <label>department:</label>
    //     <input
    //       type="text"
    //       onChange={(e) => setDepartment(e.target.value)}
    //       value={department}
    //     />

    //     <label>college:</label>
    //     <input
    //       type="text"
    //       onChange={(e) => setCollege(e.target.value)}
    //       value={college}
    //     />

    //     <label>email:</label>
    //     <input
    //       type="email"
    //       onChange={(e) => setEmail(e.target.value)}
    //       value={email}
    //     />

    //     <button>Add detail</button>
    //     {error && <div className="error">{error}</div>}
    //   </form>
    // </div>

    <div className="register">
      <div className="nav">
        <Navbar />
      </div>

      <div className="hero1">
        <div className="Txt">
          <h1 className="topic">REGISTRATION</h1>
        </div>

        <div className="workshopsForm">
          <form
            action="#"
            id="workshopRegis"
            className="workshopRegis"
            onSubmit={handleSubmit}
          >
            <label htmlFor="canditateName">Name</label>
            <br />
            <input
              type="text"
              id="canditateName"
              className="inputBox"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <br />
            <p className="hint">
              Note: The details you enter will be reflected in your ID and
              certificates. So, kindly enter correct details
            </p>
            <br />

            <p className="label">College</p>
            <div className="radioBtn">
              <input
                type="radio"
                id="sct"
                name="Colleger"
                value="Sona College Of Technology"
                checked={selectedCollege === "Sona College Of Technology"}
                // checked={false}
                onClick={handleCollegeChange}
              />
              <label htmlFor="sct" className="workShopTxt" id="workShopTxtid">
                Sona College Of Technology
              </label>
              <br />
            </div>

            <div className="radioBtn">
              <input
                type="radio"
                id="others"
                name="Colleger"
                value="Others"
                checked={selectedCollege !== "Sona College Of Technology"}
                // onChange={handleOptionChange}
                onClick={handleCollegeChange}
              />
              <label htmlFor="others" className="workShopTxt">
                Others
              </label>
              <br />
            </div>
            <br />

            <div
              className="hiddenDiv"
              id="hiddenDiv"
              style={{ display: showHiddenDiv ? "block" : "none" }}
            >
              <label htmlFor="clgName">College Name</label>
              <input
                type="text"
                id="clgName"
                className="inputBox"
                onChange={(e) => setCollege(e.target.value)}
                value={college}
              />
            </div>

            <label>Participation</label>
            <br />
            <div className="radioBtn">
              <input
                type="checkbox"
                id="event"
                name="event"
                value="yes"
                checked={checked}
                onClick={revert}
              />
              <label htmlFor="event" className="workShopTxt">
                Event
              </label>
              <br />
            </div>

            <div className="radioBtn">
              <input
                type="checkbox"
                id="workshop"
                name="workshop"
                value="workshop"
                className="workselect"
                checked={checked2}
                onClick={revert2}
              />
              <label htmlFor="workshop" className="workShopTxt">
                Workshop
              </label>
              <br />
            </div>

            <div
              className="hiddenDiv1"
              id="hiddenDiv1"
              style={{ display: showHiddenDiv2 ? "block" : "none" }}
            >
              <br />
              <label>Workshop</label>
              <br />
              <div className="radioBtn">
                <input
                  type="radio"
                  id="rpa"
                  name="workshop1"
                  value="rpa"
                  checked={selectedWorkshops === "rpa"}
                  onChange={handleWorkshopChange}
                />
                <label htmlFor="rpa" className="workShopTxt">
                  Robotic Process Automation
                </label>
                <br />
              </div>

              <div className="radioBtn">
                <input
                  type="radio"
                  id="cyber"
                  name="workshop1"
                  value="cyber_security"
                  checked={selectedWorkshops === "cyber_security"}
                  onChange={handleWorkshopChange}
                />
                <label htmlFor="cyber" className="workShopTxt">
                  Cyber Security
                </label>
                <br />
              </div>

              <div className="radioBtn">
                <input
                  type="radio"
                  id="web"
                  name="workshop1"
                  value="web_development"
                  checked={selectedWorkshops === "web_development"}
                  onChange={handleWorkshopChange}
                />
                <label htmlFor="web" className="workShopTxt">
                  Web Development
                </label>
                <br />
              </div>
            </div>

            <br />
            <label htmlFor="dept" className="dept">
              Department
            </label>
            <br />
            <input
              type="text"
              required
              id="dept"
              className="inputBox"
              onChange={(e) => setDepartment(e.target.value)}
              value={department}
            />
            <br />
            <br />

            <p className="label">Year</p>
            <div className="Yrs">
              <div className="YrRadio">
                <input
                  type="radio"
                  id="firstYr"
                  name="year"
                  value="1"
                  checked={selectedYear === "1"}
                  onChange={handleOptionChange4}
                />
                <label htmlFor="firstYr" className="YrTxt">
                  I
                </label>
              </div>

              <div className="YrRadio">
                <input
                  type="radio"
                  id="secondYr"
                  name="year"
                  value="2"
                  checked={selectedYear === "2"}
                  onChange={handleOptionChange4}
                />
                <label htmlFor="secondYr" className="YrTxt">
                  II
                </label>
              </div>

              <div className="YrRadio">
                <input
                  type="radio"
                  id="thirdYr"
                  name="year"
                  value="3"
                  checked={selectedYear === "3"}
                  onChange={handleOptionChange4}
                />
                <label htmlFor="thirdYr" className="YrTxt">
                  III
                </label>
              </div>

              <div className="YrRadio1">
                <input
                  type="radio"
                  id="fourthYr"
                  name="year"
                  value="4"
                  checked={selectedYear === "4"}
                  onChange={handleOptionChange4}
                />
                <label htmlFor="fourthYr" className="YrTxt">
                  IV
                </label>
              </div>
            </div>

            <label htmlFor="contactNo">Contact Number</label>
            <br />
            <input
              type="tel"
              required
              id="contactNo"
              className="inputBox"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
            <br />
            <br />

            <label htmlFor="email">Email ID</label>
            <br />
            <input
              type="email"
              required
              id="email"
              className="inputBox"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <p className="hint">
              Note: If you are from Sona College, kindly enter your sonatech
              mail ID
            </p>
            <br />

            <br />
            <button className="submitBtn" id="nextBtn">
              NEXT
            </button>
            <br />
            <br />
          </form>
        </div>

        {/* <div className="transId" id="transIdDiv">
          <p className="hint">
            <p className="hint">
              Scan and pay through the QR Code or take a screenshot of the QR
              code and upload it in the UPI app to make the payment.
            </p>
            <br />
          </p>
          <div className="qrCodes">
            <img
              src="images\eventQr.png"
              alt=""
              className="qrImg qrImg1"
              id="qrImg1"
              style={{ display: "none" }}
            />
            <img
              src="images\workshopQr.png"
              alt=""
              className="qrImg qrImg2"
              id="qrImg2"
              style={{ display: "none" }}
            />
            <img
              src="images\event+workshopQr.png"
              alt=""
              className="qrImg"
              id="qrImg"
              style={{ display: "none" }}
            />
          </div>

          <ul className="points">
            <li>If you are using PhonePe, please enter your "UTR"</li>
            <li>
              If you are using PayTM, please enter your "UPI reference number"
            </li>
            <li>
              If you are using google pay, please enter your "Transaction ID"
            </li>
          </ul>

          <label htmlFor="transId">
            Transaction ID (12 digit) [Example : 3xxxxxxxxxxx]
          </label>
          <br />
          <input type="text" id="transId" className="inputBox" />
          <br />
          <br />
          <button className="submitBtn" id="submitBtn">
            Submit
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Register;
