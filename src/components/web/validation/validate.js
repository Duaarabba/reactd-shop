import * as yup from 'yup';
import ForgetPass from './../forgetpass/ForgetPass';
export  const registerScheam=yup.object({
  userName:yup.string().required('username is requierd').min(3,'must be at least 3char').max(20,'more than 20'),
  email:yup.string().required('email is requierd').email(),
  password:yup.string().required('password id requried').min(3,'must be at least 3 char').max(15,'more than 15'),
 })
 export  const loginScheam =yup.object({
  
  email:yup.string().required('email is requierd').email(),
  password:yup.string().required('password id requried').min(3,'must be at least 3 char').max(15,'more than 15'),
 })
 export  const ForgetPassScheam =yup.object({
  
  email:yup.string().required('email is requierd').email(),
 
 })
 export  const ResetPassScheam =yup.object({
  
  email:yup.string().required('email is requierd').email(),
  password:yup.string().required('password id requried').min(3,'must be at least 3 char').max(15,'more than 15'),
  code:yup.string().required('code is requried')
 })
 export  const OrderPassScheam =yup.object({
  
  
  address:yup.string().required('your address requried'),
  phone:yup.string().required('your phone is requried'),
 })
 export  const ReviewsScheam =yup.object({
  
  comment:yup.string().required('your comment is requried'),
  rating:yup.string().required('rating is requried'),
 
 })