import styled from 'styled-components'

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.main.background};
  border-bottom: 1px ${({ theme }) => theme.colors.main.primary} solid;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 16px;
`

export const Logo = styled.img`
  background-position: center;
  height: 40px;
  width: auto;
`

export const Profile = styled.p`
  color: ${({ theme }) => theme.colors.main.primary};
  cursor: pointer;
  font-size: 16px;
`

export const Body = styled.div`
  height: 100%;
`

export const Aside = styled.aside`
  background: ${({ theme }) => theme.colors.main.primary};
  float: left;
  height: 100%;
`

export const Menu = styled.div`
  background: ${({ theme }) => theme.colors.main.primary};
`

export const MenuItem = styled.div`
  background: ${({ theme }) => theme.colors.main.primary};
  color: ${({ theme }) => theme.colors.main.text};
  cursor: pointer;
  padding: 16px;
  width: 250px;

  &:hover {
    background: ${({ theme }) => theme.colors.main.primaryLight};
    color: ${({ theme }) => theme.colors.main.lightWhite};
  }
`
