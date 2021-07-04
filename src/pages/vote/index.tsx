import React, { ReactElement, useMemo, useState } from 'react'
import useStyles from './styles'
import TinderCard from 'react-tinder-card'

import { useQuery } from '@apollo/client'

import { getAllSubmissions_submissionMany, getAllSubmissions } from '../../graphql/types/getAllSubmissions'
import { QUERY_ALL_Submissions } from './queries'

import bImage from '../../assets/images/6.jpg'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

const db = [
  {
    name: 'Richard Hendricks',
    url: '../../assets/images/1.jpg',
  },
  {
    name: 'Erlich Bachman',
    url: '../../assets/images/2.jpg',
  },
  {
    name: 'Monica Hall',
    url: '../../assets/images/3.jpg',
  },
  {
    name: 'Jared Dunn',
    url: '../../assets/images/4.jpg',
  },
  {
    name: 'Dinesh Chugtai',
    url: '../../assets/images/5.jpg',
  },
]

const alreadyRemoved: any = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

export default function Vote(): ReactElement {
  const { data, loading } = useQuery<getAllSubmissions>(QUERY_ALL_Submissions, {
    onError: err => {
      console.log(err)
    },
    onCompleted: subData => {
      console.log(subData)

      // subData && setSubmissions(subData.submissionMany)
    },
  })
  const classes = useStyles()
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs: any = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(i => React.createRef()),
    []
  )

  const swiped = (direction: any, nameToDelete: any) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name: any) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir: any) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div className={classes.root}>
      <Typography variant="h1" color="initial">
        Which bugs do you like?
      </Typography>

      <div className={classes.cardContainer}>
        {characters.map((character, index) => (
          <div className={classes.swipe}>
            <TinderCard
              ref={childRefs[index]}
              key={character.name}
              onSwipe={dir => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div style={{ backgroundImage: `url(${bImage})` }} className={classes.card}>
                <h3 style={{ color: 'black' }}>{character.name}</h3>
              </div>
            </TinderCard>
          </div>
        ))}
      </div>
      <div className={classes.buttons}>
        <Button onClick={() => swipe('left')}>Swipe left!</Button>
        <Button onClick={() => swipe('right')}>Swipe right!</Button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <Typography variant="h3" color="initial">
          Swipe a card or press a button to get started!
        </Typography>
      )}
    </div>
  )
}
