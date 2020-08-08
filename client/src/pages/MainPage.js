import React,{useCallback,useEffect,useState} from 'react'
import { useHttp } from '../hooks/http.hook'
import '../css/ShowHero.css'
import {Spinner,Pagination} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import { CardList } from '../components/CardList'

export const MainPage = () =>
{
    const {loading,error,request} = useHttp()
    const [mark,SetMark] = useState(null)
    const history = useHistory()
    const getMark = useCallback(async () => {
        if(!mark)
        {
        try {
                 const fetched = await request('/api/mainpage/main','GET',null)
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

    if(mark)
    {
        console.log(mark.arrHerosInfo.length)
    }

    return(
        <div>
            {loading && <div className="text-center"> <Spinner animation="border" variant="danger" style={{width:'30vw',height:"30vw"}} /></div>}
        <div className="Hero">
            {mark &&
            mark.arrHerosInfo.map((e,i) => 
                (
                    <CardList Hero={e}/>
                ))
            }
        </div>
        </div>
    )
}