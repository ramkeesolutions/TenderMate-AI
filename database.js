/*
 * TenderMate AI - Business Database
 *
 * This file defines the structure of information
 * that TenderMate will store and retrieve.
 */

const TenderMateDB = {

    /*
     * TENDER
     */
    tenders: [],

    /*
     * DOCUMENT LIBRARY
     */
    documents: [],

    /*
     * WORK ORDERS / PURCHASE ORDERS
     */
    workOrders: [],

    /*
     * DELIVERY CHALLANS
     */
    deliveryChallans: [],

    /*
     * BILLS
     */
    bills: [],

    /*
     * LETTERS
     */
    letters: [],

    /*
     * RATE / COST RECORDS
     */
    rates: []
};


/*
 * TENDER RECORD STRUCTURE
 *
 * GeM and Department ATC are kept separately.
 * If there is a conflict, Department ATC is the
 * applicable condition for TenderMate's analysis.
 */

function createTenderRecord() {

    return {

        id: "",
        tenderNumber: "",
        title: "",

        sourceDocuments: {
            gemDocument: "",
            departmentATC: ""
        },

        basicInformation: {
            department: "",
            office: "",
            division: "",
            buyer: "",
            buyerAddress: "",
            tenderDate: "",
            bidClosingDate: "",
            bidOpeningDate: "",
            bidValidity: "",
            status: "Open"
        },

        quantity: {
            total: 0,
            unit: "Plants",
            clone: "",
            species: "",
            locations: []
        },

        gemConditions: {

            estimatedValue: "",
            emd: "",
            epbg: "",
            bidderTurnover: "",
            experience: "",
            mseRelaxation: "",
            startupRelaxation: "",
            payment: "",
            deliveryPeriod: "",
            contractPeriod: "",
            evaluationMethod: "",
            reverseAuction: ""
        },

        departmentATC: {

            eligibility: [],
            turnover: "",
            experience: "",
            emd: "",
            securityDeposit: "",
            payment: "",
            deliveryPeriod: "",
            contractPeriod: "",
            geneticTesting: "",
            testingAgency: "",
            testingCost: "",
            technicalSpecifications: [],
            specialConditions: []
        },

        finalApplicableConditions: {

            eligibility: [],
            turnover: "",
            experience: "",
            emd: "",
            securityDeposit: "",
            payment: "",
            deliveryPeriod: "",
            contractPeriod: "",
            geneticTesting: "",
            technicalSpecifications: [],
            specialConditions: []
        },

        requiredDocuments: [],

        importantDates: [],

        notes: "",

        originalFiles: [],

        createdDate: "",
        lastUpdated: ""
    };
}


/*
 * DOCUMENT RECORD
 */

function createDocumentRecord() {

    return {

        id: "",
        documentName: "",
        category: "",
        documentNumber: "",
        issueDate: "",
        expiryDate: "",
        issuingAuthority: "",
        fileName: "",
        fileReference: "",
        notes: "",
        createdDate: ""
    };
}


/*
 * WORK ORDER RECORD
 */

function createWorkOrderRecord() {

    return {

        id: "",
        workOrderNumber: "",
        date: "",
        buyer: "",
        buyerAddress: "",
        tenderNumber: "",
        quantity: 0,
        unit: "",
        clone: "",
        rate: 0,
        totalValue: 0,
        deliveryLocations: [],
        deliveryPeriod: "",
        status: "",
        fileReference: "",
        notes: ""
    };
}


/*
 * DELIVERY CHALLAN RECORD
 */

function createDCRecord() {

    return {

        id: "",
        dcNumber: "",
        date: "",
        workOrderNumber: "",
        buyer: "",
        buyerAddress: "",
        vehicleNumber: "",
        driverName: "",
        material: "",
        clone: "",
        quantity: 0,
        deliveryLocation: "",
        transporter: "",
        notes: ""
    };
}


/*
 * BILL RECORD
 */

function createBillRecord() {

    return {

        id: "",
        billNumber: "",
        date: "",
        workOrderNumber: "",
        buyer: "",
        buyerAddress: "",
        quantity: 0,
        rate: 0,
        taxableValue: 0,
        gstRate: 0,
        gstAmount: 0,
        totalAmount: 0,
        status: "",
        notes: ""
    };
}


/*
 * LETTER RECORD
 */

function createLetterRecord() {

    return {

        id: "",
        date: "",
        letterType: "",
        tenderNumber: "",
        workOrderNumber: "",
        recipient: "",
        subject: "",
        content: "",
        fileReference: ""
    };
}


/*
 * RATE RECORD
 */

function createRateRecord() {

    return {

        id: "",
        tenderNumber: "",
        quantity: 0,
        plantCost: 0,
        transportation: 0,
        labour: 0,
        testingCost: 0,
        packingCost: 0,
        otherCost: 0,
        totalCostPerUnit: 0,
        profitPerUnit: 0,
        quotationRate: 0,
        totalQuotationValue: 0,
        notes: ""
    };
}


/*
 * STORAGE FUNCTIONS
 *
 * These will later be replaced with a stronger
 * local database when we move beyond the prototype.
 */

function saveTenderMateData() {

    localStorage.setItem(
        "TenderMateDB",
        JSON.stringify(TenderMateDB)
    );
}


function loadTenderMateData() {

    const saved = localStorage.getItem("TenderMateDB");

    if (!saved) {
        return;
    }

    const data = JSON.parse(saved);

    Object.assign(TenderMateDB, data);
}


/*
 * Create a new unique ID.
 */

function generateID(prefix) {

    return prefix + "_" +
        Date.now().toString(36) +
        "_" +
        Math.random().toString(36)
            .substring(2, 7);
}


/*
 * Initialise database.
 */

loadTenderMateData();

console.log("TenderMate AI database loaded.");
