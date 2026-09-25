function calculateGST() {

    let amount = Number(document.getElementById("amount").value);
    let gst = Number(document.getElementById("gstRate").value);
    let taxType = document.getElementById("taxType").value;

    let actualAmount;
    let gstAmount;
    let total;

    if (taxType === "inclusive") {
        total = amount
        gstAmount = amount * gst / (100 + gst);
        actualAmount = amount - gstAmount;
    } else {
        actualAmount = amount;
        gstAmount = amount * gst / 100;
        total = amount + gstAmount;
    }
    document.getElementById("actualAmount").innerText ="₹" + actualAmount.toFixed(0);
    document.getElementById("gstAmount").innerText ="₹" + gstAmount.toFixed(0);
    document.getElementById("totalAmount").innerText ="₹" + total.toFixed(0);
}
document.getElementById("amount").addEventListener("input", calculateGST);
document.getElementById("gstRate").addEventListener("change", calculateGST);
document.getElementById("taxType").addEventListener("change", calculateGST);