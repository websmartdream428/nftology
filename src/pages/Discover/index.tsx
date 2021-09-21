import React, { useState } from 'react'
import AvatarCard from '../../components/AvatarCard'
import ImageCard from '../../components/ImageCard'
import { ChildCard } from '../../styledComponents/elements/Cards'
import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'
import {
  CardBoard,
  DiscoverDiv,
  Tabs,
  Tab,
  FeaturedContent,
  PopularContent,
} from '../../styledComponents/pages/discover/StyledDiscover'
import ButtonGroup from './ButtonGroup'

const Discover: React.FC = () => {
  const [selected, setSelected] = useState('featured')
  return (
    <PageContainter>
      <DiscoverDiv>
        <ButtonGroup />
        <CardBoard>
          <Tabs>
            <Tab
              selected={selected === 'featured'}
              onClick={() => setSelected('featured')}
            >
              Featured
            </Tab>
            <Tab
              selected={selected === 'popular'}
              onClick={() => setSelected('popular')}
            >
              Popular
            </Tab>
            <Tab
              selected={selected === 'new'}
              onClick={() => setSelected('new')}
            >
              New
            </Tab>
          </Tabs>
          {(selected === 'featured' || selected === 'new') && (
            <FeaturedContent>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
              <ChildCard>
                <AvatarCard isBell={false} subTitle="" isGallery />
              </ChildCard>
            </FeaturedContent>
          )}
          {selected === 'popular' && (
            <PopularContent>
              <ImageCard timeFlag={false} isBell={false} />
              <ImageCard timeFlag={false} isBell={false} />
              <ImageCard timeFlag={false} isBell={false} />
              <ImageCard timeFlag={false} isBell={false} />
              <ImageCard timeFlag={false} isBell={false} />
              <ImageCard timeFlag={false} isBell={false} />
            </PopularContent>
          )}
        </CardBoard>
      </DiscoverDiv>
    </PageContainter>
  )
}

export default Discover
