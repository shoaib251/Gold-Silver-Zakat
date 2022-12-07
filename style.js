function glodcal(){
    let goldAmount = document.getElementById('goldValue').value;
    if (goldAmount >= 7.5 )
    {
        let goldZakat = goldAmount*120000 /40;
    document.getElementById('resultShow1').innerText=goldZakat;
    } else
    {
    document.getElementById('resultShow1').innerText = "zakat is not applicable";
    }
    }



    function silvercal(){
        let silverAmount = document.getElementById('silverValue').value;
        if (silverAmount >= 52.5 )
        {
            let silverZakat = silverAmount*1500 /40;
        document.getElementById('resultShow2').innerText=silverZakat;
        } else
        {
        document.getElementById('resultShow2').innerText = "zakat is not applicable";
        }
        }

        function amountrcal(){
            let amount = document.getElementById('cashValue').value;
            if (amount >= 78750 )
            {
                let amountZakat = amount /40;
            document.getElementById('resultShow3').innerText=amountZakat;
            } else
            {
            document.getElementById('resultShow3').innerText = "zakat is not applicable";
            }
            }