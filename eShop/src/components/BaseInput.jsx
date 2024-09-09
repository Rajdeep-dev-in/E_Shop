

function BaseInput({placeholder, type, onChange, value, className}){
    return(
        <>
            <input 
                type={type}
                value={value}
                className={`${className} outline-none `}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    )
}

export default BaseInput;