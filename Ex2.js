let arr=["7","0","0","0","2","3","4","3","2","2","4","7","2","2","1"];
var compt=0;
var max=0;
var result=0;


for (var i=0;i<15;i++){
    
    for(var j=0;j<15;j++){
        if(arr[i]==arr[j]){
            compt++;
            
        }
         if (compt>max){
             max=compt;
             result=arr[i];
             
         }

        
    }
    compt=0;
}
alert("\n c'est ca le plus représenté\n" + result);