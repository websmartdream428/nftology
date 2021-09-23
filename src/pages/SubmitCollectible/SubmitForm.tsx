import React from 'react'
import styled from 'styled-components'
import { MoreText, WhiteCard } from '../../styledComponents/elements/Cards'
import { SearchInput } from '../../styledComponents/layout/StyledHeader'
import {
  ControlGroup,
  DescSubtitle,
  DescTitle,
  PersonInfoInputs,
} from '../../styledComponents/pages/connectWallet/StyledConnectWallet'
import content from '../../constant/en.json'
import { ArrowSVG } from '../../components/CustomSVG'
import Button from '../../components/CustomButton'

const TextArea = styled.textarea`
  border: none;
  padding: 15px 15px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;
  background-color: #e5e9fa;
  outline: none;
  width: 100%;
  resize: vertical;
`

const SubmitForm: React.FC = () => {
  return (
    <WhiteCard style={{ padding: '5% 10%' }}>
      <DescTitle>{content.submit_your_work}</DescTitle>
      <PersonInfoInputs>
        <SearchInput placeholder="Name" />
        <SearchInput placeholder="Email" />
      </PersonInfoInputs>
      <DescTitle>{content.description_of_nft}</DescTitle>
      <DescSubtitle>{content.description_of_nft_content}</DescSubtitle>
      <TextArea placeholder="Type Here..." />
      <DescTitle>{content.image_video_audio_3d}</DescTitle>
      <DescSubtitle>{content.image_video_audio_3d_content}</DescSubtitle>
      <Button
        value="Attach Files"
        onClick={() => console.log('Attach Files Clicked')}
      />
      <ControlGroup>
        <MoreText style={{ marginBottom: '20px' }}>
          Submit
          <ArrowSVG selected="#000" />
        </MoreText>
      </ControlGroup>
    </WhiteCard>
  )
}

export default SubmitForm
