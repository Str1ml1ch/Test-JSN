import React,{useState} from 'react'
import { useHttp } from '../hooks/http.hook'
import {Form,Button,Spinner} from 'react-bootstrap'

export const CreatePage = () =>
{
    const {loading,error,request} = useHttp()
    const [form,setForm] = useState({
        Sname: '', SrealName: '', Sdescription:'',Spowers:'',Spharse:'',Simage:''
    })

    const changeHandler = event =>
    {
        setForm({...form,[event.target.name]: event.target.value})
    }


    const SendData = async event =>
    {
       const data =  await request('/api/mainpage/create','POST',{...form})
       return data
    }



    return(
        <div>
          {loading && <div className="text-center"> <Spinner animation="border" variant="danger" style={{width:'30vw',height:"30vw"}} /></div>}
            <Form>
  <Form.Group controlId="formBasicText">
    <Form.Label>Nickname​:</Form.Label>
    <Form.Control type="text" placeholder="Enter Nickname​" name ='Sname' onChange = {changeHandler} required />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Real Name​:</Form.Label>
    <Form.Control type="text" placeholder="Enter Real Name" name ='SrealName' onChange = {changeHandler}  required />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Description​:</Form.Label>
    <Form.Control type="text" placeholder="Enter Description​" name ='Sdescription' onChange = {changeHandler}  required />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Superpowers:</Form.Label>
    <Form.Control type="text" placeholder="Enter Superpowers" name ='Spowers' onChange = {changeHandler}  required />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Catch Phrase:</Form.Label>
    <Form.Control type="text" placeholder="Enter Catch Phrase" name ='Spharse' onChange = {changeHandler}  required />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Photo Links:</Form.Label>
    <Form.Control type="text" placeholder="Photo links" name ='Simage' onChange = {changeHandler}  required />
  </Form.Group>
  <Button variant="primary" onClick={SendData}>
    Send
  </Button>
</Form>
        </div>
    )
}