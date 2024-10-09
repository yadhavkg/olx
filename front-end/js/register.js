

document.getElementById("form1").addEventListener("submit",async(e)=>{
    e.preventDefault();
    
    const name=document.getElementById("name").value
    const phone=document.getElementById("phone").value
    const email=document.getElementById("email").value
    const address1=document.getElementById("address1").value
    const address2=document.getElementById("address2").value
    const pincode=document.getElementById("pincode").value
    const password=document.getElementById("password").value
    const cpassword=document.getElementById("cpassword").value

    console.log(name,phone,email,address1,address2,pincode,password,cpassword);
    

})