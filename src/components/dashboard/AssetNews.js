import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

const AssetNews = ({articles}) => {

  console.log({articles})
  
  const [assetNews, setAssetNews] = useState([]);

  useEffect(() => {
    if(articles.length>0){
      setAssetNews(articles)
    }
  }, [AssetNews, articles])


  return (
  
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{"News"}</h6>
    </CardHeader>

    <CardBody className="p-0">
      {assetNews.map((article, idx) => {
      if(idx>2){
        return null
      }
      return (
        
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
            <img src={article.urlToImage} alt={article.author} />
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={article.url}>
                {article.title.substring(0, 50)}...
              </a>{" "}
              {/* <a className="text-secondary" href={article.url}>
                {article.title}
              </a> */}
              <span className="text-mutes">- {article.publishedAt.substring(0,10)}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{article.description.substring(0,100)}...</p>
            
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={article.url}>-
                {article.source.name}
              </a>{" "}
              {/* <a className="text-secondary" href={article.url}>
                {article.title}
              </a> */}
            </div>
            {/* Content :: Actions */}
            {/* <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button theme="white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                  Approve
                </Button>
                <Button theme="white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{" "}
                  Reject
                </Button>
                <Button theme="white">
                  <span className="text-light">
                    <i className="material-icons">more_vert</i>
                  </span>{" "}
                  Edit
                </Button>
              </ButtonGroup>
            </div> */}
          </div>
        </div>
      )}
      )}
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit">
            View All News
          </Button>
        </Col>
      </Row>
    </CardFooter>
  </Card>
)};

AssetNews.propTypes = {
  /**
   * The component's title.
   */
  // title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  articles: PropTypes.array
};

AssetNews.defaultProps = {
  articles: [
    {
      id: 1,
      date: "3 days ago",
      author: {
        image: require("../../images/avatars/1.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Hello World!",
        url: "#"
      },
      body: "Well, the way they make shows is, they make one show ..."
    },
    {
      id: 2,
      date: "4 days ago",
      author: {
        image: require("../../images/avatars/2.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Hello World!",
        url: "#"
      },
      body: "After the avalanche, it took us a week to climb out. Now..."
    },
    {
      id: 3,
      date: "5 days ago",
      author: {
        image: require("../../images/avatars/3.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Hello World!",
        url: "#"
      },
      body: "My money's in that office, right? If she start giving me..."
    }
  ]
};

export default AssetNews;
