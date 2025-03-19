const input=document.getElementById('inputDate')

function calculateAge(){
    const birthDate=new Date(input.value)     
      
     
    const year=birthDate.getFullYear()
    const month=birthDate.getMonth()+1
    const day=birthDate.getDate()    

    // Current Year
    const currentDate=new Date()
   
    const currentYear=currentDate.getFullYear()
    const currentMonth=currentDate.getMonth()+1
    const currentDay=currentDate.getDate()
     
    let age,month2,day2;

    age=currentYear-year
    console.log(age);
    
     
}
