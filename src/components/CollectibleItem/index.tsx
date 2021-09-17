import React from 'react'
import styled from 'styled-components'

const StyledCollectible = styled.div`
  display: flex;
`
const CollectImage = styled.img`
  width: 40px;
  height: 40px;
  radius: 11px;
`
const CollectName = styled.span`
  font-size: 16px;
  margin-left: 17px;
  font-color: #111026;
`
const ArtName = styled.span`
  font-color: #a2a2c2;
`

type CollectibleItemProps = {
  url: string
  collect_name: string
  art_name: string
}
const CollectibleItem = ({
  url,
  collect_name,
  art_name,
}: CollectibleItemProps) => {
  return (
    <StyledCollectible>
      <CollectImage src={url} />
      <p>
        <CollectName>{collect_name}</CollectName> -{' '}
        <ArtName>{art_name}</ArtName>
      </p>
    </StyledCollectible>
  )
}
export default CollectibleItem
