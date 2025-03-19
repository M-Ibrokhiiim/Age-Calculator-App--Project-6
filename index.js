// const input=document.getElementById('inputDate')
const input=document.getElementById('inputDate')
const resultSection=document.getElementById('result-section-pId')
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
    month2=currentMonth-month
    day2=currentDay-day

    if(input.value===''){
        alert('Please')
        return
    }else if(month2<0){
        age--
        month2+=12
    }
    
  resultSection.textContent=`You are ${age} years,${month2} months and ${day2} days old`    
}
