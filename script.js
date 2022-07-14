var isViewSt=true;
$(document).ready(function() {
            $("#butViewMode").click(function() {
               
              isViewSt=!isViewSt;
              if(isViewSt){
                alert("st mode");
              }else{
                alert("satellite mode");
              }
            });
        });