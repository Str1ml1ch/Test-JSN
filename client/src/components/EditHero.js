import React,{useState} from 'react'
import {Form,Row,Col,Button} from 'react-bootstrap'
import { useHttp } from '../hooks/http.hook'

export const EditHero = ({data}) =>
{

    const {loading,error,request} = useHttp()
    const [form,setForm] = useState({
        Sname: data.nikname, SrealName: data.real_name, Sdescription:data.origin_descripton,Spowers:data.superpowers,Spharse:data.catch_phrase,Simage:'',id:data.id
    })

    const changeHandler = event =>
    {
        setForm({...form,[event.target.name]: event.target.value})
        console.log(event.target.value)
    }
    const SendData = async(element) =>
    {
        window.location.reload()
        const dd = await request(`/api/change/change`,'POST',{...form})
    }

    return (
        <Form>
  <Row>
    <Col>
      <Form.Control className="EditForms" placeholder="Nikname"
    defaultValue={data.nikname} name = "Sname" onChange={changeHandler}/>
    </Col>
    <Col>
      <Form.Control className="EditForms" placeholder="Real name" defaultValue={data.real_name} name="SrealName" onChange={changeHandler} />
    </Col>
    </Row>
    <Row>
    <Col>
    <div className="form-group" style={{margin:"0"}}>
  <textarea className="form-control EditForms" rows="2" id="comment"  name="Sdescription" onChange={changeHandler} defaultValue={data.origin_descripton}></textarea>
</div>
    </Col>
    </Row>
    <Row>
    <Col>
    <div className="form-group" style={{margin:'0'}}>
  <textarea className="form-control EditForms" rows="1" id="comment" name="Spowers" onChange={changeHandler} defaultValue={data.superpowers}></textarea>
</div>
    </Col>
    <Col>
      <Form.Control className="EditForms" placeholder="Catch phrase" name="Spharse" onChange={changeHandler} defaultValue={data.catch_phrase} />
    </Col>
    <Col>
      <Form.Control className="EditForms" placeholder="Images add" name="Simage" onChange={changeHandler} />
    </Col>
    </Row>
    <Row>
    <Col>
    <Button style={{width:"9.3rem"}} onClick={()=>{SendData(data)}}>Изменить</Button>
    </Col>
    
    </Row>
</Form>
    )
}