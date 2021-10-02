

const Input=({registeredUser, setInputValue}) =>{
    const handleInput =e=>{
        setInputValue(registeredUser.value,e.target.value)
    }
    return (
        <>
          <input placeholder={registeredUser.value} type={registeredUser.type} onChange={handleInput}/>  
        </>
    )
}

export default Input
