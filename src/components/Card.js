import styled from 'styled-components'

// Styled Components for cards
export const Media = styled('div')`
    display: block;
    height: auto;
    position: relative;
    background: ${({ src, placeholderBg }) =>
      src
        ? `url(${src}) center center / cover no-repeat rgb(225, 232, 237)`
        : placeholderBg};
    
    flex: 1 1 0%;
    overflow: hidden;
    transition: flex-basis 0.25s ease-in-out 0s;
`
Media.defaultProps = {
  placeholderBg: `rgb(225, 232, 235)`,
}

export const ContentWrapper = styled('div')`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex: 1;
  padding: 10px 15px;
  min-width: 0;
  box-sizing: border-box;
  flex: 0 0 125px;
`

export const Header = styled('header')`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  flex-grow: 1.2;
  p {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    color: #484040!important;
  }
`
export const Content = styled('div')`
  text-align: left;
  font-size: 13px;
  flex-grow: 1;
  margin: auto 0;
  line-height: 18px;
  p {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
`

export const Footer = styled('footer')`
  text-align: left;
  font-size: 12px;
  margin: 0;
  flex-grow: 0;
  opacity: 0.5;
`

export const Card = styled('a')`
  width: ${({ width }) => width};
  background-color: rgb(255, 255, 255);
  color: rgb(24, 25, 25);
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  opacity: 1;
  position: relative;
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
  flex-direction: column;
  height: 382px;
  transition-property: background, border-color, height;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 232, 237);
  overflow: hidden;
  text-decoration: none;
  -webkit-tap-highlight-color: rgb(245, 248, 250);
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  margin: 5px 5px;
  &:hover {
    background: rgb(245, 248, 250);
  }
`
Card.defaultProps = {
  rel: 'noopener noreferrer',
  target: '_blank',
}