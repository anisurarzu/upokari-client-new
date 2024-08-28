"use client";
import React from "react";
import { Card, Row, Col } from "antd";

const BookList = () => {
  const bookList = [
    {
      id: 1,
      title: "সোনালী পাতা PDF বই – আব্দুল মালেক মুজাহিদ",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Sonali-Pata-PDF-192x254.jpg",
    },
    {
      id: 2,
      title:
        "গঙ্গাঋদ্ধি থেকে বাংলাদেশে PDF বই – বিচারপতি মুহাম্মদ হাবিবুর রহমান",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Gongariddhi-Theke-Bangladeshe-PDF-192x254.jpg",
    },
    {
      id: 3,
      title: "ছোটদের রাজনীতি ছোটদের অর্থনীতি PDF বই – ড. নীহার কুমার সরকার",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Chotoder-Rajneeti-Chotoder-Orthoneeti-PDF-192x254.jpg",
    },
    {
      id: 4,
      title: "ঈসা ইবনু মারইয়াম (আ.) PDF বই – শাইখ আহমাদ মুসা জিবরিল",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Isa-Ibnu-Maryam-PDF-192x254.jpg",
    },
    {
      id: 5,
      title:
        "তাজাল্লিয়াতে সফদার PDF বই (১ম-৪র্থ খন্ড) – মাওলানা আমীন সফদার উখাড়ভী রহ.",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Tajalliyate-Sofdar-PDF-192x254.jpg",
    },
    {
      id: 6,
      title:
        "তাজাল্লিয়াতে সফদার PDF বই (১ম-৪র্থ খন্ড) – মাওলানা আমীন সফদার উখাড়ভী রহ.",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Tajalliyate-Sofdar-PDF-192x254.jpg",
    },
    {
      id: 7,
      title:
        "তাজাল্লিয়াতে সফদার PDF বই (১ম-৪র্থ খন্ড) – মাওলানা আমীন সফদার উখাড়ভী রহ.",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Tajalliyate-Sofdar-PDF-192x254.jpg",
    },
    {
      id: 8,
      title:
        "তাজাল্লিয়াতে সফদার PDF বই (১ম-৪র্থ খন্ড) – মাওলানা আমীন সফদার উখাড়ভী রহ.",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Tajalliyate-Sofdar-PDF-192x254.jpg",
    },
    {
      id: 9,
      title:
        "তাজাল্লিয়াতে সফদার PDF বই (১ম-৪র্থ খন্ড) – মাওলানা আমীন সফদার উখাড়ভী রহ.",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Tajalliyate-Sofdar-PDF-192x254.jpg",
    },
    {
      id: 10,
      title:
        "তাজাল্লিয়াতে সফদার PDF বই (১ম-৪র্থ খন্ড) – মাওলানা আমীন সফদার উখাড়ভী রহ.",
      image:
        "https://boimate.com/wp-content/uploads/2024/05/Tajalliyate-Sofdar-PDF-192x254.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-8">

          <div>
          <h2 className="text-3xl font-bold text-center mb-8">ইসলামিক বই</h2>
          <Row gutter={[16, 16]} className="justify-center">
        {bookList?.map((book) => (
          <Col
            key={book.id}
            xs={24}
            sm={12}
            md={8}
            lg={4}
            className="flex justify-center">
            <Card
              hoverable
              style={{ width: 192 }}
              cover={<img alt={book.title} src={book.image} />}>
              <Card.Meta
                title={
                  <h3 className="text-lg font-semibold text-center">
                    {book.title}
                  </h3>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
          </div>
          
        
         <div className='mt-16'>
         <h2 className="text-3xl font-bold text-center mb-8">শিক্ষামূলক বই</h2>
          <Row gutter={[16, 16]} className="justify-center">
        {bookList?.map((book) => (
          <Col
            key={book.id}
            xs={24}
            sm={12}
            md={8}
            lg={4}
            className="flex justify-center">
            <Card
              hoverable
              style={{ width: 192 }}
              cover={<img alt={book.title} src={book.image} />}>
              <Card.Meta
                title={
                  <h3 className="text-lg font-semibold text-center">
                    {book.title}
                  </h3>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
          </div>
      
    </div>
  );
};

export default BookList;
