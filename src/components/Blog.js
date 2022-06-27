import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import blogapi from "../data/Blogdata";
import "../style/Blog.css";

function Blog() {
  const [blogs, setBlog] = useState(blogapi);
  return (
    <Container className="blog">
      <h2 className="blog_title text-center">Our blog</h2>
      <Row className="blog_row">
        <Col className="blog_flex d-flex">
          {blogs.map((current) => {
            const { title, imgSrc, info, id } = current;
            return (
              <>
                <Card className="card_style">
                  <Card.Img variant="top" src={imgSrc} />
                  <Card.Body>
                    <Card.Title>
                      <p className="fs-6">{title}</p>
                    </Card.Title>
                    <Card.Text className="info">{info}</Card.Text>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
