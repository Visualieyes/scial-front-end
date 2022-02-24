import React, { useEffect, useState, useCallback, useRef, } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { useDispatch, useSelector } from 'react-redux';

import { getNews } from '../redux/news/state/news.actions';



const News = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])

    const NewsStore = useSelector((state) => state.news)
    console.log(NewsStore)

    const [news, setNews] = useState([])

    useEffect(()=>{
        if(NewsStore && NewsStore.news.data){
            setNews(NewsStore.news.data.articles)
        }
    }, [news, NewsStore])

    if(news.length>0){
        console.log({news})
    }

    

    return (
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Latest Stories" subtitle="News" className="text-sm-left" />
          </Row>
  
          {/* First Row of Posts */}
          <Row>
            {news.map((article, idx) => (
              <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
                <Card small className="card-post card-post--1">
                  <div
                    className="card-post__image"
                    style={{ backgroundImage: `url(${article.urlToImage})` }}
                    alt={article.source.name}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${article.source.name}`}
                    >
                      {article.source.name}
                    </Badge>
                    {/* <div className="card-post__author d-flex">
                      <a
                        href="#"
                        className="card-post__author-avatar card-post__author-avatar--small"
                        // style={{ backgroundImage: `url('${article.authorAvatar}')` }}
                      >
                        Source: {article.source.name}
                      </a>
                    </div> */}
                  </div>
                  <CardBody>
                    <h5 className="card-title">
                      <a href={article.url} className="text-fiord-blue">
                        {article.title.split("-")[0]}
                      </a>
                    </h5>
                    <p className="card-text d-inline-block mb-3">{article.content}</p>
                    <span className="text-muted">{article.publishedAt.split("T")[0]}</span>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
          </Container>
    );
}

export default News;