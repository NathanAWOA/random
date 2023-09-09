const btnPDF = document.querySelector("#generate-pdf");

btnPDF.addEventListener("click", () => {
    
    const content = document.querySelector("#content");
    
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape"},
    };

    html2pdf().set(options).from(content).save();
    
    console.log("O PDF FOI GERADO");
});