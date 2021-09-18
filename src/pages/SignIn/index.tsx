import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MoreText, WhiteCard } from '../../styledComponents/elements/Cards'
import { SearchInput } from '../../styledComponents/layout/StyledHeader'
import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'
import {
  PasswordInputDiv,
  SignDesc,
  SignInForm,
  SignInTitle,
} from '../../styledComponents/pages/signin/StyledSignIn'
import ShowPasswordIco from '../../assets/images/showpassword.png'
import content from '../../constant/en.json'
import { ControlGroup } from '../../styledComponents/pages/connectWallet/StyledConnectWallet'
import { ArrowSVG } from '../../components/CustomSVG'

const SignInPage: React.FC = () => {
  const [passwordType, setPasswordType] = useState('password')
  return (
    <PageContainter>
      <WhiteCard>
        <SignInForm>
          <SignInTitle>Sign In</SignInTitle>
          <SearchInput
            placeholder="Email Address"
            style={{ margin: '20px 0' }}
          />
          <PasswordInputDiv>
            <SearchInput type={passwordType} placeholder="Password" />
            <img
              src={ShowPasswordIco}
              onMouseEnter={() => setPasswordType('text')}
              onMouseLeave={() => setPasswordType('password')}
              alt="showpassword"
            />
          </PasswordInputDiv>
          <SignDesc>{content.sign_description}</SignDesc>
          <ControlGroup>
            <MoreText style={{ marginBottom: '20px' }}>
              Sign In
              <ArrowSVG selected="#000" />
            </MoreText>
            <Link
              to="/connectWallet"
              style={{ textDecoration: 'none' }}
              onClick={() => {
                localStorage.setItem('currentRouter', 'signin')
              }}
            >
              <MoreText>
                {content.dont_have_account}
                <ArrowSVG selected="#000" />
              </MoreText>
            </Link>
          </ControlGroup>
        </SignInForm>
      </WhiteCard>
    </PageContainter>
  )
}

export default SignInPage
