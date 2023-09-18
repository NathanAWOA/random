const editBtn = document.querySelector("#edit");
const generatePdfBtn = document.querySelector("#generate-pdf");
const backBtn = document.querySelector("#back");

generatePdfBtn.addEventListener("click", () => {
    
    const content = document.querySelector("#table-container");
    
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape"},
    };

    html2pdf().set(options).from(content).save();
    
    console.log("O PDF FOI GERADO");
});

function openForm() {
    const form001 = window.open("../pages/form001.html", "_self");
    form001.focus();
}

function backToFirstPage() {
    const firstPage = window.open("../index.html", "_self");
    firstPage.focus()
}

editBtn.addEventListener("click", () => {
    openForm();
})

backBtn.addEventListener("click", () => {
    backToFirstPage();
});

/*
IDEA

CREATE SOME FUNCTION CALLED DATA() TO GET THE TABLE DATAS AND TRY USE THAT TO MAKE THE PDF.

*/