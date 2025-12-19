export const validate = (email,password,name) => {
    const isName =  /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(name);
    const isvalidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isvalidPassword =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    if(!isName) return "Your Name is not valid"
    if(!isvalidEmail) return "Email ID is not valid";
    if(!isvalidPassword) return "Password is not valid";
    return null;
}