function start(){
    with(document){
        let l1 = String(getElementById('left_1').value);
        let l2 = String(getElementById('left_2').value);
        let l3 = String(getElementById('left_3').value);
        let l4 = String(getElementById('left_4').value);
        let l5 = String(getElementById('left_5').value);
        let l6 = String(getElementById('left_6').value);
        let l7 = String(getElementById('left_7').value);
        let l8 = String(getElementById('left_8').value);
        let l9 = String(getElementById('left_9').value);
        let l10 = String(getElementById('left_10').value);
        let l11= String(getElementById('left_11').value);

        let result = 0;
        let quality;

        if(l1  =='yerevan'){
            result+=2
            getElementById('left_1').style.backgroundColor='green'
        }else{
            getElementById('left_1').style.backgroundColor='red'
        }
    
        if(l2  =='Washigton'){
            result+=2
            getElementById('left_2').style.backgroundColor='green'
        }else{
            getElementById('left_2').style.backgroundColor='red'
        }      

        if(l3  =='Tokyo'){
            result+=2
            getElementById('left_3').style.backgroundColor='green'
        }else{
            getElementById('left_3').style.backgroundColor='red'
        }      

        if(l4  =='Ankara'){
            result+=2
            getElementById('left_4').style.backgroundColor='green'
        }else{
            getElementById('left_4').style.backgroundColor='red'
        }      

        if(l5 =='London'){
            result+=2
            getElementById('left_5').style.backgroundColor='green'
        }else{
            getElementById('left_5').style.backgroundColor='red'
        }      

        if(l6 =='Madrid'){
            result+=2
            getElementById('left_6').style.backgroundColor='green'
        }else{
            getElementById('left_6').style.backgroundColor='red'
        }      

        if(l7  =='Kyiv'){
            result+=2
            getElementById('left_7').style.backgroundColor='green'
        }else{
            getElementById('left_7').style.backgroundColor='red'
        }      

        if(l8  =='Paris'){
            result+=2
            getElementById('left_8').style.backgroundColor='green'
        }else{
            getElementById('left_8').style.backgroundColor='red'
        }      

        if(l9 =='Ottawa'){
            result+=2
            getElementById('left_9').style.backgroundColor='green'
        }else{
            getElementById('left_9').style.backgroundColor='red'
        }      

        if(l10  =='Mexico'){
            result+=2
            getElementById('left_10').style.backgroundColor='green'
        }else{
            getElementById('left_10').style.backgroundColor='red'
        }      

        if(l11  =='Berlin'){
            result+=2
            getElementById('left_11').style.backgroundColor='green'
        }else{
            getElementById('left_11').style.backgroundColor='red'
        }      
    



if(result<=6){
    quality = 'anbavarar'
    getElementById('ansewer').style.backgroundColor='gold'
    getElementById('quality').style.backgrondColor = 'gold'
}

getElementById('answer').innerHTML = result
getElementById('quality').innerHTML = quality

    }
} 

