const EmailCheck=(email)=>{
   return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}
const PasswordCheck=(password)=>{
   return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}
export {EmailCheck,PasswordCheck}