import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar';

import * as S from './styled'

const Profile = () => {
  const {
      site: { siteMetadata: { title, position, description },
    }, 
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `)

  return (
    <S.ProfleWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {title}
        </S.ProfileAuthor>
        <S.ProfilePosition>{position}</S.ProfilePosition>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfleWrapper>
  )
}

export default Profile