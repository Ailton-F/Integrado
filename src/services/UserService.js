export const cad = async (e)=>{
    e.preventDefault();
    
    const reqOpt = {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        })
    }

    let req = await fetch('http://127.0.0.1:8000/api/users/', reqOpt)
    let res = await req.json()
    console.log()
}