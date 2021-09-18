import React from 'react'
import { Link } from 'react-router-dom'
import { MoreText, WhiteCard } from '../../styledComponents/elements/Cards'
import { SearchInput } from '../../styledComponents/layout/StyledHeader'
import {
  ControlGroup,
  DescSubtitle,
  DescTitle,
  PersonInfoInputs,
  RaioGroup,
} from '../../styledComponents/pages/connectWallet/StyledConnectWallet'
import content from '../../constant/en.json'
import CustomRadio from '../../components/CustomRadio'
import { ArrowSVG } from '../../components/CustomSVG'

const SubmitForm: React.FC = () => {
  return (
    <WhiteCard style={{ padding: '60px 100px' }}>
      <PersonInfoInputs>
        <SearchInput placeholder="First Name*" />
        <SearchInput placeholder="Last Name*" />
        <SearchInput placeholder="Email Address*" />
        <SearchInput placeholder="Phone Number*" />
      </PersonInfoInputs>
      <DescTitle>{content.provide1_title}</DescTitle>
      <DescSubtitle>{content.provide1_content}</DescSubtitle>
      <SearchInput placeholder="Type Here..." />
      <DescTitle>{content.provide2_title}</DescTitle>
      <DescSubtitle>{content.provide2_content}</DescSubtitle>
      <SearchInput placeholder="Insert URL here..." />
      <DescTitle>{content.provide3_title}</DescTitle>
      <SearchInput placeholder="Type Here..." />
      <DescTitle>{content.if_accepted}</DescTitle>
      <RaioGroup>
        <CustomRadio text="Yes" name="isAccepted" />
        <CustomRadio text="No" name="isAccepted" />
      </RaioGroup>
      <DescSubtitle>{content.by_using}</DescSubtitle>
      <ControlGroup>
        <MoreText style={{ marginBottom: '20px' }}>
          Submit
          <ArrowSVG selected="#000" />
        </MoreText>
        <Link
          to="/signin"
          style={{ textDecoration: 'none' }}
          onClick={() => {
            localStorage.setItem('currentRouter', 'signin')
          }}
        >
          <MoreText>
            Already have an account? Sign in
            <ArrowSVG selected="#000" />
          </MoreText>
        </Link>
      </ControlGroup>
    </WhiteCard>
  )
}

export default SubmitForm
