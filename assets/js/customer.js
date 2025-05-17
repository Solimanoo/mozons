function updateStyle(){
    const targetdate = new Date (2025, 7, 1);
const now = new Date();

  if(now >= targetdate){
      document.body.style.backgroundColor="black";
    document.body.style.opacity=0.1;
    }}
updateStyle();