import React from 'react';
import { Card, ContentWrapper, Header, Content, Footer } from './Card';
import Description from './Description';
import { getHostname } from '../utils';
import CardMedia from './CardMedia';
import { useMountFetch } from '../customHooks/useMountFetch';

export default ({
  url = '',
  proxyUrl="https://cors-anywhere.herokuapp.com",
  width = '600px',
  onError,
  onSuccess,
  onClick = null,
}) => {

  const [data, loading] = useMountFetch(url, proxyUrl, onError, onSuccess)

  return (
    <Card onClick={(e) => {if (!onClick) return; e.preventDefault(); onClick(e, data)}} href={url} width={width}>
      <CardMedia data={data} loadSecureUrl={true} />
      <ContentWrapper>
        <Header>
          <Description
            loading={loading}
            loadingWidth={2}
          >
            {data.title ? data.title : url}
          </Description>
        </Header>
        <Content>
          <Description loading={loading} loadingWidth={1}>
            {data.description ? data.description : url}
          </Description>
        </Content>
        <Footer>
          <Description loading={loading} loadingWidth={1}>
            {getHostname(url).toUpperCase()}
          </Description>
        </Footer>
      </ContentWrapper>
    </Card>
  )
};