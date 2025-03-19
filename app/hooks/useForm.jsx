import { useState } from "react";

export default function useForm(initialValues){
  const [formData, setFormData] = useState(initialValues)

  const handleInputChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setFormData({...formData, [name]: value})
  }

  const resetForm =()=>{
    setFormData(initialValues)
  }

  return{formData,handleInputChange, resetForm}


}