import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

export const CardList = ({Hero}) =>
{
    const history = useHistory()
    const HeroInfo = async event =>
    {
        return history.push('/main/'+Hero.id)
    }
    return(
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={Hero.images[0]} />
    <Card.Body style={{textAlign:"center"}}>
<Card.Title>{Hero.nikname}</Card.Title>
      <Card.Text>
    {Hero.origin_descripton}
      </Card.Text>
      <Button variant="primary" onClick={HeroInfo}>View more</Button>
    </Card.Body>
  </Card>
    )
}