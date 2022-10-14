let dom = {
    vehicleTaxPage: document.querySelector(".vehicle-tax-main"),
    tollTaxPage: document.querySelector(".toll-tax-main"),
    insurancePage: document.querySelector(".insurance-main"),
    technicalReviewPage: document.querySelector(".technical-review-main"),
    serviceBookPage: document.querySelector(".service-book-main"),
    modal: document.querySelector(".modal"),
    closeModal: document.querySelector(".close-modal"),
    docName: document.getElementById("doc-name"),
    docDate: document.getElementById("doc-date")
};

let domVehicleTax = {
    newVehicleTax: document.getElementById("new-vehicle-tax"),
    newFormVehicleTax: document.getElementById("form-new-vehicle-tax"),
    closeNewFormVehicleTax: document.querySelector(".close-new-form-vehicle-tax"),
    vehicleTaxesOutput: document.querySelector(".vehicle-taxes-output"),
    vehicleTaxDateF: document.getElementById("vehicle-tax-dateF"),
    vehicleTaxDateS: document.getElementById("vehicle-tax-dateS")
};

let domTollTax = {
    newTollTax: document.getElementById("new-toll-tax"),
    newFormTollTax: document.getElementById("form-new-toll-tax"),
    closeNewFormTollTax: document.querySelector(".close-new-form-toll-tax"),
    tollTaxesOutput: document.querySelector(".toll-taxes-output"),
    tollTaxDateF: document.getElementById("toll-tax-dateF"),
    tollTaxDateS: document.getElementById("toll-tax-dateS")
};

let domInsurance = {
    newInsurance: document.getElementById("new-insurance"),
    newFormInsurance: document.getElementById("form-new-insurance"),
    closeNewFormInsurance: document.querySelector(".close-new-form-insurance"),
    insuranceOutput: document.querySelector(".insurance-output"),
    insuranceDateF: document.getElementById("insurance-dateF"),
    insuranceDateS: document.getElementById("insurance-dateS")
};

let domTechnicalReview = {
    newTechnicalReview: document.getElementById("new-technical-review"),
    newFormTechnicalReview: document.getElementById("form-new-technical-review"),
    closeNewFormTechnicalReview: document.querySelector(".close-new-form-technical-review"),
    technicalReviewOutput: document.querySelector(".technical-review-output"),
    technicalReviewDateF: document.getElementById("technical-review-dateF"),
    technicalReviewDateS: document.getElementById("technical-review-dateS")
};

let domServiceBook = {
    newServiceBook: document.getElementById("new-service-book"),
    newFormServiceBook: document.getElementById("form-new-service-book"),
    closeNewFormServiceBook: document.querySelector(".close-new-form-service-book"),
    serviceBookOutput: document.querySelector(".service-book-output"),
    serviceBookKm: document.getElementById("service-book-km"),
    serviceBookPart: document.getElementById("service-book-part"),
    serviceBookDate: document.getElementById("service-book-date")
};

/*------------------------------------------------------------------------------*/

function showVehicleTax() {
    dom.tollTaxPage.style.display = "none";
    dom.vehicleTaxPage.style.display = "block";
    dom.insurancePage.style.display = "none";
    dom.technicalReviewPage.style.display = "none";
    dom.serviceBookPage.style.display = "none";
};

function showTollTax() {
    dom.tollTaxPage.style.display = "block";
    dom.vehicleTaxPage.style.display = "none";
    dom.insurancePage.style.display = "none";
    dom.technicalReviewPage.style.display = "none";
    dom.serviceBookPage.style.display = "none";
};

function showInsurance() {
    dom.tollTaxPage.style.display = "none";
    dom.vehicleTaxPage.style.display = "none";
    dom.insurancePage.style.display = "block";
    dom.technicalReviewPage.style.display = "none";
    dom.serviceBookPage.style.display = "none";
};

function showTechnicalReview() {
    dom.technicalReviewPage.style.display = "block";
    dom.tollTaxPage.style.display = "none";
    dom.vehicleTaxPage.style.display = "none";
    dom.insurancePage.style.display = "none";
    dom.serviceBookPage.style.display = "none";
};

function showServiceBook() {
    dom.technicalReviewPage.style.display = "none";
    dom.tollTaxPage.style.display = "none";
    dom.vehicleTaxPage.style.display = "none";
    dom.insurancePage.style.display = "none";
    dom.serviceBookPage.style.display = "block";
};

let today = new Date().getDate();
let one = new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000)).getDate();
let two = new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000)).getDate();
let three = new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)).getDate();
let four = new Date(new Date().getTime() + (4 * 24 * 60 * 60 * 1000)).getDate();
today = addZero(today);
one = addZero(one);
two = addZero(two);
three = addZero(three);
four = addZero(four);
let y = new Date().getFullYear();
let thisDay = `${today}.${addZero(new Date().getMonth() + 1)}.${y}`;
let tomorrow = `${one}.${addZero(new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000)).getMonth() + 1)}.${y}`;
let afterTwoDays = `${two}.${addZero(new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000)).getMonth() + 1)}.${y}`;
let afterThreeDays = `${three}.${addZero(new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)).getMonth() + 1)}.${y}`;
let afterFourDays = `${four}.${addZero(new Date(new Date().getTime() + (4 * 24 * 60 * 60 * 1000)).getMonth() + 1)}.${y}`;

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};

/*-------------------------------------------------VEHICLE TAX------------------------------------------------------*/

domVehicleTax.newVehicleTax.addEventListener("click", () => {
    domVehicleTax.newFormVehicleTax.style.display = "block";
});

domVehicleTax.closeNewFormVehicleTax.addEventListener("click", () => {
    domVehicleTax.newFormVehicleTax.style.display = "none";
});

let vehicleTaxDocs = [];

function displayVehicleTax(vehicleTaxDocs) {
    let divVehicleTax = "";
    vehicleTaxDocs.forEach(doc => {
        divVehicleTax += `
        <div class="docs">
            <div class="div">
                <h3>Дата:</h3>
                <h3>${doc.from}</h3>
            </div>
            <div class="div">
                <h3>Срок за плащане:</h3>
                <h3>${doc.until}</h3>
            </div>
            <div class="div">
                <img onclick="deleteVehicleTax(${doc.id})" src="css-js/cross.png">
            </div>
        </div>
        `
        domVehicleTax.vehicleTaxesOutput.innerHTML = divVehicleTax;
    })
};

function getVehicleTax() {
    fetch("http://localhost:3000/vehicle_tax")
        .then((res) => res.json())
        .then(data => {
            vehicleTaxDocs = [...data];
            if (vehicleTaxDocs[0] === undefined) {
                domVehicleTax.vehicleTaxesOutput.style.display = "none";
            } else {
                domVehicleTax.vehicleTaxesOutput.style.display = "block";
            }
            for (let i = 0; i < vehicleTaxDocs.length; i++) {
                if (vehicleTaxDocs[i].until === thisDay
                    || vehicleTaxDocs[i].until === tomorrow
                    || vehicleTaxDocs[i].until === afterTwoDays
                    || vehicleTaxDocs[i].until === afterThreeDays
                    || vehicleTaxDocs[i].until === afterFourDays) {
                    dom.docName.innerHTML = vehicleTaxDocs[i].doc;
                    dom.docDate.innerHTML = vehicleTaxDocs[i].until
                    dom.modal.style.display = "block"
                }
            };
            displayVehicleTax(vehicleTaxDocs);
        });
};

function addNewVehicleTax(e) {
    e.preventDefault();
    let dateSplitVehicleTaxF = domVehicleTax.vehicleTaxDateF.value.split("-");
    let dateSplitVehicleTaxS = domVehicleTax.vehicleTaxDateS.value.split("-");
    let vehicleTaxDateFormatF = `${dateSplitVehicleTaxF[2]}.${dateSplitVehicleTaxF[1]}.${dateSplitVehicleTaxF[0]}`;
    let vehicleTaxDateFormatS = `${dateSplitVehicleTaxS[2]}.${dateSplitVehicleTaxS[1]}.${dateSplitVehicleTaxS[0]}`;
    const newVehicleTax = {
        from: vehicleTaxDateFormatF,
        until: vehicleTaxDateFormatS,
        doc: "Данък МПС"
    };
    fetch("http://localhost:3000/vehicle_tax", {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newVehicleTax)
    })
        .then(data => {
            vehicleTaxDocs = [...vehicleTaxDocs, data]
            displayVehicleTax(vehicleTaxDocs);
            getVehicleTax();
        })
    domVehicleTax.vehicleTaxDateF.value = "";
    domVehicleTax.vehicleTaxDateS.value = "";
    domVehicleTax.newFormVehicleTax.style.display = "none";
};

function deleteVehicleTax(id) {
    fetch(`http://localhost:3000/vehicle_tax/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            displayVehicleTax(vehicleTaxDocs);
            getVehicleTax();
        })
};

/*----------------------------------------------------TOLL TAX-----------------------------------------------------*/

domTollTax.newTollTax.addEventListener("click", () => {
    domTollTax.newFormTollTax.style.display = "block";
});

domTollTax.closeNewFormTollTax.addEventListener("click", () => {
    domTollTax.newFormTollTax.style.display = "none";
});

let tollTaxDocs = [];

function displayTollTax(tollTaxDocs) {
    let divTollTax = "";
    tollTaxDocs.forEach(doc => {
        divTollTax += `
        <div class="docs">
            <div class="div">
                <h3>Валидна от:</h3>
                <h3>${doc.from}</h3>
            </div>
            <div class="div">
                <h3>Валидна до:</h3>
                <h3>${doc.until}</h3>
            </div>
            <div class="div">
                <img onclick="deleteTollTax(${doc.id})" src="css-js/cross.png">
            </div>
        </div>
        `
        domTollTax.tollTaxesOutput.innerHTML = divTollTax;
    })
};

function getTollTax() {
    fetch("http://localhost:3000/toll_tax")
        .then((res) => res.json())
        .then(data => {
            tollTaxDocs = [...data];
            if (tollTaxDocs[0] === undefined) {
                domTollTax.tollTaxesOutput.style.display = "none";
            } else {
                domTollTax.tollTaxesOutput.style.display = "block";
            }
            for (let i = 0; i < tollTaxDocs.length; i++) {
                if (tollTaxDocs[i].until === thisDay
                    || tollTaxDocs[i].until === tomorrow
                    || tollTaxDocs[i].until === afterTwoDays
                    || tollTaxDocs[i].until === afterThreeDays
                    || tollTaxDocs[i].until === afterFourDays) {
                    dom.docName.innerHTML = tollTaxDocs[i].doc;
                    dom.docDate.innerHTML = tollTaxDocs[i].until
                    dom.modal.style.display = "block"
                }
            };
            displayTollTax(tollTaxDocs);
        });
};

function addNewTolltax(e) {
    e.preventDefault();
    let dateSplitTollTaxF = domTollTax.tollTaxDateF.value.split("-");
    let dateSplitTollTaxS = domTollTax.tollTaxDateS.value.split("-");
    let tollTaxDateFormatF = `${dateSplitTollTaxF[2]}.${dateSplitTollTaxF[1]}.${dateSplitTollTaxF[0]}`;
    let tollTaxDateFormatS = `${dateSplitTollTaxS[2]}.${dateSplitTollTaxS[1]}.${dateSplitTollTaxS[0]}`;
    const newTollTax = {
        from: tollTaxDateFormatF,
        until: tollTaxDateFormatS,
        doc: "Винетка"
    };
    fetch("http://localhost:3000/toll_tax", {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newTollTax)
    })
        .then(data => {
            tollTaxDocs = [...tollTaxDocs, data]
            displayTollTax(tollTaxDocs);
            getTollTax();
        })
    domTollTax.tollTaxDateF.value = "";
    domTollTax.tollTaxDateS.value = "";
    domTollTax.newFormTollTax.style.display = "none";
};

function deleteTollTax(id) {
    fetch(`http://localhost:3000/toll_tax/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            displayTollTax(tollTaxDocs);
            getTollTax();
        })
};

/*-----------------------------------------------------INSURANCE----------------------------------------------*/

domInsurance.newInsurance.addEventListener("click", () => {
    domInsurance.newFormInsurance.style.display = "block";
});

domInsurance.closeNewFormInsurance.addEventListener("click", () => {
    domInsurance.newFormInsurance.style.display = "none";
});

let insuranceDocs = [];

function displayInsurance(insuranceDocs) {
    let divInsurance = "";
    insuranceDocs.forEach(doc => {
        divInsurance += `
        <div class="docs">
            <div class="div">
                <h3>Валидна от:</h3>
                <h3>${doc.from}</h3>
            </div>
            <div class="div">
                <h3>Валидна до:</h3>
                <h3>${doc.until}</h3>
            </div>
            <div class="div">
                <img onclick="deleteInsurance(${doc.id})" src="css-js/cross.png">
            </div>
        </div>
        `
        domInsurance.insuranceOutput.innerHTML = divInsurance;
    })
};

function getInsurance() {
    fetch("http://localhost:3000/insurance")
        .then((res) => res.json())
        .then(data => {
            insuranceDocs = [...data];
            if (insuranceDocs[0] === undefined) {
                domInsurance.insuranceOutput.style.display = "none";
            } else {
                domInsurance.insuranceOutput.style.display = "block";
            }
            for (let i = 0; i < insuranceDocs.length; i++) {
                if (insuranceDocs[i].until === thisDay
                    || insuranceDocs[i].until === tomorrow
                    || insuranceDocs[i].until === afterTwoDays
                    || insuranceDocs[i].until === afterThreeDays
                    || insuranceDocs[i].until === afterFourDays) {
                    dom.docName.innerHTML = insuranceDocs[i].doc;
                    dom.docDate.innerHTML = insuranceDocs[i].until
                    dom.modal.style.display = "block"
                }
            };
            displayInsurance(insuranceDocs);
        });
};

function addNewInsurance(e) {
    e.preventDefault();
    let dateSplitInsuranceF = domInsurance.insuranceDateF.value.split("-");
    let dateSplitInsuranceS = domInsurance.insuranceDateS.value.split("-");
    let insuranceDateFormatF = `${dateSplitInsuranceF[2]}.${dateSplitInsuranceF[1]}.${dateSplitInsuranceF[0]}`;
    let insuranceDateFormatS = `${dateSplitInsuranceS[2]}.${dateSplitInsuranceS[1]}.${dateSplitInsuranceS[0]}`;
    const newInsurance = {
        from: insuranceDateFormatF,
        until: insuranceDateFormatS,
        doc: "Застраховка"
    };
    fetch("http://localhost:3000/insurance", {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newInsurance)
    })
        .then(data => {
            insuranceDocs = [...insuranceDocs, data]
            displayInsurance(insuranceDocs);
            getInsurance();
        })
    domInsurance.insuranceDateF.value = "";
    domInsurance.insuranceDateS.value = "";
    domInsurance.newFormInsurance.style.display = "none";
};

function deleteInsurance(id) {
    fetch(`http://localhost:3000/insurance/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            displayInsurance(insuranceDocs);
            getInsurance();
        })
};

/*----------------------------------------------TECHNICAL REVIEW-----------------------------------------------*/

domTechnicalReview.newTechnicalReview.addEventListener("click", () => {
    domTechnicalReview.newFormTechnicalReview.style.display = "block";
});

domTechnicalReview.closeNewFormTechnicalReview.addEventListener("click", () => {
    domTechnicalReview.newFormTechnicalReview.style.display = "none";
});

let technicalReviewDocs = [];

function displayTechnicalReview(technicalReviewDocs) {
    let divTechnicalReview = "";
    technicalReviewDocs.forEach(doc => {
        divTechnicalReview += `
        <div class="docs">
            <div class="div">
                <h3>Прегледът е извършен на:</h3>
                <h3>${doc.from}</h3>
            </div>
            <div class="div">
                <h3>Подлежи на преглед до:</h3>
                <h3>${doc.until}</h3>
            </div>
            <div class="div">
                <img onclick="deleteTechnicalReview(${doc.id})" src="css-js/cross.png">
            </div>
        </div>
        `
        domTechnicalReview.technicalReviewOutput.innerHTML = divTechnicalReview;
    })
};

function getTechnicalReview() {
    fetch("http://localhost:3000/technical_review")
        .then((res) => res.json())
        .then(data => {
            technicalReviewDocs = [...data];
            if (technicalReviewDocs[0] === undefined) {
                domTechnicalReview.technicalReviewOutput.style.display = "none";
            } else {
                domTechnicalReview.technicalReviewOutput.style.display = "block";
            }
            for (let i = 0; i < technicalReviewDocs.length; i++) {
                if (technicalReviewDocs[i].until === thisDay
                    || technicalReviewDocs[i].until === tomorrow
                    || technicalReviewDocs[i].until === afterTwoDays
                    || technicalReviewDocs[i].until === afterThreeDays
                    || technicalReviewDocs[i].until === afterFourDays) {
                    dom.docName.innerHTML = technicalReviewDocs[i].doc;
                    dom.docDate.innerHTML = technicalReviewDocs[i].until
                    dom.modal.style.display = "block"
                }
            };
            displayTechnicalReview(technicalReviewDocs);
        });
};

function addNewTechnicalReview(e) {
    e.preventDefault();
    let dateSplitTechnicalReviewF = domTechnicalReview.technicalReviewDateF.value.split("-");
    let dateSplitTechnicalReviewS = domTechnicalReview.technicalReviewDateS.value.split("-");
    let technicalReviewDateFormatF = `${dateSplitTechnicalReviewF[2]}.${dateSplitTechnicalReviewF[1]}.${dateSplitTechnicalReviewF[0]}`;
    let technicalReviewDateFormatS = `${dateSplitTechnicalReviewS[2]}.${dateSplitTechnicalReviewS[1]}.${dateSplitTechnicalReviewS[0]}`;
    const newTechnicalReview = {
        from: technicalReviewDateFormatF,
        until: technicalReviewDateFormatS,
        doc: "Преглед"
    };
    fetch("http://localhost:3000/technical_review", {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newTechnicalReview)
    })
        .then(data => {
            technicalReviewDocs = [...technicalReviewDocs, data]
            displayTechnicalReview(technicalReviewDocs);
            getTechnicalReview();
        })
    domTechnicalReview.technicalReviewDateF.value = "";
    domTechnicalReview.technicalReviewDateS.value = "";
    domTechnicalReview.newFormTechnicalReview.style.display = "none";
};

function deleteTechnicalReview(id) {
    fetch(`http://localhost:3000/technical_review/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            displayTechnicalReview(technicalReviewDocs);
            getTechnicalReview();
        })
};

/*------------------------------------------------SERVICE BOOK-------------------------------------------------*/

domServiceBook.newServiceBook.addEventListener("click", () => {
    domServiceBook.newFormServiceBook.style.display = "block";
});

domServiceBook.closeNewFormServiceBook.addEventListener("click", () => {
    domServiceBook.newFormServiceBook.style.display = "none";
});

let serviceBookDocs = [];

function displayServiceBook(serviceBookDocs) {
    let divServiceBook = "";
    serviceBookDocs.forEach(doc => {
        divServiceBook += `
        <div class="docs">
            <div class="div">
                <h3>Пробег:</h3>
                <h3>${doc.km}</h3>
            </div>
            <div class="div">
                <h3>Сменен детайл:</h3>
                <h3>${doc.part}</h3>
            </div>
            <div class="div">
                <h3>Дата:</h3>
                <h3>${doc.date}</h3>
            </div>
            <div class="div">
                <img onclick="deleteServiceBook(${doc.id})" src="css-js/cross.png">
            </div>
        </div>
        `
        domServiceBook.serviceBookOutput.innerHTML = divServiceBook;
    })
};

function getServiceBook() {
    fetch("http://localhost:3000/service_book")
        .then((res) => res.json())
        .then(data => {
            serviceBookDocs = [...data];
            if (serviceBookDocs[0] === undefined) {
                domServiceBook.serviceBookOutput.style.display = "none";
            } else {
                domServiceBook.serviceBookOutput.style.display = "block";
            }
            displayServiceBook(serviceBookDocs);
        });
};

function addNewServiceBook(e) {
    e.preventDefault();
    let dateSplitServiceBook = domServiceBook.serviceBookDate.value.split("-");
    let serviceBookDateFormat = `${dateSplitServiceBook[2]}.${dateSplitServiceBook[1]}.${dateSplitServiceBook[0]}`;
    const newServiceBook = {
        km: domServiceBook.serviceBookKm.value,
        part: domServiceBook.serviceBookPart.value,
        date: serviceBookDateFormat
    };
    fetch("http://localhost:3000/service_book", {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newServiceBook)
    })
        .then(data => {
            serviceBookDocs = [...serviceBookDocs, data]
            displayServiceBook(serviceBookDocs);
            getServiceBook();
        })
    domServiceBook.serviceBookKm.value = "";
    domServiceBook.serviceBookPart.value = "";
    domServiceBook.serviceBookDate.value = "";
    domServiceBook.newFormServiceBook.style.display = "none";
};

function deleteServiceBook(id) {
    fetch(`http://localhost:3000/service_book/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            displayServiceBook(serviceBookDocs);
            getServiceBook();
        })
};

dom.closeModal.addEventListener("click", () => {
    dom.modal.style.display = "none";
});

window.onload = () => {
    getVehicleTax();
    getTollTax();
    getInsurance();
    getTechnicalReview();
    getServiceBook();
};

