const GenderCheck = () => {
    return (
    <div className='flex '>
            
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Male</span> 
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Female</span> 
                    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                </label>
            </div>
    </div>
    
    )
}

export default GenderCheck
