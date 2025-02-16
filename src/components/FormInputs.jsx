

const FormInputs = () => {
  return (
    <div>
      <form>

        <label >CARDHOLDER NAME</label>
        <input 
            type="text" 
            id="cardholderName" 
            name="cardholderName" 
            placeholder="e.g. Jane Appleseed" 
        />

        <label>CARD NUMBER</label>
        <input 
            type="number"
            id="cardNumber"
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
        />
        <div className="dates-cvc">
            <div className="dates">

                <label>EXP. DATE (MM/YY)</label>
                <input 
                    type="number"
                    id="month-input"
                    name="month-input"
                    placeholder="MM"
                />
                <input 
                    type="number" 
                    id="year-input"
                    name="year-input"
                    placeholder="YY"
                />
            </div>
            <div className="cvc">
                <label>CVC</label>
                <input 
                    type="number"
                    id="cvc-input"
                    name="cvc-input"
                    placeholder="e.g. 123"
                />
            </div>
        </div>


          




        </form>
    </div>
  )
}

export default FormInputs
