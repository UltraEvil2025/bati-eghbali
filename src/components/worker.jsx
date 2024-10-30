function Worker(props)
{
   const {id,nname,role,age,address}=props;
    return (<div className="workerClass">
        <h2>Name:{nname}</h2>
        <h3>Id:{id}</h3>
        <h3>Role:{role}</h3>
        
        {age>18?
            <div><h3>Age:{age}</h3></div>:
            <div><h3>"young"</h3></div>
        }
           {
            address&&
            <div>
                <h4>city:{address.city}</h4>
                <h4>street;{address.street}</h4>
            </div>
        }
    </div>)
}

export default Worker