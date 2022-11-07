//var MIR = ($('#interest').value)/12;
//console.log(MIR)
/*
var x;
var monthlyPayment;
var IPPM;
var principalPerMonth;
var balance = ("loan amount").val;

for (i = 0; i < $('#term').val(); i++) {
    for (j = 1; j <= 12; j++) {
        x += (MIR)/Math.pow((1-(1+MIR),(-j)));;   
    }
    
    monthlyPayment = ($('#interest').val() * MIR)/ x 
                                                    //(MIR)/Math.pow((1-(1+MIR),(-𝑛𝑢𝑚𝑏𝑒𝑟 𝑜𝑓 𝑚𝑜𝑛𝑡ℎ)));
    balance -= monthlyPayment;
    IPPM = balance * MIR;
    principalPerMonth = monthlyPayment - IPPM;

    console.log("monthlyPayement: " +monthlyPayment);
    console.log("x: "+ x);
    console.log("balance: " +balance);
    console.log("IPPM: " +IPPM);
    console.log("principalPerMonth: " +principalPerMonth);
}
*/

var x = 0;
                var monthlyPayment = 0;
                var IPPM = 0;
                var principalPerMonth = 0;
                var balance = $('#loanAmount').val;
                console.log("Loan Amount intiialized to: " + balance);

                for (i = 0; i < parseFloat($('#term').val()); i++) {
                    for (j = 1; j <= 12; j++) {
                        x += (MIR) / Math.pow((1 - (1 + MIR), (-j)));;
                    }

                    monthlyPayment = (parseFloat($('#interest').val()) * MIR) / x
                    //(MIR)/Math.pow((1-(1+MIR),(-𝑛𝑢𝑚𝑏𝑒𝑟 𝑜𝑓 𝑚𝑜𝑛𝑡ℎ)));
                    balance -= monthlyPayment;
                    IPPM = balance * MIR;
                    principalPerMonth = monthlyPayment - IPPM;

                    console.log("monthlyPayement: " + monthlyPayment);
                    console.log("x: " + x);
                    console.log("balance: " + balance);
                    console.log("IPPM: " + IPPM);
                    console.log("principalPerMonth: " + principalPerMonth);
                }