// Code Keypad Component Here
function Keypad (){
    function handleChange(event) {
        console.log(`${event.target.placeholder}`)
    }
    return (
        <div>
            <input
            type = "password"
            onChange={handleChange}
            placeholder = "Entering password..."
            />
        </div>
    )
}