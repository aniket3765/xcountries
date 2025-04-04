import { useEffect, useState } from "react";

const apiEndPoint = "https://xcountries-backend.azurewebsites.net/all";
const Card = ({ name, flag }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '100px',
        borderRadius: '8px',
        border: '1px solid black',
        padding: '10px',
      }}
    >
      <img src={flag} alt={`Flag of ${name}`} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
      <h2 style={{ fontSize: '14px', textAlign: 'center' }}>{name}</h2>
    </div>
  );
};

const Countries = () => {

    const [flags, setFlags] = useState([])
  
    useEffect(()=>{
        const fetchData =async () => {
            try{
            const res = await fetch(apiEndPoint)
            const resJson = await res.json()
            console.log(resJson)
            setFlags(resJson)
        }
        catch(error){
            console.log(error)
        }
        }
        fetchData()
    },[])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', padding: '20px' }}>
      {flags.map((country) => (
        <Card key={country.abbr} {...country} />
      ))}
    </div>
  );
};

export default Countries;
