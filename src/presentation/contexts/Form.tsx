// import React, { createContext, useContext, useEffect } from 'react'
// import { useForm, UseFormRegister, FieldValues } from 'react-hook-form'

// import * as T from '../types'

// export type FormContextType = {
//   register: UseFormRegister<FieldValues>
//   handleSubmit: (data: any) => void
// }

// export const FormContext = createContext<FormContextType>({
//   register: null,
//   handleSubmit: () => undefined,
// })

// export const FormProvider = ({ children }: T.Props) => {
//   console.log(watch()) // watch input value by passing the name of it

//   useEffect(() => console.log(errors), [errors])

//   return (
//     <FormContext.Provider
//       value={{
//         register,
//         handleSubmit,
//       }}
//     >
//       {children}
//     </FormContext.Provider>
//   )
// }

// export const useFormContext = () => useContext(FormContext)

export {}
