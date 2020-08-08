import React,{useState,useCallback,useEffect} from 'react'
import { useHttp } from '../hooks/http.hook'
import {useParams} from 'react-router-dom'
import {Carousel, Button,Spinner} from 'react-bootstrap'
import { EditHero } from '../components/EditHero'
export const InformationPage = () =>
{
    const [marks,SetMarks] = useState(null)
    let HeroId = useParams().id
    const {loading,error,request} = useHttp()
    const [mark,SetMark] = useState(null)
    const getMark = useCallback(async () => {
        if(!mark)
        {
        try {
                 const fetched = await request(`/api/mainpage/${HeroId}`,'GET',null)
                await SetMark(fetched)
                
        } 
        catch (e) 
        {
            console.log(e)
        }
    }
    },[mark])


    useEffect(()=>
    {
        getMark()
    },[getMark])


    console.log(marks)

        const SendData = async(element) =>
        {
            window.location.reload()
            if(mark.Hero.images.length > 1)
            {
            const dd = await request(`/api/mainpage/delete`,'POST',{element})
            }
        }
    return(
        <div>
            {loading && <div className="text-center"> <Spinner animation="border" variant="danger" style={{width:'30vw',height:"30vw"}} /></div>}
            {mark   &&
         
 <Carousel>
     {mark.Hero.images.map(e=>(
<Carousel.Item>
<img
  className="d-block w-100"
  style={{maxHeight: '90vh'}}
  src={e}
  alt="First slide"
/>
<Carousel.Caption>
    
     <h3>{mark.Hero.nikname}</h3>
     <EditHero data={mark.Hero}/>
     <Button variant="danger" onClick={ async()=>{SendData(e)}}>Delete this image</Button>
</Carousel.Caption>
</Carousel.Item>
     ))

     }
</Carousel> 

}
</div>
    )
}