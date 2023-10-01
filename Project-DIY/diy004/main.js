const editBtn = document.querySelector("#edit");
const generatePdfBtn = document.querySelector("#generate-pdf");
const backBtn = document.querySelector("#back");

generatePdfBtn.addEventListener("click", () => {
    
    const content = document.querySelector("#inputs-container");
    
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
    const form001 = window.open("./pages/form001.html", "_self");
    form001.focus()
}

editBtn.addEventListener("click", () => {
    openForm();
});

let manha = document.querySelector("#manha");

function openMorningTable() {
    const morningTable = window.open("./pages/manha.html", "_self");
    morningTable.focus()        
}

manha.addEventListener("click", () => {
    openMorningTable();
})