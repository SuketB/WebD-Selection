const form = document.querySelector('#form')
const ul = document.querySelector('.stateUpdate')

const li1 = document.createElement('li')
li1.classList.add('list-group-item')

const li2 = document.createElement('li')
li2.classList.add('list-group-item')

const li3 = document.createElement('li')
li3.classList.add('list-group-item')

const li4 = document.createElement('li')
li4.classList.add('list-group-item')

const li5 = document.createElement('li')
li5.classList.add('list-group-item')

const pTag  =document.createElement('p')
const bTag = document.createElement('b')
pTag.classList.add('keys','d-inline-block')
bTag.classList.add('ms-2')

const pTag2  =document.createElement('p')
const bTag2= document.createElement('b')
pTag2.classList.add('keys','d-inline-block')
bTag2.classList.add('ms-2')

const pTag3  =document.createElement('p')
const bTag3 = document.createElement('b')
pTag3.classList.add('keys','d-inline-block')
bTag3.classList.add('ms-2')

const pTag4  =document.createElement('p')
const bTag4 = document.createElement('b')
pTag4.classList.add('keys','d-inline-block')
bTag4.classList.add('ms-2')

const pTag5  =document.createElement('p')
const bTag5 = document.createElement('b')
pTag5.classList.add('keys','d-inline-block')
bTag5.classList.add('ms-2')







const findStateCode = (state) =>{
    
   for(let stateCode of stateCodeData){
       
       if(stateCode.name.toLowerCase() === state){
           return stateCode.code
       }
   }
   return 0;
}


const findDataAndUpdate = async() => {
    const details =  await axios.get('https://api.covid19india.org/v4/min/data.min.json')
    let stateF = form.elements.state.value.toLowerCase()
  
    let district = form.elements.district.value.toLowerCase()
  
    let districtF = district.charAt(0).toUpperCase() + district.slice(1);
  
    let stateCode = findStateCode(stateF)
  
  
    let stateData = details.data[stateCode]
   
    let districtData = null
    if(!district){
  
      if(stateCode){
       
      bTag.innerText = `${stateData.total.confirmed}`
      pTag.innerText = 'Confirmed: '
      li1.append(pTag,bTag)
      
      bTag2.innerText = `${stateData.total.recovered}`
      pTag2.innerText = 'Recovered: '
      li2.append(pTag2,bTag2)
  
      bTag3.innerText = `${stateData.total.deceased}`
      pTag3.innerText = 'Deceased: '
      li3.append(pTag3,bTag3)

      bTag4.innerText = `${stateData.total.vaccinated1}`
      pTag4.innerText = 'Vaccinated 1: '
      li4.append(pTag4,bTag4)
  
      bTag5.innerText = `${stateData.total.vaccinated2}`
      pTag5.innerText = 'Vaccinated 2: '
      li5.append(pTag5,bTag5)
      }
      
       else{
          li1.innerText = `Enter valid state.`
          li2.innerText = ""
          li3.innerText = ""
          li4.innerText = ""
          li5.innerText = ""
  
       }
       ul.append(li1,li2,li3,li4,li5)
     
    }
    else{
        districtData = stateData.districts[districtF]
        if(districtData){
            bTag.innerText = `${districtData.total.confirmed}`
            pTag.innerText = 'Confirmed: '
            li1.append(pTag,bTag)
            
            bTag2.innerText = `${districtData.total.recovered}`
            pTag2.innerText = 'Recovered: '
            li2.append(pTag2,bTag2)
        
            bTag3.innerText = `${districtData.total.deceased}`
            pTag3.innerText = 'Deceased: '
            li3.append(pTag3,bTag3)
      
            bTag4.innerText = `${districtData.total.vaccinated1}`
            pTag4.innerText = 'Vaccinated 1: '
            li4.append(pTag4,bTag4)
        
            bTag5.innerText = `${districtData.total.vaccinated2}`
            pTag5.innerText = 'Vaccinated 2: '
            li5.append(pTag5,bTag5)
       } 
       else{
          li1.innerText = `Enter valid district.`
          li2.innerText = ""
          li3.innerText = ""
          li4.innerText = ""
          li5.innerText = ""
       }
       ul.append(li1,li2,li3,li4,li5)
        
    }
    

}

form.addEventListener('submit',async(e)=>{
  e.preventDefault()
  findDataAndUpdate()
})



const stateCodeData = [
    {
    "code": "AN",
    "name": "Andaman and Nicobar Islands"
    },
    {
    "code": "AP",
    "name": "Andhra Pradesh"
    },
    {
    "code": "AR",
    "name": "Arunachal Pradesh"
    },
    {
    "code": "AS",
    "name": "Assam"
    },
    {
    "code": "BR",
    "name": "Bihar"
    },
    {
    "code": "CG",
    "name": "Chandigarh"
    },
    {
    "code": "CH",
    "name": "Chhattisgarh"
    },
    {
    "code": "DH",
    "name": "Dadra and Nagar Haveli"
    },
    {
    "code": "DD",
    "name": "Daman and Diu"
    },
    {
    "code": "DL",
    "name": "Delhi"
    },
    {
    "code": "GA",
    "name": "Goa"
    },
    {
    "code": "GJ",
    "name": "Gujarat"
    },
    {
    "code": "HR",
    "name": "Haryana"
    },
    {
    "code": "HP",
    "name": "Himachal Pradesh"
    },
    {
    "code": "JK",
    "name": "Jammu and Kashmir"
    },
    {
    "code": "JH",
    "name": "Jharkhand"
    },
    {
    "code": "KA",
    "name": "Karnataka"
    },
    {
    "code": "KL",
    "name": "Kerala"
    },
    {
    "code": "LD",
    "name": "Lakshadweep"
    },
    {
    "code": "MP",
    "name": "Madhya Pradesh"
    },
    {
    "code": "MH",
    "name": "Maharashtra"
    },
    {
    "code": "MN",
    "name": "Manipur"
    },
    {
    "code": "ML",
    "name": "Meghalaya"
    },
    {
    "code": "MZ",
    "name": "Mizoram"
    },
    {
    "code": "NL",
    "name": "Nagaland"
    },
    {
    "code": "OR",
    "name": "Odisha"
    },
    {
    "code": "PY",
    "name": "Puducherry"
    },
    {
    "code": "PB",
    "name": "Punjab"
    },
    {
    "code": "RJ",
    "name": "Rajasthan"
    },
    {
    "code": "SK",
    "name": "Sikkim"
    },
    {
    "code": "TN",
    "name": "Tamil Nadu"
    },
    {
    "code": "TS",
    "name": "Telangana"
    },
    {
    "code": "TR",
    "name": "Tripura"
    },
    {
    "code": "UP",
    "name": "Uttar Pradesh"
    },
    {
    "code": "UK",
    "name": "Uttarakhand"
    },
    {
    "code": "WB",
    "name": "West Bengal"
    }
    ]
