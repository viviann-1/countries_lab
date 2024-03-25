const Country = ({country}) => {
    const countries = countries.name.filter().map(name=>{
        return <li key={name.id}>{name}</li>
    })


    return (
        <>

        <ul>
            {countries}
        </ul>

        
        </>
    )
    
}  

export default Country;