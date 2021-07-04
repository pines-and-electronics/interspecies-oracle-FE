import React, { ReactElement, useMemo, useState } from 'react'
import useStyles from './styles'
import TinderCard from 'react-tinder-card'

import { useQuery } from '@apollo/client'

import { getAllSubmissions_submissionMany, getAllSubmissions } from '../../graphql/types/getAllSubmissions'
import { QUERY_ALL_Submissions } from '../../graphql/queries'

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

export default function Vote(): ReactElement {
  const { data, loading } = useQuery<getAllSubmissions>(QUERY_ALL_Submissions, {
    onError: err => {
      console.log(err)
    },
    onCompleted: subData => {
      console.log(subData.submissionMany)

      subData && setCharacters(subData.submissionMany)
      subData && setCharactersState(subData.submissionMany)
    },
  })
  const classes = useStyles()
  const [characters, setCharacters] = useState<(getAllSubmissions_submissionMany | null)[] | null>([])
  const [charactersState, setCharactersState] = useState<(getAllSubmissions_submissionMany | null)[] | null>([])
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
    setCharactersState(charactersState ? charactersState.filter(character => character!.name !== name) : [])
    setCharacters(charactersState)
  }

  const swipe = (dir: any) => {
    if (characters) {
      const cardsLeft = characters.filter(entry => alreadyRemoved.includes(entry!.name))
      // if (cardsLeft && cardsLeft.length) {
      //   const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      //   const index = db.map(entry => entry.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      //   alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      //   childRefs[index].current.swipe(dir) // Swipe the card!
      // }
    }
  }
  if (loading || !data || !charactersState) return <div className="spin"></div>

  return (
    <div className={classes.root}>
      <Typography variant="h3" color="initial">
        Which bugs do you like?
      </Typography>

      <div className={classes.cardContainer}>
        {characters &&
          characters.map((character, index) => (
            <div key={character!.name} className={classes.swipe}>
              <TinderCard
                ref={childRefs[index]}
                key={character!.name}
                onSwipe={dir => swiped(dir, character!.name)}
                onCardLeftScreen={() => outOfFrame(character!.name)}
              >
                <div style={{ backgroundImage: `url(${character!.pictureLink})` }} className={classes.card}>
                  <Typography variant="h3" className={classes.textTop}>
                    {character!.name}
                  </Typography>
                  <Typography variant="h6" className={classes.textBottom}>
                    {character!.poem}
                  </Typography>
                </div>
              </TinderCard>
            </div>
          ))}
      </div>
      {/* <div className={classes.buttons}>
        <Button onClick={() => swipe('left')}>Didn't Like 👎</Button>
        <Button onClick={() => swipe('right')}>Like 👍</Button>
      </div> */}
      {lastDirection ? (
        <Typography variant="h3" key={lastDirection}>
          {lastDirection === 'left' ? 'It was not so good' : 'I liked it too'}
        </Typography>
      ) : (
        <Typography variant="h2" color="initial">
          🤮 ⬅️ {'- - -'} ➡️ ❤️
        </Typography>
      )}
    </div>
  )
}
