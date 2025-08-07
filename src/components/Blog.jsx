// src/components/Blog.jsx
import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from './ScrollAnimation';

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.textLight};
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.bgLight};
  width: 300px;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  text-align: left;
  transition: 0.3s;

  img {
    width: 100%;
    height: 200px; /* ✅ Fixed height for consistency */
    object-fit: cover; /* ✅ Crop and fit image */
    border-radius: 10px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.textLight};
    margin-bottom: 1rem;
  }

  a {
    font-size: 0.9rem;
    color: #7f5af0;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const blogPosts = [
  {
    title: 'Why Every Business Needs a Website in 2025',
    image: 'https://digitizal.com/wp-content/uploads/2025/03/Why-Business-Needs-a-website-1024x576-1.png',
    description: 'A website isn’t optional anymore. Learn how a modern web presence drives visibility, trust, and sales.',
    link: '#',
  },
  {
    title: 'Top 5 AI Tools to Boost Small Business Growth',
    image: 'https://edure.in/wp-content/uploads/2025/02/ai-tools.webp',
    description: 'Discover easy-to-use AI tools to automate tasks, engage customers, and grow your brand online.',
    link: '#',
  },
  {
    title: 'Creative Branding Tips for Solopreneurs',
    image: 'https://clairebahn.com/wp-content/uploads/2020/04/10-Creative-Branding-Tips-for-Entrepreneurs.jpg',
    description: 'Stand out in the digital crowd with smart, affordable branding strategies built for solo founders.',
    link: '#',
  },
];

const Blog = () => (
  <Section id="blog">
    <ScrollAnimation>
      <Title>📰 From the Blog</Title>
      <SubTitle>Insights, tools, and stories to grow your digital brand</SubTitle>
    </ScrollAnimation>

    <Grid>
      {blogPosts.map((post, i) => (
        <ScrollAnimation key={i} delay={0.2 + i * 0.2}>
          <Card>
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <a href={post.link}>Read more →</a>
          </Card>
        </ScrollAnimation>
      ))}
    </Grid>
  </Section>
);

export default Blog;
