const myDetails = {
    identityDetails: {
        applicantName: "Naveen Pandey",
        guardianName: "NP",
        personalDetails: {
            gender: "Male",
            maritalStatus: "Unmarried",
            dateOfBirth: "1-Jan-1994"
        },
        nationalityDetails: {
            nationality: "Indian",
            status: "Resident"
        },
        identityProof: {
            pan: "CTUI3211O",
            aadharCardNumber: "987832148909"
        }
    },

    addressDetails: {
        residenceAddress: {
            lineOne: "5, Kalidas Marg",
            lineTwo: "Gulistan Colony",
            city: "Lucknow",
            state: "Uttar Pradesh",
            country: "India",
            pincode: "226001",
            landmark: " "
        },
        proofOfAddress: "Electricity bill",
        permanentAddress: {
            sameAsResidence: true,
            lineOne: "",
            lineTwo: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
            landmark: ""
        }
    },
    contactDetails: {
        mobile: "9988997755",
        telephoneRes: "0522324332",
        telephoneOffice: " ",
        email: "naveen@google.com"
    },

    otherDetails: {
        grossAnnualIncome: "Nil",
        occupation: "Service",
        anyOtherInfo: "working as Software Engineer"
    },

    applicantDeclaration: {
        statement: "All the info provided is correct",
        acceptanceStatus: "Accepted",
        date: "31-may-2024",
        place: "Lucknow"
    },

    forOfficeUse: {
        personWhoDidIPV: "Animesh Anand",
        designation: "Bank Manager",
        employeeId: "12345",
        date: "31-May-2024"
    }
}



function myKyc(myDetails) {
    // console.log("Address: ", address(myDetails))
    // console.log("Identity: ", identity(myDetails))
    // console.log("Contact: ", contact(myDetails))
    // console.log("OtherDetails: ", otherDetails(myDetails))
    // console.log("Applicant Declaration: ", applicantDeclaration(myDetails))
    // console.log("For Office Use Details: ", officeUseDetails(myDetails))
    return myDetails
}

function address(myDetails) {
    return myDetails.addressDetails;
}

function identity(myDetails) {
    return myDetails.identityDetails;
}

function contact(myDetails) {
    return myDetails.contactDetails
}

function officeUseDetails(myDetails) {
    return myDetails.forOfficeUse;
}

function otherDetails(myDetails) {
    return myDetails.otherDetails
}

function applicantDeclaration(myDetails) {
    return myDetails.applicantDeclaration
}


//console.log("Complete Kyc: ", myKyc(myDetails))

// function printKyc() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             resolve(myKyc(myDetails));
//         }, 3000)
//     });

// }


// printKyc().then( function(details) { 
//     console.log("KYC Details: ", details); 
// } )
//     .catch(function(error) { console.error("Error ", error); } )

function printKyc() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(myKyc(myDetails));
        }, 3000)
    });

}

async function displayKycDetails() {
    const details = await printKyc();
    console.log("Kyc Details: ", details);
}

displayKycDetails();
