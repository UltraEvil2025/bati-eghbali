import Worker  from './components/worker'
import './App.css'


function App() {
  
  let workerList=[{
    id:215487695,
    nname:"sara",
    role:"levin",
    age:36,
    address:{
      city:"bnei brak",
      street:"ezra"
    }
  },
  {
    id:258658798,
    nname:"rachel",
    role:"yakkov",
    age:25,
    address:{
      city:"bnei brak",
      street:"rashi"
    }
  },
  {
    id:215526695,
    nname:"ruth",
    role:"lugasi",
    age:24,
    address:{
      city:"bnei brak",
      street:"harav shach"
    }
  },
  {
    id:169487695,
    nname:"rivka",
    role:"choen",
    age:30,
    address:{
      city:"yerushalim",
      street:"shamgar"
    }
  },
  {
    id:58269473,
    nname:"miryam",
    role:"pash",
    age:58,
    address:{
      city:"elad",
      street:"rashbi"
    }
  },
  {
    id:219587695,
    nname:"lea",
    role:"amsalem",
    age:40,
    address:{
      city:"tel aviv",
      street:"alenbi"
    }
  },
  {
    id:326487695,
    nname:"elisheva",
    role:"ochana",
    age:29,
    address:{
      city:"bnei brak",
      street:"chaneman"
    }
  },
  {
    id:286543554,
    nname:"ayala",
    role:"ezra",
    age:42,
    address:{
      city:"bnei brak",
      street:"abarbanel"
    }
  },
  {
    id:852869835,
    nname:"tamar",
    role:"shif",
    age:38,
    address:{
      city:"yerushalim",
      street:"haturim"
    }
  },
  {
    id:215487695,
    nname:"michal",
    role:"tal",
    age:22,
    address:{
      city:"bat yam",
      street:"lavorno"
    }
  }]
  

  return (
    <div>
{/* <Worker   id={215648978} nname="rivka" role="lawyer" age="22" address={{city:"lood",street:"ben guryon"}}></Worker>
<Worker   id={215648978} nname="rachel" role="lawyer" age="22" address={{city:"lood",street:"ben guryon"}}></Worker>
<Worker   id={215648978} nname="lea" role="lawyer" age="22" address={{city:"lood",street:"ben guryon"}}></Worker>
<Worker   id={215648978} nname="sara" role="lawyer" age="22" address={{city:"lood",street:"ben guryon"}}></Worker> */}
{//<Worker id={215648978} name="rivka" role="lawyer" age={22} address={{city:"lod",street:"golan"}} />
}
{

  workerList.map((p)=> <Worker {...p}/>)
}
     
    </div>
  )
}

export default App
