import { endpoint } from '@octokit/endpoint';
import React from "react";
import ReactMarkdown from 'react-markdown'
import Styled from "styled-components";
import { Link as LinkReactRouter } from "react-router-dom";
import { Issue, IssueGh } from 'types';
import { extractImage, extractSubtitle, formatDate, mapIssueGh } from 'mapper';

const Post = ({ children, title, date, image }: { children: React.ReactElement, title: string, date: string, image: string }) => <PostWrapper><div dangerouslySetInnerHTML={{ __html: image }}></div><Subtitle><h2>{title}</h2>{children}<span>{date.toString()}</span></Subtitle></PostWrapper>

const mapPosts = (issues: IssueGh[]): Issue[] => issues.reduce((acc: Issue[], issue: IssueGh) => {
  const label = issue.labels.filter((label) => label.name === 'blog');

  if (label.length) {
    acc.push(mapIssueGh(issue))
  }
  return acc;
}, [])


const Blog = (): React.ReactElement => {

  const [issues, setIssues] = React.useState<Issue[]>([]);

  React.useEffect(() => {
    async function fetchIssues() {
      const { url, ...options } = endpoint('GET /repos/:owner/:repo/issues', {
        owner: 'teresarg',
        repo: 'portfolio',
        auth: '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',
      })

      const response = await fetch(url, options as RequestInit)
      const issues = await response.json();

      setIssues(mapPosts(issues))
    }
    fetchIssues()
  }, [])
  return <PostsWrapper>
    {issues.map(({ title, subtitle, createdAt, body, image, number }, index) =>
      <LinkReactRouter to={`/blog/${number}`} state={{ body, image, createdAt, title, number }}><Post title={title} image={image} date={createdAt} key={`${title + index}`}><ReactMarkdown children={subtitle} /></Post></LinkReactRouter>
    )}
  </PostsWrapper>
}

export default Blog;

const PostsWrapper = Styled.section`
  display:flex;

  a {
    text-decoration:none;
    color:black;
  }
`;

const PostWrapper = Styled.section`
  display: flex;
  flex-flow: column;
  box-shadow: 2px 3px 15px #789;
  background: rgba(255,255,255, 0.9);
  border-radius: 6%;
  margin: 0 30px;
  width: 30rem;
  cursor: pointer;
  transition: transform .2s;

  img {
    border-radius: 6% 6% 0 0;
    width:100%;
  }

  :hover {
    transform: scale(1.03);
  }
`;

const Subtitle = Styled.section`
  h2{
    font-size: 2rem;
    margin-top:0;
  }
  padding: 1.3rem;

  p {
    font-size: 1.4rem;
    text-align: justify;
  }
  span {
    right:0;
    font-size: 1.2rem;
  }
`;
